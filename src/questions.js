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
      'React uses keys to identify each element in a list uniquely between renders. Without keys, React has to re-render the entire list on any change. With proper keys, React can pinpoint exactly which items changed/added/removed and only update those — improving performance and preventing bugs like incorrect component state being assigned to the wrong item.',
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
      'Controlled elements are form inputs (input, select, textarea) whose value is controlled by React state, not the DOM.\n\nImplementation:\n1. Create state: const [value, setValue] = useState("")\n2. Set the input value to state: value={value}\n3. Handle changes: onChange={e => setValue(e.target.value)}\n\nThis centralizes form state in the component and is the React way of managing forms.',
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
];

export default questions;
