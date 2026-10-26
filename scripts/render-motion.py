"""Render the original EdOne film. Requires Pillow, ffmpeg and six 44.1 kHz mono WAV voices.
Usage: python3 scripts/render-motion.py
Voice sources: /private/tmp/edone-voice-0.wav .. -5.wav (macOS say, voice Thomas).
"""
from PIL import Image,ImageDraw,ImageFont,ImageOps
from pathlib import Path
from array import array
import math,wave,json,subprocess,textwrap
W,H,FPS=1280,720,24
PAPER='#f8f6ef';INK='#193c32';CORAL='#ec795e';MUTED='#68736b'
font_path='/System/Library/Fonts/Supplemental/Arial.ttf'
bold_path='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
serif_path='/System/Library/Fonts/Supplemental/Georgia Italic.ttf'
def font(size,bold=False,serif=False):return ImageFont.truetype(serif_path if serif else bold_path if bold else font_path,size)
scenes=json.loads(Path('media/storyboard.json').read_text())
SR=44100;cursor=0;voices=[]
for i,s in enumerate(scenes):
 voice_path=Path('/private/tmp/edone-voice-'+str(i)+'.wav')
 if not voice_path.exists() or voice_path.stat().st_size<10000:
  voice_text=Path('/private/tmp/edone-voice-'+str(i)+'.txt');voice_text.write_text(s['voice'])
  subprocess.run(['say','-v','Thomas','-r','165','--file-format=WAVE','--data-format=LEI16@44100','-f',str(voice_text),'-o',str(voice_path)],check=True)
 with wave.open(str(voice_path)) as w:
  assert w.getframerate()==SR and w.getnchannels()==1 and w.getsampwidth()==2
  data=array('h',w.readframes(w.getnframes()))
 s['start']=cursor;s['duration']=math.ceil(max(5,len(data)/SR+1.1)*FPS)/FPS;cursor+=s['duration'];voices.append(data)
DURATION=cursor
Path('media/timing.json').write_text(json.dumps([{k:v for k,v in s.items() if k!='image'} for s in scenes],ensure_ascii=False,indent=2)+'\n')
# A quiet, original pad + bell composition. No external recording or licensed song.
N=int(DURATION*SR);voice=array('h',[0])*N
for s,data in zip(scenes,voices):
 start=int((s['start']+.45)*SR)
 for j,value in enumerate(data):
  if start+j<N:voice[start+j]=value
chords=[[130.81,164.81,196.00,246.94],[110,130.81,164.81,196],[87.31,110,130.81,164.81],[98,123.47,146.83,196]]
melody=[523.25,659.25,783.99,659.25,587.33,523.25,440,493.88]
mix=array('h')
for i in range(N):
 t=i/SR;c=chords[int(t/4)%4];p=t%4
 pad=sum(math.sin(2*math.pi*f*t)+.13*math.sin(2*math.pi*f*2*t) for f in c)/5
 pad*=min(1,p/.35,(4-p)/.6)
 beat=int(t/.8);q=t% .8;freq=melody[beat%len(melody)]
 bell=(math.sin(2*math.pi*freq*t)+.22*math.sin(2*math.pi*freq*2*t))*math.exp(-q*5)*.3
 envelope=min(1,t/1.1,(DURATION-t)/1.8)
 v=voice[i]/32768
 # Keep the bed below the narration; soft limiting prevents clipping.
 music=(pad*.035+bell*.045)*envelope
 value=max(-.97,min(.97,v*.88+music))
 mix.append(int(value*32767))
