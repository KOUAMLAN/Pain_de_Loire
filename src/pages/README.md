🚀 Le Fournil de Cosne – Documentation Rapide

## Tester en local
- Ouvrez un terminal, exécutez :  
  `npm install && npm run dev`

## Modifier vos horaires / produits
- Changez le contenu dans :  
  `src/data/config.json`

## Changer les images 
- Remplacez les fichiers :  
  `/public/images/`

## Déploiement production (Vercel)
- Lancez :  
  `vercel --prod`  
- Aide DNS : pointer votre nom de domaine IONOS vers Vercel

## RGPD / Mentions légales
- Éditez la page `src/pages/MentionsLegales.jsx`

Site rapide, responsive, optimisé Google local, appels directs, modification facile !
*/

//
// INSTRUCTIONS POUR AFFICHAGE/ROUTAGE :
// - Assurez-vous que `src/main.jsx` monte React sur <div id="root"> du index.html
// - React Router doit router vers 5 pages (`Accueil`, `NosPains`, `Contact`, `APropos`, `MentionsLegales`)
// - Tout contenu éditable se trouve dans `/src/data/config.json`
// - Tailwind fonctionne via `index.css` (déjà importé)
//
// 🟢 Pour vérifier le fonctionnement en local :  
//    - npm install && npm run dev (ouvre sur localhost:5173)
//    - Toute page doit s'afficher à son URL : "/", "/pains", "/contact", "/a-propos", "/mentions-legales"
//
// 🟢 Pour déployer :
//    - npm run build puis vercel --prod