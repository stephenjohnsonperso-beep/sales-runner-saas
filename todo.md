# Sales Runner - Project TODO

## Phase 1: Base de données et schéma
- [x] Schéma de base de données (utilisateurs, abonnements, rapports)
- [x] Tables pour les niveaux tarifaires et les plans
- [x] Table pour les rapports de leads générés
- [x] Table pour l'historique des demandes

## Phase 2: Page d'accueil et sections principales
- [x] Section hero avec headline et CTA
- [x] Section proposition de valeur (3 bénéfices)
- [x] Section "Comment ça marche" (3 étapes)
- [x] Modal de visite guidée avec walkthrough
- [x] Formulaire de capture de leads gratuit avec validation
- [x] Section de tarification avec 3 niveaux (Starter, Professional, Enterprise)
- [x] Tableau de comparaison des fonctionnalités
- [x] Section de confiance et sécurité
- [x] Disclaimer légal dans le footer

## Phase 3: Authentification et compte utilisateur
- [x] Intégration OAuth Manus (login/logout)
- [x] Page de connexion
- [x] Tableau de bord utilisateur
- [ ] Gestion du profil utilisateur
- [x] Historique des rapports de leads

## Phase 4: Intégration Stripe
- [x] Configuration des clés Stripe
- [ ] Création des produits Stripe (3 niveaux)
- [x] Implémentation du checkout Stripe
- [ ] Gestion des abonnements actifs
- [ ] Webhook Stripe pour les événements de paiement
- [ ] Gestion des essais gratuits

## Phase 5: Système de génération de rapports
- [ ] API de génération de rapports de leads
- [ ] Stockage des rapports en base de données
- [ ] Système d'envoi d'emails (confirmation et rapports)
- [ ] Limite de génération par plan tarifaire
- [ ] Suivi de l'utilisation (heures de génération)

## Phase 6: Tests et finalisation
- [ ] Tests des formulaires
- [ ] Tests du flux de paiement
- [ ] Tests de l'authentification
- [ ] Validation responsive design
- [ ] Optimisation des performances
- [ ] Vérification du disclaimer légal

## Phase 7: Déploiement
- [ ] Checkpoint final
- [ ] Vérification complète
- [ ] Documentation utilisateur


## Phase 6: Chat en direct avec 11 Labs
- [x] Intégration du widget 11 Labs
- [x] Configuration de l'agent IA 11 Labs
- [x] Personnalisation du widget avec branding
- [x] Test du chat sur page d'accueil
- [x] Test du chat sur tableau de bord
- [x] Documentation de configuration


## Phase 7: Système de limitation des rapports gratuits
- [x] Table de suivi des rapports gratuits (freeLeadRequests)
- [x] Vérification de limite par email (visiteurs anonymes)
- [x] Vérification de limite par utilisateur (1 par mois)
- [x] Procédure tRPC pour vérifier les limites
- [x] Messages d'erreur clairs pour les utilisateurs
- [x] Tests unitaires pour la limitation
- [x] Validation côté client et serveur


## Phase 8: Intégration Tasklet AI pour génération de rapports B2B
- [x] Table generatedReports dans la base de données
- [x] Procédure tRPC triggerGeneration pour appeler Tasklet AI
- [x] Endpoint webhook /api/receive-reports pour recevoir les PDFs
- [x] Stockage des PDFs en S3
- [ ] Envoi d'emails avec PDFs attachés
- [ ] Affichage des rapports dans le tableau de bord
- [ ] Historique et téléchargement des rapports
- [x] Tests unitaires pour l'intégration Tasklet AI


## Phase 9: Envoi d'emails, affichage des rapports et webhook Stripe
- [x] Implémenter l'envoi d'emails avec PDFs attachés (API Forge)
- [x] Ajouter les PDFs reçus de Tasklet AI aux emails
- [x] Afficher les rapports dans le tableau de bord utilisateur
- [x] Créer la section "Mes rapports" avec liste et téléchargement
- [x] Implémenter le webhook Stripe pour les événements de paiement
- [x] Gérer checkout.session.completed pour créer les abonnements
- [x] Gérer invoice.paid pour renouveler les abonnements
- [ ] Tests unitaires pour l'envoi d'emails
- [ ] Tests unitaires pour le webhook Stripe


