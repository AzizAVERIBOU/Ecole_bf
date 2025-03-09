# Site Web CPGE-MENAPLN

Ce projet est le site web officiel de la CPGE-MENAPLN.

## Prérequis

1. Installer Git :
   - Windows : Téléchargez et installez Git depuis [git-scm.com](https://git-scm.com/download/win)
   - Mac : Installez via Homebrew : `brew install git`
   - Linux : `sudo apt-get install git` (Ubuntu/Debian) ou `sudo yum install git` (Fedora)

2. Installer Node.js :
   - Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/)
   - Vérifiez l'installation en tapant dans le terminal :
     ```bash
     git --version
     node --version
     npm --version
     ```

## Installation

1. Cloner le projet :
```bash
git clone https://github.com/AzizAVERIBOU/Ecole_bf.git
cd Ecole_bf
```

2. Installer les dépendances :
```bash
npm install
```

## Lancement du projet

Pour lancer le projet en mode développement :
```bash
npm start
```

Le site sera accessible à l'adresse : http://localhost:3000

## Structure du projet

- `/src` : Contient le code source
  - `/components` : Composants réutilisables
  - `/pages` : Pages principales du site
  - `/styles` : Fichiers CSS
  - `/routes` : Configuration des routes

## Technologies utilisées

- React.js
- React Router
- Bootstrap
- React Icons

## En cas de problème

Si vous rencontrez l'erreur "git n'est pas reconnu comme une commande interne" :
1. Assurez-vous que Git est bien installé
2. Redémarrez votre terminal après l'installation
3. Si l'erreur persiste, vérifiez que Git est bien dans votre PATH système
4. Sur Windows, vous pouvez aussi utiliser Git Bash qui est installé avec Git
