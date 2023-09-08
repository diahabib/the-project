const { Sequelize } = require('sequelize');

// Configurez la connexion à la base de données PostgreSQL
const sequelize = new Sequelize('nom_base_de_donnees', 'nom_utilisateur', 'mot_de_passe', {
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

module.exports = sequelize;