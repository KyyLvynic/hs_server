const express = require('express');
const router = express.Router();
const ensureAdmin = require('../middleware/ensureAdmin');
const roleController = require('./controllers/roleController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');


//////////////////////////////
///////  AUTRES ROUTES   /////
//////////////////////////////

// Afficher la page principale d'administration avec les utilisateurs et la delete_list
router.get('/admin', ensureAdmin, userController.getUsersWithDeleteFlag);

// Réinitialisation du mot de passe
router.post('/admin/reset-password/:id', ensureAdmin, userController.resetPassword);

// Ajout d'un compte à la delete_list
router.post('/admin/delete-account/:id', ensureAdmin, userController.deleteAccount);

// Route pour gérer l'ajout ou la suppression de la delete_list
router.post('/admin/toggle-delete', ensureAdmin, userController.addToDeleteList);


//////////////////////////////
///////  ROUTES DE RÔLES  /////
//////////////////////////////

// Afficher la page de gestion des rôles
router.get('/admin/gestion-des-roles', ensureAdmin, roleController.getAdminsAndUsers);

// Promouvoir un utilisateur en administrateur
router.post('/admin/gestion-des-roles/promote/:id', ensureAdmin, roleController.promoteToAdmin);

// Dégrader un administrateur en utilisateur
router.post('/admin/gestion-des-roles/demote/:id', ensureAdmin, roleController.demoteToUser);

//////////////////////////////
///////  ROUTES DES STATS   /////
//////////////////////////////

// Afficher la page des statistiques
router.get('/admin/statistiques', ensureAdmin, adminController.getStatistiques);


module.exports = router;
