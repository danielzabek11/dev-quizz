const questions = [
  {
    id: 'html-1',
    category: 'Semantics',
    question: 'What is semantic HTML and why does it matter?',
    answer:
      'Semantic HTML uses elements that convey meaning about their content rather than just presentation.\n\nExamples: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer> instead of generic <div> elements.\n\nWhy it matters:\n• Accessibility — screen readers can navigate content meaningfully and describe the page structure to visually impaired users\n• SEO — search engines understand page hierarchy and give appropriate weight to content\n• Maintainability — code is self-documenting; another developer can understand the layout without reading CSS\n• Browser defaults — semantic elements come with useful built-in styles and behaviors',
  },
  {
    id: 'html-2',
    category: 'Forms',
    question: 'What is the difference between GET and POST form methods?',
    answer:
      'GET: appends form data to the URL as query parameters (?key=value&key2=value2). Data is visible in the address bar, bookmarkable, cached by the browser, and limited in size (~2000 characters). Use for searches, filters, or any idempotent retrieval request.\n\nPOST: sends data in the HTTP request body — not visible in the URL, not cached, no size limit enforced by HTML. Use for submitting data that changes server state (login, creating a resource, uploading a file).\n\nRule of thumb: GET to retrieve, POST to send/change.',
  },
];

export default questions;
