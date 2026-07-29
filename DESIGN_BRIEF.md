# Maxpatrie — Design Brief v3
## Direction « Soleil Méditerranéen » ☀️

---

### 🎯 Contexte & Problème

Le site Maxpatrie (expatriation familiale à Valencia) utilise actuellement une palette **Terracotta / Slate** qui donne un rendu « tout rouge » — fonds rouges, boutons rouges, liens rouges. Le site respire la terre cuite et l'argile, mais pas l'Espagne vivante, solaire et maritime que le client veut incarner.

**Ce qu'on perd :** l'identité terracotta qui était forte mais étouffante.
**Ce qu'on gagne :** une direction chaleureuse ET lumineuse, qui évoque Valencia sans tomber dans le cliché touristique.

---

### 🎨 1. Palette Révisée — « El Sol Mediterráneo »

#### Principe directeur
Le safran/jaune espagnol devient la couleur **chaude dominante** (le soleil, la paella, le drapeau). Le rouge passe en **couleur d'accent ponctuelle** (comme sur le drapeau espagnol : une bande, pas le fond entier). Le bleu méditerranéen apporte la mer et le ciel. Le tout sur une base blanc chaud.

#### Tokens CSS cibles

| Token | Hex | Rôle | Surface max |
|-------|-----|------|-------------|
| `--sun-gold` | `#E8A317` | Couleur chaude dominante : CTA primaires, accents forts, highlights | 20-30% |
| `--sun-gold-deep` | `#C8890F` | Hover states, éléments interactifs actifs | — |
| `--sun-gold-light` | `rgba(232, 163, 23, 0.10)` | Surfaces légères, glow backgrounds | — |
| `--med-blue` | `#1B6B93` | Bleu Méditerranée : liens, icônes, accents froids | 10-15% |
| `--med-blue-deep` | `#145374` | Hover links, footer accents | — |
| `--med-blue-light` | `rgba(27, 107, 147, 0.08)` | Surfaces bleutées subtiles | — |
| `--esp-red` | `#C4122E` | Rouge drapeau espagnol : **touches uniquement**, badges importants, alertes douces | ≤ 5% |
| `--esp-red-dark` | `#9A0E24` | Hover sur éléments rouges | — |
| `--warm-white` | `#FDFAF5` | Fond principal — blanc cassé ultra-léger (pas crème, pas beige) | 60-70% |
| `--warm-white-alt` | `#FAF6EE` | Fond secondaire, cartes alternées | — |
| `--charcoal` | `#1C1814` | Texte principal — pas noir pur, légèrement réchauffé | — |
| `--charcoal-light` | `#6B6460` | Texte secondaire, légendes | — |
| `--slate-deep` | `#121926` | Fond footer — bleu nuit profond (évoque le ciel nocturne méditerranéen) | — |
| `--slate-surface` | `#1E2934` | Cartes dans sections sombres | — |
| `--olive` | `#5A7A4A` | Accent végétal : touches de verdure (orangers, palmiers) | ≤ 5% |
| `--olive-light` | `rgba(90, 122, 74, 0.10)` | Surfaces vertes subtiles | — |

#### ⛔ Ce qui disparaît

