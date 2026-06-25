const questions = [
  // ── COMPONENTS ─────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'Components',
    question: 'What is a React component?',
    answer:
      'A React component is a function that defines an independent, reusable building block of the UI. Each component has its own data/state, logic, and appearance. Components are combined like lego pieces to build complex UIs, and they can be nested inside each other and reused throughout the application.',
  },
  {
    id: 2,
    category: 'Components',
    question: 'What are the rules for defining a React component?',
    answer:
      '1. The function name must start with a capital letter.\n2. It must return some JSX markup.\n3. It must return a single root element.\n4. The component must be declared at the top level of the code (not inside another function).',
  },
  {
    id: 3,
    category: 'Components',
    question: 'What is a component tree and why is it useful?',
    answer:
      'A component tree is a visual representation of how components are nested and related. It helps break down a UI into components, understand parent–child relationships, and plan how data flows through the application (from parent down to children via props).',
  },

  // ── JSX ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    category: 'JSX',
    question: 'What is JSX?',
    answer:
      'JSX is a declarative syntax extension for JavaScript that lets you write HTML-like code inside components. Each component must return a block of JSX. It allows embedding JavaScript expressions with {}, combining HTML structure, CSS, and React components in one place. Babel converts JSX into React.createElement() calls behind the scenes.',
  },
  {
    id: 5,
    category: 'JSX',
    question: 'What are the key rules of JSX?',
    answer:
      '1. Works like HTML but you can embed JS expressions inside {}.\n2. Inside {}, you can use variables, ternaries, array/object creation — but NOT statements like if/else, for, or switch.\n3. Each JSX expression must have a single root element — use <> </> or <React.Fragment> to group multiple elements.\n4. JSX always produces a JavaScript expression, so you can nest JSX inside {}.\n5. Use className instead of class, and camelCase for attributes (e.g. onClick).',
  },
  {
    id: 6,
    category: 'JSX',
    question: 'What is the difference between declarative and imperative programming? Which one is React?',
    answer:
      'Imperative describes step-by-step HOW to do something — requires manually selecting, manipulating, and traversing DOM elements, mutating the DOM step by step.\n\nDeclarative describes WHAT we want to see without specifying how — React uses JSX to describe how the UI should look based on current data (props/state), with no manual DOM manipulation. React is declarative. The UI is a "reflection of the current data".',
  },
  {
    id: 7,
    category: 'JSX',
    question: 'What does Babel do in a React project?',
    answer:
      'Babel is a JavaScript compiler that transforms JSX syntax into regular JavaScript (React.createElement() calls) that browsers can understand. It is automatically included when a project is created with create-react-app.',
  },

  // ── PROPS ────────────────────────────────────────────────────────────────────
  {
    id: 8,
    category: 'Props',
    question: 'What are props in React?',
    answer:
      'Props (short for properties) are the way parent components pass data to child components. They are defined as attributes on the component in the parent, and received as a function parameter (the props object) in the child. Anything accepted by JavaScript can be passed as a prop: values, arrays, objects, functions, and even other components.',
  },
  {
    id: 9,
    category: 'Props',
    question: 'Are props mutable or immutable? Why?',
    answer:
      'Props are immutable — they are read-only. A component cannot modify its own props. This prevents unintended mutation of the parent\'s data (in JavaScript, objects are passed by reference, so mutating a prop would mutate the original in the parent too). Components must behave like "pure functions" with respect to their props and state, making the app predictable and bug-free.',
  },
  {
    id: 10,
    category: 'Props',
    question: 'What is one-way data flow in React?',
    answer:
      'One-way data flow means data only flows from parent components down to child components via props, never the other way around. Benefits:\n1. Makes the app predictable and easier to understand.\n2. Easier to debug — you always know exactly where data comes from.\n3. Better performance compared to two-way data binding (e.g., Angular).',
  },
  {
    id: 11,
    category: 'Props',
    question: 'What is prop destructuring? Why is it useful?',
    answer:
      'Prop destructuring extracts prop values directly in the function signature:\nfunction Component({ name, age }) instead of function Component(props) and then props.name.\n\nBenefits: cleaner code, immediately communicates which props a component expects, and reduces repetition.',
  },
  {
    id: 12,
    category: 'Props',
    question: 'What are children props?',
    answer:
      'The children prop is a built-in special prop that holds whatever JSX is placed between a component\'s opening and closing tags.\nExample: <Button>Click me</Button> — "Click me" is the children prop of Button.\n\nChildren props make it easy to create generic, configurable wrapper components (modals, cards, buttons) without pre-defining their content.',
  },

  // ── STATE ────────────────────────────────────────────────────────────────────
  {
    id: 13,
    category: 'State',
    question: 'What is state in React?',
    answer:
      'State is internal data that a component owns and can update over time — it\'s the "component\'s memory." Each variable that holds a piece of this data is called a "piece of state" or "state variable." Updating any piece of state causes React to re-render the component (its view). State lets you update the UI and persist values between renders.',
  },
  {
    id: 14,
    category: 'State',
    question: 'How do you create and use a piece of state in React?',
    answer:
      'Use the useState hook:\nconst [count, setCount] = useState(0);\n\nIt returns an array: the current state value and a setter function. Three steps:\n1. Create the state with useState.\n2. Use the state value inside the component (e.g., in JSX).\n3. Update it inside an event handler using the setter function (e.g., setCount(count + 1)).',
  },
  {
    id: 15,
    category: 'State',
    question: 'What is a React hook? What are the rules of hooks?',
    answer:
      'Hooks are special React functions whose names start with "use" (e.g., useState, useEffect). They let you "hook into" React features from function components.\n\nRules:\n1. Only call hooks at the top level of a component — never inside loops, conditions, or nested functions.\n2. Only call hooks inside React function components (or custom hooks).',
  },
  {
    id: 16,
    category: 'State',
    question: 'What is the best practice for updating state based on its current value?',
    answer:
      'Use a callback function inside the setter:\nsetCount(currCount => currCount + 1);\n\nThis ensures you always work with the latest state value. When you pass the new value directly (setCount(count + 1)), you risk using a stale value if multiple updates are batched together.',
  },
  {
    id: 17,
    category: 'State',
    question: 'What is the difference between State and Props?',
    answer:
      'State:\n• Internal data — owned and managed by the component itself.\n• Can be updated by the component.\n• Causes re-render when updated.\n• Used to make components interactive.\n\nProps:\n• External data — owned by a parent component.\n• Passed into the component as function parameters.\n• Read-only (immutable) inside the receiving component.\n• Also causes a re-render when new/updated props arrive.\n• Used by the parent to configure the child.',
  },
  {
    id: 18,
    category: 'State',
    question: 'When should you create a new piece of state?',
    answer:
      'Create a new piece of state when a component needs to track data that:\n1. Changes over time.\n2. Should trigger a re-render when it changes.\n3. Cannot be derived from existing state or props.\n\nAvoid state for data that does not affect the UI — it causes unnecessary re-renders.',
  },

  // ── STATE MANAGEMENT ─────────────────────────────────────────────────────────
  {
    id: 19,
    category: 'State Management',
    question: 'What is the difference between local state and global state?',
    answer:
      'Local state: needed by only one or a few components. Defined inside the component that uses it; accessible to that component and its children via props.\n\nGlobal state: needed by many components across the app. Accessible to every component. Managed with the React Context API or external libraries like Redux or Zustand.',
  },
  {
    id: 20,
    category: 'State Management',
    question: 'What is state lifting and when do you need it?',
    answer:
      'State lifting is moving state from a child component up to a common parent component. It\'s needed when two sibling components need to share the same state.\n\nThe process:\n1. Remove the state from the child.\n2. Define it in the closest common parent.\n3. Pass the state value down as a prop to the child that displays it.\n4. Pass the setter (or a handler function) as a prop to the child that updates it.',
  },
  {
    id: 21,
    category: 'State Management',
    question: 'What is derived state and when should you use it?',
    answer:
      'Derived state is a value computed from existing state or props using a regular variable (not useState):\nconst total = items.reduce((sum, item) => sum + item.price, 0);\n\nUse it when a value can be calculated from existing state. This avoids creating unnecessary state variables (which would cause extra re-renders) and keeps data automatically in sync with its source.',
  },

  // ── EVENTS ───────────────────────────────────────────────────────────────────
  {
    id: 22,
    category: 'Events',
    question: 'How do you handle events in React?',
    answer:
      'React uses declarative event listener props written in camelCase (onClick, onChange, onMouseOver, etc.).\n\nKey rules:\n1. Pass a callback function — never call the function (onClick={handleClick} not onClick={handleClick()}).\n2. Best practice: define handler functions inside the component, named with a "handle" prefix (handleClick, handleSubmit), then pass the reference.\n\nThis keeps JSX clean and follows React conventions.',
  },

  // ── RENDERING ────────────────────────────────────────────────────────────────
  {
    id: 23,
    category: 'Rendering',
    question: 'How do you render a list of components in React? What is required?',
    answer:
      'Use the array .map() method to return JSX for each item:\nnames.map(name => <li key={name}>{name}</li>)\n\nThe key prop is required on each rendered element. It must be unique and stable (usually a database ID). React uses keys to efficiently track which items changed, were added, or removed. Using array indexes as keys is discouraged for dynamic lists.',
  },
  {
    id: 24,
    category: 'Rendering',
    question: 'Why is the key prop important when rendering lists?',
    answer:
      'React uses keys to identify each element in a list uniquely between renders, independently of position in the tree.\n\nWithout keys: when a new item is added to the top of a list, every existing item appears at a different position. React sees different elements at those positions, destroys and recreates DOM nodes unnecessarily — wasted work, and state is lost.\n\nWith stable keys: React recognises that the same key appeared before (just at a new position) and keeps the DOM node alive, only moving it. This is both more performant and correct.\n\nThe key prop has a second use case beyond lists: giving a component a changing key forces React to treat it as a completely new instance (destroying old state), which is the cleanest way to reset state. See also: "How can you use the key prop to reset a component\'s state?"\n\nWhy index keys cause bugs: using the array index as a key means any insertion, deletion, or sort reassigns keys to different items. React sees different keys at those positions, destroys the old DOM nodes, and creates new ones — losing input values, checkbox state, and other per-item component state, as well as triggering unnecessary renders. Use index keys only for static lists that are never reordered and never have items inserted or removed in the middle.',
  },
  {
    id: 25,
    category: 'Rendering',
    question: 'What are three ways to do conditional rendering in React?',
    answer:
      '1. && operator (short-circuit): {isVisible && <Component />} — renders nothing if false, renders the component if true.\n\n2. Ternary operator: {isDay ? <Day /> : <Night />} — provides an alternative for both cases.\n\n3. Multiple returns / early return: use if statements before the return to return entirely different components based on a condition.\n\nRecommendation: use ternary for pieces of JSX; use early return for rendering or not an entire component.',
  },
  {
    id: 26,
    category: 'Rendering',
    question: 'What is React Strict Mode and what does it do?',
    answer:
      'React Strict Mode is a developer tool that highlights potential bugs and bad practices in a React application. Enabled by wrapping the app with <React.StrictMode>. It provides warnings for:\n• Deprecated API usage\n• Unexpected side effects (runs certain functions twice in development)\n• Unsafe lifecycle methods\n\nImportant: it renders no visible UI and has no effect in production.',
  },

  // ── FORMS ────────────────────────────────────────────────────────────────────
  {
    id: 27,
    category: 'Forms',
    question: 'What are controlled elements/components in React?',
    answer:
      'Controlled elements are form inputs (input, select, textarea) whose value is controlled by React state, not the DOM.\n\nImplementation:\n1. Create state: const [value, setValue] = useState("")\n2. Set the input value to state: value={value}\n3. Handle changes: onChange={e => setValue(e.target.value)}\n\nThis centralizes form state in the component and is the React way of managing forms.\n\nUncontrolled component: the DOM manages form state internally. You access the value via a ref only when needed (e.g. on submit), with no onChange handler and no re-render on each keystroke.\nfunction UncontrolledInput() {\n  const inputRef = useRef(null);\n  function handleSubmit() { console.log(inputRef.current.value); }\n  return <input type="text" ref={inputRef} />;\n}\n\nChoose controlled when you need real-time validation, conditional UI based on input value, or must handle every keystroke. Choose uncontrolled for simple forms where you only need the value at submit time, or when integrating with non-React DOM libraries that manage the DOM directly.',
  },
  {
    id: 28,
    category: 'Forms',
    question: 'What does e.preventDefault() do and when do you use it in React?',
    answer:
      'e.preventDefault() stops the browser\'s default behavior for an event. In forms, the default behavior on submit is to reload the page. In React form handlers (onSubmit), you call e.preventDefault() first to prevent the page reload and let React handle the form data instead.',
  },

  // ── FRAGMENTS & STYLING ──────────────────────────────────────────────────────
  {
    id: 29,
    category: 'JSX',
    question: 'What are React Fragments and when do you use them?',
    answer:
      'Fragments let you return multiple elements from a component without adding an extra DOM node.\n\nShorthand: <> </>\nFull syntax: <React.Fragment> </React.Fragment>\n\nUse <React.Fragment key="..."> (not <>) when rendering a list of fragments, because keys can only be passed to the full syntax.\n\nNeeded because JSX requires a single root element, but sometimes adding a wrapper <div> would break your layout or add unnecessary markup.',
  },
  {
    id: 30,
    category: 'Styling',
    question: 'What are the ways to style components in React?',
    answer:
      '1. Inline styles: pass a JS object to the style attribute — properties are camelCase, values are strings.\nExample: style={{ fontSize: "16px", color: "red" }}\n\n2. External CSS files: import the CSS file and use the className attribute (not class).\n\n3. CSS Modules: scoped CSS that avoids class name collisions.\n\n4. Tailwind CSS: utility-first CSS framework.\n\n5. Sass / styled-components: advanced CSS-in-JS or preprocessed CSS.',
  },

  // ── ARCHITECTURE ─────────────────────────────────────────────────────────────
  {
    id: 31,
    category: 'Architecture',
    question: 'What is "thinking in React" and what steps does it involve?',
    answer:
      '1. Break the desired UI into components and establish the component tree.\n2. Build a static version of the UI in React without any state.\n3. Decide what state is needed:\n   • When to use state vs. derived state\n   • Local vs. global state\n   • Where each piece of state should live\n4. Establish data flow:\n   • One-way data flow (parent to child)\n   • Child-to-parent communication (via callback props)\n   • Global state access (Context / Redux)',
  },
  {
    id: 32,
    category: 'Architecture',
    question: 'What is separation of concerns in React? How is it different from traditional web development?',
    answer:
      'Traditional: one technology per file (HTML file, JS file, CSS file).\n\nReact: one component per file. Each component contains all the technology (markup, logic, styles) it needs — because things that change together belong together.\n\nThis is "colocation" — the logic and UI that are tightly coupled live in the same place. The "concern" is a piece of functionality or UI, not a technology.',
  },
  {
    id: 33,
    category: 'Architecture',
    question: 'What is the purpose of keeping components as "pure functions"?',
    answer:
      'A pure function always returns the same output for the same inputs and has no side effects. When React components behave this way with respect to props and state:\n1. React can optimize rendering (skip unnecessary re-renders).\n2. The app becomes predictable and easier to debug.\n3. Side effects (unintended mutations of external data) are prevented.\n\nThis is why props must be immutable and state should only be updated via the setter function.',
  },

  // ── COMPONENT DESIGN ─────────────────────────────────────────────────────────
  {
    id: 34,
    category: 'Component Design',
    question: 'What are the signs that a component is too large and should be split?',
    answer:
      '1. Too many responsibilities — it does more than one thing.\n2. Too many props — hard to call and configure.\n3. Too many pieces of state and/or effects — complex internal logic.\n4. JSX is too long or confusing to read.\n5. Hard to reuse — it is too specific to one context.\n\nAs a rule of thumb: if you can describe the component\'s job with "and" ("it fetches data AND renders a table AND handles sorting"), it should be split.',
  },
  {
    id: 35,
    category: 'Component Design',
    question: 'What are the signs that a component is too small / over-abstracted?',
    answer:
      'A component is probably too small if:\n1. The app ends up with hundreds of mini-components, making the codebase hard to navigate.\n2. Splitting it created a new level of abstraction that costs more mental energy than it saves.\n3. The component is used in exactly one place and could just be inline JSX.\n\nAbstractions have a cost — every new component is a new level to mentally switch between. Only split when the benefit (reusability, clarity) outweighs that cost.',
  },
  {
    id: 36,
    category: 'Component Design',
    question: 'What are the four criteria for deciding when to create a new component?',
    answer:
      '1. Logical separation — does the component contain content or layout that doesn\'t belong together?\n2. Reusability — is part of it reusable, or do you want/need to reuse it?\n3. Single responsibility / low complexity — is it doing too many things, relying on too many props, or is the JSX too complex?\n4. Personal/team coding style — some developers prefer larger components; some prefer smaller ones. This is subjective but valid.',
  },
  {
    id: 37,
    category: 'Component Design',
    question: 'What are the three main categories of React components?',
    answer:
      '1. Stateless / Presentational components:\n   • No state.\n   • Receive props and render UI.\n   • Highly reusable, usually small.\n   • Example: a Button, Avatar, or Badge.\n\n2. Stateful components:\n   • Own and manage state.\n   • Can still be reused.\n   • Example: a SearchBar with its own input state.\n\n3. Structural components:\n   • Pages, layouts, screens — the skeleton of the app.\n   • Result of component composition.\n   • Often large and not meant to be reused.\n   • Example: a PageLayout or a Dashboard page component.',
  },
  {
    id: 38,
    category: 'Component Design',
    question: 'What is the "single responsibility principle" as applied to React components?',
    answer:
      'The single responsibility principle means a component should do one thing — ideally have one reason to change. In practice:\n• A presentational component should only render UI based on props.\n• A data-fetching component should only fetch and pass data down.\n• A form component should only manage its own form state.\n\nWhen a component has to change for two different reasons (e.g., the UI design changes AND the API changes), it is carrying two responsibilities and should be split.',
  },
  {
    id: 39,
    category: 'Component Design',
    question: 'What naming conventions are recommended for React components?',
    answer:
      '1. Name based on what a component does or displays — not on implementation details.\n2. Don\'t be afraid of long, descriptive names (UserProfileCard, CheckoutSummaryList).\n3. Event handler props are conventionally prefixed with "on" (onSubmit, onClick).\n4. Event handler functions inside a component are conventionally prefixed with "handle" (handleSubmit, handleClick).\n5. Never name a component with a lowercase first letter — React treats those as plain DOM elements.',
  },
  {
    id: 40,
    category: 'Component Design',
    question: 'What does it mean to "co-locate" components and when should you do it?',
    answer:
      'Co-location means keeping related components in the same file before separating them into different files. You should co-locate when:\n• A sub-component is only used by one parent.\n• Splitting it into its own file adds navigation overhead with no real benefit.\n\nSeparate into its own file when:\n• The component is reused in multiple places.\n• The file is getting too long to navigate.\n• The component is complex enough to warrant its own test file.\n\nImportant: never declare a component *inside* another component — define it outside in the same file instead.',
  },

  // ── PROP DRILLING & COMPOSITION ───────────────────────────────────────────────
  {
    id: 41,
    category: 'Component Design',
    question: 'What is prop drilling and why is it a problem?',
    answer:
      'Prop drilling is when you pass props through multiple intermediate components that don\'t actually use the data — they just forward it down to a deeply nested child that does.\n\nProblems it causes:\n1. Intermediate components become cluttered with props they don\'t care about.\n2. Harder to refactor — changing a prop\'s name or type requires updating every layer.\n3. Tightly couples the component tree to a specific data shape.\n\nSolutions: component composition (children props), React Context API, or a global state manager like Redux/Zustand.',
  },
  {
    id: 42,
    category: 'Component Design',
    question: 'What is component composition and how does it help avoid prop drilling?',
    answer:
      'Component composition is the technique of building components out of other components, using the children prop (or an explicit element prop) to pass JSX content into a parent.\n\nHow it helps with prop drilling: instead of threading props down through several layers, you pass the already-configured child directly at the top level, so intermediate components never need to know about the data.\n\nExample:\n// Instead of <Layout><Sidebar user={user} /></Layout> and Sidebar drilling user down...\n// The parent composes:\n<Layout sidebar={<Sidebar user={user} />} />\n// Layout just renders props.sidebar — it never touches "user".',
  },
  {
    id: 43,
    category: 'Component Design',
    question: 'What are the two patterns for component composition in React?',
    answer:
      'Pattern 1 — children prop (implicit slot):\nThe content is placed between the component\'s opening and closing tags and received via props.children.\nfunction Modal({ children }) { return <div className="modal">{children}</div>; }\n<Modal><Success /></Modal>\n\nPattern 2 — element prop (explicit slot):\nThe content is passed explicitly as a named prop.\nfunction Modal({ element }) { return <div className="modal">{element}</div>; }\n<Modal element={<Success />} />\n\nUse the children pattern for single-slot wrappers (modals, cards). Use named element props when a component has multiple distinct slots (e.g., header, sidebar, footer).',
  },
  {
    id: 44,
    category: 'Component Design',
    question: 'Why is component composition considered the best way to compose layouts in React?',
    answer:
      'Component composition allows layout components (like Page, Modal, Sidebar) to be completely generic — they define structure without knowing anything about their content. Benefits:\n1. Avoids prop drilling — the content is "pre-configured" by the parent before being passed in.\n2. Highly reusable — the same Modal can wrap a Success message, an Error message, or a form.\n3. Flexible — consumers control the content; the layout component just provides the shell.\n4. Keeps components focused on their responsibility (structure vs. content).',
  },

  // ── PROPS AS API & PROPTYPES ─────────────────────────────────────────────────
  {
    id: 45,
    category: 'Props',
    question: 'What does it mean to treat component props as a "public API"?',
    answer:
      'Thinking of props as a public API means drawing a clear boundary between the component\'s internal implementation and what it exposes to consumers.\n\nFrom the creator\'s perspective: decide what props to expose, their names, types, and default values — just like designing a function\'s parameters.\n\nFrom the consumer\'s perspective: only use documented props; internal state or sub-components are private.\n\nThis mindset helps you design components that are easy to use, hard to misuse, and possible to refactor internally without breaking consumers (as long as the prop interface stays the same).',
  },
  {
    id: 46,
    category: 'Props',
    question: 'What are the two extremes of component prop design and what is the ideal balance?',
    answer:
      'Too few props:\n• The component is inflexible — consumers can\'t customize it.\n• May be so specific it\'s not reusable.\n\nToo many props:\n• Hard to use — the consumer must understand many options.\n• Exposes too much internal complexity.\n• Callers need to provide many values, making code verbose.\n\nIdeal balance: expose the props needed to make a component genuinely useful and reusable, while hiding everything else. Provide sensible default values for optional props so the simplest use case requires minimal configuration.',
  },
  {
    id: 47,
    category: 'Props',
    question: 'What are PropTypes in React and when would you use them?',
    answer:
      'PropTypes is a built-in React mechanism for runtime type-checking of props. You import PropTypes and define expected types on a component:\nMyComponent.propTypes = { name: PropTypes.string, age: PropTypes.number.isRequired }\n\nWhen a prop of the wrong type is passed, React logs a warning in the console during development (not in production).\n\nIn practice: PropTypes are rarely used in modern React codebases because TypeScript provides the same guarantees at compile time (before the code even runs), with better IDE support and no runtime overhead. Prefer TypeScript for new projects.',
  },
  {
    id: 48,
    category: 'Props',
    question: 'What is the difference between PropTypes and TypeScript for type-checking props?',
    answer:
      'PropTypes:\n• Runtime validation — errors surface only when the code runs in the browser.\n• Console warnings only — does not prevent bad code from executing.\n• No IDE autocompletion benefit.\n• Ships as extra code in the bundle (though small).\n\nTypeScript:\n• Compile-time validation — errors are caught before the code runs.\n• Type errors block builds, preventing bugs from shipping.\n• Full IDE autocompletion, inline docs, and refactoring support.\n• Zero runtime overhead — type annotations are erased at build time.\n\nThe industry has largely moved to TypeScript. PropTypes are still useful for JavaScript projects or for documenting a component\'s interface when TypeScript isn\'t available.',
  },
  {
    id: 49,
    category: 'Props',
    question: 'What are default prop values and how do you set them?',
    answer:
      'Default prop values are fallbacks used when a prop is not passed by the consumer. Two common ways to set them:\n\n1. Destructuring defaults (modern, preferred):\nfunction Button({ label = "Click me", size = "medium" }) { ... }\n\n2. Component.defaultProps (legacy, less common today):\nButton.defaultProps = { label: "Click me", size: "medium" }\n\nWith TypeScript, you still use destructuring defaults — defaultProps is deprecated for function components in newer React versions.\n\nDefault values are essential for making optional props truly optional and keeping the component easy to use in the common case.',
  },

  // ── REACT INTERNALS ──────────────────────────────────────────────────────────
  {
    id: 50,
    category: 'React Internals',
    question: 'What is the difference between a React component, a component instance, and a React element?',
    answer:
      'React Node: the most general type — anything React can render. Includes React elements, strings, numbers, booleans, null, undefined, and arrays or fragments of these. Whenever JSX expects children, it accepts React Nodes.\n\nComponent: a JavaScript function you write — a blueprint or template for a piece of UI.\n\nComponent instance: the actual, physical manifestation of that blueprint living in the component tree. React creates one instance each time the component is used. Each instance has its own state, props, and lifecycle (it is "born", lives, and eventually "dies").\n\nReact element: the plain JavaScript object returned when React calls the component function (via JSX). It holds all the information needed to create the corresponding DOM elements. React elements are immutable; they are not the DOM itself.\n\nDOM element: the final visual representation painted in the browser — the last step in the chain.',
  },
  {
    id: 51,
    category: 'React Internals',
    question: 'Why should you never call a React component as a plain function (e.g., Tab() instead of <Tab />)?',
    answer:
      'When you call a component directly as a function, React no longer sees a component instance — it sees only the raw JSX output (e.g., a plain <div>). Consequences:\n1. The component does not appear as its own node in the component tree.\n2. Its hooks (useState, useEffect, etc.) get merged into the parent\'s hook list, violating the rules of hooks and causing unpredictable behavior.\n3. React cannot manage the component\'s lifecycle or state independently.\n\nAlways use JSX syntax (<Component />) so React can properly create and manage instances.',
  },
  {
    id: 52,
    category: 'React Internals',
    question: 'What is the Virtual DOM in React?',
    answer:
      'The Virtual DOM is a tree of all React elements created from all component instances in the application. It is simply a plain JavaScript object — cheap and fast to build or rebuild on every render.\n\nOn a state update, React builds a new virtual DOM and compares it with the previous one (via reconciliation/diffing) to compute the minimal set of real DOM operations needed. This avoids touching the actual DOM more than necessary, since DOM writes are slow.\n\nNote: the React team has downplayed this term because it can be misleading — it\'s just a JS object. The official docs no longer mention it, but the term is still widely used in the industry.\n\nBenefits: declarative updates, batched DOM writes, and efficient re-renders that avoid unnecessary DOM mutations.\nDownsides: extra memory overhead for maintaining the virtual tree alongside the real DOM, and computational overhead from the diffing algorithm on every render. For very simple or extremely performance-sensitive UIs, direct DOM manipulation can outperform React. In practice these tradeoffs are negligible for most applications.',
  },
  {
    id: 53,
    category: 'React Internals',
    question: 'What are the phases React goes through to display a component on screen?',
    answer:
      '1. Trigger — either the initial render or a state update somewhere in the app.\n\n2. Render phase — React calls component functions, builds a new virtual DOM, then runs reconciliation (diffing against the Fiber tree) to produce a list of DOM mutations. No actual DOM changes happen here.\n\n3. Commit phase — React applies the computed DOM mutations (insertions, updates, deletions) to the real DOM. This phase is synchronous and cannot be interrupted.\n\n4. Browser repaint — the browser paints the updated DOM to the screen. This step is outside React entirely.',
  },
  {
    id: 54,
    category: 'React Internals',
    question: 'What does "rendering" mean in React? How is it different from the common understanding?',
    answer:
      'In React, "rendering" means calling component functions to build the virtual DOM and running reconciliation — it does NOT mean updating the DOM or showing anything on screen.\n\nThe actual DOM update happens in the separate commit phase. The browser repaint happens after that.\n\nThe common understanding of "render" (= display on screen) conflates all three steps. Keeping them distinct matters because the render phase is purely computational, produces no visual output, and can be paused or interrupted — which is what enables React\'s concurrent features.',
  },
  {
    id: 55,
    category: 'React Internals',
    question: 'What are the two things that can trigger a render in React?',
    answer:
      '1. Initial render — the very first time the application runs.\n\n2. State update — any piece of state changes in any component instance anywhere in the app.\n\nKey points:\n• A render is triggered for the entire component tree, not just the component where state changed.\n• The render is not immediate; it is scheduled for when the JS engine has free time.\n• Multiple state updates in the same event handler are batched into a single render (React 18 batches all updates automatically).',
  },
  {
    id: 56,
    category: 'React Internals',
    question: 'Why do all child components re-render when a parent component re-renders?',
    answer:
      'React cannot know in advance whether a parent\'s state change will affect child components\' output, so by default it re-renders the entire subtree of any component that triggered a re-render.\n\nThis is safe because "re-render" in the render phase only means calling component functions and rebuilding the virtual DOM — it does NOT touch the real DOM. The Fiber reconciler then determines that most children produced identical output, so their DOM elements are not changed.\n\nTo opt a child out of this behavior, wrap it with React.memo — it skips re-rendering if props have not changed.',
  },
  {
    id: 57,
    category: 'React Internals',
    question: 'What is reconciliation in React and what does it produce?',
    answer:
      'Reconciliation is the process of comparing the new virtual DOM (built after a state update) with the current Fiber tree, element by element at each position in the tree, to determine the minimal set of DOM operations needed.\n\nThe comparison algorithm is called diffing. Its output is a "list of effects" — DOM mutations categorized as:\n• DOM insertion (new element)\n• DOM update (same type, different props or content)\n• DOM deletion (element no longer in the tree)\n\nThis list is handed to the commit phase, which applies the changes to the real DOM.',
  },
  {
    id: 58,
    category: 'React Internals',
    question: 'What is the Fiber tree and how does it differ from the Virtual DOM?',
    answer:
      'Virtual DOM: a fresh JavaScript object tree built on every render — temporary and thrown away after reconciliation.\n\nFiber tree: a persistent, mutable internal data structure React keeps alive across all renders. Each node (Fiber) corresponds to a component instance or DOM element and stores its state, props, hooks list, side effects, and a work queue.\n\nKey differences:\n• Fibers are never destroyed — they are mutated in place during reconciliation.\n• The Fiber tree is the authoritative store of all component state and hooks.\n• The work-in-progress tree produced during reconciliation is an alternate Fiber tree that becomes the current tree after the commit phase.',
  },
  {
    id: 59,
    category: 'React Internals',
    question: 'What is the commit phase in React and why is it synchronous?',
    answer:
      'The commit phase is when React takes the list of DOM mutations from reconciliation and applies them to the real DOM (insertions, updates, deletions). It also runs refs updates and lifecycle effects (useLayoutEffect).\n\nIt is synchronous and cannot be interrupted because all DOM changes must be applied as a single, atomic batch. If React applied changes partially and then paused, the user would see an inconsistent, broken UI — some parts updated and some not. This is the whole point of separating the render phase (pauseable) from the commit phase (atomic).\n\nAfter the commit phase completes, the work-in-progress Fiber tree becomes the current tree for the next render cycle — Fiber trees are never discarded, only reused.\n\nImportant: it is not React itself that writes to the DOM. That work is done by a separate library called ReactDOM (or another renderer depending on the host). React only handles the render phase; ReactDOM handles the commit phase for web apps. After the commit, the browser repaints the screen, and then React flushes passive effects (useEffect).',
  },
  {
    id: 60,
    category: 'React Internals',
    question: 'What makes React 18 concurrent features (Suspense, useTransition) possible?',
    answer:
      'Concurrent features are possible because React\'s render phase is asynchronous. Work can be:\n• Split into small chunks so the browser is never blocked for too long.\n• Paused and resumed (e.g., to handle a high-priority user interaction).\n• Prioritized (urgent updates like typing trump slower background renders).\n• Discarded if it becomes stale before completing.\n\nThis is safe because the render phase produces no visible DOM output — only a virtual DOM and a list of effects. The commit phase is still synchronous.\n\nuseTransition marks a state update as non-urgent, letting React keep the current UI interactive while the slow render happens in the background.',
  },
  {
    id: 61,
    category: 'React Internals',
    question: 'What is diffing in React and what are its key rules?',
    answer:
      'Diffing is the algorithm React uses during reconciliation to compare old and new virtual DOM trees, position by position. It rests on two fundamental assumptions that allow it to run in O(n) time instead of O(n³):\n\n1. Two elements of different types will produce different trees.\n2. Elements with a stable key (consistent across renders) stay the same across renders.\n\nFrom these, two situations arise:\n\nDifferent type, same position → React destroys the entire subtree (including all child state) and creates a brand new one from scratch.\n\nSame type, same position → React reuses the existing DOM element or component instance, only mutating attributes/props that changed. State is fully preserved.\n\nKeys override position-based matching: a stable key keeps an element alive even if it moves; a changed key forces destruction and recreation even if the position is the same.',
  },
  {
    id: 62,
    category: 'React Internals',
    question: 'What is the $$typeof field on a React element, and why does it exist?',
    answer:
      'Every React element has a $$typeof field set to Symbol.for(\'react.element\'). This is a security mechanism against XSS attacks.\n\nSymbols cannot be serialized to JSON, which means they cannot arrive in an API response. If an attacker tries to inject a fake React element through a JSON API (a classic server-side XSS vector), React checks $$typeof — and because a JSON-deserialized object cannot contain a Symbol, React refuses to render it.\n\nIn practice you never interact with $$typeof directly, but you may see it when logging a React element to the console.',
  },
  {
    id: 63,
    category: 'React Internals',
    question: 'What is batching in React and what changed in React 18?',
    answer:
      'Batching is when React groups multiple setState calls into a single re-render instead of triggering one render per call.\n\nBefore React 18: only state updates inside React event handlers were batched. Updates inside setTimeout, Promises, or native event listeners each triggered a separate render.\n\nReact 18 automatic batching: ALL state updates — regardless of where they happen (setTimeout, fetch callbacks, async functions) — are batched into a single render by default.\n\nIf you ever need to force an immediate render (rare), use ReactDOM.flushSync().',
  },
  {
    id: 64,
    category: 'React Internals',
    question: 'Is the Virtual DOM the same as the browser\'s Shadow DOM?',
    answer:
      'No — they are completely unrelated.\n\nReact Virtual DOM: an internal JavaScript object tree React uses to compute the minimal set of real DOM operations via reconciliation. It is a React-specific optimization concept, not a browser API.\n\nShadow DOM: a native browser feature (part of the Web Components standard) that encapsulates a DOM subtree\'s markup and styles so they do not leak into or conflict with the rest of the document. Used by web components and browser UI elements like <video> controls.\n\nThe confusion comes from both having "DOM" in the name — but they solve completely different problems.',
  },
  {
    id: 65,
    category: 'React Internals',
    question: 'What happens to component state when the element type changes at the same tree position vs when it stays the same?',
    answer:
      'Different type, same position:\nReact assumes the entire subtree is no longer valid. It destroys every DOM element and component instance in that subtree — including all their state. A completely new instance is created with fresh, default state.\n\nExample: if a condition switches <TabContent /> to <DifferentContent /> at the same JSX position, TabContent\'s state is gone when you switch back.\n\nSame type, same position:\nReact keeps the existing DOM element / component instance intact. Only the props (or DOM attributes) that changed are updated. State is fully preserved — even though the parent re-rendered.\n\nPractical implication: if you have a form component that should reset when the user picks a different item, make sure the element type changes OR give it a different key — otherwise React will silently reuse the old instance and its stale state.',
  },
  {
    id: 66,
    category: 'React Internals',
    question: 'How can you use the key prop to reset a component\'s state?',
    answer:
      'Give the component a key that changes whenever you need a fresh instance. When React sees a different key for a component at the same position, it treats it as a brand new element: the old instance is destroyed (state gone), and a new one is mounted with default state.\n\nExample — a split-bill form that should reset when the selected friend changes:\n<FormSplitBill key={selectedFriend.id} friend={selectedFriend} />\n\nNow each friend gets its own fresh form. Without the key, the same component instance is reused and old input values bleed into the new context.\n\nRule of thumb: whenever you find yourself needing to reset state, reach for the key prop before reaching for a useEffect that manually clears fields.',
  },
  {
    id: 67,
    category: 'React Internals',
    question: 'What is a React renderer and what host environments can React target?',
    answer:
      'A renderer is the package responsible for the commit phase — it takes React\'s computed list of updates and writes them to a specific output target (called the host). React itself is platform-agnostic: it only handles the render phase (calling component functions, reconciliation).\n\nCommon renderers / hosts:\n• ReactDOM — web browsers (the DOM)\n• React Native — iOS and Android (native mobile UI elements)\n• Remotion — MP4 video (rendered frame by frame)\n• @react-pdf/renderer — PDF documents\n• react-figma — Figma designs\n\nNote: the term "renderer" is technically a misnomer in React\'s internal vocabulary — renderers commit, they don\'t render. The name predates the render/commit split and stuck around.',
  },
  {
    id: 68,
    category: 'React Internals',
    question: 'Why do we import both "react" and "react-dom" in a web React application?',
    answer:
      'The two packages have distinct, separate responsibilities:\n\n• react — the platform-agnostic core. Handles JSX transformation, component rendering, reconciliation, and the Fiber tree. Has no knowledge of the DOM or any specific host.\n\n• react-dom — the web-specific renderer. Takes the list of DOM updates produced by React\'s render phase and writes them to the browser DOM in the commit phase.\n\nBecause React is designed to work with multiple hosts (web, mobile, video, etc.), the host-specific code is intentionally split into a separate package. Importing both explicitly in index.js reflects this separation: React does the thinking, ReactDOM does the writing.',
  },
  {
    id: 69,
    category: 'React Internals',
    question: 'Explain how content is rendered in react, all phases and what happens step by step?',
    answer:
      '━━ STEP 1 — TRIGGER ━━\n' +
      'A render is triggered in exactly two ways: (1) the initial render when the app first runs, or (2) a state update anywhere in the component tree. React schedules the render rather than running it immediately, and it always processes the entire tree — not just the component where state changed.\n\n' +

      '━━ STEP 2 — RENDER PHASE (asynchronous) ━━\n' +
      'React calls the function of every component that needs re-rendering. JSX inside those functions compiles to React.createElement() calls, which produce React elements — plain, immutable JavaScript objects containing all the information needed to eventually create DOM nodes. The full collection of these objects is the Virtual DOM (React element tree). Because it is just a JS object, building or rebuilding it is cheap.\n\n' +
      'Important: when a component re-renders, React re-renders every one of its descendants too, regardless of whether props changed. React cannot know in advance which children are affected, so it plays it safe and re-renders the whole subtree. This only means calling component functions again (cheap) — it does not yet touch the real DOM.\n\n' +

      '━━ THE FIBER TREE ━━\n' +
      'On the initial render, React builds the Fiber tree alongside the Virtual DOM. A Fiber is a node for every component instance and DOM element in the app. Unlike the Virtual DOM (which is thrown away and recreated each render), the Fiber tree is persistent and mutable — it is never destroyed, only mutated in place.\n\n' +
      'Internally, Fibers form a linked list: each first child links back to its parent, and all subsequent siblings link to their previous sibling. This structure (rather than a normal parent-child tree) makes it easy to walk and pause work. Each Fiber stores the actual state, props, hooks list, side effects, and a queue of work for that element. The real component state lives in the Fiber, not in the Virtual DOM.\n\n' +

      '━━ RECONCILIATION & DIFFING ━━\n' +
      'The new Virtual DOM is compared with the current Fiber tree element-by-element, position-by-position. This is diffing. The algorithm rests on two assumptions:\n' +
      '1. Two elements of different types produce different trees.\n' +
      '2. An element with a stable key stays the same across renders.\n\n' +
      'These let diffing run in O(n) instead of O(n³).\n\n' +
      'Two situations arise during the comparison:\n' +
      '• Different type at same position → React destroys the entire subtree including all its state, and creates a fresh instance from scratch.\n' +
      '• Same type at same position → React keeps the existing DOM node and component instance, only updating the props or attributes that changed. State is fully preserved.\n\n' +
      'Keys override position-based matching: a stable key keeps an element alive even if it moved in the list; a changed key forces destruction and recreation even if the position is identical — the mechanism used to intentionally reset state.\n\n' +
      'The output of the render phase is an updated ("work-in-progress") Fiber tree and a list of DOM effects — the exact set of insertions, updates, and deletions needed to bring the DOM in sync with the new state.\n\n' +

      '━━ STEP 3 — COMMIT PHASE (synchronous) ━━\n' +
      'React hands the effects list to a renderer. For web apps that renderer is ReactDOM — React itself never touches the DOM. ReactDOM walks the effects list and applies every mutation to the real DOM in one synchronous, uninterruptible pass. It cannot be paused because applying changes partially would leave the UI in an inconsistent state.\n\n' +
      'Once the commit is done, the work-in-progress Fiber tree is promoted to become the current Fiber tree, ready for the next render cycle.\n\n' +
      'Because React is platform-agnostic and only handles the render phase, the same React code can target different hosts by swapping the renderer: ReactDOM for browsers, React Native for iOS/Android, Remotion for video, react-pdf for PDFs, and so on. This is also why we import both "react" and "react-dom" separately.\n\n' +

      '━━ STEP 4 — BROWSER PAINT ━━\n' +
      'After the commit, the browser detects that the DOM has changed and repaints the screen whenever it has idle time. This step is entirely outside React — it is the browser\'s own painting engine at work. It is this final step that produces the visual change the user actually sees.',
  },

  // ── RENDER LOGIC & SIDE EFFECTS ──────────────────────────────────────────────
  {
    id: 70,
    category: 'React Internals',
    question: 'What are the rules for render logic, and why must components behave as pure functions?',
    answer:
      'Render logic is the code at the top level of a component function — everything that runs in order to return JSX. This logic must be pure: given the same props and state, it must always return the same JSX output.\n\nForbidden in render logic:\n• Network requests (fetch, XHR, etc.)\n• Creating timers (setTimeout, setInterval)\n• Directly working with the DOM API (addEventListener, etc.)\n• Mutating objects or variables that live outside the component\'s own scope — including mutating props\n• Updating state or refs (updating state in render logic creates an infinite re-render loop)\n\nWhy: React may call component functions multiple times, pause, reuse, or discard render work (especially in concurrent mode). If render logic had side effects, the output would be unpredictable and React\'s optimisations would break.\n\nNote: things like console.log or Math.random() are technically side effects too but are harmless in practice — no need to remove them.',
  },
  {
    id: 71,
    category: 'React Internals',
    question: 'If side effects are forbidden in render logic, where should you run them in React?',
    answer:
      'Two safe places for side effects:\n\n1. Event handler functions — event handlers are not render logic, so side effects (API calls, timers, local storage writes, etc.) are fully allowed and encouraged here. This is the first choice whenever a side effect is triggered by user interaction.\n\n2. useEffect hook — for side effects that must happen as soon as the component mounts, or in response to changing dependencies (e.g. fetching data when an ID prop changes, setting up a subscription, or registering a DOM event listener). useEffect runs after the render and commit phases, safely outside render logic.\n\nThe rule of thumb: prefer event handlers for side effects tied to events; use useEffect for side effects tied to the component lifecycle.',
  },
  {
    id: 72,
    category: 'React Internals',
    question: 'Why is state "stale" immediately after calling a setState function, and how do you work around it?',
    answer:
      'State updates are asynchronous and batched. When you call setState, React schedules a re-render rather than updating the variable on the spot. The state variable only holds its new value after the component function runs again during the next render. So on the very next line after the call, the variable still holds the old value — it is stale.\n\nExample:\nsetAnswer(\'\'); // schedules the update\nconsole.log(answer); // still the OLD value — stale state\n\nThe new value becomes available only after re-rendering.\n\nWorkaround: if you need to compute new state based on the very latest value — especially when multiple updates are batched — use the callback form of setState:\nsetLikes(curr => curr + 1);\n\nThe callback always receives the latest committed state as its argument, even when several updates are queued in the same event handler. This is why you should always use the callback form whenever the new state depends on the current state — it is safe regardless of how many updates are batched together.',
  },

  // ── EVENTS ───────────────────────────────────────────────────────────────────
  {
    id: 73,
    category: 'Events',
    question: 'What is event propagation in the browser? What are the capturing and bubbling phases?',
    answer:
      'When an event fires (e.g. a button click), the browser creates an event object at the very root of the document — not at the element that was clicked — and it travels in three stages:\n\n1. Capturing phase: the event travels DOWN the DOM tree from the document root to the target element, passing through every ancestor on the way.\n\n2. Target: the event reaches the element where it originated. Handlers registered on the target run.\n\n3. Bubbling phase: the event travels back UP the tree from the target to the root, passing through every ancestor again. Event handlers on parent elements also fire during this phase (as if the event happened in each parent too).\n\nBy default, React event handlers (and addEventListener without the capture flag) listen during the bubbling phase.\n\nstopPropagation(): calling this on the event object prevents it from traveling any further up (or down) the tree. Use it sparingly — only when there is no other solution.',
  },
  {
    id: 74,
    category: 'Events',
    question: 'What is event delegation and how does React use it internally?',
    answer:
      'Event delegation exploits event bubbling: instead of attaching a handler to each individual element, you attach one handler to a common parent. When any child fires an event, it bubbles up to the parent where you inspect event.target to decide what to do. This is more memory-efficient than attaching thousands of separate handlers.\n\nHow React uses it: React does NOT attach event handlers directly to the DOM elements where you write onClick, onChange, etc. Instead, during the render phase, React registers one handler per event type at the root DOM container (the <div id="root"> by default). When any event fires anywhere in the app, it bubbles up to that root container where React dispatches it to the correct handler.\n\nPractical implications:\n• All your React event handlers are actually handled at the root, not at the element.\n• Event bubbling follows the real DOM tree, not the React component tree — a component\'s parent in the component tree may not be its parent in the DOM.\n• This is why you sometimes see unexpected bubbling behaviour when mixing React with native addEventListener calls.',
  },
  {
    id: 75,
    category: 'Events',
    question: 'What is a synthetic event in React and how does it differ from a native DOM event?',
    answer:
      'A synthetic event is React\'s wrapper around the browser\'s native DOM event object. React passes a SyntheticEvent (not the raw event) to every event handler function.\n\nWhat stays the same:\n• Same interface as native events — you can call e.stopPropagation(), e.preventDefault(), read e.target, e.type, etc.\n\nWhat changes / improves:\n• Browser inconsistencies are normalised — synthetic events behave identically across all browsers.\n• Events that do not naturally bubble (focus, blur, change) are made to bubble in React\'s system, which makes event delegation at the root possible for those events too.\n• Exception: the scroll event does NOT bubble in React (consistent with the native DOM).\n\nIn practice you use synthetic events exactly like native events and rarely notice the difference.',
  },
  {
    id: 76,
    category: 'Events',
    question: 'What are the key differences between React event handling and vanilla JavaScript event handling?',
    answer:
      '1. Prop naming: React uses camelCase — onClick, onChange, onSubmit. Plain HTML attributes are all-lowercase — onclick. addEventListener uses the bare event name without "on" — click, change.\n\n2. Preventing default behaviour: returning false from a handler prevents the default in vanilla JS and HTML. In React this does nothing — you must call e.preventDefault() explicitly on the synthetic event.\n\n3. Synthetic events: React gives you a SyntheticEvent instead of the raw native event (see separate question).\n\n4. Event delegation: React registers all handlers at the root container, not on the element where you wrote the prop. Vanilla JS addEventListener attaches directly to the target element unless you implement delegation yourself.\n\n5. Capturing phase: to listen during capturing instead of bubbling, append Capture to the prop name — onClickCapture, onSubmitCapture. This is rarely needed but good to know.',
  },

  // ── COMPONENT LIFECYCLE & useEffect ──────────────────────────────────────────
  {
    id: 77,
    category: 'React Internals',
    question: 'What are the three phases of a React component\'s lifecycle?',
    answer:
      '1. Mount (initial render): the component instance is created, rendered for the first time, and fresh state and props are initialised. Think of this as the component being "born."\n\n2. Re-render (optional): the component re-renders whenever its own state changes, its received props change, its parent re-renders, or a subscribed Context value changes. A component may re-render many times or never after mounting.\n\n3. Unmount: the component instance is permanently removed from the screen and its state and props are destroyed. This happens when the user navigates away or the component is conditionally no longer rendered. A new instance of the same component can be mounted later, but this specific instance is gone.\n\nWhy it matters: the useEffect hook lets us hook into each of these phases to run code at exactly the right moment.',
  },
  {
    id: 78,
    category: 'React Internals',
    question: 'What is the useEffect hook, and when should you use it instead of an event handler?',
    answer:
      'useEffect is a React hook that lets you run side effects — code that interacts with the world outside the component — safely after render, not during it.\n\nThe key difference:\n• Event handler: use when the side effect is triggered by a specific user interaction (click, submit, change). This is always the preferred choice.\n• useEffect: use when the side effect must happen automatically as part of the component lifecycle — for example, fetching data on mount, setting up a timer or subscription, or synchronising with a browser API. If there is no event to attach the side effect to, useEffect is the right tool.\n\nCritical rule: event handlers are always preferred over useEffect when possible. useEffect exists to synchronise a component with an external system, not as a general-purpose place to run code. Overusing it leads to unnecessary complexity and bugs.',
  },
  {
    id: 79,
    category: 'React Internals',
    question: 'What is the useEffect dependency array and what are the three ways to use it?',
    answer:
      'The dependency array is the second argument to useEffect. It tells React when to re-run the effect. Every state variable and prop used inside the effect must be listed as a dependency — failing to do so causes a bug called a stale closure, where the effect reads outdated values.\n\nThree cases:\n\n1. useEffect(fn, [x, y]) — specific dependencies: the effect runs on mount, then again every time x or y changes. Other state/prop updates are ignored.\n\n2. useEffect(fn, []) — empty array: the effect runs only once, on mount. The effect has no reactive dependencies so it never needs to re-run. Use this for one-time setup like fetching initial data.\n\n3. useEffect(fn) — no array: the effect runs after every single render. Almost never what you want — avoid this.\n\nThink of useEffect like an event listener for state and props: when a dependency changes (which means the component re-rendered), the effect fires again. This is what keeps the component synchronised with external systems.',
  },
  {
    id: 80,
    category: 'React Internals',
    question: 'When exactly does useEffect run relative to the render, commit, and browser paint cycle?',
    answer:
      'Effects run asynchronously AFTER the browser has painted the updated screen. The full order is:\n1. Component renders (render phase)\n2. DOM is updated (commit phase)\n3. Browser paints the new screen ← visible to the user\n4. useEffect runs ← only here\n\nWhy: effects can contain long-running work (data fetching, subscriptions). Running them before the paint would block the screen update and show the user a stale UI for too long.\n\nImportant consequences:\n• If an effect sets state, it triggers a second render, which means the UI may briefly show an intermediate state. This is one reason not to overuse effects.\n• useLayoutEffect is an alternative that runs after commit but before the browser paints — useful for measuring DOM layout — but the React team discourages it in most cases.\n• In React 18 Strict Mode (development only), effects are intentionally invoked twice on mount to help detect missing cleanup functions. This does NOT happen in production.\n\nuseLayoutEffect: runs synchronously after DOM mutations but BEFORE the browser paints. Use it only when you need to read DOM layout (e.g. element dimensions or position) and immediately apply a correction to prevent a visible layout flash. For almost all other side effects, useEffect is correct and preferred — useLayoutEffect blocks the paint and should never be used for async work like data fetching.',
  },
  {
    id: 81,
    category: 'React Internals',
    question: 'What is the useEffect cleanup function, when does it run, and when do you need one?',
    answer:
      'A cleanup function is an optional function returned from a useEffect. React calls it in two situations:\n1. Before the effect runs again (when dependencies changed on a re-render) — to clean up the previous effect before starting fresh.\n2. When the component unmounts — to tear down any ongoing side effect.\n\nWith the dependency array controlling when effects run, and the cleanup function handling teardown, you have the entire component lifecycle covered.\n\nYou need a cleanup function whenever a side effect keeps going after the component re-renders or unmounts:\n• HTTP requests → cancel via AbortController to prevent race conditions (a second request firing before the first one finishes)\n• Subscriptions (API, WebSocket, observable) → unsubscribe/cancel\n• Timers (setTimeout, setInterval) → clearTimeout / clearInterval\n• DOM event listeners added with addEventListener → removeEventListener\n\nBest practice: each effect should do ONE thing. Use multiple useEffect hooks for multiple concerns — this makes each effect and its cleanup simpler to reason about and test.',
  },
  {
    id: 82,
    category: 'React Internals',
    question: 'How do you fetch data with useEffect and handle loading and error states?',
    answer:
      'The standard pattern:\n\n1. State — three variables: the data itself, isLoading (boolean), and error (string).\n\n2. useEffect with an empty dependency array — fetch runs once on mount.\n\n3. Async inside the effect — the useEffect callback cannot be async (see question 83), so you define a named async function inside and call it immediately.\n\n4. try / catch / finally:\n   • Set isLoading = true before fetching.\n   • In try: fetch, parse response, set data.\n   • In catch: set error message.\n   • In finally: set isLoading = false — this guarantees loading stops even if an error occurred.\n\n5. Manual error checks — the fetch API does not throw on HTTP error status codes. Check the response or any custom field the API returns (e.g. a "Response": "False" field) and throw a new Error manually when needed.\n\n6. Conditional rendering — three mutually exclusive conditions:\n   • isLoading is true → show a loading indicator\n   • error exists && !isLoading → show an error message\n   • !isLoading && !error → show the data\n\nAlways handle all three states — leaving out the loading or error case is a common oversight that leaves users staring at a blank or broken UI.',
  },
  {
    id: 83,
    category: 'React Internals',
    question: 'Why can\'t you make a useEffect callback async, and what is the correct pattern for async/await in effects?',
    answer:
      'useEffect expects its callback to return either nothing or a synchronous cleanup function. An async function always returns a Promise — not a cleanup function — which breaks React\'s interface and produces a warning.\n\nWrong:\nuseEffect(async () => {\n  const data = await fetch(url);\n}, []);\n\nCorrect — define the async function inside and call it:\nuseEffect(() => {\n  async function fetchData() {\n    const res = await fetch(url);\n    const data = await res.json();\n    setData(data);\n  }\n  fetchData();\n  // a cleanup function can still be returned here if needed\n}, []);\n\nThis keeps the outer callback synchronous while still letting you use async/await inside the inner function. It also makes it straightforward to return a cleanup (e.g. aborting the fetch) from the outer function.',
  },

  // ── HOOKS (RULES & DETAILS) ──────────────────────────────────────────────────
  {
    id: 84,
    category: 'React Internals',
    question: 'What are React hooks and what are the two fundamental rules for using them?',
    answer:
      'Hooks are special built-in React functions (always starting with "use") that let you hook into React\'s internal mechanisms — the Fiber tree — from function components. They replaced the need for class components for stateful logic.\n\nWhat hooks give you access to:\n• State in the Fiber tree (useState, useReducer)\n• Side effects registered in the Fiber tree (useEffect)\n• DOM element references (useRef)\n• Shared context values (useContext)\n• Performance optimisations (useMemo, useCallback)\n• And more (useTransition, useId, useLayoutEffect, etc.)\n\nTwo fundamental rules (enforced by the eslint-plugin-react-hooks):\n1. Only call hooks at the top level — never inside conditionals, loops, nested functions, or after an early return. React relies on hooks being called in the exact same order on every render to correctly match each hook call to its stored state in the Fiber tree. Violating this causes bugs that are very hard to debug.\n2. Only call hooks from React function components or custom hooks — never from plain JavaScript functions, class components, or outside a component.\n\nCreating a function whose name starts with "use" makes it a custom hook, which can reuse stateful logic across components.',
  },
  {
    id: 85,
    category: 'React Internals',
    question: 'What is lazy initial state in useState and when should you use it?',
    answer:
      'The value passed to useState() is only used on the very first render. On all subsequent renders React ignores it and uses the stored state value instead.\n\nProblem: if the initial value is expensive to compute and you write useState(expensiveFn()), the function runs on every render — even though its result is thrown away after the first.\n\nSolution — lazy initialisation: pass a callback instead of a value:\n// Wrong — runs on every render:\nconst [list, setList] = useState(parseStorageData());\n\n// Correct — runs only on initial render:\nconst [list, setList] = useState(() => parseStorageData());\n\nThe callback must be a pure function that takes no arguments and returns the initial value.\n\nUse lazy initialisation when computing the initial state is genuinely expensive — reading from localStorage, parsing large JSON, sorting a big array, etc.',
  },
  {
    id: 86,
    category: 'React Internals',
    question: 'What is useRef, what are its two main use cases, and how does it compare to state?',
    answer:
      'useRef creates a mutable object { current: initialValue } that persists across renders. The key differences from state:\n• Updating .current does NOT trigger a re-render.\n• .current is mutable — you can write to it directly.\n• Updates are synchronous (not batched/asynchronous like setState).\n\nTwo use cases:\n1. Persisting a mutable value between renders without causing re-renders — e.g. storing the return value of setTimeout/setInterval (to clear it later), tracking how many times something has happened, or storing the previous value of a prop.\n2. Accessing/storing a DOM element — assign the ref to a JSX element\'s ref={myRef} prop. React sets myRef.current to the DOM node after mounting, allowing direct interaction (focus, measure, play/pause media). This is the declarative React alternative to document.querySelector.\n\nImportant rules:\n• Do NOT read or write .current during render logic — only in event handlers or useEffect.\n• If a value needs to appear in the JSX output, use state. Refs are for data that is NOT rendered.\n\nComparison:\n• useState: persists ✓ | causes re-render ✓ | immutable ✓ | async updates ✓\n• useRef:   persists ✓ | causes re-render ✗ | immutable ✗ | async updates ✗',
  },
  {
    id: 87,
    category: 'React Internals',
    question: 'What are custom hooks, when should you create one, and what rules apply?',
    answer:
      'A custom hook is a regular JavaScript function whose name starts with "use" that internally calls one or more built-in React hooks. Custom hooks let you extract and reuse non-visual stateful logic — state, effects, refs — across multiple components.\n\nWhen to create one:\n• The same stateful logic (involving hooks) is needed in more than one component — extract it.\n• A component has complex hook logic that can be given a clear, descriptive name — extract it for readability even if it is only used once.\n• Rule: use a regular function for reusable logic WITHOUT hooks; use a custom hook for reusable logic WITH hooks.\n\nRules:\n• Name must start with "use" — this is how React identifies it as a hook and enforces the hook rules inside it.\n• All hook rules apply inside custom hooks (top-level calls only, etc.).\n• Each custom hook should have a single, well-defined purpose so it remains reusable and portable across projects.\n• Can receive any arguments and return any data — typically an object or array of values and updater functions.\n\nExample:\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [isLoading, setIsLoading] = useState(false);\n  useEffect(() => { /* fetch, set data/loading */ }, [url]);\n  return { data, isLoading };\n}',
  },

  // ── useREDUCER ──────────────────────────────────────────────────────────────
  {
    id: 88,
    category: 'State Management',
    question: 'What is useReducer and when should you use it instead of useState?',
    answer:
      'useReducer is an alternative hook for managing state, modelled after the array.reduce() pattern. Instead of a setter function, you dispatch action objects to a pure reducer function that computes the next state.\n\nconst [state, dispatch] = useReducer(reducerFn, initialState);\ndispatch({ type: \'increment\', payload: 1 });\n\nPrefer useReducer when:\n• Multiple related pieces of state belong together in one object.\n• Multiple state updates need to happen together in response to the same event.\n• The new state depends on other existing pieces of state.\n• Many event handlers spread across components are making the code hard to follow.\n• You want to decouple the update logic from the component by centralising it in a reducer — this makes complex state changes easier to read and test.\n\nStick with useState when:\n• State is a single, independent primitive (number, string, boolean).\n• Updates are simple and infrequent with no inter-dependencies.\n\nuseState is always the default. Reach for useReducer only when state management becomes complex.',
  },
  {
    id: 89,
    category: 'State Management',
    question: 'How does useReducer work? Explain the reducer function, actions, dispatch, and action creators.',
    answer:
      'useReducer(reducerFn, initialState) returns [state, dispatch].\n\nReducer function — a PURE function (no side effects, no mutation) with signature (state, action) => newState. It must return a brand new state object, never mutate the existing one. Conventionally implemented with a switch on action.type. The default case should throw an error (unknown action):\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \'inc\': return { ...state, count: state.count + 1 };\n    case \'setCount\': return { ...state, count: action.payload };\n    default: throw new Error(\'Unknown action\');\n  }\n}\n\nAction — a plain object describing what happened. Convention: { type: \'domain/action\', payload: value }. payload is optional.\n\nDispatch — call dispatch(action) to send an action to the reducer. React computes the next state and triggers a re-render.\n\nAction creator functions — helpers that return action objects. Optional but strongly conventional — they prevent type-string typos and centralise the action shape:\nconst increment = () => ({ type: \'inc\' });\nconst setCount = (n) => ({ type: \'setCount\', payload: n });\ndispatch(increment());\n\nThe reducer pattern is similar to how Redux works and is worth knowing because the mental model transfers directly.',
  },

  // ── CONTEXT API ─────────────────────────────────────────────────────────────
  {
    id: 90,
    category: 'State Management',
    question: 'What is the React Context API, what problem does it solve, and what are its three parts?',
    answer:
      'The Context API solves prop drilling — passing props through multiple intermediate components that do not use the data themselves, just to forward it to a deeply nested child.\n\nContext broadcasts a value to any component in the subtree that wants to subscribe, with no manual prop threading.\n\nThree parts:\n1. createContext() — creates the context object. Call it once, usually in its own file. Accepts an optional default value (usually null or undefined).\n2. Context.Provider — a wrapper component. All children inside it can access the context value. Accepts a value prop containing the data to share (state, functions, etc.). When value changes, every consumer re-renders.\n3. useContext(MyContext) — the hook that subscribes a component to the context and returns its current value.\n\nImportant: every consumer re-renders whenever the context value object changes reference — even if only one property changed. For performance, avoid putting unrelated values into the same context. Create one context per related group of state.',
  },
  {
    id: 91,
    category: 'State Management',
    question: 'What is the recommended pattern for creating, providing, and consuming a context?',
    answer:
      'Best practice: co-locate the context, its provider component, and a custom consumer hook in a single dedicated file.\n\n// PostsContext.js\nconst PostsContext = createContext();\n\nfunction PostsProvider({ children }) {\n  const [posts, setPosts] = useState([]);\n  return (\n    <PostsContext.Provider value={{ posts, setPosts }}>\n      {children}\n    </PostsContext.Provider>\n  );\n}\n\nfunction usePosts() {\n  const context = useContext(PostsContext);\n  if (context === undefined)\n    throw new Error(\'usePosts must be used inside PostsProvider\');\n  return context;\n}\n\nexport { PostsProvider, usePosts };\n\nConsumers import only usePosts() and PostsProvider — the raw PostsContext object stays private. The guard in usePosts() gives a clear error instead of a cryptic undefined bug if someone forgets to wrap the tree.\n\nIn App.js, wrap the tree:\n<PostsProvider><App /></PostsProvider>\n\nIn any child:\nconst { posts } = usePosts();',
  },

  // ── STATE MANAGEMENT OVERVIEW ────────────────────────────────────────────────
  {
    id: 92,
    category: 'State Management',
    question: 'What are the different types of state in React and which tools should you use for each?',
    answer:
      'State has two dimensions:\n\nAccessibility:\n• Local state — needed by one or a few components. Store in the component or lift to the nearest common parent.\n• Global state — needed across many components. Use Context, Redux/Zustand, URL, or browser storage.\n\nDomain:\n• UI state — theme, filters, form data, modal open/closed. Synchronous, lives in the app. Easy to manage.\n• Remote state — server data from an API. Asynchronous, needs caching, refetching, error handling.\n\nRecommended tools:\n• Local UI state → useState, useReducer, useRef\n• Local remote state (small app) → fetch + useEffect + useState/useReducer\n• Global UI state → Context API + useState/useReducer; or Redux, Zustand, Recoil\n• Global remote state → React Query, SWR, RTK Query (handle caching, background refetching, deduplication automatically — much better than rolling your own with useEffect)\n• URL state (bookmarkable, shareable across pages) → React Router\n• Browser-persistent state → localStorage / sessionStorage\n\nuseState is always the starting point. Add complexity only when a simpler tool hits its limits.',
  },

  // ── PERFORMANCE ──────────────────────────────────────────────────────────────
  {
    id: 93,
    category: 'Performance',
    question: 'What is a "wasted render" in React and what are the main strategies to prevent them?',
    answer:
      'A wasted render is when a component re-renders but produces identical JSX output — no DOM update happens, but computation time was spent.\n\nCauses:\n• A parent re-renders → all children re-render by default, even if their props are unchanged.\n• A subscribed context updates → all consumers re-render.\n\nWasted renders are harmless for most components (React is fast). They only matter when a component is heavy (expensive to render) or re-renders too frequently.\n\nUse the React DevTools Profiler to find actual bottlenecks BEFORE optimising.\n\nPrevention strategies:\n1. Pass components as children prop — a component passed as children is created in the parent\'s parent, so it is not recreated when the parent\'s own state changes (as long as it doesn\'t consume that state itself).\n2. memo(Component) — memoizes a component; skips re-render if props are shallowly equal.\n3. useMemo — memoizes an expensive computed value.\n4. useCallback — memoizes a function reference (so it is stable across renders).\n\nDo NOT apply these everywhere — memoization has its own cost. Profile first, optimise only real problems.',
  },
  {
    id: 94,
    category: 'Performance',
    question: 'What does memo() do in React and when should (and shouldn\'t) you use it?',
    answer:
      'memo() is a higher-order component that memoizes a component. A memo-wrapped component skips re-rendering when its parent re-renders, as long as its props have not changed (shallow comparison).\n\nimport { memo } from \'react\';\nconst List = memo(function List({ items }) { ... });\n\nA memoized component STILL re-renders when:\n• Its own state changes.\n• A context it consumes changes.\n• Any of its props change — including objects/functions that are re-created on every parent render.\n\nWhen to use:\n• The component is genuinely slow/heavy AND re-renders frequently with the same props.\n• The component is at a point in the tree where a parent\'s unrelated state change would otherwise trigger it needlessly.\n\nWhen NOT to use:\n• Don\'t wrap every component — the prop-comparison cost on every parent render can outweigh the savings.\n• memo() is ineffective if object or function props are re-created on every render (new reference = "changed" prop). Fix that with useMemo and useCallback first.',
  },
  {
    id: 95,
    category: 'Performance',
    question: 'What are useMemo and useCallback, when do you need them, and what is the difference between them?',
    answer:
      'Both hooks memoize values across renders using the same dependency-array contract as useEffect — the memoized value is recalculated only when a dependency changes.\n\nuseMemo — memoizes a computed value:\nconst sorted = useMemo(() => [...items].sort(compareFn), [items]);\n\nuseCallback — memoizes a function (a special case where the "value" is a function):\nconst handleAdd = useCallback((item) => dispatch({ type: \'add\', payload: item }), [dispatch]);\n\nWhy they matter: on every render, all objects and functions defined inside a component are re-created with new references. Even if the content is identical, {} !== {} in JavaScript. This makes memo() useless for those props, because every render looks like "new props."\n\nWhen you actually need them:\n1. An object or function is passed as a prop to a memo()-wrapped child — without memoization the child always re-renders anyway.\n2. An expensive calculation (sorting/filtering a large array) should not run on every render.\n3. A value or function is in a useEffect dependency array and its re-creation on every render would trigger the effect in an infinite loop.\n\nWhen NOT to use them:\n• Don\'t wrap every value and function — the memoization bookkeeping has a cost.\n• Profile first. Only apply useMemo/useCallback where a real problem is measured.',
  },
  {
    id: 96,
    category: 'Performance',
    question: 'What is code splitting and lazy loading in React and how do you implement it?',
    answer:
      'A React SPA ships as a single bundle file — all application code downloaded before anything renders. For large apps this initial download is slow.\n\nCode splitting breaks the bundle into smaller chunks downloaded on demand ("lazy loading"). The user only fetches the code needed for the current page.\n\nImplementation with React.lazy and Suspense:\nimport { lazy, Suspense } from \'react\';\n\nconst MoviePage = lazy(() => import(\'./pages/MoviePage\'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loader />}>\n      <Routes>\n        <Route path="/movies" element={<MoviePage />} />\n      </Routes>\n    </Suspense>\n  );\n}\n\nHow it works:\n• lazy() wraps a dynamic import(). The chunk is downloaded the first time the component is needed.\n• Suspense catches the in-progress load and renders the fallback (usually a spinner) while the chunk downloads.\n• Each chunk is fetched and cached once — subsequent navigations use the cached version, so Suspense only activates on the very first visit to that route.\n\nBest applied at the route level in SPAs — each page becomes its own chunk, so the user only downloads the pages they actually visit.',
  },

  // ── REDUX ────────────────────────────────────────────────────────────────────
  {
    id: 97,
    category: 'Redux',
    question: 'What is Redux and when would you choose it over the Context API?',
    answer:
      'Redux is a standalone state management library that stores all global state in a single, centrally accessible store, updated via dispatched actions processed by pure reducer functions. It integrates with React through the react-redux library.\n\nContext API is sufficient when:\n• State does not change very frequently.\n• The number of consumers is small.\n• State logic is simple.\n\nConsider Redux (or a modern alternative like Zustand) when:\n• Many components consume global state that updates very frequently — Redux uses optimised subscriptions so a component only re-renders when its specific slice changes, unlike Context which re-renders all consumers.\n• State update logic is complex (many actions, inter-dependent state).\n• You want Redux DevTools for time-travel debugging, action logging, and state inspection.\n• The team is large and a strict, centralised pattern improves consistency.\n\nFor global REMOTE state (server data), prefer specialised tools: React Query, SWR, or RTK Query — they handle caching, background refetching, and synchronisation far better than Redux or Context.\n\nModern note: Redux Toolkit (RTK) is the official, opinionated, modern way to use Redux — it eliminates most boilerplate from "Classic Redux."',
  },
  {
    id: 98,
    category: 'Redux',
    question: 'How does Redux work? Explain the store, reducers, actions, and action creators.',
    answer:
      'Redux implements a strict one-directional data flow:\n\n1. Store — the single source of truth. A plain JavaScript object holding the entire global state. Created with createStore(rootReducer) (classic) or configureStore() (RTK).\n\n2. Reducer — a pure function (state, action) => newState. Contains all update logic. Must never mutate the current state — return a new object. The default case must return the current state (not throw, unlike useReducer convention).\n\n3. Action — a plain object describing what happened:\n{ type: \'cart/addItem\', payload: item }\nConvention: "domain/action" format for type.\n\n4. Action creators — functions that return action objects:\nconst addItem = (item) => ({ type: \'cart/addItem\', payload: item });\nOptional but conventional — they prevent type-string typos.\n\n5. Dispatch — store.dispatch(action) sends the action to the root reducer, computes the new state, and notifies all subscribers.\n\n6. combineReducers — merges multiple slice reducers into one root reducer:\nconst rootReducer = combineReducers({ cart: cartReducer, user: userReducer });\n\nMiddleware sits between dispatch and the reducer — the correct place for async code since reducers must be pure and synchronous.',
  },
  {
    id: 99,
    category: 'Redux',
    question: 'How do you connect a Redux store to a React app and read/update state from components?',
    answer:
      'Three steps:\n\n1. Wrap the app with Provider (from react-redux), passing the store:\nimport { Provider } from \'react-redux\';\n<Provider store={store}><App /></Provider>\n\n2. Read state with useSelector — pass a selector function that receives the full Redux state and returns the slice the component needs. The component re-renders ONLY when that returned slice changes (optimised subscription):\nconst count = useSelector((state) => state.counter.count);\n\n3. Dispatch actions with useDispatch:\nconst dispatch = useDispatch();\ndispatch(increment());      // action creator\ndispatch({ type: \'counter/reset\' }); // inline action\n\nThis cleanly separates concerns: all state logic lives in slice files and the store; components stay thin — they just read with useSelector and write with useDispatch.',
  },
  {
    id: 100,
    category: 'Redux',
    question: 'What is Redux middleware and what is Redux Thunk used for?',
    answer:
      'Reducers must be pure and synchronous — they cannot make API calls, set timers, or produce side effects. Middleware is code that sits between dispatching an action and the reducer processing it. This is the correct place for async operations and side effects in Redux.\n\nRedux Thunk is the most popular middleware. It allows action creators to return a function (the "thunk") instead of a plain action object. The thunk receives (dispatch, getState) as arguments, allowing it to perform async work and dispatch real actions when done:\n\n// Thunk action creator\nfunction fetchUser(id) {\n  return async function (dispatch) {\n    dispatch({ type: \'user/loading\' });\n    const data = await fetch(\'/api/users/\' + id).then(r => r.json());\n    dispatch({ type: \'user/loaded\', payload: data });\n  };\n}\n// In a component:\ndispatch(fetchUser(42));\n\nApplying Thunk middleware:\nconst store = createStore(rootReducer, applyMiddleware(thunk));\n\nThunks keep async logic out of components (components just dispatch) and out of reducers (reducers stay pure).\n\nModern Redux Toolkit note: RTK\'s createAsyncThunk generates the loading/success/error action types automatically and is the preferred pattern today.',
  },

  // ── REACT QUERY ──────────────────────────────────────────────────────────────
  {
    id: 101,
    category: 'React Query',
    question: 'What is React Query and why would you use it instead of useEffect + useState for data fetching?',
    answer:
      'React Query is a library for managing remote (server) state in React. It is sometimes described as "the library React is missing itself" because it solves problems that useEffect + useState cannot handle cleanly.\n\nWhat React Query gives you out of the box:\n• Automatic caching — fetched data is stored in a cache and reused instantly by any component that needs it, without re-fetching.\n• Automatic loading and error states — no need to manually manage isLoading and error variables.\n• Automatic re-fetching — data is re-fetched in the background after a configurable stale time, when the browser window is refocused, or when the network reconnects, keeping the UI in sync with the server.\n• Data pre-fetching — fetch data before it is needed (e.g. next page in pagination).\n• Offline support — components can still display cached data when the connection is lost.\n• Easy mutation with cache invalidation — updating the server and keeping the local cache in sync is handled with a single hook.\n\nWhy useEffect + useState falls short: remote state can get out of sync when multiple users or browser tabs run the app concurrently. React Query solves this with its cache management and background re-fetching strategy.',
  },
  {
    id: 102,
    category: 'React Query',
    question: 'How do you fetch data with React Query\'s useQuery hook?',
    answer:
      'Setup: create a QueryClient, wrap the app in QueryClientProvider, and pass the client to it:\nconst queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } });\n<QueryClientProvider client={queryClient}><App /></QueryClientProvider>\n\nFetching in a component — call useQuery with two required options:\nconst { isLoading, data, error } = useQuery({\n  queryKey: [\'cabins\'],   // unique cache key — always an array\n  queryFn: getCabins,      // async function that fetches and returns data\n});\n\nqueryKey: a unique identifier for this data in the cache. If another component calls useQuery with the same key, it gets the cached data immediately with no extra request.\n\nqueryFn: the async function that does the actual fetching. It must throw an error on failure so React Query can populate the error state.\n\nReturn values:\n• isLoading — true while the first fetch is in progress.\n• data — the resolved value from queryFn once successful.\n• error — the thrown error object if queryFn rejected.',
  },
  {
    id: 103,
    category: 'React Query',
    question: 'How do you mutate (create, update, delete) server data with React Query\'s useMutation hook?',
    answer:
      'useMutation handles any non-GET operation (create, update, delete). Unlike useQuery it does not run automatically — you call the mutate function manually (e.g. on a button click).\n\nconst { mutate, isLoading } = useMutation({\n  mutationFn: deleteCabin,\n  onSuccess: () => {\n    toast.success(\'Deleted!\');\n    queryClient.invalidateQueries({ queryKey: [\'cabins\'] });\n  },\n  onError: (err) => toast.error(err.message),\n});\n<button onClick={() => mutate(cabinId)}>Delete</button>\n\nKey options:\n• mutationFn — the async function to call. Receives whatever argument you pass to mutate().\n• onSuccess — callback after a successful mutation. The standard pattern is to call queryClient.invalidateQueries() here, which marks the cached data as stale and triggers an automatic re-fetch, keeping the UI in sync with the server.\n• onError — callback when the mutation throws.\n\nuseQueryClient() gives access to the QueryClient instance so you can invalidate queries from inside callbacks.',
  },
  {
    id: 104,
    category: 'React Query',
    question: 'What is the React Query cache, what does staleTime control, and how do they make the UI feel instant?',
    answer:
      'The cache is React Query\'s in-memory store for fetched data, keyed by queryKey. When a component mounts and calls useQuery, React Query checks the cache first:\n• Cache miss → normal fetch, isLoading is true until data arrives.\n• Cache hit + data is fresh → data returned instantly, no network request.\n• Cache hit + data is stale → stale data returned immediately (no spinner), while a background re-fetch updates it silently.\n\nstaleTime (default: 0 ms) controls how long data is considered "fresh." During this window React Query will NOT re-fetch, even if the component remounts or the window is refocused. Example: staleTime: 60 * 1000 keeps data fresh for 60 seconds.\n\nOnce staleTime expires, data becomes "stale" — React Query re-fetches in the background the next time a component needs it.\n\nThis is what makes React Query feel instant: the cached value (possibly slightly old) renders immediately while a fresh fetch runs quietly behind the scenes.',
  },
  // ── WHAT IS REACT ─────────────────────────────────────────────────────────────
  {
    id: 105,
    category: 'Components',
    question: 'What is React and what are its main features?',
    answer:
      'React is an open-source JavaScript library developed by Meta (Facebook) for building user interfaces, particularly single-page applications. It focuses on the view layer only — it is not a full framework.\n\nMain features:\n• Component-based architecture — UIs are built from small, reusable, self-contained components.\n• Declarative — you describe what the UI should look like for a given state; React handles all DOM updates.\n• Virtual DOM — an in-memory representation of the DOM; React diffs and applies only the minimum required changes to the real DOM.\n• One-way data flow — data flows from parent to child via props, making the app predictable and easier to debug.\n• JSX — a syntax extension that lets you write HTML-like markup inside JavaScript, compiled to React.createElement() calls by Babel.\n• Rich ecosystem — hooks, React Router, Redux, React Query, and large community support.',
  },

  // ── CLASS VS FUNCTION ─────────────────────────────────────────────────────────
  {
    id: 106,
    category: 'Components',
    question: 'What is the difference between class components and functional components in React, and when would you use a class component?',
    answer:
      'Class components extend React.Component. They manage state via this.state, update it with this.setState(), and use lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) for side effects.\n\nFunction components are plain JavaScript functions that accept props and return JSX. Since React 16.8, hooks (useState, useEffect, useRef, useContext, etc.) give function components full parity with class components.\n\nKey differences:\n• Syntax: class components are more verbose; function components are simpler and shorter.\n• State: class uses this.state + this.setState(); function uses useState.\n• Lifecycle: class uses lifecycle methods; function uses useEffect.\n• this: class components require binding event handlers and reading this.state, which is a common source of bugs. Function components have no this.\n• New APIs: Suspense data fetching, Server Components, the use hook, Actions, and the React Compiler are function-component-only.\n\nWhen to use a class component: default to function components for all new code. The only remaining reason to write a class today is implementing an error boundary, which still requires the class lifecycle methods getDerivedStateFromError and componentDidCatch — there is no hook equivalent.',
  },

  // ── PURE COMPONENTS ───────────────────────────────────────────────────────────
  {
    id: 107,
    category: 'Performance',
    question: 'What are Pure Components in React?',
    answer:
      'A Pure Component only re-renders when its props or state actually change, using a shallow comparison before deciding whether to render.\n\nClass components: extend React.PureComponent instead of React.Component. React performs a shallow comparison of props and state before each render and skips it if nothing changed.\n\nFunction components: wrap with React.memo():\nconst MyComponent = React.memo(function MyComponent({ value }) {\n  return <div>{value}</div>;\n});\n\nShallow comparison means primitives are compared by value (1 === 1) but objects and arrays are compared by reference ({} !== {}, even if contents are identical). Passing a new object/array literal on every render defeats the optimization — stabilize references with useMemo and useCallback first.\n\nWith the React Compiler enabled (React 19+), manual memoization with React.memo, useMemo, and useCallback is rarely needed; the compiler inserts equivalent memoization automatically.\n\nSee also: memo(), useMemo, useCallback.',
  },

  // ── CREATEELEMENT VS CLONEELEMENT ─────────────────────────────────────────────
  {
    id: 108,
    category: 'React Internals',
    question: 'What is the difference between React.createElement and React.cloneElement?',
    answer:
      'Both return React elements but serve different purposes.\n\nReact.createElement(type, props, ...children) creates a brand new React element from scratch. This is what JSX compiles to under the hood:\n<div className="box">Hello</div>\n// becomes:\nReact.createElement(\'div\', { className: \'box\' }, \'Hello\')\n\nReact.cloneElement(element, extraProps, ...children) clones an existing React element and merges new props into it. The original type is preserved; only the specified props are overridden.\n\nconst base = <Button variant="primary">Click</Button>;\nconst clone = React.cloneElement(base, { disabled: true });\n// Result: <Button variant="primary" disabled>Click</Button>\n\nCommon use case for cloneElement: a parent component that receives children and needs to inject additional props without the caller needing to know (e.g. a RadioGroup adding a shared name prop to each Radio child). This is an advanced pattern — for new component APIs, prefer explicit props or the children prop pattern (component composition).',
  },

  // ── REACT FIBER ───────────────────────────────────────────────────────────────
  {
    id: 109,
    category: 'React Internals',
    question: 'What is React Fiber?',
    answer:
      'React Fiber is a complete reimplementation of React\'s core reconciliation algorithm, shipped in React 16. Before Fiber, React processed the entire component tree synchronously in one pass — large trees could block the main thread and cause dropped frames.\n\nFiber solves this by breaking rendering work into small units that can be:\n• Paused and resumed — React yields control back to the browser between units so it can handle user input or animations.\n• Prioritized — urgent updates (typing, clicking) are processed before non-urgent ones (background data loading).\n• Aborted and restarted — if a higher-priority update arrives, in-progress lower-priority work can be discarded.\n\nThis architecture is the foundation for all of React\'s concurrent features: Suspense, useTransition, automatic batching in React 18, and time-slicing.\n\nThe term "Fiber" refers to both the algorithm (the architecture) and the individual unit of work: a fiber node is a persistent internal object in the Fiber tree that stores each component\'s state, hooks, side effects, and pending work. See also: Fiber tree, reconciliation.',
  },

  // ── FORWARD REF ───────────────────────────────────────────────────────────────
  {
    id: 110,
    category: 'React Internals',
    question: 'What is forwardRef in React and when do you use it?',
    answer:
      'By default, the ref prop is reserved by React and not forwarded to function components as a regular prop. forwardRef() is a wrapper that lets a parent pass a ref through to a child DOM element or inner component.\n\nPre-React 19 (still the common pattern in most codebases):\nconst Input = React.forwardRef(function Input(props, ref) {\n  return <input ref={ref} {...props} />;\n});\n// Parent:\nconst inputRef = useRef(null);\n<Input ref={inputRef} />\n// inputRef.current now points to the actual <input> DOM node\n\nCommon use cases:\n• Giving a parent direct access to a child\'s DOM element (focus, measure, scroll, play/pause media).\n• Building reusable UI libraries where consumers need DOM access.\n\nReact 19 change: ref is now a regular prop on function components and forwardRef is deprecated:\nfunction Input({ ref, ...props }) {\n  return <input ref={ref} {...props} />;\n}\n\nIf you are working in a React 18 codebase or building a library that must support both versions, forwardRef is still widely used and important to know.',
  },

  // ── ERROR BOUNDARIES ──────────────────────────────────────────────────────────
  {
    id: 111,
    category: 'React Internals',
    question: 'What are error boundaries in React and how do you implement one?',
    answer:
      'An error boundary catches JavaScript errors in its child component tree, logs them, and displays a fallback UI instead of crashing the entire application.\n\nError boundaries are still class components — there is no function component or hook equivalent. This is the one remaining reason to write a class component in modern React.\n\nThey catch errors thrown during: rendering, lifecycle methods, and constructors of child components.\nThey do NOT catch: errors in event handlers (use try/catch there), async code (setTimeout, Promises), or errors in the error boundary itself.\n\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    logErrorToService(error, info.componentStack);\n  }\n\n  render() {\n    if (this.state.hasError) return <h1>Something went wrong.</h1>;\n    return this.props.children;\n  }\n}\n\n<ErrorBoundary>\n  <MyComponent />\n</ErrorBoundary>\n\nTip: the react-error-boundary library provides a ready-to-use component with a fallbackRender prop, so you rarely need to write the class from scratch.',
  },

  // ── SUSPENSE ──────────────────────────────────────────────────────────────────
  {
    id: 112,
    category: 'Performance',
    question: 'What is React Suspense and what can it be used for?',
    answer:
      'Suspense is a React component that lets you "wait" for something asynchronous before rendering a subtree, showing a fallback UI in the meantime.\n\n<Suspense fallback={<Spinner />}>\n  <SomeAsyncComponent />\n</Suspense>\n\nCurrently Suspense integrates with:\n1. Code splitting via React.lazy() — the fallback renders while the JS chunk downloads. This is the most common use today.\n2. Data fetching — frameworks like Next.js and Remix, and libraries like React Query (with Suspense mode), let components suspend until their data is ready.\n3. useTransition and useDeferredValue — mark state updates as non-urgent so React keeps the current UI visible while rendering the new state in the background, instead of immediately showing a spinner.\n\nHow suspension works: a component signals it is not ready by throwing a Promise. Suspense catches it, renders the fallback, and retries the component when the Promise resolves.\n\nNesting: multiple Suspense boundaries can be nested for granular fallbacks — inner boundaries show their own spinners independently.\n\nSuspense + Error Boundary: Suspense handles the loading state; an error boundary handles the error state. Wrap a Suspense boundary inside an error boundary to cover both cases.',
  },

  // ── HYDRATION ─────────────────────────────────────────────────────────────────
  {
    id: 113,
    category: 'React Internals',
    question: 'What is React hydration?',
    answer:
      'Hydration is the process of attaching React\'s event listeners and client-side interactivity to HTML that was already rendered on the server (SSR).\n\nWith server-side rendering (Next.js, Remix), the server sends fully formed HTML to the browser. The user sees content immediately — before any JavaScript loads. This improves First Contentful Paint and SEO.\n\nOnce the React JS bundle loads on the client, React "hydrates" the existing HTML:\n1. React walks the server-rendered DOM.\n2. It matches each DOM node to its corresponding React component.\n3. It attaches event handlers, initialises state, and connects the Fiber tree to the existing DOM — without discarding or repainting the HTML.\n\nResult: fast initial display from the server, then full React interactivity once hydrated.\n\nHydration mismatch: if the server HTML differs from what React renders on the client (e.g. using Math.random(), new Date(), or browser-only APIs during the initial render), React logs a warning and corrects the DOM, which can cause a flash. Avoid non-deterministic values in the initial render.\n\nReact 18 selective hydration: with Suspense boundaries, React can prioritise hydrating the most user-interactive parts of the page first, improving Time to Interactive (TTI).',
  },

  // ── PORTALS ───────────────────────────────────────────────────────────────────
  {
    id: 114,
    category: 'React Internals',
    question: 'What are React Portals and when should you use them?',
    answer:
      'Portals let you render a component\'s JSX output into a different DOM node than where the component lives in the React tree — typically directly onto document.body or a dedicated overlay container.\n\nimport { createPortal } from \'react-dom\';\n\nfunction Modal({ children }) {\n  return createPortal(\n    <div className="modal-overlay">{children}</div>,\n    document.body\n  );\n}\n\nWhy they are needed: a component\'s DOM output is normally always a child of its parent\'s DOM. This causes problems for full-screen UI — a parent with overflow: hidden, a CSS stacking context (transform, filter, will-change), or a low z-index will clip or trap modals, tooltips, and dropdowns. Portals escape those constraints while keeping the component logically inside the React tree.\n\nWhat stays the same inside a portal:\n• Event bubbling follows the React component tree, not the DOM tree — events bubble up to React ancestors as expected.\n• Context works normally — components inside a portal still receive context from their React parent.\n• React lifecycle (mount, update, unmount) is governed by the component\'s position in the React tree.\n\nCommon use cases: modals, drawers, tooltips, dropdown menus, toasts and notifications.',
  },

  // ── USE ID ────────────────────────────────────────────────────────────────────
  {
    id: 115,
    category: 'React Internals',
    question: 'What is the useId hook and when should you use it?',
    answer:
      'useId is a React hook that generates a stable, unique ID that is consistent between the server render and the client hydration pass — preventing SSR mismatches.\n\nimport { useId } from \'react\';\n\nfunction FormField({ label }) {\n  const id = useId();\n  return (\n    <div>\n      <label htmlFor={id}>{label}</label>\n      <input id={id} type="text" />\n    </div>\n  );\n}\n\nPrimary use cases:\n• Linking a <label> to its <input> via htmlFor/id — especially when the component renders multiple times on the same page and hard-coded IDs would collide.\n• Accessibility attributes that reference DOM IDs: aria-labelledby, aria-describedby, aria-controls.\n\nDo NOT use useId for list keys — always use the item\'s own data ID from your database for list keys.\n\nBefore useId existed: developers used Math.random() for uniqueness (caused SSR hydration mismatches — server and client generated different values) or hard-coded IDs (collided when the component was reused on the same page).',
  },

  // ── CONTEXT OPTIMIZATION ─────────────────────────────────────────────────────
  {
    id: 116,
    category: 'State Management',
    question: 'How do you optimize React context to prevent unnecessary re-renders?',
    answer:
      'Every component that consumes a context re-renders whenever the context value changes reference — even if the specific data it reads did not change. Three strategies:\n\n1. Memoize the context value with useMemo:\nconst value = useMemo(() => ({ state, dispatch }), [state, dispatch]);\n// Without useMemo, a new object is created on every parent render,\n// triggering all consumers even when state is unchanged.\n\n2. Split contexts by update frequency:\nInstead of one AppContext with everything, create separate contexts:\n<AuthContext.Provider value={auth}>\n  <ThemeContext.Provider value={theme}>\nA component that only reads ThemeContext will not re-render when AuthContext changes.\n\n3. Separate state and dispatch contexts:\nProvide { state } and { dispatch } in two separate contexts. Components that only dispatch (buttons, forms) subscribe to the dispatch context only, which never changes reference, and never re-render due to state updates.\n\n4. For advanced use cases: the use-context-selector library allows subscribing to a specific slice of a context with a selector function — similar to how Redux\'s useSelector only re-renders when the selected slice changes.\n\nProfile with React DevTools Profiler before optimising — most context-triggered re-renders are fast and harmless.',
  },

  // ── FLUX ─────────────────────────────────────────────────────────────────────
  {
    id: 117,
    category: 'State Management',
    question: 'What is the Flux pattern?',
    answer:
      'Flux is an application architecture pattern developed by Meta for building client-side web applications. It enforces a strict unidirectional data flow to make state changes predictable and easy to trace.\n\nFour parts:\n1. Action — a plain object describing an event: { type: \'ADD_ITEM\', payload: item }.\n2. Dispatcher — a central hub that receives all actions and forwards them to every registered Store.\n3. Store — holds a slice of application state and all the logic for updating it in response to actions. Notifies Views when state changes.\n4. View (React component) — reads data from Stores, renders the UI, and creates new Actions in response to user interactions.\n\nUnidirectional flow:\nAction → Dispatcher → Store → View → (user interaction) → Action\n\nWhy it matters: before Flux, many apps used bidirectional data binding where UI changes could mutate data models directly, causing unpredictable cascading updates. Flux\'s single direction makes it always clear where a state change originated.\n\nFlux\'s legacy: Redux is the most popular implementation of the Flux pattern. It simplifies Flux by replacing the Dispatcher with a single reducer function and a single store, while preserving the same unidirectional principle. Understanding Flux explains the design decisions behind Redux.',
  },

  // ── ANTI-PATTERNS ─────────────────────────────────────────────────────────────
  {
    id: 118,
    category: 'Architecture',
    question: 'What are common React anti-patterns to avoid?',
    answer:
      '1. Directly mutating state — never mutate state in place. Always return a new array or object: setItems([...items, newItem]). Direct mutation bypasses React\'s change detection and prevents re-renders.\n\n2. Deriving state with useEffect — if a value can be computed from existing state or props, calculate it as a regular variable during render. Using an effect for this adds an extra render cycle and is a common source of bugs.\n\n3. Storing derived data in state — avoid syncing calculated values in a separate state variable. Compute them inline instead: const total = items.reduce(...);\n\n4. Using array index as a key for a dynamic list — causes incorrect state reuse and performance regressions when items are reordered, added, or removed.\n\n5. Defining components inside other components — creates a new component type on every render, so React destroys and remounts the inner subtree on every parent re-render. Always define components at module top level.\n\n6. Missing or stale useEffect dependencies — causes stale closures (reading outdated values) or missing effects. The eslint-plugin-react-hooks exhaustive-deps rule catches this automatically.\n\n7. Overusing useEffect for logic that belongs in event handlers — if a side effect is triggered by a user action, put it directly in the event handler, not in an effect.\n\n8. Using useState for values that do not drive rendering — use useRef instead to avoid unnecessary re-renders (e.g. storing timer IDs, previous values, or DOM references).\n\n9. Prop drilling more than 2–3 levels deep — reach for context or component composition to avoid threading props through unrelated intermediaries.\n\n10. Calling hooks conditionally or inside loops — violates the Rules of Hooks and causes React to lose track of which hook call corresponds to which stored state in the Fiber tree.',
  },
];

export default questions;
