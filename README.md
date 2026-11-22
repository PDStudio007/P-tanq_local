# P-Tanq Local 1.0 : notice

P-Tanq Local réunit l’**Agenda**, les **Concours** (Carreau) et le **Classement** de la ligue dans une application qui fonctionne sans réseau, sur un iPad ou un PC par ligue. Les données de la saison arrivent de P-Tanq Pro dans un **paquet de saison**. Les résultats repartent vers Pro dans un **paquet de retour**. Rien n’est envoyé sur Internet.

P-Tanq Local est distinct de Carreau Local : il a ses propres données, et les deux peuvent coexister. Ses sauvegardes, comme celles de Carreau Local et de Carreau 1.16 à 1.19, s’importent l’une dans l’autre.

## 1. Mettre en ligne (une fois)

1. Sur github.com, créez un dépôt **nouveau** et **public**, nommé `p-tanq-local`.
2. Avec **uploading an existing file**, déposez tout le contenu du dossier `p-tanq-local`, y compris le dossier `icons`, puis touchez **Commit changes**.
3. Ouvrez **Settings › Pages**, choisissez **Deploy from a branch**, puis **main** et **/ (root)**, et touchez **Save**. L’adresse s’affiche : `https://VOTRE-COMPTE.github.io/p-tanq-local/`.

## 2. Installer sur l’appareil de la ligue

- **iPad** : ouvrez l’adresse dans Safari avec le réseau, puis touchez **Partager** › **Sur l’écran d’accueil**. Ouvrez toujours P-Tanq Local depuis cette icône. Pour vérifier, passez en mode Avion et rouvrez l’application.
- **PC** : ouvrez l’adresse dans Chrome, puis touchez **Installer** dans la barre d’adresse. Sans aucun réseau, on peut aussi double-cliquer sur `index.html`.

## 3. Une saison avec P-Tanq Local

**En début de saison, une fois**
1. Dans **Saison › Ligues**, choisissez la **ligue de cet appareil**. Les 9 codes officiels de la FRMP sont déjà là : complétez leurs noms, ajoutez une ligue si besoin.
2. Dans **Saison › Paquet de saison**, importez le paquet .zip préparé par P-Tanq Pro. On peut aussi importer ses fichiers CSV ou Excel séparément. L’aperçu indique ce qui a été lu, et signale les écarts avec la fiche du paquet.
3. Vérifiez **Saison › Barème et règles** : le barème de la FRMP est intégré, et celui du paquet le remplace s’il est fourni. Réglez aussi les dates de la saison et le calcul des points (chaque joueur reçoit les points de son équipe, et tous les résultats comptent, sauf réglage contraire).

**Avant chaque concours**
- Dans l’**Agenda**, touchez **Modèle** sur le concours pour obtenir le fichier Excel d’inscription, avec son identifiant déjà rempli.
- Les associations ou les arbitres le remplissent avec les **licences** des joueurs, puis l’arbitre touche **Inscriptions** pour l’importer. Le rapport signale les licences inconnues, les doublons et les joueurs suspendus (refusés).
- Un licencié qui manque s’ajoute dans **Saison › Joueurs**.

**Le jour du concours, sans réseau**
- Dans l’Agenda, touchez **Ouvrir le concours**. Pointage, tirage, parties, résultats, sanctions et rapports se déroulent comme dans Carreau.

**Après le concours**
- Le **Classement** de la ligue se met à jour : joueurs, associations et concours comptés. Ce classement est provisoire : le classement officiel reste celui de Pro.
- Touchez **Classement › Exporter pour P-Tanq Pro**, puis **Concours non encore exportés**, et enregistrez le .zip dans Fichiers. Dès qu’il y a du réseau, importez-le dans Pro.
- Touchez **Enregistrer dans Fichiers** (l’icône dossier en haut). La sauvegarde contient tout : concours, joueurs, saison et barème.

## 4. Sécurité des données

Les sauvegardes fonctionnent comme dans Carreau Local : mémoire principale de l’appareil, seconde copie, instantanés automatiques (Sauvegardes › Instantanés), rappel toutes les 30 minutes pendant un concours, et code PIN facultatif. Comme les données de la ligue se trouvent sur un seul appareil, enregistrez une sauvegarde dans Fichiers ou sur une clé USB après chaque concours.

Pour passer à un autre appareil, deux possibilités :
- importez la sauvegarde complète (**Importer une sauvegarde**) ;
- ou importez le paquet de saison exporté par **Saison › Exporter le paquet de saison**.

## 5. Les fichiers

La spécification complète et les modèles de chaque fichier (CSV, Excel, Word) sont livrés à part, dans `modeles-p-tanq.zip`. Elle sert à ceux qui préparent les exports de Pro et de l’Agenda. Les clés sont toujours la **licence** pour un joueur, le **code** pour une ligue ou une association, et le **Concours_id** pour un concours.

## 6. Publier une nouvelle version

Remplacez les fichiers dans le dépôt, puis changez `VERSION` en haut de `sw.js` (par exemple `ptanq-local-1.0.1`). À la prochaine ouverture avec le réseau, l’appareil propose « Nouvelle version disponible : recharger ». Les données ne sont jamais touchées par une mise à jour.
