from pathlib import Path
import json,html
from collections import defaultdict
import re
# Run from the repository root: python3 scripts/sync-content.py.
# Canonical content: modules.json and docs/roles.json.

modules=json.loads(Path('modules.json').read_text());roles=json.loads(Path('docs/roles.json').read_text())
total=len(modules)
js=Path('app.js').read_text()
start=js.index('const roles='); end=js.index('\nconst tabs=',start)
js=js[:start]+'const roles='+json.dumps(roles,ensure_ascii=False,indent=2)+';'+js[end:]
start=js.index('const modules='); end=js.index('\nlet selectedCategory=',start)
js=js[:start]+'const modules='+json.dumps(modules,ensure_ascii=False,indent=2)+';'+js[end:]
Path('app.js').write_text(js)
# Keep the default catalogue readable in the initial HTML, including without JavaScript.
index=Path('index.html').read_text()
rendered=''.join('<article class="module-item"><span>'+str(m['id']).zfill(2)+' / '+html.escape(m['category'])+'</span><h3>'+html.escape(m['title'])+'</h3><p>'+html.escape(m['description'])+'</p></article>' for m in modules)
index=re.sub(r'(<div id="moduleGrid" class="module-grid">).*?(</div>)',lambda match:match[1]+rendered+match[2],index,count=1,flags=re.S)
# Synchronise category filters and catalogue counts from the canonical list.
categories=list(dict.fromkeys(m['category'] for m in modules))
filters='<button class="active" aria-pressed="true" data-filter="Tous">Tout explorer</button>'+''.join('<button aria-pressed="false" data-filter="'+html.escape(c,quote=True)+'">'+html.escape(c)+'</button>' for c in categories)
index=re.sub(r'(<div class="module-filters"[^>]*>).*?(</div>)',lambda m:m[1]+filters+m[2],index,count=1,flags=re.S)
index=re.sub(r'\b\d+ fonctionnalités détaillées',str(len(modules))+' fonctionnalités détaillées',index)
index=re.sub(r'\b\d+ fonctionnalités · tous les profils',str(len(modules))+' fonctionnalités · tous les profils',index)
index=re.sub(r'\d+ familles · (?:\d+ grands profils|profils par métier)',str(len(categories))+' familles · profils par métier',index)
Path('index.html').write_text(index)

groups=defaultdict(list)
for m in modules:groups[m['category']].append(m)
slugs={category:'famille-'+str(i) for i,category in enumerate(groups,1)}
head=Path('index.html').read_text().split('</head>')[0].replace('<title>EdOne · Plus de liens. Moins de paperasse.</title>','<title>Toutes les fonctionnalités · EdOne</title>').replace('<script src="app.js" defer></script><script src="motion.js" defer></script><script src="payment-preview.js" defer></script><script src="device-showcase.js" defer></script>','<link rel="stylesheet" href="guide.css">').replace('content="La vie scolaire, simplement. EdOne réunit votre administration, vos enseignants, vos étudiants et leurs parents : inscriptions, notes, paiements et bibliothèque."',f'content="Découvrez les {total} fonctionnalités détaillées d’EdOne, les profils métier, les services numériques inclus et les tarifs."')+'</head>'
head=re.sub(r'\s*<!-- SEO:START -->.*?<!-- SEO:END -->','',head,flags=re.S)
head=head.replace('<script src="icons.js" defer></script>','')
links=''.join(f'<a href="#{slugs[c]}">{html.escape(c)} <span>{len(items):02d}</span></a>' for c,items in groups.items())
sections=''
for category,items in groups.items():
 sections+=f'<section class="guide-family" id="{slugs[category]}"><p class="eyebrow">{len(items)} FONCTIONNALITÉS</p><h2>{html.escape(category)}</h2><div class="guide-cards">'
 for m in items:sections+=f'<article><span>{m["id"]:02d} /</span><h3>{html.escape(m["title"])}</h3><p>{html.escape(m["description"])}</p></article>'
 sections+='</div></section>'
role_html=''
for key,role in roles.items():
 role_html+=f'<details class="guide-role"><summary>{html.escape({"direction":"Direction & administration","enseignants":"Enseignants","etudiants":"Étudiants","parents":"Parents","personnel":"Personnel administratif & RH","partenaires":"Partenaires & intégrateurs"}.get(key,role.get("name",key)))}<span>+</span></summary><p>{html.escape(role["description"])}</p><ul>'+''.join('<li>'+html.escape(x)+'</li>' for x in role['list'])+'</ul></details>'
