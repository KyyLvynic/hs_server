const User = require('../../table/user');
const Game = require('../../table/userParty');

exports.getStatistiques = async (req, res) => {
    try {
        // Récupération des statistiques
        const nbUsers = (await User.findAndCountAll()).count;
        const nbAdminUsers = (await User.findAndCountAll({ where: { isAdmin: true } })).count;
        const nbNonAdminUsers = nbUsers - nbAdminUsers;
        // Ajoute d'autres statistiques si nécessaire

        // Rendu de la vue statistiques.ejs avec les statistiques
        res.render('statistiques', {
            stats: {
                nbUsers,
                nbAdminUsers,
                nbNonAdminUsers,
            },
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des statistiques :', error);
        res.status(500).send('Erreur serveur');
    }
};

