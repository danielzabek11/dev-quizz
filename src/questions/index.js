import reactQuestions from './react';
import javascriptQuestions from './javascript';
import htmlQuestions from './html';
import cssQuestions from './css';

export const TOPICS = [
  {
    id: 'react',
    label: 'React',
    icon: '⚛️',
    color: '#61dafb',
    questions: reactQuestions,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: '🟨',
    color: '#f7df1e',
    questions: javascriptQuestions,
  },
  {
    id: 'html',
    label: 'HTML',
    icon: '🌐',
    color: '#e34f26',
    questions: htmlQuestions,
  },
  {
    id: 'css',
    label: 'CSS',
    icon: '🎨',
    color: '#264de4',
    questions: cssQuestions,
  },
];