services='''<section id="services-inclus" class="guide-family"><p class="eyebrow">POUR CHAQUE UTILISATEUR</p><h2>Les services inclus</h2><div class="guide-cards"><article><h3>E-mail professionnel automatique</h3><p>Une adresse professionnelle pour les étudiants, enseignants, parents, membres du personnel et de la direction.</p></article><article><h3>Google Workspace gratuit</h3><p>Gmail, Drive, Docs, Sheets et Meet intégrés à l’environnement scolaire pour tous les profils.</p></article><article><h3>Bibliothèque numérique gratuite</h3><p>79 000+ ouvrages du domaine public, documents de l’établissement, partages étudiants validés, favoris et lecture sécurisée.</p></article><article><h3>Notifications automatiques</h3><p>SMS et e-mails pour les paiements, absences, notes et bulletins. Reçu envoyé après chaque règlement, campagnes ciblées par la direction.</p></article><article><h3>Paiements numériques</h3><p>Wave, Orange Money, Moov Money, MTN MoMo, Djamo, Visa et Mastercard. Disponibilité selon le pays. 25 pays en Afrique et en Europe, 15+ devises.</p></article><article><h3>Vérification & pilotage</h3><p>Documents officiels vérifiables par code unique, dashboard 360° pour la direction et programme partenaires en marque blanche.</p></article></div></section>'''
pricing='''<section id="guide-tarifs" class="guide-family"><p class="eyebrow">TARIFS & DÉPLOIEMENT</p><h2>Une offre pour chaque établissement</h2><div class="guide-fees installation-fees"><b>250 000 FCFA de frais d’installation uniques par établissement.</b><p>Vous réglez ces frais une seule fois : nous installons EdOne pour votre établissement. Vous choisissez ensuite le forfait mensuel qui vous convient et commencez à utiliser la plateforme. Ces frais sont distincts de l’abonnement mensuel et des frais de transaction.</p></div><div class="guide-table-wrap"><table><caption>Abonnements mensuels EdOne</caption><thead><tr><th scope="col">Offre</th><th scope="col">FCFA / mois</th><th scope="col">Capacité</th><th scope="col">Repères</th></tr></thead><tbody><tr><th scope="row">Starter</th><td>25 000</td><td>200 étudiants</td><td>Petites écoles et centres de formation</td></tr><tr><th scope="row">School</th><td>75 000</td><td>800 étudiants</td><td>Bibliothèque, SMS et e-mails, quiz, devoirs et RH</td></tr><tr><th scope="row">Campus</th><td>200 000</td><td>3 000 étudiants</td><td>Diplômes, transport, multi-campus, LMD / ECTS</td></tr><tr><th scope="row">Enterprise</th><td>Sur devis</td><td>Illimitée</td><td>SLA dédié, migration et formation sur site</td></tr></tbody></table></div><div class="guide-fees"><b>3 % par transaction. Aucun frais fixe additionnel.</b><p>Minimum par transaction : 2 000 FCFA. Les mêmes frais sur tous les plans et moyens de paiement.</p></div><p>Déploiement cloud / SaaS, multi-établissements et multi-campus. Données cloisonnées par école, permissions granulaires et accompagnement des équipes.</p><a class="button" href="index.html#demo">Préparer votre démonstration ↗</a></section>'''
page=head+'''<body><a class="skip" href="#main">Aller au contenu</a><header><div class="wrap nav"><a class="brand" href="index.html" aria-label="EdOne, accueil"><img src="images/1.jpeg" alt="" width="38" height="38">ed<span>one</span><i>®</i></a><a class="text-link" href="index.html">Retour au site ↗</a></div></header><main id="main"><section class="wrap guide-hero"><p class="eyebrow">LE GUIDE COMPLET EDONE</p><h1>Chaque métier.<br><em>Chaque possibilité.</em></h1><p>{total} fonctionnalités détaillées, des profils par métier et les services numériques qui relient toute votre communauté scolaire.</p><div class="guide-hero-tags"><span>40+ modules métier</span><span>30+ profils & rôles</span><span>25 pays</span><span>15+ devises</span></div><figure class="guide-photo"><img src="images/campus-vie-edone.jpg" width="1536" height="1024" alt="Illustration d’un campus universitaire arboré" loading="lazy" decoding="async"><figcaption>Tout un campus. Un même élan.</figcaption></figure></section><div class="wrap guide-layout"><aside><nav aria-label="Sommaire des fonctionnalités">'''+links+'''<a href="#services-inclus">Services inclus ↗</a><a href="#guide-profils">Les profils métier ↗</a><a href="#guide-tarifs">Tarifs ↗</a></nav></aside><div>'''+services+sections+'<section id="guide-profils" class="guide-family"><p class="eyebrow">DIRECTION, ÉQUIPES, FAMILLES ET PARTENAIRES</p><h2>Un espace pour chaque profil</h2>'+role_html+'</section>'+pricing+'''</div></div></main><footer class="wrap guide-footer"><span>EdOne</span><a href="index.html#demo">Parlons de votre école ↗</a></footer></body></html>'''
page=page.replace('</footer>','<div class="legal-links" role="navigation" aria-label="Informations légales"><a href="/mentions-legales/">Mentions légales</a><a href="/confidentialite/">Confidentialité</a><a href="/cgu/">CGU</a></div>'+'</footer>')
Path('fonctionnalites.html').write_text(page.replace('{total}',str(total)))

# Preserve the shared footer when regenerating the static guide.
import runpy
runpy.run_path('scripts/update-footer.py')