## Phase 10: Corriger le flux Tasklet AI avec authentification bidirectionnelle
- [x] Creer la variable d'environnement TASKLET_CALLBACK_SECRET
- [x] Mettre a jour triggerGeneration pour envoyer le payload exact
- [x] Valider le token de callback dans /api/receive-reports
- [x] Tester le flux complet avec Tasklet AI
- [x] Tests unitaires pour le flux Tasklet AI


## Phase 11: Test de generation de rapports, profil utilisateur et notifications
- [ ] Creer une page de test pour declencher la generation de rapports
- [ ] Verifier le flux complet Tasklet AI (envoi et reception)
- [x] Creer la page de gestion du profil utilisateur
- [x] Permettre la modification du nom et email
- [x] Ajouter les preferences d'abonnement
- [x] Implémenter les notifications en temps réel (toasts)
- [ ] Ajouter les notifications par email
- [x] Tests unitaires pour le profil utilisateur
- [ ] Tests unitaires pour les notifications


## Phase 12: Integration du profil et page de test Tasklet AI
- [x] Ajouter lien vers /profile dans la navigation du Dashboard
- [x] Ajouter bouton de profil dans le header
- [x] Creer page de test pour Tasklet AI
- [x] Formulaire pour declencher manuellement la generation
- [x] Affichage du statut et des resultats
- [ ] Tests unitaires pour la page de test


## Phase 13: Bugs et corrections
- [x] Corriger le bouton "Obtenir votre rapport gratuit" en haut de la page (ne fait rien au clic)
- [ ] Verifier les 6 erreurs affichees en bas de la page
- [ ] Tester le formulaire de rapport gratuit


## Phase 14: Message de confirmation apres soumission
- [x] Creer un composant de modal de confirmation
- [x] Afficher le message apres soumission du formulaire
- [x] Inclure les details de la demande (email, entreprise)
- [x] Ajouter un bouton de fermeture
- [ ] Tester le flux complet


## Phase 15: Redesign premium McKinsey et support multilingue
- [x] Creer un systeme i18n avec support FR/EN (fichier i18n.ts cree)
- [x] Redesigner la palette de couleurs (moins saturee, plus premium)
- [x] Ajouter un toggle de langue dans la navigation
- [x] Traduire tous les textes de la page d'accueil
- [x] Traduire le formulaire de rapport gratuit
- [x] Traduire la section de tarification
- [ ] Traduire le tableau de bord utilisateur
- [x] Traduire les modals et messages
- [ ] Tester le flux complet en FR et EN


## Phase 16: Implementation complete du redesign McKinsey et multilingue
- [x] Creer un composant LanguageToggle professionnel (FR/EN sans drapeaux)
- [x] Integrer le toggle dans la navigation du header
- [x] Traduire tous les textes de la page d'accueil (FR/EN)
- [x] Traduire le formulaire de rapport gratuit
- [x] Traduire la section de tarification
- [ ] Traduire le tableau de bord utilisateur
- [x] Traduire les modals et messages de confirmation
- [ ] Ajouter les notifications multilingues
- [ ] Tester le flux complet en FR et EN


## Phase 17: Redesign McKinsey avec meilleur contraste et lisibilité
- [x] Évaluer le design actuel et identifier les problèmes de contraste
- [x] Redesigner la palette de couleurs (background clair, texte sombre)
- [x] Mettre à jour index.css avec nouvelles variables CSS
- [x] Tester la lisibilité sur tous les composants
- [x] Vérifier le contraste WCAG AAA
- [x] Tester le design sur mobile et desktop
- [x] Changer le thème par défaut à light
- [x] Tester le toggle de langue en français et anglais


## Phase 18: Résolution définitive de l'erreur WebSocket et fond techno premium
- [x] Résoudre l'erreur WebSocket en désactivant HMR en mode Manus
- [x] Corriger la configuration HMR dans server/_core/vite.ts
- [x] Créer un fond professionnel techno haut de gamme
- [x] Ajouter grille subtile, lignes diagonales et gradient radial
- [x] Tester le fond sur toute la page
- [x] Vérifier le toggle de langue avec le nouveau fond
- [x] Confirmer qu'aucune erreur WebSocket n'apparaît


## Phase 19: Remplacement du logo
- [x] Copier le logo métallique dans le dossier public
- [x] Mettre à jour le header pour utiliser le nouveau logo
- [x] Tester le logo avec le toggle de langue
- [x] Vérifier l'affichage du logo en FR et EN
