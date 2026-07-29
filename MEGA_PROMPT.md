# 🎨 Mega-Prompt — Refonte Maxpatrie v4

> **Projet :** Site d'expatriation familiale à Valencia  
> **Tonalité :** Humain, chaleureux, zéro AI-slop  
> **Équipe :** UI/UX Designer + Graphiste Motion + Frontend Dev + Rédacteur  
> **Durée estimée :** 1 session complète (3 batches de sous-agents)

---

## 📋 Brief produit

Tu refonds intégralement le site **Maxpatrie** — le journal de bord d'une famille française de 5 personnes (Florian, 35 ans, logisticien, sa femme, une fille de 6 ans, des jumeaux de 4 ans) qui prépare son expatriation à **Valencia pour l'été 2028**.

Le contenu texte est déjà écrit (ton humain, tutoiement, contractions) dans `/opt/data/maxpatrie-site/pages/*.html`. Ne pas réécrire le fond — uniquement le contenant visuel.

---

## 🇪🇸 Direction visuelle — Identité Espagne + Valencia

### Drapeaux en fond (OBLIGATOIRE)

Le site doit RESPIRER l'Espagne et Valencia. Deux drapeaux doivent apparaître en fond, de manière élégante et non criarde :

| Drapeau | Intégration |
|---|---|
| **🇪🇸 Espagne** (rouge-jaune-rouge, bandes horizontales) | Fond du **hero** — bandes subtiles en dégradé, opacité 5-8%, comme une texture aquarelle qui se fond dans le fond blanc |
| **🏴󠁥󠁳󠁶󠁣󠁴󠁿 Valencia** ( Senyera couronnée : 4 bandes rouges sur fond or + bande bleue à gauche) | Fond du **footer** ou d'une **section alternée** — même traitement, opacité 5-8%, texture aquarelle |

**Règle technique :** Les drapeaux sont créés en CSS pur (`repeating-linear-gradient` pour les bandes), PAS en images. L'effet est une texture d'arrière-plan subtile, pas un drapeau qui claque en plein milieu de l'écran.

### Palette complète

```css
:root {
  /* Dominante chaude — le soleil espagnol */
  --sun-gold:      #e8a940;   /* Or safran (paella, soleil, drapeau) */
  --sun-light:     #f5d78a;   /* Or clair (dégradés, highlights) */

  /* Rouge espagnol — ACCENT, max 15% des surfaces */
  --spain-red:     #c4302b;   /* Rouge du drapeau (boutons CTA, liens hover) */
  --spain-red-dark:#9a1f1b;   /* Rouge foncé (hover, focus) */

  /* Bleu méditerranéen */
  --med-blue:      #1a6b8a;   /* Mer, ciel, navigation */
  --med-light:     #e6f2f7;   /* Bleu très clair (callouts, highlights) */

  /* Neutres */
  --warm-white:    #fefaf5;   /* Fond principal (blanc cassé TRÈS léger, pas crème) */
  --surface:       #f8f3ec;   /* Sections alternées */
  --charcoal:      #2d2a26;   /* Texte principal */
  --charcoal-light:#6b6560;   /* Texte secondaire */
}
```

### Typographie

| Usage | Police | Google Fonts URL |
|---|---|---|
| Titres (h1-h3) | **Playfair Display** (600, 700) | `Playfair+Display:wght@600;700` |
| Corps | **Lora** (400, 500, 600) | `Lora:ital,wght@0,400;0,500;0,600;1,400` |
| Monospace | JetBrains Mono (chiffres, données) | `JetBrains+Mono@500` |

**Règle :** Pas Inter, pas Arial, pas system font.

---

## 🧱 Structure du site

### Page d'accueil (`index.html`)

1. **Hero** — Fond : drapeau espagnol en aquarelle subtile + dégradé chaud coucher de soleil
   - Titre : "Valencia. 🇪🇸" en Playfair Display
   - Sous-titre narratif (ton Florian, déjà écrit)
   - Compte à rebours jusqu'à l'été 2028
   - Bouton CTA "Explorer le guide"

2. **Section "Pourquoi"** — Layout éditorial split (ce qu'on quitte / ce qu'on cherche)
   - Pas de cartes ! Texte + emojis 🇪🇸 🍊 🌊 🥘

3. **Timeline** — 4 phases 2026→2028
   - Ligne verticale avec points
   - Dates en or safran

4. **Budget** — Calculateur interactif 3 scénarios (sobre/confort/tranquille)
   - Garder les IDs existants (calc-loyer, calc-total, data-scenario)
   - Bloc épargne : 40 000 € objectif

5. **Quartiers** — Filtre interactif (Tous/Famille/Centre/Bord de mer)
   - Garder les data-category
   - 3 cartes mises en avant (Benimaclet ❤️, Patraix, Campanar)

6. **Guide complet** — Liste éditoriale des 9 pages, PAS une grille monotone

7. **Footer** — Fond : drapeau de Valencia en aquarelle subtile
   - 🇪🇸 Maxpatrie + 🥘🍊🏖️
   - Liens vers toutes les pages
   - "¡Hasta pronto! ☀️"

### Pages de contenu (9 pages)

Chaque page a la structure : `navbar → content-header → content-body → footer`. Le contenu texte est déjà humanisé. Le CSS fait tout le travail visuel.

---

## 🔨 Règles anti-slop (IMPÉRATIVES)

Ces règles viennent du skill `ui-design-references` (Impeccable). Toute violation = refusé.

