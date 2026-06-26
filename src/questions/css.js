const questions = [
  {
    id: 'css-1',
    category: 'Box Model',
    question: 'Explain the CSS box model.',
    answer:
      'Every HTML element is a rectangular box composed of four layers (inside out):\n\n1. Content — the actual text/image area, sized by width and height\n2. Padding — transparent space between the content and the border\n3. Border — a line surrounding the padding and content\n4. Margin — transparent space outside the border, separating the element from neighbors\n\nbox-sizing: content-box (default) — width/height apply to content only; padding and border add to the total size.\nbox-sizing: border-box — width/height include padding and border; content shrinks to fit.\n\nborder-box is generally preferred as it makes sizing more predictable. Set it globally with:\n*, *::before, *::after { box-sizing: border-box; }',
  },
  {
    id: 'css-2',
    category: 'Flexbox',
    question: 'What is Flexbox and what problems does it solve?',
    answer:
      'Flexbox (Flexible Box Layout) is a one-dimensional layout model for distributing space and aligning items along a single axis (row or column).\n\nProblems it solves that were difficult before:\n• Vertical centering — previously required brittle hacks\n• Equal-height columns without JavaScript\n• Distributing remaining space evenly between or around items\n• Reordering elements visually without changing HTML order\n• Responsive layouts that adapt to available space\n\nKey container properties: display:flex, flex-direction, justify-content (main axis), align-items (cross axis), flex-wrap, gap.\nKey item properties: flex (shorthand for flex-grow / flex-shrink / flex-basis), align-self, order.',
  },
  {
    id: 'css-3',
    category: 'CSS Cascade',
    question: 'What is the CSS Cascade and what are its four tiers in order of priority?',
    answer:
      'The CSS Cascade is the algorithm browsers use to resolve competing CSS declarations — when multiple rules target the same element and property, the cascade decides which one wins.\n\nThe four tiers, evaluated in order (highest wins):\n\n1. Importance — the type of rule:\n   • transition (highest)\n   • !important\n   • animation\n   • normal (lowest — where most rules live)\n\n2. Origin — where the rule was defined:\n   • Website stylesheet (highest — your code)\n   • User stylesheet\n   • Browser defaults (lowest)\n   Note: for !important rules the order is reversed — browser !important beats website !important.\n\n3. Specificity — how targeted the selector is:\n   • Inline style (style="…")\n   • ID selector (#id)\n   • Class / attribute / pseudo-class (.class, [attr], :hover)\n   • Type / pseudo-element (p, ::before)\n\n4. Position — declaration order:\n   • Later rules win when everything above is equal.',
  },
  {
    id: 'css-4',
    category: 'CSS Cascade',
    question: 'How does CSS specificity work? How do you compare two selectors?',
    answer:
      'Specificity is a score that determines which selector wins when two rules target the same element and property.\n\nScoring (count hits at each level):\n  [inline] – [id] – [class/attr/pseudo-class] – [type/pseudo-element]\n\nExamples:\n  p                     → 0-0-0-1\n  .card                 → 0-0-1-0\n  #header               → 0-1-0-0\n  <p style="…">         → 1-0-0-0\n  p.card:hover          → 0-0-2-1\n  #nav .link            → 0-1-1-0\n\nComparison works left to right — the first column that differs decides the winner. The universal selector (*) and combinators (+, >, ~) contribute 0 to specificity.\n\nNumber of hits matters at the highest reached level:\n  .paragraph:first-of-type  (0-0-2-0) beats  p.paragraph (0-0-1-1)\n  because the first rule has 2 class-level hits vs 1.',
  },
  {
    id: 'css-5',
    category: 'CSS Cascade',
    question: 'When should you use !important and what are the risks?',
    answer:
      '!important bumps a declaration to the second tier of the Cascade (above animations and normal rules), making it very hard to override.\n\nValid use cases:\n  • Overriding styles from a third-party library you cannot modify\n  • Utility classes that must always apply (e.g. .hidden { display: none !important; })\n\nRisks:\n  • It breaks the natural cascade — future overrides require their own !important, escalating into a specificity war\n  • It makes debugging harder: the winning rule is no longer predictable from selector structure alone\n  • The only thing that beats a website !important is a browser or user !important\n\nBefore reaching for !important, first check: can you increase specificity, restructure the HTML, or move the rule later in the stylesheet?',
  },
  {
    id: 'css-6',
    category: 'CSS Cascade',
    question: 'Two CSS rules target the same element and property. Walk me through how the browser decides which one wins.',
    answer:
      'The browser walks down the four cascade tiers, stopping as soon as one rule wins:\n\n1. Importance — does one rule use !important or apply to a transition/animation? That tier wins.\n\n2. Origin — does one rule come from a website stylesheet while the other is a browser default? Website wins.\n\n3. Specificity — compare scores [inline]-[id]-[class]-[type] left to right. The higher score wins. Ties at the top level are broken by counting hits at the next level down.\n\n4. Position — if all of the above are equal, whichever declaration appears later in the source order wins.\n\nOnly if every tier is identical do both declarations tie (which is effectively impossible for competing values).',
  },
  {
    id: 'css-7',
    category: 'Box Model',
    question: 'From inside to outside, what is the order of the box model layers? What does box-sizing do?',
    answer:
      'Inside to outside: Content → Padding → Border → Margin\n\nbox-sizing controls which layers are included in the declared width and height:\n\n• content-box (default) — width/height size the content only. Padding and border are added on top, so the rendered element is larger than what you declared.\n    e.g. width: 200px + padding: 20px + border: 2px → actual width: 244px\n\n• border-box (alternative) — width/height include content, padding, and border. The content area shrinks to fit, so the rendered element matches your declared size exactly.\n    e.g. width: 200px → actual width is always 200px regardless of padding/border\n\nborder-box is almost always preferred; set it globally:\n  *, *::before, *::after { box-sizing: border-box; }',
  },
  {
    id: 'css-8',
    category: 'Box Model',
    question: 'Margin or padding — which do you use and when?',
    answer:
      'Padding — space inside the element, between content and border:\n  • Use to add breathing room between an element\'s content and its edge\n  • The area is part of the element (clickable, inherits background color)\n  • Use padding to create more space between the contents of an element and its border\n\nMargin — space outside the element, between it and neighbors:\n  • Use to push elements apart from each other\n  • The area is transparent and not part of the element\n  • Use margin to create more space between two separate elements\n\nSpecial cases:\n  • To make two elements overlap → use negative margin; padding cannot create overlap\n  • Margin collapses vertically between block siblings (larger margin wins); padding never collapses\n  • To center a block element horizontally → margin: 0 auto (combined with a set width)',
  },
  {
    id: 'css-9',
    category: 'Box Model',
    question: 'How do you center an element horizontally with CSS?',
    answer:
      'The right approach depends on context:\n\n1. Block element with known width — classic approach:\n   .box { width: 300px; margin: 0 auto; }\n   margin: auto on left and right splits the remaining space equally.\n\n2. Flex child — most common modern approach:\n   .parent { display: flex; justify-content: center; }\n\n3. Grid child:\n   .parent { display: grid; place-items: center; }  /* also centers vertically */\n   or .parent { display: grid; justify-items: center; }\n\n4. Inline / inline-block element inside a block parent:\n   .parent { text-align: center; }\n\nFor full centering (horizontal + vertical) flexbox or grid are the go-to tools today.',
  },
  {
    id: 'css-10',
    category: 'Block and Inline',
    question: 'What is the difference between block and inline elements?',
    answer:
      'Block elements:\n  • Start on a new line and stack vertically\n  • Stretch to fill the full width of their parent by default\n  • Respect width, height, margin, and padding on all four sides\n  • Common examples: <div>, <p>, <h1>–<h6>, <section>, <ul>, <li>\n\nInline elements:\n  • Flow within the surrounding text — they do not start on a new line\n  • Only take up as much width as their content needs\n  • width and height have no effect; top/bottom margin and padding do not push surrounding lines away\n  • Common examples: <span>, <a>, <strong>, <em>, <img>\n\nYou can override the default with the display property:\n  display: block   → makes any element behave like a block\n  display: inline  → makes any element flow inline',
  },
  {
    id: 'css-11',
    category: 'Block and Inline',
    question: 'What is display: inline-block and how does it differ from inline and block?',
    answer:
      'inline-block is a hybrid: it sits in the flow like an inline element but respects box-model properties like a block element.\n\nComparison:\n\n  display: inline\n    • Flows with text, no line break\n    • width / height ignored\n    • top/bottom padding and margin are rendered but do not push neighboring lines\n\n  display: inline-block\n    • Flows with text, no line break\n    • width / height respected\n    • All padding and margin respected and push surroundings correctly\n    • Elements can sit side by side\n\n  display: block\n    • Forces a line break before and after\n    • width / height and all margin/padding respected\n    • Cannot sit beside another block element without a layout mechanism\n\nPractical note: inline-block is useful for simple side-by-side boxes, but for more complex layouts flexbox (display: flex) is usually cleaner and more powerful.',
  },
  {
    id: 'css-12',
    category: 'Block and Inline',
    question: 'What are div and span, and when would you use each?',
    answer:
      'Both are generic, semantics-free containers used when no meaningful HTML tag fits.\n\ndiv — block-level container:\n  • Stretches full width, starts on a new line\n  • Use to group and position larger sections of content: cards, sidebars, page sections\n  • Gives you a hook (class/id) for CSS layout and styling across multiple elements\n\nspan — inline container:\n  • Sits inside a line of text, takes only as much space as its content\n  • Use to style or target a small piece of text within a larger block: highlighting a word, attaching a tooltip, adding a color to part of a sentence\n\nKey rule: reach for a semantic tag first (<article>, <nav>, <button>, <p>, etc.). Only use div/span when no semantic tag makes sense — they add no meaning to the document.',
  },
  {
    id: 'css-13',
    category: 'Block and Inline',
    question: 'What is normal flow in CSS?',
    answer:
      'Normal flow (also called "flow layout") is the default way browsers lay out elements when no special positioning or layout mode is applied.\n\nHow it works:\n  • Block elements stack vertically, one per line, each filling the parent\'s width\n  • Inline elements flow horizontally within a line, wrapping to the next line when they run out of space\n  • Elements appear in the same order as in the HTML source\n\nNormal flow is the baseline. Everything else — Flexbox, Grid, absolute/fixed/sticky positioning, floats — takes elements out of or modifies normal flow.\n\nUnderstanding normal flow matters because it tells you what the browser will do by default before you apply any layout CSS.',
  },

  // ── CSS Units ──────────────────────────────────────────────────────────────────

  {
    id: 'css-14',
    category: 'CSS Units',
    question: 'Why would you use em or rem for font-size instead of px?',
    answer:
      'px is an absolute unit — it ignores the user\'s browser font-size preferences entirely. Many users, especially those with visual impairments, increase the base font size in their browser settings for readability. If you use px for font sizes, those preferences are silently overridden and you harm accessibility.\n\nrem (root em) is relative to the font size of the :root / html element — usually 16px by default. If the user bumps their browser font size up, rem values scale with it automatically, respecting their wish.\n\nem is relative to the font size of the element itself (or its parent when setting font-size). It compounds as you nest elements, which adds complexity — a child with font-size: 1.2em inside a parent with font-size: 1.2em ends up at 1.44× the root size. rem avoids that by always anchoring to the root.\n\nRule of thumb: use rem for font sizes across your site, px for things like borders or shadows where scaling doesn\'t make sense.',
  },
  {
    id: 'css-15',
    category: 'CSS Units',
    question: 'What is the difference between em and rem? When should you use each?',
    answer:
      'em — relative to the font size of the current element:\n  If an element has font-size: 16px, then 1em = 16px, 2em = 32px.\n  When used to set font-size itself, em is relative to the parent\'s font size.\n  Problem: em compounds — nested elements multiply their parent\'s em, making sizes hard to predict.\n\nrem (root em) — always relative to the :root / html font size:\n  No compounding — 1rem is always the same value regardless of where in the DOM you are.\n  Consistent and predictable across the whole document.\n\nWhen to use which:\n  rem — font sizes and anything you want to scale consistently with the root: most spacing, most typography\n  em — intentional scaling relative to a component\'s own font size, e.g. padding on a button that should grow if the button\'s text is made bigger: padding: 0.5em 1em scales relative to the button\'s font-size\n\nWhen in doubt, default to rem.',
  },
  {
    id: 'css-16',
    category: 'CSS Units',
    question: 'What are some instances where you would use vh/vw? When would you stick with px?',
    answer:
      'Use vh (viewport height) and vw (viewport width) when you want something sized relative to the browser window itself:\n  • Full-height hero sections: height: 100vh\n  • Full-screen overlays and modals: width: 100vw; height: 100vh\n  • Fluid typography that scales with window width (usually inside clamp()): font-size: clamp(1rem, 2.5vw, 2rem)\n  • Side drawers or panels that should fill the screen height\n\nUse px when you want a fixed, unchanging size regardless of context:\n  • Borders: border: 1px solid — should always be a hairline\n  • Icons and avatars with a defined fixed size\n  • box-shadow and border-radius fine-tuning\n  • Any detail where relative scaling would visually break the design\n\nThe underlying question is always: should this size change as the viewport or font changes? If yes, reach for a relative unit. If it should stay constant, use px.',
  },

  // ── Text Styles ────────────────────────────────────────────────────────────────

  {
    id: 'css-17',
    category: 'Text Styles',
    question: 'What are the two ways to add fonts not installed on a user\'s computer? What is the system font stack and why would you use it?',
    answer:
      'Two ways to use external fonts:\n\n1. Online font library (e.g. Google Fonts, Font Bunny)\n   Add a <link> tag in HTML or an @import in CSS that loads the font from their server:\n   <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">\n   Easy to set up, but adds a network request, depends on a third party staying up, and some services (Google Fonts) raise GDPR privacy concerns in certain regions.\n\n2. Self-hosted @font-face\n   Download the font file and serve it from your own server:\n   @font-face {\n     font-family: my-font;\n     src: url(\'../fonts/my-font.woff2\');\n   }\n   More reliable — no third-party dependency — but you manage the files yourself.\n\nAlways include a fallback font-family in case the custom font fails to load.\n\nThe system font stack is a long list of font-family values that tries each entry until it finds one installed on the user\'s OS:\n  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\nThis gives you the native UI font of whatever platform the user is on — Segoe UI on Windows, San Francisco on macOS. Zero network requests, instant load, and it looks natural on every device. Use it when you want a clean, neutral look without the overhead of an imported font.',
  },
  {
    id: 'css-18',
    category: 'Text Styles',
    question: 'Which CSS properties control letter spacing, line height, text case, and text overflow with an ellipsis?',
    answer:
      'letter-spacing — adjusts space between individual characters in a word. Useful for headings or branded text where the custom font feels too tight or too airy. Use sparingly — too much makes text hard to read.\n\nline-height — adjusts vertical space between lines of wrapped text. A value of 1.5 to 1.6 on body text significantly improves readability. It\'s unitless (1.5 = 1.5× the element\'s font-size), which is preferred over px so it scales with font size.\n\ntext-transform — changes the case of text without touching the HTML:\n  uppercase — ALL CAPS\n  lowercase — all lowercase\n  capitalize — First Letter Of Each Word\n  Use this to enforce heading style via CSS rather than writing the HTML in caps.\n\nEllipsis for overflowing text — requires three properties working together:\n  .truncate {\n    white-space: nowrap;     /* prevent wrapping */\n    overflow: hidden;        /* hide overflowing content */\n    text-overflow: ellipsis; /* show ... at the cutoff */\n  }',
  },
  {
    id: 'css-19',
    category: 'Text Styles',
    question: 'When should you use font-style: italic in CSS versus the <em> HTML element?',
    answer:
      'The rule of thumb: if italics are purely for visual / design reasons, use CSS. If italics should carry semantic meaning, use the HTML element.\n\nfont-style: italic — purely stylistic. Use it when you want things to look italic but the emphasis has no meaning:\n  h1 { font-style: italic; } — all headings are italic by design\n\n<em> — semantic emphasis. Browsers render it italic by default, but more importantly screen readers may stress the word when reading aloud, and search engines treat it as significant:\n  <p>I <em>never</em> said he stole your money.</p>\n  Putting <em> on a different word in that sentence changes the entire meaning.\n\nThe same principle applies across text styling:\n  CSS font-weight: bold  → visual style only\n  <strong>             → semantic importance\n  CSS text-decoration   → visual style\n  <mark>               → semantic highlight',
  },

  // ── More CSS Properties ────────────────────────────────────────────────────────

  {
    id: 'css-20',
    category: 'CSS Properties',
    question: 'Which property makes an element transparent? Which adds a shadow behind an element?',
    answer:
      'opacity — accepts a value from 0 (fully transparent / invisible) to 1 (fully opaque). It affects the entire element including its children and text — everything fades together.\n  .ghost { opacity: 0.4; }\n  Great for hover effects: button:hover { opacity: 0.8; }\n\nbox-shadow — adds one or more shadows around an element\'s box:\n  box-shadow: offset-x  offset-y  blur-radius  spread-radius  color;\n  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.15);\n\n  offset-x / offset-y — how far the shadow is shifted horizontally and vertically\n  blur-radius — higher value = softer / more spread out\n  spread-radius — positive grows the shadow, negative shrinks it\n  color — usually a semi-transparent rgba value\n\n  Multiple shadows: comma-separate them.\n  Inset shadows (inside the element): add inset as the first value.\n\nBest practice: prefer subtle, light shadows over strong dark ones — they look more professional and integrate better with designs.',
  },
  {
    id: 'css-21',
    category: 'CSS Properties',
    question: 'Which property creates rounded corners? How do you use it to make a circular element?',
    answer:
      'border-radius rounds the corners of an element\'s border box.\n\n  border-radius: 8px;      /* all four corners */\n  border-radius: 4px 8px;  /* top-left+bottom-right, top-right+bottom-left */\n  border-radius: 4px 8px 12px 16px; /* top-left, top-right, bottom-right, bottom-left */\n\nTo make a perfect circle — set border-radius: 50% on an element that has equal width and height:\n  .avatar {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n  }\n  50% of the width/height = a radius that rounds each corner into a full circle.\n\nFor a pill / capsule shape on a non-square element, use a very large value:\n  border-radius: 9999px;\n  This is equivalent to "as round as possible" without needing to calculate the exact height.',
  },
  {
    id: 'css-22',
    category: 'CSS Properties',
    question: 'Which property adds scrollbars to an element? How do you tile a background image?',
    answer:
      'overflow controls what happens when an element\'s content is larger than its box:\n  overflow: visible (default) — content spills outside the box\n  overflow: hidden  — content is clipped; no scrollbars\n  overflow: scroll  — scrollbars always shown (even if not needed)\n  overflow: auto    — scrollbars appear only when content overflows (most common choice)\n\n  You can also control axes independently: overflow-x and overflow-y.\n  Common use case: a card with a fixed height and scrollable content inside.\n\nBackground tiling — the background-repeat property:\n  background-repeat: repeat;    /* default — tiles in both x and y directions */\n  background-repeat: repeat-x;  /* tiles horizontally only */\n  background-repeat: repeat-y;  /* tiles vertically only */\n  background-repeat: no-repeat; /* shows the image once, no tiling */\n  background-repeat: space;     /* tiles without clipping, adds space between */\n\n  Combined with background-size, background-position, and background-attachment, the background shorthand property gives you a lot of control over how background images display.',
  },

  // ── Advanced Selectors ─────────────────────────────────────────────────────────

  {
    id: 'css-23',
    category: 'Advanced Selectors',
    question: 'What is the difference between the child combinator (>) and the descendant combinator (space)?',
    answer:
      'Descendant combinator (space) — main div:\n  Selects ALL div elements inside main, no matter how deeply nested — children, grandchildren, great-grandchildren, etc.\n  main div { color: red; }  /* targets every div at any depth inside main */\n\nChild combinator (>) — main > div:\n  Selects only DIRECT children of main — one level deep only. Grandchildren are not selected.\n  main > div { color: red; }  /* only the immediate children of main */\n\nPractical example:\n  <main>\n    <div class="child">              ← selected by main > div\n      <div class="grandchild">      ← NOT selected by main > div\n      </div>\n    </div>\n  </main>\n\nThe child combinator is more precise and is useful when you want styles to apply at exactly one level without bleeding into nested components. Neither combinator adds extra specificity — the score is just the sum of the selectors involved.',
  },
  {
    id: 'css-24',
    category: 'Advanced Selectors',
    question: 'What is the difference between pseudo-classes and pseudo-elements? How does their syntax differ? Do they exist in the HTML?',
    answer:
      'Pseudo-classes (single colon :)\n  Target elements that already exist in the HTML based on their state, position, or relationship:\n  :hover, :focus, :active, :first-child, :nth-child()\n  Specificity: same as a regular class — (0,0,1,0)\n  They DO exist in the HTML — you\'re just targeting an element in a particular state or position.\n\nPseudo-elements (double colon ::)\n  Target parts of elements that don\'t exist as separate HTML nodes — or generate new content entirely:\n  ::before, ::after, ::first-letter, ::first-line, ::selection, ::marker\n  Specificity: same as a type selector — (0,0,0,1)\n  They do NOT exist in the HTML — ::before and ::after insert generated content from CSS that has no corresponding markup.\n\nSyntax rule:\n  : for pseudo-classes — :hover, :focus, :nth-child()\n  :: for pseudo-elements — ::before, ::after, ::selection\n\n  Historical note: older browsers only supported : for pseudo-elements (:before, :after). Both still work, but :: is the modern standard and makes the distinction visually clear.',
  },
  {
    id: 'css-25',
    category: 'Advanced Selectors',
    question: 'Name some useful pseudo-classes — both dynamic/user-action and structural.',
    answer:
      'Dynamic / user-action pseudo-classes (based on how the user interacts):\n  :hover      — element under the mouse cursor\n  :focus      — element selected by keyboard or cursor (inputs, buttons, links)\n  :active     — element currently being clicked. Great for tactile button feedback\n  :link       — unvisited <a> links\n  :visited    — links the user has already clicked\n\nStructural pseudo-classes (based on position in the DOM):\n  :root             — the top-level element (:root has higher specificity than html). Used for global CSS variables\n  :first-child      — element that is the first child of its parent\n  :last-child       — last child of its parent\n  :nth-child(n)     — flexible: nth-child(2), nth-child(even), nth-child(odd), nth-child(3n)\n  :only-child       — element with no siblings\n  :empty            — element with no children at all\n\nForms:\n  :checked          — checked checkbox or radio input\n  :disabled         — disabled form element\n  :placeholder-shown — input that is currently showing its placeholder\n\nAll pseudo-classes share the same specificity as a regular class: (0,0,1,0).',
  },
  {
    id: 'css-26',
    category: 'Advanced Selectors',
    question: 'What are pseudo-elements? Name some useful ones.',
    answer:
      'Pseudo-elements target parts of an element or inject content that has no corresponding HTML node. They use the double-colon (::) syntax and carry type-level specificity (0,0,0,1).\n\nUseful pseudo-elements:\n\n::before and ::after — inject generated content directly before or after an element\'s content using the content: CSS property. Used for decorative elements, icons, labels, or overlays entirely in CSS:\n  .card::before { content: "★"; color: gold; }\n\n::first-letter — styles just the first character of a block of text. Classic drop-cap effect:\n  p::first-letter { font-size: 3em; float: left; }\n\n::first-line — styles only the first rendered line of text (adapts if the window resizes)\n\n::selection — styles text the user has highlighted with their mouse:\n  ::selection { background: yellow; color: black; }\n\n::marker — styles the bullet point or number of a <li> element:\n  li::marker { color: red; font-size: 1.2em; }\n\n::before and ::after are the most commonly used and appear constantly in CSS-heavy UI work.',
  },
  {
    id: 'css-27',
    category: 'Advanced Selectors',
    question: 'How do attribute selectors work? What are the three pattern-matching variants?',
    answer:
      'Attribute selectors target elements based on the presence or value of an HTML attribute. They use square bracket syntax and carry the same specificity as a class: (0,0,1,0).\n\nBasic forms:\n  [attribute]          — element has this attribute (any value)\n  [attribute="value"]  — exact match\n  selector[attribute]  — combined with element/class selector\n\n  img[src]                 /* any img with a src attribute */\n  input[type="text"]       /* inputs of type text */\n  a[target="_blank"]       /* links that open in new tab */\n\nPattern-matching variants (similar to regex):\n  [attr^="value"]  — starts with value  (^ = beginning)\n    [href^="https"]  — links starting with https\n    [class^="btn"]   — classes beginning with btn\n\n  [attr$="value"]  — ends with value  ($ = end)\n    [src$=".jpg"]    — images ending in .jpg\n    [href$=".pdf"]   — links to PDF files\n\n  [attr*="value"]  — contains value anywhere  (* = wildcard)\n    [class*="icon"]  — any class that includes "icon"\n    [href*="odin"]   — any href containing "odin"\n\nUseful when you can\'t add classes to the HTML (third-party content, generated markup) or when you want to target elements by their inherent attributes.',
  },

  // ── Positioning ────────────────────────────────────────────────────────────────

  {
    id: 'css-28',
    category: 'Positioning',
    question: 'What is the difference between static and relative positioning?',
    answer:
      'position: static — the default for every element. The element sits in the normal document flow exactly where the HTML places it. The top, right, bottom, and left properties have absolutely no effect on a static element.\n\nposition: relative — the element stays in the normal document flow and its original space is still reserved. However, you can now use top, right, bottom, and left to nudge it visually from that original position, without disturbing any surrounding elements:\n  .nudged {\n    position: relative;\n    top: 10px;   /* moves 10px DOWN from its normal position */\n    left: 20px;  /* moves 20px RIGHT */\n  }\n\nThe most important secondary use of position: relative: it creates a positioning context for absolute children. Any position: absolute element inside it will be positioned relative to this element rather than the page.',
  },
  {
    id: 'css-29',
    category: 'Positioning',
    question: 'What is absolute positioning useful for, and how does it work?',
    answer:
      'position: absolute removes the element from normal document flow — surrounding elements behave as if it doesn\'t exist and close the gap it left. The element is then placed using top, right, bottom, and left relative to its nearest positioned ancestor (any ancestor with position set to something other than static).\n\nIf no positioned ancestor exists, it falls back to positioning relative to the initial containing block (the viewport).\n\nThe standard pattern: give the parent position: relative, then the child position: absolute:\n  .card { position: relative; }\n  .badge {\n    position: absolute;\n    top: 8px;\n    right: 8px;  /* sits in the top-right corner of .card */\n  }\n\nGood use cases:\n  • Overlay badges or icons on top of images/cards\n  • Modals and tooltips\n  • Image captions layered over the image\n  • Dropdown menus\n\nImportant: absolute positioning is for specific UI elements, not entire page layouts — use flexbox or grid for that.',
  },
  {
    id: 'css-30',
    category: 'Positioning',
    question: 'What is the difference between fixed and sticky positioning?',
    answer:
      'position: fixed\n  Removes the element from document flow and positions it relative to the VIEWPORT — not any parent element. It stays locked to that position as the user scrolls — completely unaffected by scrolling.\n  Common uses: persistent navigation bars, floating action buttons, cookie banners, chat widgets.\n  .navbar { position: fixed; top: 0; left: 0; width: 100%; }\n\nposition: sticky\n  The element stays in normal document flow (space is reserved) and behaves like position: relative until the user scrolls to a threshold you define (usually top: 0). At that point it "sticks" like a fixed element. Crucially, it only sticks within the bounds of its parent — once the parent scrolls out of view, the sticky element goes with it.\n  Common uses: section headings that stay visible while you scroll through that section, table headers.\n  .section-title { position: sticky; top: 0; }\n\nKey difference: fixed is always viewport-relative and permanently stays put no matter what. Sticky is scroll-relative and sticks only within its parent container — it naturally unsticks when the parent leaves the viewport.',
  },

  // ── CSS Functions ──────────────────────────────────────────────────────────────

  {
    id: 'css-31',
    category: 'CSS Functions',
    question: 'What does calc() do and what makes it powerful?',
    answer:
      'calc() lets you perform mathematical calculations directly in CSS values, mixing different units in a single expression:\n  width: calc(100% - 60px);\n  height: calc(100vh - 3rem);\n  margin: calc(2rem + 10px);\n\nTwo things make it uniquely powerful:\n\n1. Mixing units — you can combine %, px, rem, vh, vw in one calculation. This would be impossible without calc() since CSS has no other way to express "the full width minus a fixed sidebar."\n\n2. Works with CSS variables — making your calculations dynamic:\n  :root {\n    --header: 3rem;\n    --footer: 40px;\n  }\n  main {\n    min-height: calc(100vh - var(--header) - var(--footer));\n  }\n  Update one variable and every calc() that uses it updates automatically.\n\nYou can also nest calc() inside calc(), though modern CSS supports plain arithmetic operators directly so the nesting is rarely needed:\n  width: calc(50% - (2rem + 10px));',
  },
  {
    id: 'css-32',
    category: 'CSS Functions',
    question: 'What do min(), max(), and clamp() do? How do they help with responsive design?',
    answer:
      'min(a, b) — picks the smallest of the values. Useful as a responsive maximum:\n  width: min(600px, 100%);\n  "Be 600px wide, but if the container is narrower than 600px, take up 100% instead."\n  Gives you a max-width behaviour in a single property.\n\nmax(a, b) — picks the largest of the values. Useful as a responsive minimum:\n  font-size: max(1rem, 2vw);\n  "Be 2% of the viewport width, but never smaller than 1rem."\n  Ensures a minimum size without a media query.\n\nclamp(minimum, preferred, maximum) — three values that define a floor, an ideal, and a ceiling:\n  font-size: clamp(1rem, 2.5vw, 2rem);\n  "The font grows with the viewport at 2.5vw, but it will never be smaller than 1rem or bigger than 2rem."\n\nTogether these three functions reduce the need for media query breakpoints by letting values adapt fluidly to the viewport. clamp() in particular is widely used for fluid typography — the font scales smoothly between a minimum and maximum size as the viewport grows, with no sudden jumps.',
  },

  // ── Custom Properties ──────────────────────────────────────────────────────────

  {
    id: 'css-33',
    category: 'Custom Properties',
    question: 'How do you declare a CSS custom property (variable) and how do you use it?',
    answer:
      'Custom properties are declared with a double hyphen (--) prefix and accessed with the var() function:\n\nDeclaration:\n  .card {\n    --card-bg: #ffffff;\n    --card-padding: 1.5rem;\n  }\n\nUsage:\n  .card {\n    background: var(--card-bg);\n    padding: var(--card-padding);\n  }\n\nvar() also accepts an optional fallback value as the second argument — used if the custom property doesn\'t exist or is invalid:\n  color: var(--brand-color, blue);  /* blue if --brand-color is not set */\n  color: var(--brand-color, var(--fallback-color, black));  /* chained fallbacks */\n\nNaming rules:\n  • Must start with -- (two hyphens)\n  • Case-sensitive: --MyColor and --mycolor are different variables\n  • Use kebab-case (hyphens between words): --primary-color, not --primaryColor\n  • No spaces in the name\n\nCustom properties can store any valid CSS value: colors, lengths, shadows, font stacks, even entire shorthand values.',
  },
  {
    id: 'css-34',
    category: 'Custom Properties',
    question: 'What is the scope of a CSS custom property? Where do you declare one to make it available globally?',
    answer:
      'Custom properties follow the same scope rules as CSS inheritance: a property is accessible to the element it is declared on and all of its descendants.\n\n  .card { --bg: white; }\n  .card p { background: var(--bg); }  /* works — .card p is a descendant */\n  .sidebar { background: var(--bg); } /* undefined — .sidebar is not inside .card */\n\nFor truly global variables — accessible to every selector in the stylesheet — declare them on :root:\n  :root {\n    --primary-color: #3498db;\n    --font-body: system-ui, sans-serif;\n    --spacing-md: 1rem;\n  }\n  :root is essentially the html element but with higher specificity. Since every other element in the document is a descendant of :root, variables declared there are available everywhere.\n\nWhy this matters:\n  When you need to change a value that appears in dozens of places — like a brand color — you update one custom property on :root instead of hunting down every occurrence. This is one of the biggest practical benefits of custom properties.',
  },
  // ── Responsive Design ─────────────────────────────────────────────────────────

  {
    id: 'css-36',
    category: 'Responsive Design',
    question: 'What is natural responsiveness? When should you avoid fixed widths and heights?',
    answer:
      'Natural responsiveness is the built-in tendency of HTML and CSS to adapt to available space without explicit responsive code. Block elements fill their container, text wraps when the viewport shrinks, images scale if you let them. The goal is to work with this default behavior rather than breaking it with hardcoded values.\n\nAvoid fixed widths when:\n• An element should grow or shrink with its container (paragraphs, cards, columns)\n• The content is text — text must be able to reflow at any width\n• Prefer max-width instead: an element can be smaller but never wider than max-width\n  .content { max-width: 800px; } — caps the width but allows it to shrink\n\nAvoid fixed heights almost always:\n• Height is the most common source of overflow bugs and broken layouts\n• Text grows, content changes, screen sizes vary — fixed height fights all of these\n• Let the content define the height naturally; only constrain it if you have a deliberate reason\n\nWhen fixed values ARE appropriate:\n• Icons, logos, avatars with a defined design size\n• Borders, shadows, border-radius — decorative details that should never scale\n• Images in a card where you want consistent presentation — pair with object-fit: cover so the image fills without distorting\n• UI controls (buttons, inputs) where consistent tap targets matter\n• Any element that deliberately clips content (fixed thumbnail area + overflow: hidden)',
  },
  {
    id: 'css-37',
    category: 'Responsive Design',
    question: 'What is the difference between object-fit and background-size? How do you size an img without distorting it?',
    answer:
      'Both control how an image fills a container, but they apply to different image types:\n\nobject-fit — for inline replaced elements: <img>, <video>:\n• The image is in the HTML, has an alt attribute, is accessible to screen readers\n• Set width and height on the element, then use object-fit to control how it fills that box\n• Use for content images in cards, galleries, avatars\n\nbackground-size — for CSS background-image:\n• The image is decorative — no alt text, invisible to assistive technology\n• Use for design backgrounds, hero sections, patterns, textures\n\nShared values:\n• cover — fills the box completely, maintains aspect ratio, crops if needed (most common)\n• contain — fits entirely within the box, may leave empty space, maintains aspect ratio\n• fill (default for object-fit) / 100% 100% — stretches to fill, DISTORTS if aspect ratio differs\n\nHow to define width and height on an img without distorting it:\nimg {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;        /* fills box, crops excess */\n  object-position: center;  /* controls which part is visible when cropped */\n}\n\nobject-position works like background-position — you can use keywords (top, left, center) or percentages to control the crop anchor point.\n\nWith object-fit: contain, the image never crops but may leave letterbox gaps. Good for logos and images that must be fully visible.',
  },
  {
    id: 'css-38',
    category: 'Responsive Design',
    question: 'Why would you provide different images at different screen resolutions? When do you use srcset vs the picture element?',
    answer:
      'Why serve different images at different sizes:\n• High-DPI (Retina) screens need 2× or 3× the pixel count to render sharply — a 400px wide image needs an 800px source on a 2× display\n• Loading a 2000px image on a 400px phone wastes bandwidth and slows the page — serve a smaller file instead\n• Different viewport sizes may benefit from a different crop or composition entirely\n\nsrcset on img — for resolution switching (same image, different sizes):\n<img\n  src="photo-800.jpg"\n  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w"\n  sizes="(max-width: 600px) 100vw, 50vw"\n  alt="A photo"\n/>\nThe browser picks the most appropriate source based on screen size and pixel density. You provide options; the browser decides. Best for performance optimization of the same image.\n\npicture — for art direction (completely different images per context):\n<picture>\n  <source media="(max-width: 600px)" srcset="portrait.jpg" />\n  <source media="(max-width: 1200px)" srcset="square.jpg" />\n  <img src="landscape.jpg" alt="A photo" />\n</picture>\nUse picture when you need to control WHICH image displays — a different crop, orientation, or composition for different viewports. You are making the decision, not the browser. The <img> inside is required as the fallback for browsers that do not support picture.\n\nRule of thumb:\n• srcset — same image, pick the best-resolution version\n• picture — different images for different contexts (art direction)',
  },
  {
    id: 'css-39',
    category: 'Responsive Design',
    question: 'How do you write a media query? What are common breakpoints and how should you approach them?',
    answer:
      'Basic syntax:\n@media (max-width: 600px) {\n  body {\n    margin: 8px; /* applied when viewport is 600px or narrower */\n  }\n}\n\nYou can combine conditions:\n@media (min-width: 600px) and (max-width: 1200px) {\n  /* tablet range */\n}\n\nPrint styles use a media type instead of a dimension:\n@media print {\n  nav, button { display: none; }\n  body { color: black; background: white; }\n}\n\nCommon breakpoints (guidelines, not rules):\n• Mobile: below ~500px\n• Tablet: 500px – 1000px\n• Desktop: above ~1000px\n• Wide: above ~1400px\n\nHow to approach breakpoints:\n• Do not design for specific devices — design for where your layout breaks. Look at your design in a resizing browser and add a breakpoint only when something actually looks wrong.\n• Limit media queries — rely on natural responsiveness first (flexible units, Flexbox/Grid). Many layouts need only one or two breakpoints.\n• Each project is different — a simple landing page might need one breakpoint around 600px; a complex dashboard might need three.\n\nZooming tip: zooming in the browser changes the effective resolution. Zooming in makes the page behave as if the screen is smaller, which is useful for testing narrower breakpoints on a wide screen.',
  },
  {
    id: 'css-40',
    category: 'Responsive Design',
    question: 'What is the difference between max-width and min-width in a media query?',
    answer:
      'max-width — styles apply on screens UP TO AND INCLUDING that width (narrower screens):\n@media (max-width: 600px) {\n  /* fires when viewport is 600px or NARROWER */\n}\n\nmin-width — styles apply on screens FROM that width AND ABOVE (wider screens):\n@media (min-width: 600px) {\n  /* fires when viewport is 600px or WIDER */\n}\n\nMobile-first approach (recommended) — write base styles for small screens, then layer on larger-screen changes with min-width:\n/* base — mobile styles, no query */\n.grid { grid-template-columns: 1fr; }\n\n/* tablet and up */\n@media (min-width: 600px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}\n\n/* desktop and up */\n@media (min-width: 1200px) {\n  .grid { grid-template-columns: 1fr 1fr 1fr; }\n}\n\nDesktop-first approach — write base styles for large screens, then override with max-width for smaller screens. More common in older codebases.\n\nWhy mobile-first is preferred:\n• Starts with the simplest layout (one column) and progressively enhances\n• Forces you to prioritize content since mobile space is limited\n• Aligns with how browsers handle specificity — later rules override earlier ones, so you naturally layer complexity\n\nBoth max-height and min-height also work for querying on the vertical axis.',
  },
  {
    id: 'css-41',
    category: 'Responsive Design',
    question: 'What is a container query and how does it differ from a media query?',
    answer:
      'Media query — conditions based on the VIEWPORT (the browser window). The whole page reacts to one global signal:\n@media (max-width: 600px) {\n  .card { flex-direction: column; }\n}\n\nContainer query — conditions based on the size of a SPECIFIC PARENT ELEMENT. A component adapts to the space it has been given, regardless of the viewport:\n\n/* 1. Mark an element as a container */\n.card-wrapper {\n  container-type: inline-size;\n}\n\n/* 2. Style children based on the container\'s width */\n@container (min-width: 400px) {\n  .card {\n    display: flex;\n    flex-direction: row;\n  }\n}\n\nWhy container queries matter:\nImagine a card component placed in a wide main column on one page and a narrow sidebar on another. With media queries, the card responds to the viewport — but the viewport might be the same size in both cases, so you cannot differentiate. With container queries, the card responds to how much space its direct parent gives it, making truly reusable, context-aware components possible.\n\nWhen to use which:\n• Media queries — page-level layout changes: nav collapses to a hamburger, single-column vs multi-column page structure, font size adjustments for small screens\n• Container queries — component-level adaptation: a card, widget, or sidebar that should reflow based on its own available width, not the global viewport',
  },

  {
    id: 'css-35',
    category: 'Custom Properties',
    question: 'How do you implement dark and light themes using CSS custom properties?',
    answer:
      'The pattern is to define all color and style values as custom properties, then redefine those properties under a different selector or media query for each theme. Your component CSS never changes — only the variable values swap.\n\nApproach 1 — class-based (user can toggle with JavaScript):\n  :root {\n    --bg: white;\n    --text: #222;\n    --card-bg: #f5f5f5;\n  }\n  [data-theme="dark"] {\n    --bg: #121212;\n    --text: #eeeeee;\n    --card-bg: #1e1e1e;\n  }\n  Then toggle data-theme="dark" on the <html> element with JS.\n\nApproach 2 — prefers-color-scheme media query (automatic, matches OS preference):\n  :root {\n    --bg: white;    /* light theme as default */\n    --text: #222;\n  }\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --bg: #121212;\n      --text: #eeeeee;\n    }\n  }\n  No JavaScript needed — the browser applies the correct variables based on the user\'s OS/browser dark mode setting.\n\nBest of both: combine both approaches — auto-detect with the media query, but allow the user to override with a class toggle.',
  },
];

export default questions;
