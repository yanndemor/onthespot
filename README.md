# OnTheSpot - front (work in progress)
Sera complété au fur à mesure de l'avancement du projet.
Version en français uniquement pour le moment

## Structure de l'application
**Le dossier /public**
Contient les fichiers qui ne sont pas optimisés par Webpack

**Le dossier /src**
Contient tous les fichiers utilisés par l'application avec React

**Le fichier /src/assets/index.html**
Contient les imports des scripts ou cdn etc. qui seront injectés par WebPack lors du build de l'application. Contient la div root où sera injecté le DOM virtuel.

**Le fichier src/components/index.js**
C'est le premier fichier JS qui s'exécute. Permet de faire le rendu React de l'application dans le fichier /src/assets/index.html

**Le fichier src/components/App/index.js**
Composant (brique réutilisable et isolée) principale de l'application 

**Le fichier src/components/App/styles.css**
Fichier qui contient le style css du composant App
Peut être shunté grace à l'import d'une autre feuille de style ou peut ne pas être utilisé pour une autre techno (sass par exemple).

**Les fichiers yarn.lock (pour yarn) ou package-lock.json (pour npm)**
Contiennent les versions exacte des bibliothèques utilisée et toutes leurs dépendances. Utilisés par NPM lors des installations, des mises à jour et des désinstallations des bibliothèques qui sont des dépendances du projet.

**Le fichier .gitignore**
Contient les fichiers ou dossier devant êtres ignorés par Git

**Le fichier package.json**
- Contient les bibliothèques installées "D-evDependencies" ainsi que leur version
- Contient  les scripts qu'on lance facilement depuis le terminal pou tester, exécuter et builder 
- Contient les configurations des différents outils utilisés.
Exemples : Babel, eslint...


## Les branches git au démarrage du projet
**HEAD** contient la référence vers la branche sélectionnée, `main` initialement.

```
# Arborescence

    HEAD
     |
    main
     └── init
     |── app
     └── n_branches
```

#### Branch main
Branche principale. Ne pas travailler sur cette branche

#### Branche 'init'
C'est la branche initiale à partir du modele. Ne pas travailler sur cette branche

#### Branche 'app'
Branche sur laquelle on mergera une autre branche d'une fonctionnalité opérationnelle. De préférence, ne pas travailler directement sur cette branche

#### Branches "n"
Branche crée pour une (seule) fonctionnalité. Créer autant de branches que vous souhaitez en donnant un nom explicite à la fonctionnalité que vous voulez créer.

## Les branches git
Une branche est simplement un pointeur sur un commit. Elle contient simplement une référence d'un commit. Les branches n'ont aucun coût d'espace mémoire et sont donc à privilégier

#### Lister les branches
```git
git branch
```

Ca signifie que si vous faites des modifications et que vous les sauvegardez dans un commit, ce dernier se placera sur la branche sur laquelle vous vous trouvez.
L'étoile \* : indique où pointe actuellement HEAD, initialement sur la branche main/master

#### Créé une branche
```git
git branch "nom_de_la_branche"
```

#### Créé une branche et positionne le HEAD sur la nouvelle branche (privilégier)
```git
git checkout -b "nom_de_la_branche"
```
#### Créé une sous une branche
```git
git checkout -b "nom_de_la_branche"
```
git checkout -b myfeature dev

#### Modifier le nom d'une branche sur laquelle vous êtes
```git
git branch -m "nouveau_nom_de_la_branche"
```

#### Supprimer une branche local (pas encore push)
```git
git branch -D "nom_de_la_branche"
```

#### Supprimer la branche distante (voir avec le Git Master avant utilisation)
```git
git push origin --delete "nom_de_la_branche"
```

## Les commit git
Les commit sont des instantané du projet. 
Quand on commit, c'est la branche où pointe HEAD qui avance sur le nouveau commit


#### Modifier le message de validation du dernier commit si pas encore pushé
```git
git commit --amend
```

#### Ajouter des fichiers oubliés
```git
git add [nom du ou des fichiers]
git commit --amend --no-edit
```


#### git init

#### git config

#### git status

#### git add
Indexer des fichiers

#### git diff --staged
compare votre zone de transit (votre index) avec votre dernier commit.

#### git checkout
Permet de se déplacer vers une autre branche

- **Sur un fichier** : charge la version d'un fichier d'un commit spécifié ou du dernier commit.
Attention : Si l'on charge un fichier avec git checkout, les modifications du fichier dans le répertoire de travail seront écrasées

