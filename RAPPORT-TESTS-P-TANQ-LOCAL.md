# P-Tanq Local 1.0 : rapport de tests

Résultat : **217 vérifications réussies sur 217**, en taille iPad Pro portrait (1024×1366) et paysage (1366×1024). Moteur : Chromium avec Playwright (WebKit n’est pas installé sur la machine de test).

- **Modules de la suite** (64/64). Les ligues saisies dans l’application, puis l’import du paquet de saison d’exemple (LROP : 200 joueurs, 8 associations, 5 concours, 24 équipes). Ensuite l’Agenda, les inscriptions par licence (joueur suspendu refusé, licence inconnue signalée) et deux concours joués de bout en bout. Puis les points FRMP vérifiés équipe par équipe, le classement des joueurs et des associations vérifié joueur par joueur, le paquet de retour (en-têtes identiques à la spécification) et l’export et le réimport de la saison. Enfin, la reprise sur un appareil vide depuis la sauvegarde, et l’absence de toute requête réseau.
- **Cœur de Carreau dans P-Tanq Local** (146/146). Les 146 vérifications de Carreau Local rejouées sur P-Tanq Local : trois concours de 32 équipes, imports Excel, CSV et Word, sauvegardes, code PIN, mise à jour, hors ligne. Cette campagne a révélé un conflit de nom qui cassait l’onglet Classement du système suisse : il est corrigé.
- **Modèles livrés** (7/7). Les modèles CSV et Excel de Pro et les modèles d’inscription Excel, Word et CSV sont tous lus et reconnus par l’application.

