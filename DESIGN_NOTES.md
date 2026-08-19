# Axiom Store - notes de conception

## Référence utilisée

Le brief demandait un benchmark, mais la demande utilisateur précise de s'inspirer au maximum de LDLC et de ne pas choisir d'autres sites. La maquette reprend donc les enseignements UX observés sur LDLC sans copier son interface.

## Enseignements LDLC transposés

- Header e-commerce dense mais lisible : marque, recherche centrale, navigation courte, accès contact.
- Barre de recherche immédiatement visible, y compris sur mobile.
- Rail de catégories horizontal pour exposer rapidement les univers du catalogue.
- Hero orienté catalogue, avec plusieurs produits visibles dès le premier écran.
- Sections "univers populaires", nouveautés, produits et services pour donner une sensation de catalogue vivant.
- Footer riche avec navigation, catégories, contact, WhatsApp et Facebook.

## Direction Axiom Store

Axiom Store garde une identité plus sobre et premium : palette bleu pétrole, accent chaud, grands visuels produits, cartes nettes, peu de badges et un parcours transparent vers WhatsApp. La maquette évite toute promesse non fournie et ne simule pas de paiement en ligne.

## QA effectuée

- Vérification syntaxique de `server.js` et `script.js`.
- Vérification HTTP de `/`, `/services` et des assets CSS.
- Captures desktop, mobile et route temporaire avec Chrome headless.
- Correction du menu mobile caché et ajout d'une recherche mobile persistante.