| ❌ INTERDIT | ✅ À FAIRE |
|---|---|
| Fond crème/sable/beige (OKLCH L 0.84-0.97, C < 0.06) | Blanc cassé `#fefaf5` (chroma proche de zéro) |
| Eyebrow/badge uppercase tracké sur chaque section | Zéro badge superflu — un seul si justifié |
| Grille de cartes identiques (icône + titre + texte ×N) | Layouts variés : split, full-bleed, éditorial, liste |
| Hero-metric template (gros chiffres + labels) | Chiffres intégrés dans le texte narratif |
| Ghost-cards (border + box-shadow simultanés) | Border OU fond teinté, pas les deux |
| Side-stripe borders (border-left > 1px décoratif) | Bordures complètes ou rien |
| Gradient text (background-clip: text) | Couleur unie |
| border-radius > 16px sur cartes | Max 8-12px |
| Spring/bounce animations | Ease-out-quart uniquement |
| Polices système (Inter, Arial) | Playfair Display + Lora |
| Dégradé fond crème par défaut | Blanc propre OU couleur assumée |

### L'AI Slop Test

Si quelqu'un regarde le site et pense *« ça a été fait par une IA »* → **échec**. Le site doit avoir une identité visuelle singulière, pas la moyenne statistique d'Internet.

---

## 🎬 Motion & Micro-interactions

- `prefers-reduced-motion: reduce` obligatoire
- Fade-in au scroll (IntersectionObserver, déjà en place dans `main.js`)
- Stagger subtil (pas uniforme — chaque section a sa propre révélation)
- Hover sur cartes : scale(1.01) + ombre légère, transition 200ms ease-out
- Compteur budget : transition scale au changement de scénario

---

## 📱 Responsive

| Breakpoint | Comportement |
|---|---|
| 992px | Grilles 2→3 colonnes |
| 768px | Menu hamburger, grilles 1 colonne, timeline linéaire |
| 480px | Padding réduit, police ajustée, boutons full-width |

---

## 🚀 Plan d'exécution (3 batches de sous-agents)

### Batch 1 — Design System (parallèle)
```
👤 UI/UX Designer
   → Créer DESIGN_BRIEF.md avec la spec complète
   → Palette, typo, règles visuelles, moodboard textuel

👤 Graphiste Motion Designer  
   → Réécrire /opt/data/maxpatrie-site/css/style.css
   → Implémenter les 2 drapeaux en fond CSS (Espagne hero, Valencia footer)
   → Dégradé coucher de soleil, azulejos
   → Toutes les règles anti-slop
```

### Batch 2 — Frontend (parallèle, après Batch 1)
```
👤 Frontend Developer
   → Mettre à jour /opt/data/maxpatrie-site/index.html
   → Intégrer les classes du nouveau CSS
   → Vérifier tous les IDs/data-attributs interactifs
   → Ajouter touches espagnoles (emojis, refs culturelles)

👤 Rédacteur/Relecteur  
   → Relire et peaufiner le ton humain sur index.html
   → Traquer les AI-ismes résiduels
   → Ajouter 2-3 détails vécus concrets
```

### Batch 3 — Pages contenu (parallèle, après Batch 2)
```
👤 Frontend Developer 2
   → Vérifier que les 9 pages/*.html fonctionnent avec le nouveau CSS
   → Corriger les styles inline qui référencent d'anciennes variables
   → Uniformiser les content-headers

👤 QA Tester
   → Vérifier tous les liens (pas de 404)
   → Vérifier le calculateur budget (tous les IDs)
   → Vérifier le filtre quartiers (tous les data-category)
   → Vérifier responsive (3 breakpoints)
   → Zéro erreur JS console
```

---

## ✅ Checklist de validation finale

- [ ] Le hero montre le drapeau espagnol en fond aquarelle subtil
- [ ] Le footer montre le drapeau de Valencia en fond aquarelle subtil
- [ ] La palette est or/safran + rouge accent ≤15% + bleu méd — pas de terracotta partout
- [ ] La typo est Playfair Display + Lora
- [ ] Zéro AI-slop (passer le test : on ne devine pas que c'est une IA)
- [ ] Ton humain (tutoiement, contractions, vécu)
- [ ] Les 9 pages de contenu fonctionnent
- [ ] Le calculateur budget fonctionne (3 scénarios)
- [ ] Le filtre quartiers fonctionne (4 catégories)
- [ ] Menu mobile fonctionnel
- [ ] Zéro erreur console JS
- [ ] Déployé sur GitHub Pages
- [ ] Score Lighthouse ≥ 90

---

## 🔗 Ressources

| Ressource | Usage |
|---|---|
| `/opt/data/maxpatrie-site/` | Code source actuel du site |
| `/opt/data/maxpatrie-site/css/style.css` | CSS à réécrire |
| `/opt/data/maxpatrie-site/js/main.js` | JS — ne pas toucher |
| `/opt/data/maxpatrie-site/pages/*.html` | 9 pages contenu — ne pas réécrire le texte |
| `/opt/data/maxpatrie-site/DESIGN_BRIEF.md` | Brief design v3 (référence) |
| Skills : `ui-design-references`, `humanizer`, `client-website-redesign`, `dispatching-parallel-agents` | Règles design, ton, déploiement, parallélisation |
| Profils agence dans `/opt/data/profiles/` | ui-ux-designer, graphiste-motion, frontend-dev, redacteur-relecteur, qa-tester |

---

## 🎯 Objectif final

Un site qui, quand on le regarde, fait penser **"Valencia"** — pas "template SaaS", pas "blog WordPress", pas "site généré par IA". Le drapeau espagnol en fond aquarelle doit être la première chose qu'on ressent, même inconsciemment. Le ton doit être celui d'un père de famille qui écrit à un pote autour d'un café. Le design doit être assez singulier pour qu'on se souvienne du site, pas de sa catégorie.
