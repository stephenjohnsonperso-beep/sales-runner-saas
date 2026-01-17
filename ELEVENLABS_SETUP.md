# Configuration du Chat 11 Labs

Ce guide explique comment configurer et intégrer le widget de chat 11 Labs dans votre plateforme Sales Runner.

## 1. Créer un compte 11 Labs

1. Allez sur [elevenlabs.io](https://elevenlabs.io)
2. Créez un compte ou connectez-vous
3. Accédez à la section **Conversational AI** depuis le tableau de bord

## 2. Créer un agent IA

1. Cliquez sur **Create Agent** ou **New Agent**
2. Configurez votre agent :
   - **Name** : "Sales Runner Support Agent" (ou votre nom préféré)
   - **System Prompt** : Personnalisez les instructions pour votre agent
   - **Voice** : Choisissez une voix 11 Labs
   - **Language** : Sélectionnez la langue (français recommandé)

### Exemple de System Prompt

```
Tu es un agent de support client intelligent pour Sales Runner, une plateforme de génération de leads IA pour les fabricants industriels.

Ton rôle :
- Répondre aux questions sur les services de Sales Runner
- Expliquer les trois plans tarifaires (Starter $97/mois, Professional $197/mois, Enterprise sur mesure)
- Aider les visiteurs à comprendre comment fonctionne la plateforme
- Diriger les utilisateurs vers les ressources appropriées
- Être professionnel, courtois et utile

Informations clés :
- Starter : 2h IA/mois, 6-10 leads/mois, 1 utilisateur, $97/mois
- Professional : 6h IA/mois, 20-30 leads/mois, 3 utilisateurs, $197/mois
- Enterprise : Déploiement sur site, IA illimitée, utilisateurs illimités, prix sur mesure

Disponibilité : 24/7
Langue : Français
```

## 3. Récupérer l'Agent ID

1. Une fois votre agent créé, ouvrez ses paramètres
2. Copiez l'**Agent ID** (format : `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
3. Gardez-le à proximité pour l'étape suivante

## 4. Configurer l'environnement

Ajoutez la variable d'environnement à votre fichier `.env` ou via le panneau Settings :

```env
VITE_ELEVENLABS_AGENT_ID=votre-agent-id-ici
```

**Ou** via l'interface Manus :
1. Allez dans **Settings → Secrets**
2. Cliquez sur **Add Secret**
3. Clé : `VITE_ELEVENLABS_AGENT_ID`
4. Valeur : Votre Agent ID
5. Cliquez sur **Save**

## 5. Vérifier l'intégration

Le widget devrait maintenant apparaître :
- Sur la **page d'accueil** (coin inférieur droit)
- Sur le **tableau de bord** (coin inférieur droit)
- Sur toutes les pages du site

## 6. Tester le chat

1. Rafraîchissez votre navigateur
2. Cherchez le widget 11 Labs dans le coin inférieur droit
3. Cliquez sur le bouton pour ouvrir le chat
4. Testez une conversation avec votre agent

## 7. Personnalisation avancée

### Modifier le style du widget

Vous pouvez personnaliser l'apparence du widget en éditant le composant `ElevenLabsChat.tsx` :

```tsx
// Changer la position
style={{
  position: "fixed",
  bottom: "20px",      // Distance du bas
  right: "20px",       // Distance de la droite
  zIndex: 9999,        // Ordre de superposition
}}
```

### Afficher/Masquer le widget

Pour afficher le widget uniquement sur certaines pages :

```tsx
// Sur la page d'accueil
<ElevenLabsChat />

// Sur le tableau de bord (déjà intégré)
<ElevenLabsChat />

// Pour désactiver temporairement
{/* <ElevenLabsChat /> */}
```

## 8. Fonctionnalités du widget

Le widget 11 Labs offre :
- ✓ Chat texte en temps réel
- ✓ Capacités vocales (parler au lieu de taper)
- ✓ Reconnaissance vocale (l'agent comprend votre voix)
- ✓ Historique de conversation
- ✓ Réponses intelligentes basées sur l'IA
- ✓ Support multilingue

## 9. Troubleshooting

### Le widget n'apparaît pas

1. Vérifiez que `VITE_ELEVENLABS_AGENT_ID` est défini
2. Ouvrez la console du navigateur (F12) et cherchez les erreurs
3. Vérifiez que le script 11 Labs se charge correctement
4. Assurez-vous que JavaScript est activé

### Le chat ne répond pas

1. Vérifiez que votre agent est **actif** dans 11 Labs
2. Testez directement depuis le tableau de bord 11 Labs
3. Vérifiez votre quota d'API 11 Labs
4. Consultez les logs 11 Labs pour les erreurs

### Problèmes de voix

1. Vérifiez les paramètres audio de votre navigateur
2. Assurez-vous que le microphone est autorisé
3. Testez avec un autre navigateur

## 10. Ressources

- [Documentation 11 Labs](https://docs.elevenlabs.io)
- [Conversational AI Guide](https://docs.elevenlabs.io/conversational-ai/overview)
- [API Reference](https://docs.elevenlabs.io/api-reference)

## 11. Support

Pour toute question :
- Consultez la documentation 11 Labs
- Contactez le support 11 Labs
- Vérifiez les logs de votre application