- `--terracotta` (#b8452e) → **supprimé**. Remplacé par `--sun-gold` pour la chaleur, `--esp-red` pour les accents.
- `--surface` (#f5f4f2) → **remplacé** par `--warm-white` (plus chaud, moins gris).
- `--sand` / `--cream` → **supprimés**. Pas de teintes sable/beige/crème (AI slop visuel).
- `--accent` (#e8a850, burnt gold) → **remplacé** par `--sun-gold` (plus vif, plus solaire).

#### Architecture de contraste

```
Fond : warm-white (clair, solaire)
Texte : charcoal (chaud, lisible)
CTA principaux : sun-gold (chaud, visible)
Liens : med-blue (frais, maritime)
Alertes/touches : esp-red (ponctuel, jamais en fond)
Footer : slate-deep (nuit espagnole)
```

---

### 🔤 2. Typographie — Chaude, Humaine, Méditerranéenne

#### Google Fonts sélectionnées

**Titres : `Playfair Display`** (weight 400, 600 ; italique 400)
- Serif élégant mais chaleureux, évoque l'Espagne classique sans être guindé.
- Alternatives système : `Georgia, 'Times New Roman', serif`
- Lien : `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap`

**Corps : `Source Serif 4`** (weight 400, 600 ; italique 400)
- Serif contemporain, très lisible, légèrement chaud. Moins « livre ancien » que Crimson Text.
- Alternatives système : `Georgia, 'Times New Roman', serif`
- Lien : `https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap`

**Mono (code, chiffres) : inchangé** — `SF Mono, Fira Code, Cousine, monospace`

#### Pourquoi on change

- `DM Serif Display` → `Playfair Display` : DM Serif est beau mais très anglo-saxon/editorial. Playfair a des courbes plus douces, plus latines.
- `Crimson Text` → `Source Serif 4` : Crimson est joli mais son nom lui-même évoque le rouge cramoisi — mauvais signal pour un site qui fuit le rouge. Source Serif 4 est plus neutre, plus chaud, plus lisible sur écran.

#### Échelle typographique (inchangée)

```
h1 : clamp(2.4rem, 6vw, 4.2rem) — letter-spacing: -0.05em
h2 : clamp(1.8rem, 4vw, 2.8rem) — letter-spacing: -0.04em
h3 : clamp(1.3rem, 2.5vw, 1.7rem) — letter-spacing: -0.03em
h4 : 1rem — letter-spacing: -0.02em
body : 1rem / line-height: 1.75
```

---

### 🖼️ 3. Éléments Visuels CSS — Pas d'Images, Tout en Code

#### 3.1 Motifs d'Azulejos en CSS

**Pattern 1 — Azulejo Classique (damier croisé)**
À utiliser comme `background-image` répétable sur des séparateurs de section ou en watermark ultra-subtil.

```css
--azulejo-pattern: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    rgba(27, 107, 147, 0.04) 5px,
    rgba(27, 107, 147, 0.04) 10px
  ),
  repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 5px,
    rgba(27, 107, 147, 0.04) 5px,
    rgba(27, 107, 147, 0.04) 10px
  );
```

**Pattern 2 — Étoile Mudéjar (8 branches)**
Pour des séparateurs décoratifs ou des backgrounds de cartes spéciales.

```css
--mudejar-star: radial-gradient(circle at 50% 50%,
    rgba(232, 163, 23, 0.06) 0%,
    transparent 60%
  ),
  conic-gradient(
    from 0deg,
    transparent 0deg 20deg, rgba(27, 107, 147, 0.05) 20deg 25deg,
    transparent 25deg 65deg, rgba(27, 107, 147, 0.05) 65deg 70deg,
    transparent 70deg 110deg, rgba(27, 107, 147, 0.05) 110deg 115deg,
    transparent 115deg 155deg, rgba(27, 107, 147, 0.05) 155deg 160deg,
    transparent 160deg 200deg, rgba(27, 107, 147, 0.05) 200deg 205deg,
    transparent 205deg 245deg, rgba(27, 107, 147, 0.05) 245deg 250deg,
    transparent 250deg 290deg, rgba(27, 107, 147, 0.05) 290deg 295deg,
    transparent 295deg 335deg, rgba(27, 107, 147, 0.05) 335deg 340deg,
    transparent 340deg 360deg
  );
```

**Pattern 3 — Vague Méditerranéenne**
Pour les footers, séparateurs de sections, ou bordures décoratives.

```css
--wave-pattern: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 18px,
    rgba(27, 107, 147, 0.06) 18px,
    rgba(27, 107, 147, 0.06) 20px
  );
```

**Usage :** Classes utilitaires `.pattern-azulejo`, `.pattern-mudejar`, `.pattern-wave` appliquées sur des `::before` ou `::after` en `opacity: 0.5` max. Jamais sur le fond principal — uniquement en touches.

#### 3.2 Dégradés « Coucher de Soleil Espagnol »

**Sunset Hero Overlay**
```css
--sunset-gradient: linear-gradient(
    135deg,
    rgba(232, 163, 23, 0.20) 0%,
    rgba(196, 18, 46, 0.08) 35%,
    rgba(27, 107, 147, 0.10) 70%,
    rgba(18, 25, 38, 0.85) 100%
  );
```

**Sunset Glow (cartes, hover states)**
```css
--sunset-glow: radial-gradient(
    ellipse at 80% 20%,
    rgba(232, 163, 23, 0.10) 0%,
    transparent 60%
  );
```

**Usage :**
- `.hero` : sunset-gradient en overlay sur fond slate-deep (remplace l'énorme bloc terracotta actuel)
- `.card.featured` : sunset-glow en `::before`
- `.section-header` : sunset-glow subtil en arrière-plan

#### 3.3 Textures Subtiles

**Grain de sable (noise) — ultra-subtil**
```css
--grain-texture: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
```

Appliqué uniquement sur `body::before` en `pointer-events: none`, `position: fixed`, `z-index: 9999` et `opacity: 0.4`. Donne une micro-texture sans alourdir.

#### 3.4 Emojis Stratégiques

Utilisés comme icônes dans les cartes, les titres de section, et la navigation. Pas d'icônes SVG — tout en emoji pour la cohérence et la chaleur.

| Emoji | Usage |
|-------|-------|
| 🇪🇸 | Logo, badge « Espagne » |
| ☀️ | Météo, luminosité, qualité de vie |
| 🥘 | Gastronomie, paella, budget nourriture |
| 🌊 | Plages, mer, Méditerranée |
| 🍊 | Orangers de Valencia (spécifique à la ville !) |
| 🏠 | Logement, quartiers |
| 👨‍👩‍👧‍👦 | Famille, vie familiale |
| 📋 | Checklists, démarches administratives |
| 💶 | Budget, coût de la vie |
| 🏫 | Écoles, scolarité |
| 🏥 | Santé, sécurité sociale |
| 🎒 | Rentrée scolaire, fournitures |
| 🚇 | Transports (métro de Valencia) |
| 🎉 | Fallas (fête emblématique de Valencia) |

**Règle :** max 1 emoji par titre, max 1 emoji par carte. Pas d'avalanche.

---

### 🌅 4. Ambiance Générale — « L'Espagne sans le Cliché »

| Qualité | Manifestation |
|---------|---------------|
| **Chaleureux** | Or safran dominant, blanc cassé, typographie à courbes douces |
| **Ensoleillé** | Dégradés sunset, haute luminosité globale, pas de gris froid |
| **Méditerranéen** | Bleu profond en touches, motif vague, orangers (🍊) |
| **Familial** | Emojis famille, ton accessible, pas de jargon administratif |
| **Valencien** | Spécificités locales : orangers, Fallas, paella, plages, Benimaclet |

#### Ce que le visiteur doit ressentir :

> « Je suis sur une terrasse ensoleillée, il fait 22°C en février, je bois un café pendant que mes gamins courent, et ce site me donne envie de faire mes valises. »

---

### 🚫 5. Ce Qu'on NE Fait PAS (Contraintes Négatives)

| ❌ Interdit | ✅ Alternative |
|------------|----------------|
| Fond tout rouge (`background: red` ou `terracotta` dominant) | Fond warm-white, or en touches |
| Crème / sable / beige (`#f5f0e0`, `#e8dcc8`, etc.) | `#FDFAF5` (blanc cassé chaud — pas jaune, pas beige) |
| Cartes monotones identiques | Alternance : warm-white / warm-white-alt / sunset-glow tous les 3n |
| Eyebrows (`text-transform: uppercase; letter-spacing: 0.1em`) | Badges en minuscules, style naturel |
| Palette monochrome | 5 couleurs distinctes : or, bleu, rouge (touche), vert olive, blanc chaud |
| Dégradés fluo ou arc-en-ciel | Uniquement sunset-gradient (or → rouge subtil → bleu → nuit) |
| Polices froides/géométriques (Inter, Roboto, Helvetica) | Playfair Display + Source Serif 4 (serif chaleureux) |
| Ombres portées lourdes (`box-shadow` agressives) | Bordures subtiles (`1px solid rgba(0,0,0,0.06)`) ou pas d'ombre du tout |
| Animations bounce/spring | Uniquement `ease-out-quart` (`cubic-bezier(0.25, 1, 0.5, 1)`) |

---

### 🧩 6. Architecture des Composants — Règles par Élément

#### 6.1 Hero (refonte majeure)

**Avant :** fond slate-deep + énorme bloc terracotta à droite (clip-path) qui faisait « tout rouge ».
**Après :**
- Fond : `slate-deep` (bleu nuit) avec overlay `sunset-gradient` en diagonal
- Pas de bloc de couleur massive — le dégradé crée la profondeur
- Texte blanc sur fond nuit
- Highlight : `--sun-gold`
- Badge discret avec 🇪🇸, pas d'eyebrow

#### 6.2 Navbar

**Avant :** transparent → blanc au scroll, liens charcoal, CTA terracotta.
**Après :**
- CTA principal : fond `--sun-gold`, texte `--charcoal` (contraste fort)
- Liens : `--charcoal-light` → hover `--med-blue`
- Logo : `--charcoal` avec 🇪🇸
- Scroll : fond `--warm-white` avec blur (gardé)

#### 6.3 Cartes

**Avant :** fond blanc uniforme + border gris.
**Après :**
- Card 1 (3n+1) : fond `--warm-white` + border subtil
- Card 2 (3n+2) : fond `--warm-white-alt` + border subtil
- Card 3 (3n) : fond `--warm-white` + `::before` avec `sunset-glow` discret
- Icônes en emoji, pas de boîtes colorées
- Pas d'ombres, uniquement des bordures `rgba(0,0,0,0.05)`
- Hover : fond légèrement plus chaud, transition 300ms ease-out

#### 6.4 Boutons

| Variante | Fond | Texte | Usage |
|----------|------|-------|-------|
| `.btn-primary` | `--sun-gold` | `--charcoal` | CTA principal |
| `.btn-primary:hover` | `--sun-gold-deep` | `--charcoal` | — |
| `.btn-outline` (dark bg) | transparent | `white` | Hero, footer CTA |
| `.btn-outline` (light bg) | transparent | `--charcoal` | Sections claires |
| `.btn-danger` (rare) | `--esp-red` | `white` | Alertes importantes uniquement |

#### 6.5 Liens

**Avant :** couleur terracotta.
**Après :**
- Liens dans le contenu : `--med-blue` → hover `--med-blue-deep`
- Liens dans la nav : `--charcoal-light` → hover `--med-blue`
- Liens dans le footer : `rgba(255,255,255,0.5)` → hover `--sun-gold`

#### 6.6 Footer

**Avant :** fond slate-deep, liens gris → or.
**Après :**
- Fond : `--slate-deep` (gardé — évoque la nuit espagnole)
- Liens : `rgba(255,255,255,0.5)` → hover `--sun-gold` (gardé, fonctionne bien)
- Ajouter un séparateur `--wave-pattern` discret en haut du footer
- Emoji 🇪🇸 près du nom du site

#### 6.7 Sections Alternées

**Avant :** `.section-alt` = fond slate foncé.
**Après :**
- `.section-alt` = fond `--warm-white-alt` (pas de fond noir en milieu de page)
- Une seule section sombre possible : le hero (et le footer)
- Le contenu respire, pas d'alternance brutale clair/sombre

---

### 📐 7. Tokens CSS Complets — Fichier `:root` Cible

```css
:root {
  /* === Palette Soleil Méditerranéen === */
  --sun-gold:            #E8A317;
  --sun-gold-deep:       #C8890F;
  --sun-gold-light:      rgba(232, 163, 23, 0.10);
  --med-blue:            #1B6B93;
  --med-blue-deep:       #145374;
  --med-blue-light:      rgba(27, 107, 147, 0.08);
  --esp-red:             #C4122E;
  --esp-red-dark:        #9A0E24;
  --esp-red-light:       rgba(196, 18, 46, 0.08);
  --warm-white:          #FDFAF5;
  --warm-white-alt:      #FAF6EE;
  --charcoal:            #1C1814;
  --charcoal-light:      #6B6460;
  --slate-deep:          #121926;
  --slate-surface:       #1E2934;
  --olive:               #5A7A4A;
  --olive-light:         rgba(90, 122, 74, 0.10);

  /* === Typography === */
  --font-heading: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
  --font-body:    'Source Serif 4', 'Georgia', 'Times New Roman', serif;
  --font-mono:    'SF Mono', 'Fira Code', 'Cousine', monospace;

  /* === Patterns (CSS uniquement) === */
  --azulejo-pattern: repeating-linear-gradient(
      45deg, transparent, transparent 5px,
      rgba(27, 107, 147, 0.04) 5px, rgba(27, 107, 147, 0.04) 10px
    ),
    repeating-linear-gradient(
      -45deg, transparent, transparent 5px,
      rgba(27, 107, 147, 0.04) 5px, rgba(27, 107, 147, 0.04) 10px
    );

  --wave-pattern: repeating-linear-gradient(
      0deg, transparent, transparent 18px,
      rgba(27, 107, 147, 0.06) 18px, rgba(27, 107, 147, 0.06) 20px
    );

  --sunset-gradient: linear-gradient(
      135deg,
      rgba(232, 163, 23, 0.20) 0%,
      rgba(196, 18, 46, 0.08) 35%,
      rgba(27, 107, 147, 0.10) 70%,
      rgba(18, 25, 38, 0.85) 100%
    );

  --sunset-glow: radial-gradient(
      ellipse at 80% 20%,
      rgba(232, 163, 23, 0.10) 0%,
      transparent 60%
    );

  /* === Spacing (inchangé) === */
  --space-xs:   0.25rem;
  --space-sm:   0.5rem;
  --space-md:   1rem;
  --space-lg:   2rem;
  --space-xl:   4rem;
  --space-2xl:  6rem;
  --max-width:         1100px;
  --max-width-narrow:  750px;

  /* === Easing === */
  --ease-out:          cubic-bezier(0.25, 1, 0.5, 1);
  --transition-fast:   150ms var(--ease-out);
  --transition-base:   300ms var(--ease-out);
  --transition-slow:   500ms var(--ease-out);
}
```

---

### 🗺️ 8. Plan de Migration — Étapes

1. **Remplacer les tokens CSS** dans `:root` (palette + typo)
2. **Remplacer l'import Google Fonts** dans `style.css`
3. **Refondre le hero** — remplacer le bloc terracotta par le sunset-gradient
4. **Remplacer les couleurs** dans tous les sélecteurs (find-replace massif) :
   - `var(--terracotta)` → `var(--sun-gold)` ou `var(--esp-red)` selon le contexte
   - `var(--accent)` → `var(--sun-gold)`
   - `var(--surface)` → `var(--warm-white)`
   - `var(--surface-alt)` → `var(--warm-white-alt)`
   - Liens : `var(--terracotta)` → `var(--med-blue)`
5. **Ajouter les patterns CSS** (classes `.pattern-azulejo`, `.pattern-wave`)
6. **Ajouter les emojis** dans le HTML (logo, titres de section, cartes)
7. **Supprimer les variables legacy** (`--sand`, `--cream`, `--med-blue` ancien, `--golden`)
8. **Vérifier les contrastes** d'accessibilité (WCAG AA)

---

### ✅ 9. Checklist de Validation Design

- [ ] Aucune trace de terracotta dans la palette
- [ ] Le or safran est visible dès le hero (pas caché)
- [ ] Le rouge est présent mais discret (≤ 5% de la surface)
- [ ] Le bleu méditerranéen est visible (liens, touches)
- [ ] Le fond est blanc cassé chaud (pas crème, pas beige)
- [ ] Les cartes alternent (pas monotones)
- [ ] Aucun eyebrow (pas d'uppercase tracké)
- [ ] Les emojis 🇪🇸 🍊 🌊 sont présents mais pas envahissants
- [ ] Les polices Playfair + Source Serif 4 sont chargées
- [ ] Au moins un pattern azulejo ou vague est visible
- [ ] Le hero utilise le sunset-gradient (pas de bloc rouge massif)
- [ ] Les contrastes WCAG AA sont respectés

---

### 📝 Notes pour le Développeur

- Les variables `--sand`, `--cream`, `--golden`, `--med-blue` (anciennes) doivent être **supprimées** pour éviter toute confusion. Les pages HTML qui les utilisent en inline style devront être mises à jour.
- Le fichier `style.css` actuel fait 1210 lignes. Prévoir ~50 lignes de nouveaux tokens + patterns au début, et du find-replace dans le reste.
- Les media queries responsive sont à conserver telles quelles — la refonte ne change pas la structure, seulement les couleurs.
- Les emojis remplacent les classes `.card-icon` — on peut garder le markup mais changer les emojis dans le HTML.

---

*Brief rédigé le 29 juillet 2026 — Agence UI/UX • Direction « Soleil Méditerranéen » ☀️🇪🇸*