- **Sur un commit** : Déplace HEAD sur le commit et charge la version de tous les fichiers correspondant au commit.

#### git revert
Crée un nouveau commit qui annule le commit indiqué. L''ancien commit existe toujours

```git
git revert [hash du commit]
```

Si le précèdent message vous convient et que vous voulez pas le modifier :

```git
git revert [hash du commit] --no-edit**
```

#### git reset
Fait l'inverse de `git add fichier` permet de désindexer un fichier tout en gardant les modification dans le répertoire de travail.

git reset [sans commit]
**Va désindexer les modifications du répertoire de travail** donc écraser l'index par la version pointée par le commit HEAD.

#### Supprimer un commit si il n'a pas encore été push
```git
git reset soft [hash du commit]
git commit 
```
 Garde les changements de l'ancien commit puis créé un nouveau commit en gardant les changements de fichiers.

#### Supprimer un commit si il a deja été push
git revert.........


**Attention :**
`git reset --soft [hash du commit]`

**git reset --soft :**

- **Dans le répertoire de travail** la version des fichiers est celle correspondant au dernier commit
- **Dans l'index** la version est celle correspondant au dernier commit :

**git reset --mixed** :
**git reset --hard** :


#### git merge 
En cas de conflit de fusion après un merge : 
1. Onglet Source Control Repository : résoudre les conflit manuellement dans les fichier avec l'icone C
2. git add . (pour dire à Git que le conflits est désormais résolu)
3. git commit

Pour défaire une fusion locale :
```git
git reset --hard HEAD~
```

Pour defaire une fusion distante :
```git
git revert -m 1 HEAD
```

Annuler un commit de fusion en cours lorsqu'il y a un conflit
```git
git merge --abort
```

#### git stash
Permet de remettre des changements à plus tard

...


## Technos et dépendances du projet

#### Npm/Webpack (pré-installé sur les VM)
L'objectif de Webpack est de regrouper les fichiers JavaScript, HTML et CSS dans des bundles
https://nodejs.org/en/download/

```
npm i --dev webpack@^4.4.0 webpack-cli@^3.3.12
ou
yarn add --dev webpack@^4.4.0 webpack-cli@^3.3.12
```

#### Babel (pré installé)
Permet de transpiler le JavaScript pour de rendre ce dernier compatible dans tous les navigateurs.

```
npm i --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
ou
yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

##### yarn 
```sh
npm install --global yarn
```

#### React et react-dom
Ajout de React et des ses dépendances

```sh
npm i react react-dom 
ou
yarn add react react-dom 
```

#### React-router-dom
Bibliothèque pour simuler la navigation entre différentes pages et gérer l'affichage en fonction de l'URL.

```sh
npm install react-router-dom
ou
yarn add react-router-dom  
```

#### Axios  
Bibliothèque pour gérer les requêtes HTTP

```sh
npm i axios
ou 
yarn add axios
```

#### Redux
Bibliothèque permettant de conserver l'état (state) de l'application de manière stable (unique source de vérité, flux unidirectionnel de données, state modifiable que par des reducer ...)

```sh
npm i redux
ou
yarn add redux
```

#### React-redux
Redux n'a pas de relation direct avec React. Pour cela l’équipe de redux a mis en place cette bibliothèque

```sh
npm install react-redux 
ou
yarn add react-redux
```

Nous avons vu en spé qu'il y avait deux manières de mettre cela en place
- Soit avec le hooks useSelector
- Soit avec Connect

Nous utiliserons la 2nd méthode plus simple à mettre en place.

#### Slugify 
Bibliothèque pour l’utilisation  des slug dans nos URL

```sh
npm i slugify
ou
yarn add slugify
```

#### SASS
Prépocesseur CSS. Permet d'utiliser des variables, des règles imbriquées, des mixins (ex :@extend) , des fonctions , etc. le tout avec une syntaxe entièrement compatible CSS. 

```sh
npm i node-sass
ou
yarn add node-sass
```

#### Dompurify
Permet de nettoyer le HTML et empêche les attaques XSS. 
```
npm i dompurify
ou
yarn add dompurify
```

#### Redux-devtools-extension
```sh
npm i --save redux-devtools-extension
ou 
yarn add redux-devtools-extension
```

#### React-Bootstrap
```sh
npm i react-bootstrap
ou 
yarn add react-bootstrap
```