| | Vérification | Détail |
|---|---|---|
| ✓ | [portrait] Première ouverture : service worker et cache propres à P-Tanq Local |  |
| ✓ | [portrait] Hors ligne : P-Tanq Local s’affiche, avec les 4 modules |  |
| ✓ | [portrait] Stockage séparé de Carreau Local (clés ptanq-local) |  |
| ✓ | [portrait] Les 9 ligues officielles de la FRMP sont pré-chargées |  |
| ✓ | [portrait] Ligues saisies dans l’application : nom complété, ligue ajoutée, code invalide refusé |  |
| ✓ | [portrait] Ligue de cet appareil choisie (LROP) |  |
| ✓ | [portrait] Aperçu du paquet de saison : 9 fichiers reconnus, comptes conformes à la fiche | ['Ligues\n9 lignes', 'Associations\n8 lignes', 'Joueurs\n200 lignes', 'Types d’épreuve\n7 lignes', 'Barème\n26 lignes', 'Calendrier\n5 lignes', 'Class |
| ✓ | [portrait] Paquet importé : 8 associations, 200 joueurs, 5 concours, classement de départ, sanction, barème | {'a': 8, 'j': 200, 'c': 5, 'd': 10, 's': 1, 'b': True, 'saison': '2026', 'lg': 'Ligue régionale de l’Oriental'} |
| ✓ | [portrait] Inscriptions du paquet : concours préparé avec 24 équipes, licences reconnues et mémorisées | {'n': 24, 'ligue': 'LROP', 'ag': 'LROP-2026-12-06-1', 'club': 'AS Pétanque Oujda', 'lic': True, 'lics': True} · Inscriptions importées  9 ligues, 8 as |
| ✓ | [portrait] Barème du paquet conforme au règlement FRMP (contrôle intégré) | Barème des points  Points attribués à chaque joueur de l’équipe, selon le règlement de la FRMP (article 25).  Le barème  |
| ✓ | [portrait] Ajout manuel d’un licencié en cours de saison | {'lic': '300001', 'nom': 'Nouveau', 'prenom': 'Licencié', 'club': 'CB Nador', 'assoc': 'LROP-003', 'ville': '', 'ligue': 'LROP', 'sexe': 'M', 'naissan |
| ✓ | [portrait] Recherche dans les joueurs |  |
| ✓ | [portrait] Agenda : 5 concours de la saison, statut des inscriptions |  |
| ✓ | [portrait] Concours programmé à la main, identifiant créé (ligue-date-n°) |  |
| ✓ | [portrait] Modèle d’inscription Excel du concours (identifiant pré-rempli, mode d’emploi) | inscriptions-trophee-de-berkane-2026-12-13.xlsx |
| ✓ | [portrait] Import d’inscriptions par licence : 24 équipes, joueur suspendu refusé, licence inconnue signalée | {'n': 24, 'hl': 1} · Inscriptions importées 24 équipes inscrites Trophée de Berkane (13 déc. 2026) : 24 équipes ajoutées 1 équipe refusée Mansouri Ana |
| ✓ | [portrait] Ouvrir un concours depuis l’agenda |  |
| ✓ | [portrait] Concours régional 24 équipes : chaque équipe a les points FRMP de son stade (1er prix 6/4/2/1, 2e prix 2/1) | {'Concours': ['Vainqueur 6', 'Finaliste 4', 'Demi-finale 2', 'Quart 1', 'Quart 1', 'Quart 1'], 'Concours2': ['Vainqueur 2', 'Finaliste 1']} |
| ✓ | [portrait] Concours par poules de l’agenda joué jusqu’au bout |  |
| ✓ | [portrait] Classement des joueurs = points de départ + points de chaque concours (vérifié joueur par joueur) | 55 joueurs classés, 1er : Alaoui Youssef 25 pts |
| ✓ | [portrait] Classement des associations (concours régionaux de leur ligue) : une fois les points de chaque équipe | 7 associations, 36 points |
| ✓ | [portrait] Détail des points d’un joueur |  |
| ✓ | [portrait] Règle « meilleurs résultats » appliquée (1 meilleur résultat retenu) |  |
| ✓ | [portrait] Paquet de retour : 8 fichiers, en-têtes identiques à la spécification | ['LISEZMOI.txt', 'classement_associations.csv', 'classement_ligue.csv', 'concours.csv', 'inscriptions.csv', 'resultats.csv', 'sanctions.csv', 'sauvega |
| ✓ | [portrait] Retour : résultats des 48 équipes, état des concours avec leur Concours_id, inscriptions par licence | 48 résultats, 2 concours, 48 inscriptions, 55 joueurs classés |
| ✓ | [portrait] Concours marqués « envoyés » : plus rien de nouveau à exporter |  |
| ✓ | [portrait] Export du paquet de saison (même format que celui de Pro) | {'nb_joueurs': '201', 'nb_associations': '8', 'nb_concours': '6'} |
| ✓ | [portrait] Réimport du paquet exporté : rien de perdu, aucun concours en double |  |
| ✓ | [portrait] Sauvegarde complète « Enregistrer dans Fichiers » : concours, joueurs, saison et barème | ptanq-local-2026-11-22-18h39.json |
| ✓ | [portrait] Appareil vide puis import de la sauvegarde : saison, agenda, classement retrouvés |  |
| ✓ | [portrait] Hors ligne : aucune requête de l’application (journal du serveur et du navigateur) | ([], []) |
| ✓ | [portrait] Aucune erreur JavaScript | [] |
| ✓ | [paysage] Première ouverture : service worker et cache propres à P-Tanq Local |  |
| ✓ | [paysage] Hors ligne : P-Tanq Local s’affiche, avec les 4 modules |  |
| ✓ | [paysage] Stockage séparé de Carreau Local (clés ptanq-local) |  |
| ✓ | [paysage] Les 9 ligues officielles de la FRMP sont pré-chargées |  |
| ✓ | [paysage] Ligues saisies dans l’application : nom complété, ligue ajoutée, code invalide refusé |  |
| ✓ | [paysage] Ligue de cet appareil choisie (LROP) |  |
| ✓ | [paysage] Aperçu du paquet de saison : 9 fichiers reconnus, comptes conformes à la fiche | ['Ligues\n9 lignes', 'Associations\n8 lignes', 'Joueurs\n200 lignes', 'Types d’épreuve\n7 lignes', 'Barème\n26 lignes', 'Calendrier\n5 lignes', 'Class |
| ✓ | [paysage] Paquet importé : 8 associations, 200 joueurs, 5 concours, classement de départ, sanction, barème | {'a': 8, 'j': 200, 'c': 5, 'd': 10, 's': 1, 'b': True, 'saison': '2026', 'lg': 'Ligue régionale de l’Oriental'} |
| ✓ | [paysage] Inscriptions du paquet : concours préparé avec 24 équipes, licences reconnues et mémorisées | {'n': 24, 'ligue': 'LROP', 'ag': 'LROP-2026-12-06-1', 'club': 'AS Pétanque Oujda', 'lic': True, 'lics': True} · Inscriptions importées  9 ligues, 8 as |
| ✓ | [paysage] Barème du paquet conforme au règlement FRMP (contrôle intégré) | Barème des points  Points attribués à chaque joueur de l’équipe, selon le règlement de la FRMP (article 25).  Le barème  |
| ✓ | [paysage] Ajout manuel d’un licencié en cours de saison | {'lic': '300001', 'nom': 'Nouveau', 'prenom': 'Licencié', 'club': 'CB Nador', 'assoc': 'LROP-003', 'ville': '', 'ligue': 'LROP', 'sexe': 'M', 'naissan |
| ✓ | [paysage] Recherche dans les joueurs |  |
| ✓ | [paysage] Agenda : 5 concours de la saison, statut des inscriptions |  |
| ✓ | [paysage] Concours programmé à la main, identifiant créé (ligue-date-n°) |  |
| ✓ | [paysage] Modèle d’inscription Excel du concours (identifiant pré-rempli, mode d’emploi) | inscriptions-trophee-de-berkane-2026-12-13.xlsx |
| ✓ | [paysage] Import d’inscriptions par licence : 24 équipes, joueur suspendu refusé, licence inconnue signalée | {'n': 24, 'hl': 1} · Inscriptions importées 24 équipes inscrites Trophée de Berkane (13 déc. 2026) : 24 équipes ajoutées 1 équipe refusée Mansouri Ana |
| ✓ | [paysage] Ouvrir un concours depuis l’agenda |  |
| ✓ | [paysage] Concours régional 24 équipes : chaque équipe a les points FRMP de son stade (1er prix 6/4/2/1, 2e prix 2/1) | {'Concours': ['Vainqueur 6', 'Finaliste 4', 'Demi-finale 2', 'Quart 1', 'Quart 1', 'Quart 1'], 'Concours2': ['Vainqueur 2', 'Finaliste 1']} |
| ✓ | [paysage] Concours par poules de l’agenda joué jusqu’au bout |  |
| ✓ | [paysage] Classement des joueurs = points de départ + points de chaque concours (vérifié joueur par joueur) | 54 joueurs classés, 1er : Alaoui Youssef 25 pts |
| ✓ | [paysage] Classement des associations (concours régionaux de leur ligue) : une fois les points de chaque équipe | 7 associations, 36 points |
| ✓ | [paysage] Détail des points d’un joueur |  |
| ✓ | [paysage] Règle « meilleurs résultats » appliquée (1 meilleur résultat retenu) |  |
| ✓ | [paysage] Paquet de retour : 8 fichiers, en-têtes identiques à la spécification | ['LISEZMOI.txt', 'classement_associations.csv', 'classement_ligue.csv', 'concours.csv', 'inscriptions.csv', 'resultats.csv', 'sanctions.csv', 'sauvega |
| ✓ | [paysage] Retour : résultats des 48 équipes, état des concours avec leur Concours_id, inscriptions par licence | 48 résultats, 2 concours, 48 inscriptions, 54 joueurs classés |
| ✓ | [paysage] Concours marqués « envoyés » : plus rien de nouveau à exporter |  |
| ✓ | [paysage] Export du paquet de saison (même format que celui de Pro) | {'nb_joueurs': '201', 'nb_associations': '8', 'nb_concours': '6'} |
| ✓ | [paysage] Réimport du paquet exporté : rien de perdu, aucun concours en double |  |
| ✓ | [paysage] Sauvegarde complète « Enregistrer dans Fichiers » : concours, joueurs, saison et barème | ptanq-local-2026-11-22-18h40.json |
| ✓ | [paysage] Appareil vide puis import de la sauvegarde : saison, agenda, classement retrouvés |  |
| ✓ | [paysage] Hors ligne : aucune requête de l’application (journal du serveur et du navigateur) | ([], []) |
| ✓ | [paysage] Aucune erreur JavaScript | [] |
| ✓ | [portrait] Première ouverture : service worker actif et cache créé | ['ptanq-local-1.0.0', 'ptanq-local-polices'] |
| ✓ | [portrait] Cache : page, manifeste et icônes | ['/', '/index.html', '/manifest.webmanifest', '/icons/apple-touch-icon.png', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-512-maskable.p |
| ✓ | [portrait] Polices mises en cache à la première ouverture | ['https://fonts.gstatic.com/s/bebasneue/v1/test.woff2', 'https://fonts.gstatic.com/s/barlow/v1/test.woff2', 'https://fonts.googleapis.com/css2?family= |
| ✓ | [portrait] Aide à l’installation affichée à la première ouverture |  |
| ✓ | [portrait] Hors ligne : l’application s’affiche après rechargement |  |
| ✓ | [portrait] Hors ligne : pied de page « P-Tanq Local 1.0 » |  |
| ✓ | [portrait] Import CSV des licences (Windows-1252, « ; ») hors ligne | 250 joueurs, accents corrects : True |
| ✓ | [portrait] Import Excel des licences (ligne de titre avant les en-têtes) hors ligne | 300 joueurs, 1er : {'lic': '100000', 'nom': 'Alaoui', 'prenom': 'Youssef', 'club': 'AS Pétanque Rabat', 'ligue': '', 'ville': 'Rabat'} |
| ✓ | [portrait] Fiche du concours ouverte après création (Essai élimination 32) |  |
| ✓ | [portrait] Élimination : 32 équipes fictives inscrites |  |
| ✓ | [portrait] Élimination : 1ʳᵉ partie tirée, terrains attribués |  |
| ✓ | [portrait] Tirage officiel recopié et appliqué | 1ʳᵉ rencontre : [15, 14] |
| ✓ | [portrait] Saisie d’un score au pavé (13 à 7) |  |
| ✓ | [portrait] Élimination 32 équipes : concours complet jusqu’aux finales A et B | P1:- A:fini B:fini |
| ✓ | [portrait] Rapport de concours exporté en PDF | rapport-essai-elimination-32-1er-prix-2026-11-22.pdf |
| ✓ | [portrait] Rapport d’incidence exporté en PDF | rapport-incidence-essai-elimination-32-2026-11-22.pdf |
| ✓ | [portrait] Fiche du concours ouverte après création (Poules 32 Excel) |  |
| ✓ | [portrait] Import Excel d’une liste de 32 équipes (format du modèle) hors ligne | {'n': 32, 'obs': 4, 'lic': True} |
| ✓ | [portrait] Contrôle des doublons : joueur déjà inscrit refusé | Cette équipe est déjà inscrite (même chef, même club). |
| ✓ | [portrait] Poules : 8 poules de 4 formées |  |
| ✓ | [portrait] Poules : toutes les poules terminées (simulation) |  |
| ✓ | [portrait] Incident et sanction (carton jaune) enregistrés, licence reconnue | Licence 100017 : figurera dans le fichier des sanctions. |
| ✓ | [portrait] Poules : phase finale à 16 lancée |  |
| ✓ | [portrait] Poules 32 équipes : concours complet |  |
| ✓ | [portrait] Points du rapport calculés avec le barème FRMP intégré (32 engagés : 6, 4, 2, 2, 1…) | [6, 4, 2, 2, 1, 1, 1, 1] |
| ✓ | [portrait] Fin de concours : rappel puis « Enregistrer dans Fichiers » (nom ptanq-local-AAAA-MM-JJ-HHhMM.json) | ptanq-local-2026-11-22-18h39.json |
| ✓ | [portrait] Feuille de match exportée en PDF | feuille-de-match-poules-32-excel-phase-finale-finale.pdf |
| ✓ | [portrait] Paquet Pro : CSV des résultats au format actuel (en-tête exact, 32 équipes, licences) | 32 lignes ; ;2026-11-22;Concours;Poules 32 Excel;Triplette;32;;5;Vainqueur;100012;Alaoui;Ilyas;100013;Alaoui;Adil;100014;Alaoui;Zine |
| ✓ | [portrait] Paquet Pro : CSV des sanctions (en-tête exact, licence du joueur) | ['Date;Concours;Licence;Joueur;Carton;Decision;Nature;Partie;Heure;Arbitre;Motif', '2026-11-22;Poules 32 Excel;100017;Bennani Hicham;jaune;jaune;Avert |
| ✓ | [portrait] Paquet Pro : inscriptions (CSV) et sauvegarde JSON du concours | 32 équipes ; fichiers : ['resultats-ptanq-pro-poules-32-excel-2026-11-22.csv', 'sanctions-poules-32-excel-2026-11-22.csv', 'inscriptions-poules-32-exc |
| ✓ | [portrait] Fiche du concours ouverte après création (Suisse 32 CSV) |  |
| ✓ | [portrait] Import CSV d’une liste de 32 équipes hors ligne |  |
| ✓ | [portrait] Suisse : 4 poules de 8 formées |  |
| ✓ | [portrait] Chronomètre de ronde : démarrage et pause | 2699 s restantes |
| ✓ | [portrait] Suisse : 7 rondes jouées dans chaque poule |  |
| ✓ | [portrait] Suisse 32 équipes : phase finale à 8 et concours complet |  |
| ✓ | [portrait] Fiche du concours ouverte après création (Import Word) |  |
| ✓ | [portrait] Import Word (.docx) d’une liste d’équipes hors ligne |  |
| ✓ | [portrait] Export Excel (.xlsx) de la liste, relu par openpyxl | 9 lignes, Mansouri Youssef |
| ✓ | [portrait] Enregistrer dans Fichiers en un geste (bouton d’en-tête) | ptanq-local-2026-11-22-18h39.json |
| ✓ | [portrait] Suppression d’un concours (instantané pris avant) |  |
| ✓ | [portrait] Import : choix « Fusionner » ou « Remplacer » proposé |  |
| ✓ | [portrait] Réimport (remplacer) : données identiques à la sauvegarde | 59965 caractères |
| ✓ | [portrait] Import d’une sauvegarde Carreau 1.19 (fusion), champs Pro retirés | Sauvegarde P-tanq Carreau (Intégration P-Tanq Pro 1.19), du 22/11/2026 18:40 → {'fin': True, 'pro': False, 'n': 5} |
| ✓ | [portrait] Copie localStorage effacée : tout est relu depuis IndexedDB |  |
| ✓ | [portrait] IndexedDB vidée : tout est relu depuis la copie localStorage |  |
| ✓ | [portrait] Les deux copies sont resynchronisées au démarrage |  |
| ✓ | [portrait] Persistance du stockage demandée (navigator.storage.persist) | False |
| ✓ | [portrait] Instantanés automatiques (fins de tour, suppression, import), 20 au plus | 7 : ['Avant remplacement par une sauvegarde importée', 'Avant suppression : Import Word', 'Suisse 32 CSV : concours terminé', 'Suisse 32 CSV : fin de  |
| ✓ | [portrait] Restauration d’un instantané (état avant le réimport) |  |
| ✓ | [portrait] Instantanés limités aux 20 derniers |  |
| ✓ | [portrait] Code PIN créé, stocké haché (SHA-256), code de secours affiché | SNRF-GFDM-VC6J |
| ✓ | [portrait] Code PIN demandé à l’ouverture |  |
| ✓ | [portrait] Code PIN incorrect refusé |  |
| ✓ | [portrait] Code PIN correct : déverrouillage |  |
| ✓ | [portrait] Verrouillage après l’inactivité réglée (5 min) |  |
| ✓ | [portrait] PIN oublié : déverrouillage avec le code de secours |  |
| ✓ | [portrait] Code PIN supprimé |  |
| ✓ | [portrait] Fiche du concours ouverte après création (Rappel Fichiers) |  |
| ✓ | [portrait] Rappel discret après 30 minutes sans enregistrement dans Fichiers | Dernier enregistrement dans Fichiers il y a 31 min. Enregistrer dans Fichiers Plus tard |
| ✓ | [portrait] Rappel : « Plus tard » le masque |  |
| ✓ | [portrait] Rappel : enregistrement dans Fichiers depuis le bandeau, puis bandeau masqué | ptanq-local-2026-11-22-18h40.json |
| ✓ | [portrait] Hors ligne : aucune requête de l’application pendant l’usage (journal du serveur) | [] |
| ✓ | [portrait] Hors ligne : seule la vérification de mise à jour de sw.js par le navigateur, à chaque ouverture (4 pour 4 rechargements ; elle échoue sans effet en mode Avion) |  |
| ✓ | [portrait] Hors ligne : toutes les ressources servies par le service worker (aucune par le réseau) | [] |
| ✓ | [portrait] Polices : aucune requête vers Google pendant l’usage (servies depuis le cache) | 0 requête(s) |
| ✓ | [portrait] Avec réseau, au chargement : seule la vérification de mise à jour (sw.js) part vers le serveur | ['/sw.js'] |
| ✓ | [portrait] Avec réseau, pendant l’usage : aucune requête | [] |
| ✓ | [portrait] Aucune requête vers Supabase ni carreau-config.js |  |
| ✓ | [portrait] Aucune erreur JavaScript dans la page | [] |
| ✓ | [portrait] Mise à jour : bandeau « Nouvelle version disponible : recharger » |  |
| ✓ | [portrait] Mise à jour appliquée, ancien cache supprimé, données intactes | ['ptanq-local-polices', 'ptanq-local-1.0.1-essai'] |
| ✓ | [portrait] Feuille de partage iPad (navigator.share avec un fichier) | {'name': 'ptanq-local-2026-11-22-18h40.json', 'size': 93397, 'type': 'application/json'} |
| ✓ | [paysage] Première ouverture : service worker actif et cache créé | ['ptanq-local-1.0.0', 'ptanq-local-polices'] |
| ✓ | [paysage] Cache : page, manifeste et icônes | ['/', '/index.html', '/manifest.webmanifest', '/icons/apple-touch-icon.png', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-512-maskable.p |
| ✓ | [paysage] Polices mises en cache à la première ouverture | ['https://fonts.gstatic.com/s/bebasneue/v1/test.woff2', 'https://fonts.gstatic.com/s/barlow/v1/test.woff2', 'https://fonts.googleapis.com/css2?family= |
| ✓ | [paysage] Aide à l’installation affichée à la première ouverture |  |
| ✓ | [paysage] Hors ligne : l’application s’affiche après rechargement |  |
| ✓ | [paysage] Hors ligne : pied de page « P-Tanq Local 1.0 » |  |
| ✓ | [paysage] Import CSV des licences (Windows-1252, « ; ») hors ligne | 250 joueurs, accents corrects : True |
| ✓ | [paysage] Import Excel des licences (ligne de titre avant les en-têtes) hors ligne | 300 joueurs, 1er : {'lic': '100000', 'nom': 'Alaoui', 'prenom': 'Youssef', 'club': 'AS Pétanque Rabat', 'ligue': '', 'ville': 'Rabat'} |
| ✓ | [paysage] Fiche du concours ouverte après création (Essai élimination 32) |  |
| ✓ | [paysage] Élimination : 32 équipes fictives inscrites |  |
| ✓ | [paysage] Élimination : 1ʳᵉ partie tirée, terrains attribués |  |
| ✓ | [paysage] Tirage officiel recopié et appliqué | 1ʳᵉ rencontre : [29, 20] |
| ✓ | [paysage] Saisie d’un score au pavé (13 à 7) |  |
| ✓ | [paysage] Élimination 32 équipes : concours complet jusqu’aux finales A et B | P1:- A:fini B:fini |
| ✓ | [paysage] Rapport de concours exporté en PDF | rapport-essai-elimination-32-1er-prix-2026-11-22.pdf |
| ✓ | [paysage] Rapport d’incidence exporté en PDF | rapport-incidence-essai-elimination-32-2026-11-22.pdf |
| ✓ | [paysage] Fiche du concours ouverte après création (Poules 32 Excel) |  |
| ✓ | [paysage] Import Excel d’une liste de 32 équipes (format du modèle) hors ligne | {'n': 32, 'obs': 4, 'lic': True} |
| ✓ | [paysage] Contrôle des doublons : joueur déjà inscrit refusé | Cette équipe est déjà inscrite (même chef, même club). |
| ✓ | [paysage] Poules : 8 poules de 4 formées |  |
| ✓ | [paysage] Poules : toutes les poules terminées (simulation) |  |
| ✓ | [paysage] Incident et sanction (carton jaune) enregistrés, licence reconnue | Licence 100017 : figurera dans le fichier des sanctions. |
| ✓ | [paysage] Poules : phase finale à 16 lancée |  |
| ✓ | [paysage] Poules 32 équipes : concours complet |  |
| ✓ | [paysage] Points du rapport calculés avec le barème FRMP intégré (32 engagés : 6, 4, 2, 2, 1…) | [6, 4, 2, 2, 1, 1, 1, 1] |
| ✓ | [paysage] Fin de concours : rappel puis « Enregistrer dans Fichiers » (nom ptanq-local-AAAA-MM-JJ-HHhMM.json) | ptanq-local-2026-11-22-18h40.json |
| ✓ | [paysage] Feuille de match exportée en PDF | feuille-de-match-poules-32-excel-phase-finale-finale.pdf |
| ✓ | [paysage] Paquet Pro : CSV des résultats au format actuel (en-tête exact, 32 équipes, licences) | 32 lignes ; ;2026-11-22;Concours;Poules 32 Excel;Triplette;32;;13;Vainqueur;100036;Chraibi;Rachid;100037;Chraibi;Omar;100038;Chraibi |
| ✓ | [paysage] Paquet Pro : CSV des sanctions (en-tête exact, licence du joueur) | ['Date;Concours;Licence;Joueur;Carton;Decision;Nature;Partie;Heure;Arbitre;Motif', '2026-11-22;Poules 32 Excel;100017;Bennani Hicham;jaune;jaune;Avert |
| ✓ | [paysage] Paquet Pro : inscriptions (CSV) et sauvegarde JSON du concours | 32 équipes ; fichiers : ['resultats-ptanq-pro-poules-32-excel-2026-11-22.csv', 'sanctions-poules-32-excel-2026-11-22.csv', 'inscriptions-poules-32-exc |
| ✓ | [paysage] Fiche du concours ouverte après création (Suisse 32 CSV) |  |
| ✓ | [paysage] Import CSV d’une liste de 32 équipes hors ligne |  |
| ✓ | [paysage] Suisse : 4 poules de 8 formées |  |
| ✓ | [paysage] Chronomètre de ronde : démarrage et pause | 2699 s restantes |
| ✓ | [paysage] Suisse : 7 rondes jouées dans chaque poule |  |
| ✓ | [paysage] Suisse 32 équipes : phase finale à 8 et concours complet |  |
| ✓ | [paysage] Fiche du concours ouverte après création (Import Word) |  |
| ✓ | [paysage] Import Word (.docx) d’une liste d’équipes hors ligne |  |
| ✓ | [paysage] Export Excel (.xlsx) de la liste, relu par openpyxl | 9 lignes, Mansouri Youssef |
| ✓ | [paysage] Enregistrer dans Fichiers en un geste (bouton d’en-tête) | ptanq-local-2026-11-22-18h41.json |
| ✓ | [paysage] Suppression d’un concours (instantané pris avant) |  |
| ✓ | [paysage] Import : choix « Fusionner » ou « Remplacer » proposé |  |
| ✓ | [paysage] Réimport (remplacer) : données identiques à la sauvegarde | 59900 caractères |
| ✓ | [paysage] Import d’une sauvegarde Carreau 1.19 (fusion), champs Pro retirés | Sauvegarde P-tanq Carreau (Intégration P-Tanq Pro 1.19), du 22/11/2026 18:41 → {'fin': True, 'pro': False, 'n': 5} |
| ✓ | [paysage] Copie localStorage effacée : tout est relu depuis IndexedDB |  |
| ✓ | [paysage] IndexedDB vidée : tout est relu depuis la copie localStorage |  |
| ✓ | [paysage] Les deux copies sont resynchronisées au démarrage |  |
| ✓ | [paysage] Persistance du stockage demandée (navigator.storage.persist) | False |
| ✓ | [paysage] Instantanés automatiques (fins de tour, suppression, import), 20 au plus | 7 : ['Avant remplacement par une sauvegarde importée', 'Avant suppression : Import Word', 'Suisse 32 CSV : concours terminé', 'Suisse 32 CSV : fin de  |
| ✓ | [paysage] Restauration d’un instantané (état avant le réimport) |  |
| ✓ | [paysage] Instantanés limités aux 20 derniers |  |
| ✓ | [paysage] Code PIN créé, stocké haché (SHA-256), code de secours affiché | 7W3F-HQ9Z-K3US |
| ✓ | [paysage] Code PIN demandé à l’ouverture |  |
| ✓ | [paysage] Code PIN incorrect refusé |  |
| ✓ | [paysage] Code PIN correct : déverrouillage |  |
| ✓ | [paysage] Verrouillage après l’inactivité réglée (5 min) |  |
| ✓ | [paysage] PIN oublié : déverrouillage avec le code de secours |  |
| ✓ | [paysage] Code PIN supprimé |  |
| ✓ | [paysage] Fiche du concours ouverte après création (Rappel Fichiers) |  |
| ✓ | [paysage] Rappel discret après 30 minutes sans enregistrement dans Fichiers | Dernier enregistrement dans Fichiers il y a 31 min. Enregistrer dans Fichiers Plus tard |
| ✓ | [paysage] Rappel : « Plus tard » le masque |  |
| ✓ | [paysage] Rappel : enregistrement dans Fichiers depuis le bandeau, puis bandeau masqué | ptanq-local-2026-11-22-18h41.json |
| ✓ | [paysage] Hors ligne : aucune requête de l’application pendant l’usage (journal du serveur) | [] |
| ✓ | [paysage] Hors ligne : seule la vérification de mise à jour de sw.js par le navigateur, à chaque ouverture (3 pour 4 rechargements ; elle échoue sans effet en mode Avion) |  |
| ✓ | [paysage] Hors ligne : toutes les ressources servies par le service worker (aucune par le réseau) | [] |
| ✓ | [paysage] Polices : aucune requête vers Google pendant l’usage (servies depuis le cache) | 0 requête(s) |
| ✓ | [paysage] Avec réseau, au chargement : seule la vérification de mise à jour (sw.js) part vers le serveur | ['/sw.js'] |
| ✓ | [paysage] Avec réseau, pendant l’usage : aucune requête | [] |
| ✓ | [paysage] Aucune requête vers Supabase ni carreau-config.js |  |
| ✓ | [paysage] Aucune erreur JavaScript dans la page | [] |
| ✓ | [paysage] Mise à jour : bandeau « Nouvelle version disponible : recharger » |  |
| ✓ | [paysage] Mise à jour appliquée, ancien cache supprimé, données intactes | ['ptanq-local-polices', 'ptanq-local-1.0.1-essai'] |
| ✓ | [paysage] Feuille de partage iPad (navigator.share avec un fichier) | {'name': 'ptanq-local-2026-11-22-18h41.json', 'size': 93340, 'type': 'application/json'} |
| ✓ | Modèles xlsx de Pro lus et reconnus (9 types de fichiers) | ['Ligues', 'Associations', 'Joueurs', 'Types d’épreuve', 'Barème', 'Calendrier', 'Classement de départ', 'Sanctions en cours', 'Inscriptions'] |
| ✓ | Modèles csv de Pro lus et reconnus (9 types de fichiers) | ['Ligues', 'Associations', 'Joueurs', 'Types d’épreuve', 'Barème', 'Calendrier', 'Classement de départ', 'Sanctions en cours', 'Inscriptions'] |
| ✓ | Modèle d’inscription inscriptions-modele.docx lu sans erreur | Inscriptions importées 0 équipe inscrite Grand prix (6 déc. 2026) : 0 équipe ajoutée Ferme |
| ✓ | Modèle d’inscription inscriptions-modele.xlsx lu sans erreur | Inscriptions importées 0 équipe inscrite Grand prix (6 déc. 2026) : 0 équipe ajoutée Ferme |
| ✓ | Modèle d’inscription inscriptions-modele.csv lu sans erreur | Inscriptions importées 1 équipe inscrite Grand prix (6 déc. 2026) : 1 équipe ajoutée Licen |
| ✓ | Ligne d’exemple « Ex. » ignorée, une seule équipe (ligne du modèle CSV) | 1 équipe |
| ✓ | Aucune erreur JavaScript | [] |
