# Utiliser une image légère de Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers de package pour installer les dépendances
COPY package.json package-lock.json ./

# Installer uniquement les dépendances de production si besoin
RUN npm install

# Copier tout le reste
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173

# Lancer le projet en mode développement
CMD ["npm", "run", "dev"]

