const questions = [
  {
    id: 'js-1',
    category: 'Variables & Scope',
    question: 'What is the difference between let, const, and var?',
    answer:
      'var: function-scoped, hoisted and initialized as undefined, can be redeclared and updated.\n\nlet: block-scoped, hoisted but NOT initialized (temporal dead zone), cannot be redeclared but can be updated.\n\nconst: block-scoped, hoisted but NOT initialized, cannot be redeclared or reassigned — but object/array contents can still be mutated.\n\nBest practice: use const by default, let when you need to reassign, avoid var in modern code.',
  },
  {
    id: 'js-2',
    category: 'Closures',
    question: 'What is a closure and when is it useful?',
    answer:
      'A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has returned.\n\nExample:\nfunction counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst inc = counter();\ninc(); // 1\ninc(); // 2\n\nUseful for:\n• Data privacy / encapsulation — the count variable is inaccessible from outside\n• Factory functions that generate specialized functions\n• Memoization — caching expensive results\n• Callbacks and event handlers that need to "remember" context',
  },
];

export default questions;
