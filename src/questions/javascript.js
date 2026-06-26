/* eslint-disable no-template-curly-in-string */
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
      'A closure is when an inner function retains access to variables from its outer (parent) scope even after the outer function has returned. Those outer variables are kept alive in memory — not garbage collected — because the inner function still references them.\n\nfunction outer() {\n  const outerVar = "I am from outer";\n\n  function inner() {\n    console.log(outerVar); // still accessible\n  }\n  return inner;\n}\n\nconst fn = outer(); // outer() has finished running...\nfn(); // ...but outerVar survives: "I am from outer"\n\nWhy it works: JavaScript "closes over" the lexical environment where a function was defined. outer\'s variables would normally be garbage collected after it returns, but because inner still references outerVar, JS keeps it alive. This is enabled by lexical scoping — the inner function looks up variables from where it was DEFINED, not where it is run.\n\nUSE CASES:\n\n1. Factory functions — create specialized functions with baked-in state:\nfunction createGreeting(greeting) {\n  const upper = greeting.toUpperCase();\n  return function(name) { return upper + " " + name; };\n}\nconst sayHello = createGreeting("hello");\nsayHello("Alice"); // "HELLO Alice"\nconst sayHey = createGreeting("hey");\nsayHey("Bob");     // "HEY Bob"\nEach returned function has its own closed-over upper variable.\n\n2. Private variables — state that cannot be accessed or mutated directly from outside:\nfunction createCounter() {\n  let count = 0; // private\n  return {\n    increment() { count++; },\n    getCount() { return count; },\n  };\n}\nconst c = createCounter();\nc.increment();\nc.getCount(); // 1\nc.count;      // undefined — truly inaccessible\ncount stays in memory because the methods close over it. Nothing outside can bypass the exposed interface.\n\n3. Event handlers that need to remember context at the time they were created:\nfunction setupButton(label) {\n  btn.addEventListener("click", function() {\n    console.log("Clicked: " + label); // closes over label\n  });\n}\n\nKey distinction: a closure is not just "a nested function" — it is specifically when the inner function accesses outer variables AND those variables remain accessible after the outer function returns.',
  },
  {
    id: 'js-3',
    category: 'Variables & Operators',
    question: 'What three keywords can you use to declare new variables?',
    answer:
      'You have three options: var, let, and const.\n\nvar is the old way — it\'s function-scoped and hoisted to the top of its function.\n\nlet is the modern block-scoped alternative you use when you need to reassign a variable\'s value.\n\nconst is also block-scoped but you use it when you don\'t plan to reassign — it\'s the one you should reach for by default.\n\nSo in practice: default to const, use let when reassignment is needed, and avoid var in modern code.',
  },
  {
    id: 'js-4',
    category: 'Variables & Operators',
    question: 'Which of the three variable declarations should you avoid and why?',
    answer:
      'You should avoid var. The main reason is its scoping behavior — var is function-scoped rather than block-scoped, which means it "leaks" out of if blocks and for loops in ways that feel unintuitive.\n\nFor example:\nif (true) { var x = 5; }\nconsole.log(x); // 5 — it leaked out!\n\nvar is also hoisted and initialized to undefined, so you can reference it before the declaration without getting an error, which makes bugs harder to catch.\n\nlet and const both fix these problems: they\'re block-scoped and they throw a ReferenceError if you try to access them before their declaration (the temporal dead zone).',
  },
  {
    id: 'js-5',
    category: 'Variables & Operators',
    question: 'What rules should you follow when naming variables?',
    answer:
      'Hard rules (syntax errors if broken):\n• Names can only contain letters, digits, underscores (_), and dollar signs ($)\n• They cannot start with a digit\n• You cannot use reserved keywords like let, return, class, or function\n• JavaScript is case-sensitive — myVar and myvar are different variables\n\nConventions (style):\n• camelCase for variables and functions: userName, getUserData\n• PascalCase for classes and constructor functions: UserProfile, MyComponent\n• SCREAMING_SNAKE_CASE for true constants: MAX_RETRIES, API_URL\n• Descriptive names — userName is better than u; isLoading is better than flag\n\nGood names communicate intent and make code readable without needing comments.',
  },
  {
    id: 'js-6',
    category: 'Variables & Operators',
    question: 'What happens when you add numbers and strings together?',
    answer:
      'JavaScript uses type coercion. When you use the + operator with a number and a string, the number gets converted to a string and the two are concatenated rather than added mathematically.\n\n5 + "10"   // "510" — not 15!\n"3" + 4    // "34"\n1 + 2 + "3" // "33" — left to right: 1+2=3, then 3+"3"="33"\n\nThis happens because + is overloaded: as soon as either operand is a string, JS treats the whole expression as string concatenation.\n\nOther arithmetic operators (-,  *,  /) don\'t behave this way — they always convert strings to numbers:\n"10" - 5   // 5\n"6" * "2"  // 12',
  },
  {
    id: 'js-7',
    category: 'Variables & Operators',
    question: 'How does the Modulo (%) operator work?',
    answer:
      'The modulo operator returns the remainder after dividing the left operand by the right one.\n\n10 % 3  // 1  (10 = 3×3 + 1)\n15 % 5  // 0  (divides evenly)\n7 % 2   // 1\n\nCommon use cases:\n• Check if a number is even or odd: n % 2 === 0 means even\n• Cycle through a fixed range: index % items.length wraps back to 0\n• Distribute items into groups: itemIndex % groupCount\n\nIt\'s one of those operators that looks obscure but shows up constantly in real code.',
  },
  {
    id: 'js-8',
    category: 'Variables & Operators',
    question: 'How do you increment and decrement a number? What is the difference between prefix and postfix?',
    answer:
      'You use ++ to add 1 and -- to subtract 1 from a variable.\n\nThe difference between prefix and postfix comes down to when the change happens relative to the expression\'s return value:\n\nPostfix (x++, x--): returns the current value first, then changes it.\nPrefix (++x, --x): changes the value first, then returns the new value.\n\nExample:\nlet x = 5;\nconsole.log(x++); // logs 5, then x becomes 6\nconsole.log(++x); // x becomes 7 first, then logs 7\n\nIn most situations — like a for loop counter (i++) — the difference doesn\'t matter. It only matters when you use the result of the expression directly in the same line.',
  },
  {
    id: 'js-9',
    category: 'Variables & Operators',
    question: 'What is operator precedence and how is it handled in JavaScript?',
    answer:
      'Operator precedence determines the order in which operators are evaluated in an expression — just like in maths, where multiplication is done before addition.\n\n2 + 3 * 4  // 14, not 20 — * has higher precedence than +\n\nJavaScript follows a precedence table (viewable on MDN). Higher-precedence operators run first. When operators have the same precedence, most are left-to-right associative — evaluated from left to right.\n\nYou can always override the default order with parentheses:\n(2 + 3) * 4  // 20\n\nThe practical rule: when an expression might be ambiguous, add parentheses to make your intent explicit — it\'s clearer to read and removes any guesswork.',
  },
  {
    id: 'js-10',
    category: 'Variables & Operators',
    question: 'How do you access developer tools and the console? How do you log information to it?',
    answer:
      'Open DevTools in any browser with F12 or Ctrl+Shift+I (Cmd+Option+I on Mac), then click the Console tab. You can run JavaScript directly in it.\n\nLogging from code:\n• console.log(value) — general output, the one you\'ll use 90% of the time\n• console.error(msg) — shows in red, good for error reporting\n• console.warn(msg) — shows in yellow, for warnings\n• console.table(array) — renders arrays/objects as a readable table\n• console.dir(element) — inspects a DOM element\'s properties\n\nTip: you can pass multiple values to console.log: console.log("user:", user, "count:", count) — they\'ll all appear on one line, making debugging easier.',
  },
  {
    id: 'js-11',
    category: 'Variables & Operators',
    question: 'What does the unary plus operator do to string representations of integers? e.g. +"10"',
    answer:
      'The unary plus (+) converts its operand to a number. When you write +"10", JavaScript converts the string "10" to the number 10.\n\n+"10"    // 10 (number)\n+"3.14"  // 3.14\n+""      // 0\n+"hello" // NaN — can\'t convert\n+true    // 1\n+false   // 0\n+null    // 0\n\nIt\'s a quick shorthand for Number("10"). The key difference from parseInt is that unary plus converts the whole value at once — parseInt("10px") gives 10 by ignoring the trailing characters, while +"10px" gives NaN.\n\nUseful when you want a strict conversion and prefer a short syntax.',
  },
  {
    id: 'js-12',
    category: 'Data Types & Strings',
    question: 'What are the eight data types in JavaScript?',
    answer:
      'Seven primitive types:\n1. string — text: "hello"\n2. number — integers and floats: 42, 3.14\n3. bigint — integers too large for number: 9007199254740991n\n4. boolean — true or false\n5. undefined — declared but not assigned\n6. null — intentionally empty\n7. symbol — unique, immutable identifier (used for object keys)\n\nOne non-primitive:\n8. object — everything else: plain objects {}, arrays [], functions, dates, maps, sets\n\nA useful check: typeof works for most primitives (typeof "hi" → "string"), but typeof null returns "object" — this is a well-known bug in the language. Use value === null to check for null.',
  },
  {
    id: 'js-13',
    category: 'Data Types & Strings',
    question: 'Which data type is NOT primitive, and what does that mean?',
    answer:
      'Object is the only non-primitive type. Arrays, functions, dates — they\'re all objects under the hood.\n\nWhat makes something primitive vs non-primitive comes down to how values are stored and compared:\n\nPrimitives are immutable and stored by value — the variable holds the actual value. When you copy a primitive, you get an independent copy.\nlet a = 5; let b = a; b = 10; // a is still 5\n\nObjects are stored by reference — the variable holds a pointer to where the object lives in memory. When you "copy" an object, both variables point to the same thing.\nconst obj = { x: 1 };\nconst copy = obj;\ncopy.x = 99; // obj.x is also 99 — same object!\n\nThis distinction matters a lot when passing values into functions or comparing things with ===.',
  },
  {
    id: 'js-14',
    category: 'Data Types & Strings',
    question: 'What is the relationship between null and undefined?',
    answer:
      'Both represent the absence of a value, but for different reasons.\n\nundefined means a variable has been declared but not yet assigned — it\'s what JavaScript sets automatically:\nlet x; // x is undefined\nfunction foo() {} // foo() returns undefined\n\nnull is an intentional, explicit assignment — it means "I am deliberately setting this to nothing":\nlet user = null; // no user logged in yet\n\nKey comparison:\nnull == undefined   // true  (loose equality — they\'re considered equal)\nnull === undefined  // false (strict equality — different types)\n\nOne quirk worth knowing: typeof null returns "object" — this is a historical bug in JavaScript that was never fixed for backwards compatibility. Always use value === null to check for null.',
  },
  {
    id: 'js-15',
    category: 'Data Types & Strings',
    question: 'What is the difference between single, double, and backtick quotes for strings?',
    answer:
      'Single quotes (\') and double quotes (") are functionally identical — it\'s purely a style choice. The practical difference: if your string contains a single quote, wrapping it in double quotes avoids escaping (and vice versa):\n"It\'s a great day"   // no escaping needed\n\'She said "hello"\'   // no escaping needed\n\nBackticks (`) create template literals, which have two superpowers:\n1. Embedded expressions via ${}: `Hello, ${name}!`\n2. Multi-line strings without \\n:\n`Line one\nLine two`\n\nRule of thumb: use backticks when you need interpolation or multiple lines; use single or double quotes (pick one and be consistent) for simple static strings.',
  },
  {
    id: 'js-16',
    category: 'Data Types & Strings',
    question: 'What is the term for joining strings together? Which quote type lets you embed variables/expressions, and how?',
    answer:
      'Joining strings together is called concatenation.\n\nTraditional way — using the + operator:\n"Hello, " + name + "! You are " + age + " years old."\n\nModern way — template literals with backticks, embedding expressions using ${}:\n`Hello, ${name}! You are ${age} years old.`\n`2 + 2 equals ${2 + 2}`  // any JS expression works inside ${}\n\nTemplate literals are almost always preferred for readability, especially when combining multiple variables. The ${} syntax accepts any valid JavaScript expression — a variable, a function call, a ternary, maths — anything.',
  },
  {
    id: 'js-17',
    category: 'Data Types & Strings',
    question: 'How do you use escape characters in a string?',
    answer:
      'Escape characters let you include special characters that would otherwise break the string syntax or be interpreted differently. You prefix them with a backslash (\\).\n\nCommon escape sequences:\n\\\'  — single quote (useful inside single-quoted strings)\n\\"  — double quote\n\\\\  — literal backslash\n\\n  — newline\n\\t  — tab\n\\r  — carriage return\n\\uXXXX — Unicode character, e.g. \\u00A9 is ©\n\nExample:\nconst msg = \'It\\\'s a great day\';\nconst path = \'C:\\\\Users\\\\name\';\nconst multiline = \'Line one\\nLine two\';\n\nWith template literals you rarely need escape characters — you can write multi-line strings naturally and embed single/double quotes freely.',
  },
  {
    id: 'js-18',
    category: 'Data Types & Strings',
    question: 'What is the difference between the slice and substring string methods?',
    answer:
      'Both extract a portion of a string and return a new string, without modifying the original. The arguments are (start, end) — the character at the end index is not included.\n\nThe key difference is how they handle negative indices:\n\nslice(start, end) — supports negative indices, counting from the end:\n"hello".slice(1, 3)   // "el"\n"hello".slice(-3)     // "llo" (last 3 characters)\n"hello".slice(3, 1)   // "" (returns empty if start > end)\n\nsubstring(start, end) — does NOT support negative indices (treats them as 0), and swaps the arguments if start is greater than end:\n"hello".substring(1, 3)  // "el"\n"hello".substring(-3)    // "hello" (negative treated as 0)\n"hello".substring(3, 1)  // "el" (arguments swapped automatically)\n\nIn practice, slice is more predictable and is generally preferred.',
  },
  {
    id: 'js-19',
    category: 'Conditionals & Logic',
    question: 'What are the three logical operators and what do they stand for?',
    answer:
      '&& (AND) — returns true only if both sides are truthy. In practice it returns the first falsy value it encounters, or the last value if all are truthy:\ntrue && "hello"  // "hello"\nfalse && "hello" // false\n\n|| (OR) — returns true if at least one side is truthy. Returns the first truthy value, or the last value if all are falsy:\n"hello" || "world"  // "hello"\nfalse || "default"  // "default"\n\n! (NOT) — inverts a boolean:\n!true   // false\n!false  // true\n!!value // common pattern to convert any value to a boolean\n\nBoth && and || short-circuit — they stop evaluating as soon as the result is determined. This is widely used: user && user.name safely accesses a property only when user exists.',
  },
  {
    id: 'js-20',
    category: 'Conditionals & Logic',
    question: 'What are the comparison operators in JavaScript?',
    answer:
      '== loose equality — compares values after type coercion:\n"5" == 5   // true (string coerced to number)\n0 == false // true\n\n=== strict equality — compares both value AND type, no coercion:\n"5" === 5   // false\n5 === 5     // true\n\n!= loose inequality\n!== strict inequality\n\n>  greater than\n<  less than\n>= greater than or equal\n<= less than or equal\n\nThe key rule: always prefer === and !== in your own code. Loose equality (==) has surprising edge cases that are hard to predict and lead to subtle bugs. The only common exception: checking for null or undefined at once with == null (catches both).',
  },
  {
    id: 'js-21',
    category: 'Conditionals & Logic',
    question: 'What are truthy and falsy values? What are all the falsy values in JavaScript?',
    answer:
      'In JavaScript, every value is either truthy or falsy — meaning it evaluates to true or false when used in a boolean context (like an if condition or a logical operator).\n\nThere are exactly six falsy values:\n• false\n• 0 (and -0 and 0n)\n• "" (empty string)\n• null\n• undefined\n• NaN\n\nEverything else is truthy — including:\n• "0"  (non-empty string — truthy!)\n• []   (empty array — truthy!)\n• {}   (empty object — truthy!)\n• -1   (any non-zero number)\n\nThis matters a lot in practice: if (user) will enter the block if user is any object, non-empty string, or non-zero number — but not if it\'s null, undefined, 0, or "".',
  },
  {
    id: 'js-22',
    category: 'Conditionals & Logic',
    question: 'What is the syntax for an if/else conditional, a switch statement, and a ternary operator?',
    answer:
      'if/else:\nif (condition) {\n  // runs when condition is truthy\n} else if (otherCondition) {\n  // checked only if the first was falsy\n} else {\n  // fallback when none matched\n}\n\nswitch — good when testing one value against many exact cases:\nswitch (value) {\n  case \'a\':\n    doSomething();\n    break;  // without break, execution falls through to the next case\n  case \'b\':\n    doSomethingElse();\n    break;\n  default:\n    fallback();\n}\n\nTernary — a one-liner for simple if/else:\nconst label = isLoggedIn ? \'Log out\' : \'Log in\';\n// condition ? valueIfTrue : valueIfFalse\n\nUse ternary for simple value assignments; avoid nesting ternaries — it kills readability.',
  },
  {
    id: 'js-23',
    category: 'Conditionals & Logic',
    question: 'What is nesting?',
    answer:
      'Nesting means placing one structure inside another — an if inside an if, a loop inside a loop, a function inside a function.\n\nExample:\nif (user) {\n  if (user.isAdmin) {\n    if (user.permissions.includes(\'delete\')) {\n      deleteItem();\n    }\n  }\n}\n\nNesting lets you handle more complex logic that depends on multiple conditions being true. The risk is that deeply nested code becomes hard to read and reason about — this is sometimes called "the pyramid of doom."\n\nWhen you have more than two or three levels of nesting, it\'s a signal to refactor: you can use early returns (guard clauses), extract logic into named functions, or use logical operators to combine conditions.',
  },
  {
    id: 'js-24',
    category: 'Functions',
    question: 'What are functions useful for?',
    answer:
      'Functions are the primary tool for avoiding repetition — the DRY principle (Don\'t Repeat Yourself). Whenever you find yourself writing the same logic in multiple places, you extract it into a named function and call it wherever you need it.\n\nBeyond that, functions let you:\n• Break complex programs into small, focused, named pieces — each function does one thing\n• Name a block of logic so the code reads like a description of what\'s happening\n• Make code testable — you can test a function in isolation\n• Make code maintainable — change the logic once inside the function rather than everywhere it\'s used\n\nGood functions are short, have a single clear purpose, and their name tells you exactly what they do.',
  },
  {
    id: 'js-25',
    category: 'Functions',
    question: 'How do you invoke a function? What are anonymous functions?',
    answer:
      'You invoke (call) a function by writing its name followed by parentheses, passing any arguments inside:\ngreet();           // no arguments\ngreet("Alice");    // with argument\nconst result = add(2, 3);  // using the return value\n\nAn anonymous function is a function with no name. They\'re commonly used when you need a function for a single specific purpose and don\'t need to reference it elsewhere:\n\n// as a callback:\nsetTimeout(function() {\n  console.log("hello");\n}, 1000);\n\n// with arrow syntax (most common):\nsetTimeout(() => console.log("hello"), 1000);\n\n[1,2,3].map(n => n * 2); // anonymous arrow function as callback\n\nThe trade-off: anonymous functions are concise but give unhelpful stack traces when something goes wrong. Named functions make debugging easier.',
  },
  {
    id: 'js-26',
    category: 'Functions',
    question: 'How does scope work in JavaScript? Explain the different types.',
    answer:
      'Scope answers "where is this variable accessible?" JavaScript has three types:\n\nGLOBAL SCOPE — variables declared outside any function or block are accessible anywhere. In browsers, var at the top level attaches to the window object; const/let do not:\nvar age = 100;\nwindow.age;   // 100\nconst name = "wes";\nwindow.name; // undefined\nAvoid global variables — anything can accidentally overwrite them.\n\nFUNCTION SCOPE — variables declared inside a function exist only within that function and cannot escape it:\nfunction go() {\n  const hair = "blonde"; // only visible inside go\n}\nconsole.log(hair); // ReferenceError\n\nBLOCK SCOPE — let and const are scoped to the nearest {} block (if statement, for loop, etc.). var ignores blocks entirely and is function-scoped:\nif (true) {\n  const safe = true;   // block-scoped, stays here\n  var leaked = true;   // escapes the block — var trap!\n}\nconsole.log(safe);   // ReferenceError\nconsole.log(leaked); // true\n\nfor (let i = 0; i < 3; i++) { ... }\nconsole.log(i); // ReferenceError — use let in for loops\n\nSCOPE LOOKUP CHAIN — when a variable is not found locally, JS walks up to the parent scope, then grandparent, all the way to global. If still not found: ReferenceError.\n\nSHADOW VARIABLES — a variable in a child scope can share a name with one in a parent scope. The inner one shadows the outer, making the outer inaccessible inside that scope:\nconst age = 100;\nfunction go() {\n  const age = 200; // shadows the outer age\n  console.log(age); // 200\n}\nconsole.log(age); // 100 — outer unaffected\n\nLEXICAL (STATIC) SCOPING — variable lookup is determined by WHERE a function is DEFINED in the source code, not where it is called:\nconst dog = "snickers";\nfunction logDog() {\n  console.log(dog); // looks up from where logDog was defined\n}\nfunction go() {\n  const dog = "sunny";\n  logDog(); // logs "snickers" — NOT "sunny"!\n}\ngo();\n\nEven though logDog() runs inside go() where dog is "sunny", it uses dog from its definition site (global scope). This is lexical scoping, and it is what makes closures possible.',
  },
  {
    id: 'js-27',
    category: 'Functions',
    question: 'What are return values?',
    answer:
      'A return value is the value a function sends back to the code that called it, using the return keyword.\n\nfunction add(a, b) {\n  return a + b;\n}\nconst sum = add(2, 3); // sum is 5\nconsole.log(add(10, 20) * 2); // 60 — used directly in expression\n\nImportant points:\n• Once return is hit, the function immediately stops executing — any code after it is skipped\n• A function with no return statement (or just return;) returns undefined\n• You can return any value: a number, string, object, array, or even another function\n\nReturn values are what make functions composable — you can pass one function\'s output directly into another, chaining operations together.',
  },
  {
    id: 'js-28',
    category: 'Functions',
    question: 'What are arrow functions?',
    answer:
      'Arrow functions are a shorter syntax for writing function expressions, introduced in ES6:\n\n// regular function expression\nconst add = function(a, b) { return a + b; };\n\n// arrow function\nconst add = (a, b) => a + b; // implicit return for single expressions\nconst double = n => n * 2;  // no parens needed for single parameter\nconst greet = () => "hello"; // no parameters\n\nKey differences from regular functions:\n• No own this binding — they inherit this from the surrounding lexical scope (critical for class methods and callbacks)\n• Cannot be used as constructors (no new keyword)\n• No arguments object\n• Implicit return: if the body is a single expression, you can omit {} and return\n\nWhen wrapping an object literal in an implicit return, add parens to avoid ambiguity:\nconst getUser = id => ({ id, name: "Alice" });',
  },
  {
    id: 'js-29',
    category: 'Functions',
    question: 'What is the difference between a function declaration and a function expression?',
    answer:
      'A function declaration defines a named function as a statement:\nfunction greet(name) {\n  return `Hello, ${name}`;\n}\n\nA function expression assigns a function to a variable:\nconst greet = function(name) { return `Hello, ${name}`; };\nconst greet = (name) => `Hello, ${name}`; // arrow function expression\n\nThe key difference is hoisting:\n• Function declarations are fully hoisted — you can call them before they appear in the code and it works fine\n• Function expressions are NOT hoisted — the variable is declared but the function isn\'t assigned until that line runs, so calling it before the declaration throws a TypeError (or ReferenceError with const/let)\n\ngreet("Alice"); // works fine — declaration is hoisted\nfunction greet(name) { return `Hello, ${name}`; }\n\nsayHi("Bob"); // TypeError — expression not yet assigned\nconst sayHi = (name) => `Hi, ${name}`;',
  },
  {
    id: 'js-30',
    category: 'Arrays & Loops',
    question: 'What is an array? How do you access or change an element?',
    answer:
      'An array is an ordered, indexed collection of values. Each value has a numeric index starting at 0.\n\nconst fruits = ["apple", "banana", "cherry"];\n\nAccessing:\nfruits[0]  // "apple"\nfruits[2]  // "cherry"\nfruits[fruits.length - 1]  // last element: "cherry"\n\nChanging:\nfruits[1] = "blueberry"; // ["apple", "blueberry", "cherry"]\n\nArrays in JavaScript:\n• Are zero-indexed (first element is [0], not [1])\n• Can hold mixed types: [1, "hello", true, { name: "Alice" }]\n• Are actually objects under the hood — typeof [] returns "object"\n• Use Array.isArray(value) to reliably check if something is an array',
  },
  {
    id: 'js-31',
    category: 'Arrays & Loops',
    question: 'What are some useful array methods?',
    answer:
      'Mutating methods (change the original array):\n• push(x) — add to end; pop() — remove from end\n• unshift(x) — add to start; shift() — remove from start\n• splice(index, deleteCount, ...items) — insert/remove at any position\n• sort(), reverse() — sort or reverse in place\n\nNon-mutating methods (return new value, original unchanged):\n• slice(start, end) — copy a portion\n• concat(arr) — merge arrays\n• indexOf(x) / includes(x) — find or check presence\n• join(separator) — combine into a string\n\nHigher-order methods (take a callback function):\n• map(fn) — transform every element, return new array\n• filter(fn) — keep elements where fn returns true\n• reduce(fn, initial) — accumulate into a single value\n• find(fn) / findIndex(fn) — first element that matches\n• some(fn) / every(fn) — do any/all elements pass the condition?\n• forEach(fn) — iterate (no return value)\n\nmap, filter, and reduce are the ones interviewers ask about most.',
  },
  {
    id: 'js-32',
    category: 'Arrays & Loops',
    question: 'What are the break and continue statements?',
    answer:
      'break — immediately exits the loop entirely, no matter what the loop condition says. Use it when you\'ve found what you were looking for and don\'t need to keep iterating:\nfor (let i = 0; i < 100; i++) {\n  if (arr[i] === target) {\n    console.log("found at", i);\n    break; // no need to keep going\n  }\n}\n\ncontinue — skips the rest of the current iteration and jumps straight to the next one. The loop keeps running. Use it to skip items that don\'t meet a condition:\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) continue; // skip even numbers\n  console.log(i); // only logs odd numbers: 1, 3, 5, 7, 9\n}\n\nSummary: break stops the loop, continue skips one iteration.',
  },
  {
    id: 'js-33',
    category: 'DOM',
    question: 'What is the DOM?',
    answer:
      'The DOM (Document Object Model) is a tree-like representation of an HTML document that the browser constructs when it loads a page. Every HTML element becomes a node in that tree, and the whole thing is accessible through the document object in JavaScript.\n\n<html>\n  <body>\n    <h1>Hello</h1>\n    <p>World</p>\n  </body>\n</html>\n\nThis becomes a tree: document → html → body → h1, p\n\nThe DOM is the bridge between your HTML and JavaScript — through it you can:\n• Read or change element content, attributes, and styles\n• Create or remove elements\n• Listen for and respond to user events\n\nImportant: the DOM is not the same as your HTML file — it\'s a live, dynamic representation that JavaScript can manipulate after the page has loaded.',
  },
  {
    id: 'js-34',
    category: 'DOM',
    question: 'How do you target nodes in the DOM? What is the difference between querySelector and querySelectorAll?',
    answer:
      'The two main modern methods:\n\ndocument.querySelector(selector)\n— returns the first element matching a CSS selector, or null if none found\n— use when you want one specific element\ndocument.querySelector("#submit-btn")\ndocument.querySelector(".card:first-child")\n\ndocument.querySelectorAll(selector)\n— returns a static NodeList of ALL matching elements\n— use when you want to work with a group\ndocument.querySelectorAll(".card")\n\nOlder methods (still used):\n• getElementById("id") — fastest, returns single element\n• getElementsByClassName("class") — returns live HTMLCollection\n• getElementsByTagName("div") — returns live HTMLCollection\n\nquerySelectorAll and querySelector accept any valid CSS selector, making them the most flexible and the ones you\'ll use most often in modern code.',
  },
  {
    id: 'js-35',
    category: 'DOM',
    question: 'How do you create an element, add it to the DOM, and remove an element from the DOM?',
    answer:
      'Create:\nconst btn = document.createElement("button");\nbtn.textContent = "Click me";\nbtn.classList.add("btn");\n// element exists in memory but is NOT in the page yet\n\nAdd to the DOM:\nparent.appendChild(btn)        // adds as last child\nparent.prepend(btn)            // adds as first child\nreferenceEl.before(btn)        // inserts before a sibling\nreferenceEl.after(btn)         // inserts after a sibling\nparent.insertBefore(btn, refEl) // older API, same as before()\n\nRemove:\nbtn.remove()                   // modern, clean\nparent.removeChild(btn)        // older API, requires parent reference\n\nThe typical workflow: create → configure (set text, classes, attributes) → append to the right parent.',
  },
  {
    id: 'js-36',
    category: 'DOM',
    question: 'How can you alter an element in the DOM? Should you use textContent or innerHTML, and why?',
    answer:
      'Ways to alter an element:\n• element.textContent = "new text"  — changes the text\n• element.setAttribute("href", "/about")  — set any attribute\n• element.classList.add("active") / .remove() / .toggle()\n• element.style.color = "red"  — inline style\n• element.id = "new-id"\n\ntextContent vs innerHTML:\n\ntextContent sets or gets the plain text of an element — it treats everything as literal text, never parsing it as HTML. It\'s fast and safe.\n\ninnerHTML sets or gets the HTML markup inside an element — it parses the string as HTML and renders it.\n\nAlways prefer textContent for plain text. Only use innerHTML when you specifically need to insert HTML markup.\n\nCritical security warning: NEVER pass user-generated content into innerHTML without sanitizing it first. If a user can control what goes into innerHTML, they can inject malicious scripts — this is an XSS (Cross-Site Scripting) attack.',
  },
  {
    id: 'js-37',
    category: 'DOM',
    question: 'Where should you include your JavaScript <script> tag in HTML when working with DOM nodes?',
    answer:
      'The problem: if the browser hits a <script> tag before it has parsed the HTML elements you\'re trying to access, those elements don\'t exist yet and your code fails.\n\nTwo correct approaches:\n\n1. Bottom of <body> — place the <script> just before </body>:\n<body>\n  <div id="app">...</div>\n  <script src="app.js"></script>\n</body>\nThe HTML is fully parsed before the script runs.\n\n2. defer attribute in <head> — best practice for modern code:\n<head>\n  <script src="app.js" defer></script>\n</head>\ndefer tells the browser: download the script in parallel with HTML parsing, but only execute it after the DOM is fully built.\n\ndefer is generally preferred — it keeps all script tags in the head where they\'re easy to find, and it doesn\'t block parsing.',
  },
  {
    id: 'js-38',
    category: 'DOM',
    question: 'How do events and listeners work? What are three ways to use events in your code?',
    answer:
      'Events are things that happen in the browser — a click, a keypress, a form submission, the page loading, the mouse moving. Listeners are functions you register to run when a specific event occurs on a specific element.\n\nThree ways to handle events:\n\n1. Inline HTML attribute (avoid):\n<button onclick="doSomething()">Click</button>\nMixes JavaScript into HTML, hard to manage, only one handler per event.\n\n2. DOM event property:\nelement.onclick = function() { doSomething(); };\nCleaner than inline, but still only allows one listener per event — assigning a second one overwrites the first.\n\n3. addEventListener (preferred):\nelement.addEventListener("click", doSomething);\nSupports multiple listeners for the same event, can be removed later, supports options like { once: true } and { capture: true }.',
  },
  {
    id: 'js-39',
    category: 'DOM',
    question: 'Why are event listeners the preferred way to handle events? What are the benefits of named functions in listeners? How do you attach listeners to groups of nodes?',
    answer:
      'addEventListener is preferred because:\n• Multiple listeners can be attached to the same event without overwriting each other\n• Listeners can be removed with removeEventListener\n• Keeps JavaScript out of HTML\n• Gives access to options: { once: true } auto-removes after first fire; { capture: true } switches phase\n\nNamed functions vs anonymous:\n// anonymous — cannot be removed later\nbtn.addEventListener("click", () => doSomething());\n\n// named — can be removed because you have a reference\nfunction handleClick() { doSomething(); }\nbtn.addEventListener("click", handleClick);\nbtn.removeEventListener("click", handleClick); // works!\n\nNamed functions also give useful stack traces in error messages.\n\nAttaching to a group — loop with querySelectorAll:\ndocument.querySelectorAll(".btn").forEach(btn => {\n  btn.addEventListener("click", handleClick);\n});\n\nOr use event delegation — attach ONE listener to the parent and check event.target:\nlist.addEventListener("click", (e) => {\n  if (e.target.matches(".item")) handleItem(e.target);\n});\nDelegation is more efficient for large or dynamically-created lists.',
  },
  {
    id: 'js-40',
    category: 'DOM',
    question: 'What does a NodeList contain? How does it differ from an HTMLCollection? How do you convert a NodeList to an array?',
    answer:
      'NodeList — returned by querySelectorAll or childNodes:\n• Can contain any node type: element nodes, text nodes, comment nodes\n• querySelectorAll returns a static NodeList (snapshot — doesn\'t update when the DOM changes)\n• childNodes returns a live NodeList (updates automatically)\n\nHTMLCollection — returned by getElementsByClassName, getElementsByTagName, children:\n• Contains only element nodes (no text/comment nodes)\n• Always live — updates automatically as the DOM changes\n• Elements accessible by name/id as well as index\n\nNeither is a true Array, so array methods like map, filter, reduce are not available directly.\n\nConvert to an Array:\nconst arr = Array.from(nodeList);\nconst arr = [...nodeList];  // spread syntax\n\nAfter converting, all array methods are available:\ndocument.querySelectorAll(".card")\n  .forEach is available directly on NodeList, but .map and .filter are not — so convert first if you need those.',
  },
  {
    id: 'js-41',
    category: 'DOM',
    question: 'What is the difference between the capturing phase and the bubbling phase?',
    answer:
      'When an event is triggered, it travels through three phases:\n\n1. Capture phase — the event travels DOWN from the root (document) toward the target element, passing through all ancestors on the way\n2. Target phase — the event reaches the element it was triggered on\n3. Bubble phase — the event travels back UP from the target to the root\n\nBy default, addEventListener fires during the bubble phase. You can switch to the capture phase by passing { capture: true }:\nelement.addEventListener("click", handler, { capture: true });\n\nBubbling is what makes event delegation work: a click on a child element bubbles up to the parent, so a single listener on the parent catches clicks from all children — including ones added dynamically later.\n\nYou can stop an event from bubbling further with event.stopPropagation() — useful when you have nested clickable elements and only want the inner one to handle the event.',
  },
  {
    id: 'js-42',
    category: 'Objects',
    question: 'What is the difference between objects and arrays?',
    answer:
      'Arrays are ordered, indexed collections — elements are accessed by a numeric position starting at 0:\nconst colors = ["red", "green", "blue"];\ncolors[0]; // "red"\n\nBest for: lists of similar things where order matters.\n\nObjects are unordered collections of key-value pairs — values are accessed by named keys:\nconst user = { name: "Alice", age: 30 };\nuser.name; // "Alice"\nuser["age"]; // 30\n\nBest for: representing a single entity with named properties.\n\nUnder the hood, arrays in JavaScript are actually objects with numeric keys — typeof [] returns "object". To reliably distinguish them use Array.isArray(value).\n\nYou can and often do combine them: an array of objects is the most common data structure in real applications:\nconst users = [{ name: "Alice" }, { name: "Bob" }];',
  },
  {
    id: 'js-43',
    category: 'Objects',
    question: 'How do you access object properties?',
    answer:
      'Two ways:\n\nDot notation — clean and readable:\nuser.name\nuser.address.city  // chained\n\nBracket notation — required when the key is dynamic or not a valid identifier:\nuser["name"]\nconst key = "name"; user[key]  // dynamic key from a variable\nuser["first-name"]  // hyphenated keys need brackets\n\nDestructuring — extract properties into variables in one line:\nconst { name, age } = user;\nconst { name: firstName } = user; // rename while destructuring\nconst { name = "Anonymous" } = user; // default value\n\nOptional chaining — safely access nested properties without throwing if an intermediate value is null/undefined:\nuser?.address?.city  // returns undefined instead of throwing\n\nOptional chaining (?.) is extremely useful when dealing with data that might be incomplete.',
  },
  {
    id: 'js-44',
    category: 'Objects',
    question: 'How do primitives and object types differ when you assign them to other variables or pass them into functions?',
    answer:
      'Primitives are copied by value — you get an independent copy. Changes to one variable don\'t affect the other:\nlet a = 5;\nlet b = a;\nb = 10;\nconsole.log(a); // still 5\n\nThe same applies when passing to a function — the function gets its own copy:\nfunction double(n) { n = n * 2; }\nlet x = 5;\ndouble(x);\nconsole.log(x); // still 5\n\nObjects are copied by reference — both variables point to the same object in memory. Changes through either reference affect the shared data:\nconst obj = { x: 1 };\nconst copy = obj;\ncopy.x = 99;\nconsole.log(obj.x); // 99 — same object!\n\nThe same with functions — the function can mutate the original:\nfunction update(o) { o.x = 99; }\nconst data = { x: 1 };\nupdate(data);\nconsole.log(data.x); // 99\n\nTo make a true shallow copy of an object:\nconst clone = { ...obj };        // spread\nconst clone = Object.assign({}, obj);\nFor deep copies: structuredClone(obj).',
  },
  {
    id: 'js-45',
    category: 'Factory Functions & Modules',
    question: 'What are factory functions and how do they differ from constructors?',
    answer:
      'A factory function is a regular function that creates and returns an object — no new keyword, no prototype, no this weirdness.\n\nConstructor:\nfunction User(name) {\n  this.name = name;\n  this.discordName = "@" + name;\n}\nconst user = new User("alice"); // requires new\n\nFactory function:\nfunction createUser(name) {\n  const discordName = "@" + name;\n  return { name, discordName }; // just return an object\n}\nconst user = createUser("alice"); // called like any function\n\nKey differences:\n• No new keyword — factory functions are just regular function calls\n• No prototype chain — each object gets its own copies of methods (small memory cost, but rarely significant)\n• Private variables via closures — anything not included in the returned object is truly inaccessible\n• Safer — forgetting new with a constructor silently breaks things; there is no "wrong way" to call a factory\n• instanceof is unreliable with constructors anyway (it checks prototype presence, not how the object was made)\n\nFactory functions are often preferred when you want private state, flexible composition, or want to avoid the pitfalls of this and new.',
  },
  {
    id: 'js-46',
    category: 'Factory Functions & Modules',
    question: 'What are private variables in factory functions and how do closures enable them?',
    answer:
      'Private variables are variables declared inside a factory function that are NOT returned in the object. They can only be read or modified through the functions (closures) that were defined in the same scope.\n\nfunction createUser(name) {\n  let reputation = 0; // private — not in the returned object\n\n  const getReputation = () => reputation;       // closure over reputation\n  const giveReputation = () => { reputation++; };\n\n  return { name, getReputation, giveReputation };\n}\n\nconst user = createUser("alice");\nuser.giveReputation();\nuser.giveReputation();\nconsole.log(user.getReputation()); // 2\nconsole.log(user.reputation);      // undefined — inaccessible\n\nWhy it works: when createUser finishes, the reputation variable stays alive in memory because the returned functions still reference it through their closure (the captured lexical environment). It cannot be reached any other way.\n\nWhy it matters:\n• Enforces invariants — no one can set reputation = -9999 from outside\n• Reduces the public API surface — only expose what needs to be used\n• Clear intent — the object interface communicates exactly what this thing can do\n\nCommon pitfall: return { reputation } does NOT return the variable — it copies the current value. Future changes to reputation would not be reflected. Only closures maintain a live reference.',
  },
  {
    id: 'js-47',
    category: 'Factory Functions & Modules',
    question: 'What is composition with factory functions and how does it compare to inheritance?',
    answer:
      'Composition means building an object by pulling in capabilities from multiple sources, rather than inheriting everything from a parent class.\n\nWith factory functions:\nfunction createPlayer(name, level) {\n  // borrow only what we need from createUser\n  const { getReputation, giveReputation } = createUser(name);\n\n  const getLevel = () => level;\n  const increaseLevel = () => { level++; };\n\n  return { name, getReputation, giveReputation, getLevel, increaseLevel };\n}\n\nOr using Object.assign to take everything from another factory:\nfunction createPlayer(name, level) {\n  const user = createUser(name);\n  return Object.assign({}, user, {\n    getLevel: () => level,\n    increaseLevel: () => { level++; },\n  });\n}\n\nInheritance (is-a) vs Composition (has-a):\n• Inheritance: Player IS-A User — inherits everything, tightly coupled, deep hierarchies become brittle\n• Composition: Player HAS user behaviors — pick exactly what you need, mix from multiple sources\n\nNote: each composed object gets its own copy of the methods (no shared prototype), which uses slightly more memory than inheritance — but in practice this is rarely a meaningful concern.\n\nRule of thumb: prefer composition. Reach for inheritance only when the relationship is a genuine, clear "is-a" relationship.',
  },
  {
    id: 'js-48',
    category: 'Factory Functions & Modules',
    question: 'What is an IIFE and what is the module pattern?',
    answer:
      'An IIFE (Immediately Invoked Function Expression) is a function that is defined and called in the same expression. It runs once; its internal variables are scoped to that function and never leak out.\n\nBasic IIFE syntax:\n(() => {\n  const secret = "hidden from outside";\n  console.log("runs immediately");\n})();\n\nThe module pattern wraps a factory function in an IIFE and exposes only a public interface:\n\nconst calculator = (() => {\n  let lastResult; // private\n\n  const add = (a, b) => { lastResult = a + b; return lastResult; };\n  const subtract = (a, b) => { lastResult = a - b; return lastResult; };\n  const getLastResult = () => lastResult;\n\n  return { add, subtract, getLastResult }; // public API\n})();\n\ncalculator.add(3, 5);          // 8\ncalculator.getLastResult();    // 8\ncalculator.lastResult;         // undefined — private!\n\nWhy an IIFE instead of just calling a named factory once?\n• The factory has no name — it cannot be accidentally called again later\n• Makes intent explicit: this is a singleton module, invoked once\n• No unused function name polluting the surrounding scope\n\nIn modern code, ES6 modules handle this more cleanly, but the IIFE module pattern is common in pre-ES6 codebases and is still useful in environments without a module bundler.',
  },
  {
    id: 'js-49',
    category: 'Factory Functions & Modules',
    question: 'What is encapsulation and how does it apply to factory functions?',
    answer:
      'Encapsulation means bundling related data and behavior together into a single unit, while controlling which parts are publicly accessible and which are internal.\n\nWithout encapsulation:\nconst counter = { count: 0 };\ncounter.count = -9999; // anyone can break it\n\nWith encapsulation via factory function:\nfunction createCounter() {\n  let count = 0; // private\n  return {\n    increment() { count++; },\n    decrement() { if (count > 0) count--; }, // enforces count >= 0\n    getCount() { return count; },\n  };\n}\n\nconst c = createCounter();\nc.increment();\nc.decrement();\nc.count; // undefined — no direct access\n\nWhy encapsulation matters:\n• Enforces invariants — you define the valid operations; external code cannot put the object in an invalid state\n• Smaller public API — less for callers to misuse or depend on\n• Freedom to refactor internals — as long as the public interface stays the same, you can change implementation details without breaking callers\n• Self-documenting — the returned object clearly communicates what the module is for\n\nThis is what the module pattern and factory functions are fundamentally about: exposing a clean interface while hiding everything else.',
  },
  {
    id: 'js-50',
    category: 'Classes',
    question: 'What is a JavaScript class and how does it differ from a constructor function?',
    answer:
      'A class is a syntax for creating objects with shared prototype methods. Under the hood, it uses the same prototype mechanism as constructor functions — but it enforces safer behavior.\n\nConstructor function (old way):\nfunction User(name) { this.name = name; }\nUser.prototype.sayHi = function() { alert(this.name); };\n\nClass syntax (modern):\nclass User {\n  constructor(name) { this.name = name; }\n  sayHi() { alert(this.name); }\n}\n\nThe class body creates the same prototype structure — User.prototype.sayHi exists in both cases. So class is often called "syntactic sugar", but there are real differences:\n\n1. Must use new — calling a class without new throws a TypeError. A constructor without new silently sets properties on the global object.\n2. Class methods are non-enumerable — they won\'t show up in for...in loops over instances.\n3. Always strict mode — all code inside a class body runs in strict mode automatically.\n4. Not hoisted like function declarations — you cannot use a class before its definition in the file.\n5. [[IsClassConstructor]] internal flag — the engine explicitly marks it as a class and enforces the rules above.\n\nIn practice, prefer class syntax for readability and the built-in safety guarantees it provides.',
  },
  {
    id: 'js-51',
    category: 'Classes',
    question: 'What are getters and setters in JavaScript?',
    answer:
      'Getters and setters are accessor properties — special methods that look and behave like regular properties when you read or write them, but run code behind the scenes.\n\nclass User {\n  constructor(name, surname) {\n    this.name = name;\n    this.surname = surname;\n  }\n\n  get fullName() {\n    return `${this.name} ${this.surname}`;\n  }\n\n  set fullName(value) {\n    [this.name, this.surname] = value.split(" ");\n  }\n}\n\nconst user = new User("John", "Smith");\nconsole.log(user.fullName); // "John Smith" — getter, no () needed\nuser.fullName = "Alice Cooper"; // setter called\nconsole.log(user.name); // "Alice"\n\nCommon use cases:\n• Computed / derived properties — fullName from name + surname, age from birthday\n• Validation — reject invalid values in the setter before assigning\n• Read-only properties — define a getter with no setter; assignment silently fails (or throws in strict mode)\n• Backwards compatibility — swap a plain data property for a getter/setter without changing the external API\n\nA property can be either a data property (has a value) or an accessor property (has get/set), never both. Defining both in the same descriptor throws an error.',
  },
  {
    id: 'js-52',
    category: 'Classes',
    question: 'How does inheritance work with JavaScript classes? What do extends and super do?',
    answer:
      'extends makes one class inherit the prototype of another — the child gets all methods of the parent.\n\nclass Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a noise.`; }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    super(name); // call parent constructor — required before using this\n  }\n  speak() {\n    return `${this.name} barks.`; // overrides parent method\n  }\n  fetch() {\n    return super.speak() + " Then fetches."; // call parent method explicitly\n  }\n}\n\nconst d = new Dog("Rex");\nd.speak(); // "Rex barks." — overridden\nd.fetch(); // "Rex makes a noise. Then fetches."\n\nsuper has two distinct uses:\n• super() in a child constructor — calls the parent class constructor. Must be called before accessing this in the child constructor; skipping it throws a ReferenceError.\n• super.method() in a child method — calls the parent class version of an overridden method.\n\nMethod resolution: when you call d.speak(), JavaScript first looks on Dog.prototype, finds it there, and stops. If it were not overridden, it would walk up to Animal.prototype and find it there. This is the prototype chain.\n\nCaveat: deep inheritance hierarchies become brittle and hard to refactor. Use inheritance for genuine "is-a" relationships; prefer composition otherwise.',
  },
  {
    id: 'js-53',
    category: 'Classes',
    question: 'What are private class fields and methods in JavaScript?',
    answer:
      'Private class fields and methods use a # prefix and are only accessible inside the class body. Attempting to read or write them from outside throws a SyntaxError — they are enforced at the language level, not just by convention.\n\nclass BankAccount {\n  #balance = 0; // private field, declared in class body\n\n  constructor(initial) {\n    this.#balance = initial;\n  }\n\n  #validate(amount) { // private method\n    if (amount <= 0) throw new Error("Must be positive");\n  }\n\n  deposit(amount) {\n    this.#validate(amount); // call private method internally\n    this.#balance += amount;\n  }\n\n  get balance() { return this.#balance; } // read-only via getter\n}\n\nconst acc = new BankAccount(100);\nacc.deposit(50);\nconsole.log(acc.balance); // 150\nconsole.log(acc.#balance); // SyntaxError — truly private\n\nBefore # (ES2022), developers used the _ prefix convention (_balance) to signal "internal — do not touch", but nothing prevented access. The # syntax provides real enforcement.\n\nKey rules:\n• Private fields must be declared in the class body before use — you cannot dynamically add them\n• Private fields are NOT inherited — subclasses cannot access a parent\'s # fields\n• They exist on the instance, not the prototype',
  },
  {
    id: 'js-54',
    category: 'Classes',
    question: 'What are static properties and methods in JavaScript classes?',
    answer:
      'Static properties and methods belong to the class itself, not to individual instances. They are accessed via ClassName.method(), not instance.method().\n\nclass MathHelper {\n  static PI = 3.14159; // static property\n\n  static square(x) { return x * x; } // static method\n  static cube(x) { return x * x * x; }\n}\n\nMathHelper.PI;          // 3.14159\nMathHelper.square(4);   // 16\n\nconst m = new MathHelper();\nm.square(4); // TypeError — static methods are not on instances\n\nCommon use cases:\n• Utility/helper functions logically tied to the class but needing no instance data (mirrors built-ins like Math.floor, Array.isArray)\n• Alternative constructors / factory methods:\n  class Color {\n    static fromHex(hex) { return new Color(/*...*/); }\n  }\n• Shared counters or caches across all instances:\n  class User {\n    static count = 0;\n    constructor() { User.count++; }\n  }\n• Validation helpers: User.isValidEmail(email)\n\nStatics are inherited — if ChildClass extends ParentClass, ChildClass.staticMethod() works if ParentClass defined it.',
  },
  {
    id: 'js-55',
    category: 'ES6 Modules',
    question: 'What are ES6 modules and what problem do they solve?',
    answer:
      'ES6 modules (ESM) are the official JavaScript module system, introduced in ES2015. Each file is its own module with its own private scope — top-level variables are not global.\n\nThe problem before ESM:\nMultiple <script> tags shared one global scope. A variable declared in file A was visible in file B:\n// one.js\nconst greeting = "Hello"; // leaks to global scope\n\n// two.js\nconsole.log(greeting); // works, but this is fragile and accidental\n\nDevelopers worked around this with IIFEs (the module pattern), wrapping code in a function to create a local scope. ESM replaces that workaround with first-class language support.\n\nWith ESM:\n• Each file has its own private scope by default\n• You explicitly export what should be shared\n• You explicitly import what you need — just because something is exported doesn\'t mean it\'s available everywhere, only where it is imported\n• The browser loads each module once, even if imported by multiple files\n• Imports are static — the structure is known before code runs, enabling tree shaking (bundlers can remove unused exports)\n\nEnable in HTML:\n<script type="module" src="app.js"></script>\n\nCaveat: modules cannot be loaded via the file:// protocol — you need a local dev server.',
  },
  {
    id: 'js-56',
    category: 'ES6 Modules',
    question: 'What is the difference between named exports and default exports?',
    answer:
      'Named exports — a file can have as many as needed:\n// math.js\nexport const PI = 3.14;\nexport function add(a, b) { return a + b; }\nexport function subtract(a, b) { return a - b; }\n\n// import — use {} and the exact exported name\nimport { PI, add } from "./math.js";\nimport { add as sum } from "./math.js"; // rename with "as"\n\nDefault export — each file can only have one:\n// utils.js\nexport default function mainHelper() { ... }\n// or: export default "some value";\n\n// import — no {}, you choose the local name\nimport helper from "./utils.js";\nimport myFunc from "./utils.js"; // also fine — any name works\n\nMixing both in one file:\n// api.js\nexport default class ApiClient { ... } // one default\nexport const BASE_URL = "https://api.example.com"; // named\n\n// import both together\nimport ApiClient, { BASE_URL } from "./api.js";\n\nImportant: the {} in named imports/exports is NOT object destructuring — it is module syntax.\n\nWhen to use which:\n• Default export — when the module has one primary thing to export (a component, a class, a main function)\n• Named exports — when the module exports multiple utilities, constants, or helpers\nThere is no universal rule — pick a convention and be consistent within a project.',
  },
  {
    id: 'js-57',
    category: 'ES6 Modules',
    question: 'What is a module entry point and how do you link a module script in HTML?',
    answer:
      'The entry point is the single file where your application starts. It imports everything else — directly or through a chain of other imports. The browser uses it as the root of the dependency graph and automatically fetches all files it depends on.\n\nExample dependency graph:\n// app.js (entry point)\nimport { createUser } from "./user.js";\nimport { formatDate } from "./utils.js";\n// user.js imports from auth.js\n\nYou only link app.js — the browser resolves the rest:\n<script type="module" src="app.js"></script>\n\nKey behaviors of type="module":\n• Only add the entry point to HTML — the browser handles all transitive imports automatically\n• Automatically deferred — equivalent to the defer attribute; the script runs after HTML is fully parsed, so no need to add defer manually\n• Strict mode is automatic — all module code runs in strict mode\n• Each module is loaded once — even if imported by 10 different files, it runs only once\n• CORS rules apply — you cannot load modules by opening an HTML file directly with file://. You need a local server (e.g. VS Code Live Preview)\n\nChoosing the entry point: it is the file that depends on everything else. If two.js imports from one.js, two.js is the entry point. Using one.js as the entry point would miss two.js entirely.',
  },
  {
    id: 'js-58',
    category: 'ES6 Modules',
    question: 'What are the main differences between CommonJS and ES6 modules?',
    answer:
      'CommonJS (CJS) — the module system built into Node.js, using require/module.exports:\nconst path = require("path");         // import\nmodule.exports = { myFunction };      // export\n\nES6 Modules (ESM) — the official JavaScript standard, using import/export:\nimport path from "path";\nexport function myFunction() {}\n\nKey differences:\n\nTiming:\n• CJS: evaluated at runtime — require() runs when that line of code is reached, so you can call it conditionally inside an if block or function\n• ESM: evaluated statically at parse time — import/export must be at the top level; the full dependency graph is known before any code runs\n\nLoading:\n• CJS: synchronous — require() blocks until the file loads. Fine in Node.js (local filesystem)\n• ESM: asynchronous — required for browsers where files come over the network\n\nTree shaking:\n• CJS: bundlers cannot reliably eliminate unused exports (dynamic require makes it hard to analyse)\n• ESM: static imports allow bundlers to detect and remove unused exports (dead code elimination)\n\nEnvironment:\n• CJS: Node.js originally; browsers cannot use it natively\n• ESM: supported natively in all modern browsers and in Node.js (.mjs extension or "type": "module" in package.json)\n\nIn practice: frontend code uses ESM; older Node.js packages use CJS; modern Node.js projects increasingly use ESM.',
  },
  {
    id: 'js-59',
    category: 'Factory Functions & Modules',
    question: 'When would you choose a factory function over a class, and vice versa?',
    answer:
      'This is a practical judgment call. Both create objects — the key differences are privacy, inheritance style, and this behavior.\n\nChoose a factory function when:\n• You need truly private state — with factories, unreturned variables are inaccessible. Class private fields (#) exist but are a newer addition.\n• You prefer composition over inheritance — factories compose naturally; classes lean toward prototype chains\n• You want to avoid this binding issues — factory functions return plain objects; no this involved in the returned interface\n• You are creating a one-off singleton (IIFE module pattern)\n\nExample: createCounter(), createGameState() — small, self-contained objects with private internals.\n\nChoose a class when:\n• You need inheritance — the extends keyword makes it clean and explicit\n• You are working in a framework that expects classes (React class components, Angular services, Node.js models)\n• You need many instances that share methods efficiently — class methods live on the prototype (one copy in memory shared by all instances), whereas factory functions create new function objects per instance\n• The team is more comfortable with class syntax\n\nExample: class EventEmitter extends Component, class ApiClient.\n\nBottom line: factories give you more control and flexibility; classes give you inheritance and (when creating thousands of objects) memory efficiency. In modern codebases you will see both.',
  },
  {
    id: 'js-60',
    category: 'Classes',
    question: 'What is the prototype chain and how do classes and constructors use it?',
    answer:
      'Every JavaScript object has an internal [[Prototype]] link pointing to another object — that object\'s [[Prototype]] points to another, and so on, until it reaches null. This chain is how property lookup works: if a property is not found on the object itself, JavaScript walks up the chain until it finds it or hits null.\n\nfunction User(name) { this.name = name; }\nUser.prototype.sayHi = function() { return "Hi, " + this.name; };\n\nconst user = new User("Alice");\nuser.sayHi(); // found on User.prototype — not on user itself\n\nWith class syntax, the same chain is created:\nclass User {\n  constructor(name) { this.name = name; }\n  sayHi() { return "Hi, " + this.name; } // stored on User.prototype\n}\n\nLookup order for user.sayHi():\n1. Does user have a own property sayHi? No.\n2. Does User.prototype have sayHi? Yes — call it.\n\nWith inheritance (extends):\nclass Admin extends User {\n  deleteUser() { ... }\n}\nconst admin = new Admin("Bob");\nadmin.sayHi(); // found on User.prototype\nadmin.deleteUser(); // found on Admin.prototype\n\nLookup: admin → Admin.prototype → User.prototype → Object.prototype → null\n\nWhy this matters for interviews:\n• Methods are shared — all instances reference the same function on the prototype, so there is no per-instance copy\n• You can check the chain: Object.getPrototypeOf(user) === User.prototype // true\n• instanceof checks for presence of a constructor\'s prototype in the chain',
  },
  {
    id: 'js-61',
    category: 'ES6 Modules',
    question: 'What is tree shaking and how do ES6 modules enable it?',
    answer:
      'Tree shaking is a build-time optimisation where a bundler (like Webpack or Rollup) analyses your imports and removes code that is exported but never imported anywhere — dead code. The result is a smaller bundle shipped to the browser.\n\nExample:\n// math.js\nexport function add(a, b) { return a + b; }      // used\nexport function subtract(a, b) { return a - b; }  // never imported\nexport function multiply(a, b) { return a * b; }  // never imported\n\n// app.js\nimport { add } from "./math.js"; // only add is used\n\nAfter tree shaking, subtract and multiply are removed from the final bundle entirely.\n\nWhy ESM enables this and CommonJS does not:\nESM imports and exports are static — they must be at the top level and cannot change at runtime. The bundler can read the entire import/export graph before executing any code and determine definitively which exports are used.\n\nCJS uses require(), which is dynamic:\nconst name = condition ? "add" : "subtract";\nconst fn = require("./math")[name]; // bundler cannot know what is used at build time\n\nBecause CJS imports can be dynamic and runtime-conditional, the bundler cannot safely remove any exports without potentially breaking things.\n\nTree shaking is one of the key reasons large libraries (like lodash-es) publish ESM versions — you only pay for what you use.',
  },
  {
    id: 'js-62',
    category: 'npm & Tooling',
    question: 'What is npm and what is package.json?',
    answer:
      'npm (Node Package Manager) is the default package manager for Node.js. It lets you install, update, and manage third-party JavaScript packages in your project from a registry of hundreds of thousands of open-source libraries.\n\npackage.json is the configuration file npm uses to track everything about your project:\n• name, version — project identity\n• dependencies — packages needed at runtime\n• devDependencies — packages only needed during development\n• scripts — shorthand commands you run with npm run <name>\n• engines, license, main, etc.\n\nExample scripts section:\n"scripts": {\n  "build": "webpack",\n  "dev": "webpack serve",\n  "lint": "eslint src/"\n}\n\nWhen you run npm install, npm reads package.json and installs all listed packages into node_modules. This is why you never commit node_modules to git — you share package.json instead, and anyone can recreate the exact environment.\n\npackage-lock.json is auto-generated alongside it and locks the exact resolved versions of every installed package, ensuring reproducible installs across different machines and CI environments.',
  },
  {
    id: 'js-63',
    category: 'npm & Tooling',
    question: 'What is the difference between dependencies and devDependencies?',
    answer:
      'dependencies — packages your application needs to run in production:\nnpm install <package>   (or -S flag)\nExamples: React, Axios, Lodash, Express\n\ndevDependencies — packages only needed during development and the build process, not shipped to or run in production:\nnpm install --save-dev <package>   (or -D flag)\nExamples: Webpack, ESLint, Prettier, Jest, TypeScript compiler\n\nWhy the distinction matters:\n1. Production installs: npm install --production skips devDependencies, resulting in a leaner node_modules on the server\n2. Documentation / intent: anyone reading package.json immediately understands what the app actually depends on vs. what is just tooling\n3. Security scanning: vulnerabilities in devDependencies are lower risk since they never run in production\n\nIn practice the distinction is most important for backend/Node.js deployments. For frontend apps, a bundler (Webpack, Vite) compiles everything into a dist folder anyway, so the node_modules separation does not affect what ships to users — but keeping the split clean is still good practice.',
  },
  {
    id: 'js-64',
    category: 'npm & Tooling',
    question: 'What is a module bundler and why do we need one?',
    answer:
      'A module bundler is a tool that takes your source files — JavaScript modules and their dependencies — analyses the import/require graph, and produces one or more optimized output files ready for the browser.\n\nProblems it solves:\n1. HTTP overhead — loading 50 separate JS files means 50 network requests. A bundler merges them into fewer, larger files.\n2. Module system compatibility — older browsers could not handle import/export natively. Bundlers transformed module code so it ran everywhere.\n3. Asset pipeline — modern bundlers handle CSS, images, fonts, and HTML templates through plugins and loaders, not just JavaScript.\n4. Optimizations — minification (shorter code), tree shaking (removing unused exports), code splitting (loading parts of the app lazily on demand).\n\nCommon bundlers:\n• Webpack — the long-time industry standard, highly configurable via webpack.config.js\n• Vite — modern, extremely fast (uses native ESM in dev), becoming the default for new projects\n• Rollup — optimized for library bundling\n• Parcel — zero-config for quick prototypes\n\nThe bundler takes your readable source code as input and produces a dist folder of production-ready files as output.',
  },
  {
    id: 'js-65',
    category: 'npm & Tooling',
    question: 'What is Webpack and what are its core capabilities?',
    answer:
      'Webpack is a module bundler configured via webpack.config.js. It starts from an entry point, builds a complete dependency graph of your project, and emits bundled output files into a dist directory.\n\nCore concepts:\n• Entry: where Webpack starts (e.g. src/index.js)\n• Output: where the bundle goes (e.g. dist/bundle.js)\n\nLoaders — transform non-JS files so they can be part of the bundle:\n• css-loader: resolves @import and url() in CSS\n• style-loader: injects the CSS into the DOM via a <style> tag\n• Used together: { test: /\\.css$/, use: [\'style-loader\', \'css-loader\'] }\n\nPlugins — more powerful transformations that work on the whole build:\n• HtmlWebpackPlugin: auto-generates an HTML file in dist that already has the correct <script> tag linking your bundles — no manual updating needed when filenames change\n\nAsset handling (Webpack 5+): built-in support for images, fonts, etc. via Asset Modules:\n{ test: /\\.(png|jpg)$/, type: \'asset/resource\' }\n\nwebpack-dev-server: a local development server that watches for file changes and hot-reloads the browser automatically, so you see changes instantly without a manual refresh.\n\nSource maps: map the bundled/minified output back to your original readable source code. Without them, error stack traces and the DevTools debugger point into unreadable compiled code. Enabled with devtool: \'source-map\' in the config.',
  },
  {
    id: 'js-66',
    category: 'Design Principles',
    question: 'What is the Single Responsibility Principle?',
    answer:
      'The Single Responsibility Principle (SRP) — the S in SOLID — states that a module, class, or function should have only one reason to change. In practice: each piece of code should do one thing and do it well.\n\nViolation — this class has three different reasons to change:\nclass User {\n  save() { /* database logic */ }\n  sendWelcomeEmail() { /* email logic */ }\n  formatDisplayName() { /* presentation logic */ }\n}\n\nIf the database changes, the email service changes, or the UI requirements change — you modify User. That is three distinct axes of change in one class.\n\nFixed — split by responsibility:\nclass UserRepository { save(user) { ... } }\nclass EmailService { sendWelcome(user) { ... } }\nclass UserFormatter { formatName(user) { ... } }\n\nWhy it matters:\n• Smaller, focused units are easier to read, test, and understand\n• A change in one area cannot accidentally break an unrelated area\n• Each piece is more reusable — an EmailService can serve multiple features\n• Easier to onboard new developers — less code to understand at once\n\nA useful test: if you struggle to name a function or class with a single clear noun/verb, it is probably doing too many things.',
  },
  {
    id: 'js-67',
    category: 'Design Principles',
    question: 'What are the SOLID principles?',
    answer:
      'SOLID is an acronym for five object-oriented design principles that make code more maintainable, flexible, and understandable:\n\nS — Single Responsibility Principle\nA class should have one reason to change — one responsibility. Separate concerns into separate modules.\n\nO — Open/Closed Principle\nCode should be open for extension but closed for modification. Add new behavior by adding new code (new subclasses, new strategy objects), not by editing existing working code. This prevents regressions.\n\nL — Liskov Substitution Principle\nObjects of a subclass should be usable wherever the parent class is expected, without breaking the program. If you pass a Dog where an Animal is expected, it should work correctly without surprises.\n\nI — Interface Segregation Principle\nDo not force a class to implement methods it does not use. Prefer many small, specific interfaces over one large, catch-all one. Clients should only depend on the methods they actually need.\n\nD — Dependency Inversion Principle\nHigh-level modules should not depend on low-level modules — both should depend on abstractions. Instead of a class instantiating its own dependencies (new MySQLDatabase()), receive them from outside (dependency injection). This makes swapping implementations easy and enables testing with mocks.\n\nIn interviews, being able to name and briefly explain each with a concrete example is usually enough. SRP and DIP come up most often in practice.',
  },
  {
    id: 'js-68',
    category: 'Design Principles',
    question: 'What are tightly coupled objects and why should we avoid them?',
    answer:
      'Tightly coupled objects depend directly on each other\'s internal implementation details. If one changes, the other must change too — they are not independently usable or testable.\n\nExample of tight coupling:\nclass OrderService {\n  constructor() {\n    this.db = new MySQLDatabase(); // directly creates a specific class\n  }\n  save(order) { this.db.save(order); }\n}\n\nOrderService is locked to MySQL. To switch to PostgreSQL, or to test without a real database, you must modify OrderService itself.\n\nThe fix — depend on an abstraction (dependency injection):\nclass OrderService {\n  constructor(database) { // accept any object with a .save() method\n    this.db = database;\n  }\n  save(order) { this.db.save(order); }\n}\n\n// production:\nnew OrderService(new MySQLDatabase());\n// tests:\nnew OrderService(new MockDatabase()); // no real DB needed\n\nWhy tightly coupled code is a problem:\n• Hard to change — a change in one class cascades through all classes that depend on it\n• Hard to test — you cannot isolate a unit from its real dependencies\n• Hard to reuse — the class only works in one specific context\n• Fragile — hidden dependencies cause unexpected bugs when any piece changes\n\nLoose coupling (depending on interfaces/abstractions rather than concrete classes) is the goal. This is what the Dependency Inversion Principle and composition both promote.',
  },
  {
    id: 'js-69',
    category: 'npm & Tooling',
    question: 'What is linting and what problems can it prevent?',
    answer:
      'Linting is the automated analysis of source code to detect potential errors, questionable patterns, and violations of coding standards — before the code runs.\n\nA linter (ESLint is the standard for JavaScript) reads your code statically and flags:\n\nBugs and logic issues:\n• Using a variable before it is declared\n• Unreachable code after a return statement\n• Missing break in a switch case\n• Comparing with == instead of === (unexpected coercions)\n• Unused variables (often a sign of a bug or forgotten code)\n\nCode quality:\n• Functions that are too long or too complex\n• Deeply nested code\n• Missing error handling in async code\n\nStyle consistency (when configured):\n• Enforcing let/const over var\n• Consistent quote style, semicolons, spacing\n\nLinters catch entire classes of bugs that would otherwise only surface at runtime — often in production. They integrate into editors (underline errors as you type), run in CI pipelines (block PRs that fail), and run as a pre-commit hook.\n\nInstall as a devDependency because linting is a development-time tool:\nnpm install --save-dev eslint',
  },
  {
    id: 'js-70',
    category: 'npm & Tooling',
    question: 'What is Prettier and why should you use a code formatter?',
    answer:
      'Prettier is an opinionated code formatter. It takes your code as input and reprints it according to a fixed set of formatting rules, completely ignoring whatever formatting you wrote.\n\nFormatter vs. linter:\n• ESLint (linter): finds bugs, suspicious patterns, code quality issues\n• Prettier (formatter): only cares about formatting — indentation, line length, quote style, trailing commas, bracket spacing. It does not care about logic.\n\nWhy formatting tools matter:\n• Eliminates style debates in code review — "should there be a space here?" stops being a discussion when a tool decides it automatically\n• Consistent codebase across a whole team with zero manual effort\n• Reduces cognitive load — all code looks the same, so you focus on logic not formatting\n• Onboarding — new team members produce consistently formatted code immediately\n\nTypical workflow:\n• VS Code Prettier extension: auto-formats on every file save\n• Pre-commit hook via Husky + lint-staged: runs Prettier (and ESLint) automatically before every commit — formatting is never a manual step\n\nWhy install as a devDependency:\nFormatters only run during development. They never execute in production and don\'t affect the output your users receive. Keeping them in devDependencies keeps production installs lean and communicates that this is development tooling.',
  },
  {
    id: 'js-71',
    category: 'Async JavaScript',
    question: 'What is a callback function and what is "callback hell"?',
    answer:
      'A callback function is a function passed as an argument to another function, to be called later — either synchronously or after an asynchronous operation completes.\n\n// synchronous callback:\n[1, 2, 3].forEach(function(n) { console.log(n); });\n\n// async callback:\nsetTimeout(function() {\n  console.log("1 second later");\n}, 1000);\n\nbutton.addEventListener("click", function() {\n  doSomething();\n});\n\nCallback hell (also called the "pyramid of doom") happens when you chain multiple async operations that each depend on the previous result, forcing deeply nested callbacks:\n\ngetUser(id, function(user) {\n  getOrders(user, function(orders) {\n    getItems(orders, function(items) {\n      getReviews(items, function(reviews) {\n        // actual logic... buried 4 levels deep\n      }, onError);\n    }, onError);\n  }, onError);\n}, onError);\n\nProblems with this pattern:\n• Deeply nested code is hard to read and reason about\n• Error handling must be repeated at every level\n• Hard to add or reorder steps\n• Hard to handle parallel operations\n\nPromises and async/await were introduced specifically to solve these problems — they allow async code to be written in a flat, linear style.',
  },
  {
    id: 'js-72',
    category: 'Async JavaScript',
    question: 'What is a Promise and what states can it be in?',
    answer:
      'A Promise is an object that represents the eventual result of an asynchronous operation — a placeholder for a value that will be available in the future.\n\nconst promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (success) resolve("the data");\n    else reject(new Error("it failed"));\n  }, 1000);\n});\n\nA Promise is always in exactly one of three states:\n1. Pending — the async operation is still running; no value yet\n2. Fulfilled (resolved) — the operation succeeded; the promise has a value\n3. Rejected — the operation failed; the promise has a reason (usually an Error)\n\nOnce a promise transitions from pending to fulfilled or rejected, it is settled and cannot change state again.\n\nIn practice, you rarely create promises yourself with new Promise() — that is for wrapping legacy async APIs. Most of the time you consume promises returned by modern APIs like fetch(), or from async functions. You interact with them using .then()/.catch() or await.\n\nKey property: promises are values. You can store them in variables, pass them to functions, return them from functions, and combine them with Promise.all() — before they have even resolved.',
  },
  {
    id: 'js-73',
    category: 'Async JavaScript',
    question: 'What do .then(), .catch(), and .finally() do on a Promise?',
    answer:
      '.then(onFulfilled) — registers a callback to run when the promise resolves. Returns a new promise with the return value of the callback, enabling chaining:\n\nfetch("/api/users")\n  .then(response => response.json())   // transform: Response → parsed object\n  .then(users => renderUsers(users));  // use the result\n\nEach .then() receives the return value of the previous .then(). If any step throws, execution jumps to the nearest .catch().\n\n.catch(onRejected) — shorthand for .then(null, onRejected). Handles any rejection that occurred anywhere in the chain above it:\n\nfetch("/api/users")\n  .then(res => res.json())\n  .then(data => process(data))\n  .catch(err => console.error("Failed:", err)); // catches any error above\n\n.finally(callback) — runs regardless of success or failure. The callback receives no arguments — it does not know the outcome, making it ideal for cleanup:\n\nshowLoadingSpinner();\nfetch("/api/data")\n  .then(handleData)\n  .catch(handleError)\n  .finally(() => hideLoadingSpinner()); // always runs — success or failure\n\n.finally() passes the resolved value or rejection through, so it does not break the chain.\n\nChain order: .then() → .then() → ... → .catch() → .finally()',
  },
  {
    id: 'js-74',
    category: 'Async JavaScript',
    question: 'What is Promise.all(), Promise.allSettled(), and Promise.race()?',
    answer:
      'A promise is "settled" when it is no longer pending — it is either fulfilled or rejected. This term matters because some methods wait for all promises to settle regardless of success or failure.\n\nPromise.all(promises) — resolves when ALL promises fulfill; rejects immediately if ANY promise rejects (fail-fast):\nconst [users, posts] = await Promise.all([\n  fetch("/api/users").then(r => r.json()),\n  fetch("/api/posts").then(r => r.json()),\n]);\n// both run in parallel — total wait = slowest one, not the sum\nUse when: all results are needed and one failure should abort everything.\n\nPromise.allSettled(promises) — waits for ALL promises to settle (fulfill or reject), then resolves with an array of result objects. It NEVER rejects.\n\nEach result object has:\n• status: "fulfilled" or "rejected"\n• value: the resolved value (only present when status is "fulfilled")\n• reason: the rejection reason (only present when status is "rejected")\n\nconst results = await Promise.allSettled([\n  Promise.resolve(3),\n  Promise.reject(new Error("failed")),\n  fetch("/api/data").then(r => r.json()),\n]);\nresults.forEach(result => {\n  if (result.status === "fulfilled") {\n    console.log("value:", result.value);\n  } else {\n    console.log("error:", result.reason);\n  }\n});\nUse when: you want all results regardless of failures — e.g. loading multiple independent widgets on a dashboard where one failing should not block the others.\n\nPromise.race(promises) — resolves or rejects as soon as the FIRST promise settles:\nfunction withTimeout(promise, ms) {\n  const timeout = new Promise((_, reject) =>\n    setTimeout(() => reject(new Error("Timed out")), ms)\n  );\n  return Promise.race([promise, timeout]);\n}\nUse when: you want the fastest result, or to add a timeout to any promise.\n\nPromise.any(promises) — resolves as soon as ANY promise fulfills (ignores rejections unless ALL reject). Opposite of Promise.all\'s fail-fast.',
  },
  {
    id: 'js-75',
    category: 'Async JavaScript',
    question: 'When should you use Promises over callbacks?',
    answer:
      'Use Promises (or async/await) over plain callbacks whenever you have:\n\n1. Chained async operations — Promises flatten the nesting:\n// callback hell:\ngetUser(id, (user) => {\n  getOrders(user, (orders) => {\n    getItems(orders, (items) => { render(items); }, onErr);\n  }, onErr);\n}, onErr);\n\n// promise chain:\ngetUser(id)\n  .then(user => getOrders(user))\n  .then(orders => getItems(orders))\n  .then(items => render(items))\n  .catch(onErr);\n\n2. Error handling — one .catch() at the end of a chain handles any step\'s failure. With callbacks, you must check for errors in every single callback.\n\n3. Parallel operations — Promise.all() runs multiple async tasks simultaneously and waits for all of them cleanly. Doing the same with raw callbacks requires manual coordination with counters.\n\n4. Modern APIs — fetch(), IndexedDB, ServiceWorkers, and most new browser and Node.js APIs return Promises. You have to use them.\n\nCallbacks are still appropriate for:\n• Simple event listeners (addEventListener, setTimeout) where you are not chaining\n• Streaming APIs or cases where a callback is invoked multiple times (Promises settle only once)\n• Older Node.js APIs that follow the (err, result) callback convention before they were promisified\n\nBottom line: for any multi-step async workflow, Promises or async/await are almost always clearer and safer than callbacks.',
  },
  {
    id: 'js-76',
    category: 'Async JavaScript',
    question: 'What is an API and how do you fetch data from one with the Fetch API?',
    answer:
      'An API (Application Programming Interface) is a defined interface that lets your code communicate with another service. A REST API exposes data and operations at URLs — you send HTTP requests (GET to read, POST to create, PUT/PATCH to update, DELETE to remove) and receive responses, usually in JSON.\n\nAccess control: many APIs require an API key — a secret token that identifies your application. You include it in request headers or the URL. Without a valid key, the server returns 401 Unauthorized.\n\nFetching data with the Fetch API:\nfetch("https://api.example.com/users", {\n  headers: {\n    "Authorization": "Bearer YOUR_API_KEY",\n    "Content-Type": "application/json"\n  }\n})\n  .then(response => {\n    if (!response.ok) {\n      throw new Error("HTTP error: " + response.status);\n    }\n    return response.json(); // parse response body as JSON\n  })\n  .then(data => console.log(data))\n  .catch(err => console.error("Request failed:", err));\n\nTwo-step process:\n1. fetch() returns a promise that resolves with a Response object when the server responds — even for 404s and 500s. A network failure rejects.\n2. response.json() returns another promise that reads and parses the response body.\n\nCritical gotcha: fetch() only rejects on network failure, NOT on HTTP error status codes. Always check response.ok (true for 200–299) to detect 4xx/5xx errors.',
  },
  {
    id: 'js-77',
    category: 'Async JavaScript',
    question: 'What does the async keyword do?',
    answer:
      'The async keyword placed before a function declaration marks that function as asynchronous. It does two things:\n\n1. Allows await to be used inside the function\n2. Makes the function always return a Promise, wrapping any returned value automatically\n\nasync function greet() {\n  return "hello"; // automatically wrapped: Promise.resolve("hello")\n}\ngreet().then(console.log); // "hello"\n\n// Equivalent:\nfunction greet() {\n  return Promise.resolve("hello");\n}\n\nThrowing inside an async function rejects the returned promise:\nasync function fail() {\n  throw new Error("oops"); // Promise.reject(new Error("oops"))\n}\nfail().catch(err => console.error(err.message)); // "oops"\n\nasync works with any function syntax:\nconst fn = async () => { ... };           // arrow\nconst obj = { async method() { ... } };   // method\nclass Foo { async bar() { ... } }         // class method\n\nasync functions are syntactic sugar over Promises — they do not change the underlying async model, only the way code is written. Because they return Promises, you can always call .then()/.catch() on an async function\'s return value, or await it from another async function.',
  },
  {
    id: 'js-78',
    category: 'Async JavaScript',
    question: 'What does the await keyword do and where can you use it?',
    answer:
      'await pauses execution of the surrounding async function until a Promise settles, then returns its resolved value. It is the async/await replacement for .then().\n\n// With .then() — horizontal chaining:\nfunction getUser(id) {\n  return fetch("/api/users/" + id)\n    .then(res => res.json())\n    .then(data => data.name);\n}\n\n// With await — reads like synchronous code:\nasync function getUser(id) {\n  const res = await fetch("/api/users/" + id); // pause until fetch resolves\n  const data = await res.json();               // pause until JSON parsing resolves\n  return data.name;\n}\n\nKey rules:\n• await can only be used inside an async function (or at the top level of an ES module)\n• await on a non-Promise value works fine — it just returns the value immediately\n• Rejected promises throw at the await line — catchable with try/catch\n• Does NOT block the main thread — only the current async function is paused; other JS continues running\n\nCommon mistake — accidentally sequential when you wanted parallel:\n// SLOW: waits for each fetch to finish before starting the next\nconst a = await fetchA();\nconst b = await fetchB();\n\n// FAST: both run in parallel, then await both results\nconst [a, b] = await Promise.all([fetchA(), fetchB()]);\n\nWhen you need multiple independent async results, start them all before awaiting any of them.',
  },
  {
    id: 'js-79',
    category: 'Async JavaScript',
    question: 'How do you handle errors in async/await functions?',
    answer:
      'Two approaches, both valid:\n\n1. try/catch inside the async function — most common when you want to handle the error close to where it occurs:\nasync function getUser(id) {\n  try {\n    const res = await fetch("/api/users/" + id);\n    if (!res.ok) throw new Error("HTTP " + res.status);\n    return await res.json();\n  } catch (err) {\n    console.error("Failed to fetch user:", err);\n    return null; // return a default, rethrow, or log and recover\n  }\n}\n\n2. .catch() at the call site — useful when you want to handle errors at a higher level:\nasync function loadUser(id) {\n  const res = await fetch("/api/users/" + id);\n  return res.json();\n}\n\nconst user = await loadUser(id).catch(err => {\n  console.error(err);\n  return null;\n});\n\nYou can also combine them: let the async function throw naturally and catch at the outermost caller.\n\nImportant: an unhandled rejected promise (no try/catch and no .catch()) produces an UnhandledPromiseRejection error in Node.js and a warning in browsers. Always handle async errors.\n\nWhen to use which:\n• try/catch — when recovery logic belongs with the operation (retry, fallback value, logging at the source)\n• .catch() — when the caller should decide how to handle the failure, or for short one-liners',
  },
  {
    id: 'js-80',
    category: 'Async JavaScript',
    question: 'What is returned from an async function? How does async/await relate to Promises?',
    answer:
      'An async function always returns a Promise — no exceptions.\n\n• Returning a value: Promise resolves with that value\n• Throwing an error: Promise rejects with that error\n• Returning nothing: Promise resolves with undefined\n\nasync function add(a, b) { return a + b; }\n\nconst result = add(2, 3);\nconsole.log(result);           // Promise { 5 } — a Promise, not 5\nresult.then(console.log);      // 5\nconst val = await add(2, 3);   // 5 — await unwraps it\n\nHow async/await relates to Promises:\nasync/await is syntactic sugar built on top of Promises. They compile down to the same thing:\n\n// async/await:\nasync function getData() {\n  const res = await fetch("/api");\n  return res.json();\n}\n\n// equivalent Promise chain:\nfunction getData() {\n  return fetch("/api").then(res => res.json());\n}\n\nBoth are Promises. You can .then() an async function; you can await a regular Promise-returning function. They compose freely.\n\nWhy this matters:\n• All the Promise combinators (Promise.all, Promise.race, etc.) work with async functions\n• Any API that returns a Promise can be used with await\n• Understanding that async/await is just Promises helps you debug: if you are confused about async/await behavior, think through the equivalent Promise chain',
  },
  {
    id: 'js-81',
    category: 'Variables & Scope',
    question: 'What is hoisting? How do var, let, const, function expressions, and imports behave differently?',
    answer:
      'Hoisting is JavaScript\'s behavior of processing declarations before any code runs. The JS engine scans the file first and registers declarations, then executes top to bottom. Two things are hoisted:\n\nFUNCTION DECLARATIONS — fully hoisted: the entire function is available before its definition in the file:\nsayHi(); // works — logs "hi"\nfunction sayHi() { console.log("hi"); }\n\nVAR DECLARATIONS — hoisted but initialized to undefined. The declaration is moved to the top; the assignment stays in place:\nconsole.log(age); // undefined — no error\nvar age = 10;\nconsole.log(age); // 10\n\nWhat JS does internally:\nvar age;           // declaration hoisted\nconsole.log(age);  // undefined\nage = 10;          // assignment stays here\n\nTEMPORAL DEAD ZONE (TDZ) — let and const are also hoisted but NOT initialized. Accessing them before their declaration throws a ReferenceError:\nconsole.log(name); // ReferenceError: Cannot access \'name\' before initialization\nlet name = "Alice";\n\nThe TDZ is the zone between the start of the block and the variable\'s declaration line. This is why let/const feel "not hoisted" — they are hoisted, just left uninitialized until the declaration is reached.\n\nFUNCTION EXPRESSIONS AND ARROW FUNCTIONS — only the variable declaration is hoisted, not the function itself. Behavior depends on which keyword is used:\nsayHi(); // TypeError: sayHi is not a function\nvar sayHi = function() { console.log("hi"); };\n\ngreet(); // ReferenceError: Cannot access \'greet\' before initialization\nconst greet = () => console.log("hi");\n\nIMPORTS — fully hoisted. import statements are resolved and executed before any other code in the module, regardless of where they appear in the file. By convention always write them at the top, but the engine guarantees they are ready before anything runs.\n\nSummary:\n• function declaration → fully hoisted (callable before definition)\n• var → hoisted, initialized as undefined\n• let / const → hoisted, NOT initialized — TDZ (ReferenceError if accessed early)\n• function expression / arrow function → same as the keyword used (var = undefined, let/const = TDZ)\n• import → fully hoisted before any module code runs',
  },
];

export default questions;
