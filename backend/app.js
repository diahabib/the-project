const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

// Configurez la connexion à la base de données PostgreSQL
const sequelize = new Sequelize('transport', 'transport', 'mugiwaradluffy', {
  dialect: 'postgres', // Utilisation du dialecte PostgreSQL
  host: 'localhost', // Remplacez par l'adresse de votre serveur PostgreSQL
  port: 5432, // Port PostgreSQL par défaut
  // Autres options de configuration ici...
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à PostgreSQL réussie !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à PostgreSQL :", err);
  });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


module.exports = app