with wave.open('/private/tmp/edone-motion-mix.wav','wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes(mix.tobytes())
photos=[ImageOps.fit(Image.open(s['image']).convert('RGB'),(700,740),centering=(.5,.4)) for s in scenes]
logo=Image.open('images/1.jpeg').convert('RGB');logo=ImageOps.fit(logo,(42,42))
logo_mask=Image.new('L',(42,42));ImageDraw.Draw(logo_mask).ellipse((0,0,42,42),fill=255)
photo_mask=Image.new('L',(580,580));ImageDraw.Draw(photo_mask).rounded_rectangle((0,0,580,580),radius=70,fill=255)
# Reusable star mark, animated by rotation around its centre.
star=Image.new('RGBA',(130,130));sd=ImageDraw.Draw(star)
for angle in range(0,180,30):
 a=math.radians(angle);dx,dy=55*math.cos(a),55*math.sin(a);sd.line((65-dx,65-dy,65+dx,65+dy),fill=CORAL,width=4)
def ease(v):return 1-(1-max(0,min(1,v)))**3
def wrap(text,ft,maxw):
 out=[];line=''
 for word in text.split():
  test=(line+' '+word).strip()
  if ft.getlength(test)>maxw and line:out.append(line);line=word
  else:line=test
 if line:out.append(line)
 return out
def scene_frame(idx,elapsed):
 s=scenes[idx];p=elapsed/s['duration'];entry=ease(elapsed/.8)
 im=Image.new('RGB',(W,H),PAPER);d=ImageDraw.Draw(im)
 im.paste(logo,(55,39),logo_mask);d.text((108,39),'edone',font=font(35,True),fill=INK)
 d.text((55,668),'EDONE  /  LE PROCHAIN CHAPITRE',font=font(12,True),fill=MUTED)
 d.text((1125,668),f'{idx+1:02d} / 06',font=font(12),fill=MUTED)
 d.line((55,645,1225,645),fill='#dcded2',width=1)
 d.rectangle((55,645,55+1170*(s['start']+elapsed)/DURATION,647),fill=CORAL)
 photo=photos[idx];zoom=1+.04*p;scaled=photo.resize((int(700*zoom),int(740*zoom)),Image.Resampling.BICUBIC)
 left=(scaled.width-580)//2;top=(scaled.height-580)//2
 crop=scaled.crop((left,top,left+580,top+580))
 x=645+int(65*(1-entry));im.paste(crop,(x,45),photo_mask)
 spin=star.rotate(-12-p*18,resample=Image.Resampling.BICUBIC);im.paste(spin,(1152,12),spin)
 y=int(160+28*(1-entry))
 d.text((55,y),s['label'],font=font(12,True),fill=MUTED)
 for n,title in enumerate(s['title']):
  ft=font(54 if n==0 else 52,n==0,serif=n==1)
  while ft.getlength(title)>545:ft=font(ft.size-1,n==0,serif=n==1)
  d.text((55,y+55+n*72),title,font=ft,fill=INK)
 line_y=y+225
 for line in wrap(s['subtitle'],font(23),510):d.text((55,line_y),line,font=font(23),fill=MUTED);line_y+=33
 # Motion card with tangible product vocabulary; all example values are labelled.
 labels=[('40+','modules métier'),('Une année','bien organisée'),('Scolarité réglée','50 000 FCFA · exemple'),('79 000+','ouvrages à explorer'),('Une vue complète','pour vos équipes'),('edone.my','Parlons de votre école')]
 title,sub=labels[idx];card_y=465+int(20*math.sin(p*math.pi*2))
 overlay=Image.new('RGBA',(520,110));od=ImageDraw.Draw(overlay)
 od.rounded_rectangle((0,0,520,110),radius=14,fill='#fffdf6',outline='#d6ddca',width=1)
 od.ellipse((22,28,75,81),fill='#e7edda');od.line((36,55,44,63,62,44),fill=INK,width=3)
 od.text((95,23),title,font=font(27,True),fill=INK);od.text((95,64),sub,font=font(17),fill=MUTED)
 im.paste(overlay,(690,card_y),overlay)
 # The CTA arrives after the title rather than competing with its entrance.
 cta_entry=ease((elapsed-.8)/.6)
 if cta_entry>0:
  cta=Image.new('RGBA',(260,55));cd=ImageDraw.Draw(cta);cd.rounded_rectangle((0,0,260,55),radius=7,fill=INK);cd.text((20,17),'Découvrir EdOne',font=font(18,True),fill=PAPER);cd.line((222,34,237,19),fill=PAPER,width=2);cd.line((224,19,237,19,237,32),fill=PAPER,width=2)
  alpha=cta.getchannel('A').point(lambda x:int(x*cta_entry));cta.putalpha(alpha);im.paste(cta,(55,line_y+30),cta)
 return im
# Concise WebVTT captions, with a readable two-line layout.
def stamp(t):
 ms=round(t*1000);return f'{ms//3600000:02d}:{ms//60000%60:02d}:{ms//1000%60:02d}.{ms%1000:03d}'
cues=['WEBVTT','']
for s,data in zip(scenes,voices):
 cues.extend([f'{stamp(s["start"]+.45)} --> {stamp(min(s["start"]+s["duration"]-.2,s["start"]+.45+len(data)/SR))}', '\n'.join(textwrap.wrap(s['voice'].replace('Ed One','EdOne').replace('edone point my','edone.my'),width=58)),''])
Path('media/edone-presentation-fr.vtt').write_text('\n'.join(cues))
command=['ffmpeg','-hide_banner','-loglevel','error','-y','-f','rawvideo','-pixel_format','rgb24','-video_size',f'{W}x{H}','-framerate',str(FPS),'-i','pipe:0','-i','/private/tmp/edone-motion-mix.wav','-c:v','libx264','-preset','veryfast','-crf','23','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-ar','44100','-af','loudnorm=I=-16:TP=-1.5:LRA=9','-movflags','+faststart','-shortest','media/edone-presentation-fr.mp4']
process=subprocess.Popen(command,stdin=subprocess.PIPE)
try:
 for idx,s in enumerate(scenes):
  previous=scene_frame(idx-1,scenes[idx-1]['duration']-.01) if idx else None
  for f in range(round(s['duration']*FPS)):
   elapsed=f/FPS;im=scene_frame(idx,elapsed)
   if idx and elapsed<.28:im=Image.blend(previous,im,elapsed/.28)
   if idx==0 and elapsed<.35:im=Image.blend(Image.new('RGB',(W,H),PAPER),im,elapsed/.35)
   if idx==len(scenes)-1 and s['duration']-elapsed<.5:im=Image.blend(Image.new('RGB',(W,H),PAPER),im,(s['duration']-elapsed)/.5)
   process.stdin.write(im.tobytes())
  print('Scene',idx+1,'rendered',flush=True)
 process.stdin.close();code=process.wait();assert code==0,code
except BaseException:
 process.kill();raise
scene_frame(0,1.6).save('media/edone-presentation-poster.jpg',quality=88)
# Contact sheet for visual review, generated directly from the motion source.
contact=Image.new('RGB',(960,810),'white')
for idx,s in enumerate(scenes):contact.paste(scene_frame(idx,1.7).resize((480,270)),((idx%2)*480,(idx//2)*270))
contact.save('/private/tmp/edone-motion-contact.jpg',quality=90)
print('Rendered',round(DURATION,2),'seconds.',flush=True)
