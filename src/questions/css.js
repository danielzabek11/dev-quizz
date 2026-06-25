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
];

export default questions;
