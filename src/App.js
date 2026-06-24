import { useState, useEffect } from 'react';
import './App.css';
import questions from './questions';
import { initCards, getNextCard, rateCard, getSrStats } from './sr';

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ── Shared components ────────────────────────────────────────────────────────

function CategoryBadge({ category }) {
  return <span className="badge">{category}</span>;
}

function AnswerBlock({ answer }) {
  return (
    <div className="answer-box">
      {answer.split('\n').map((line, i) =>
        line === '' ? <br key={i} /> : <p key={i} className="answer-line">{line}</p>
      )}
    </div>
  );
}

// ── Browse mode ──────────────────────────────────────────────────────────────

function BrowseMode() {
  const [index, setIndex] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const q = questions[index];

  function goTo(next) {
    setIndex(next);
    setAnswerVisible(false);
  }

  return (
    <>
      <div className="mode-meta">
        <span className="mode-meta-label">Question {index + 1} of {questions.length}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="card">
        <CategoryBadge category={q.category} />
        <p className="question-text">{q.question}</p>
        <button className="reveal-btn" onClick={() => setAnswerVisible(v => !v)}>
          {answerVisible ? 'Hide Answer' : 'Show Answer'}
        </button>
        {answerVisible && <AnswerBlock answer={q.answer} />}
      </div>

      <nav className="nav-buttons">
        <button className="nav-btn" onClick={() => goTo(index - 1)} disabled={index === 0}>
          ← Previous
        </button>
        <span className="nav-count">{index + 1} / {questions.length}</span>
        <button className="nav-btn" onClick={() => goTo(index + 1)} disabled={index === questions.length - 1}>
          Next →
        </button>
      </nav>
    </>
  );
}

// ── SR mode ──────────────────────────────────────────────────────────────────

const SR_STATUS = {
  new:      { label: 'New',      cls: 'sr-badge-new'      },
  learning: { label: 'Learning', cls: 'sr-badge-learning' },
  review:   { label: 'Review',   cls: 'sr-badge-review'   },
  mastered: { label: 'Mastered', cls: 'sr-badge-mastered' },
};

function SrStatusBadge({ status }) {
  const { label, cls } = SR_STATUS[status] || SR_STATUS.new;
  return <span className={`sr-badge ${cls}`}>{label}</span>;
}

function SrStats({ stats }) {
  return (
    <div className="sr-stats">
      <span className="sr-stat" data-type="new">{stats.new} New</span>
      <span className="sr-stat" data-type="learning">{stats.learning} Learning</span>
      <span className="sr-stat" data-type="review">{stats.review} Review</span>
      <span className="sr-stat" data-type="mastered">{stats.mastered}/{stats.total} Mastered</span>
    </div>
  );
}

const RATINGS = [
  { value: 1, label: 'Again', desc: "Didn't recall",      cls: 'rating-again' },
  { value: 2, label: 'Hard',  desc: 'Recalled with effort', cls: 'rating-hard'  },
  { value: 3, label: 'Good',  desc: 'Recalled correctly',   cls: 'rating-good'  },
  { value: 4, label: 'Easy',  desc: 'Recalled instantly',   cls: 'rating-easy'  },
];

function RatingButtons({ onRate }) {
  return (
    <div className="rating-section">
      <p className="rating-prompt">How well did you recall it?</p>
      <div className="rating-buttons">
        {RATINGS.map(r => (
          <button key={r.value} className={`rating-btn ${r.cls}`} onClick={() => onRate(r.value)}>
            <span className="rating-btn-label">{r.label}</span>
            <span className="rating-btn-desc">{r.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Review chart (session complete screen) ────────────────────────────────────

function ReviewChart({ cards }) {
  const data = Object.values(cards)
    .filter(c => c.reviewCount > 0)
    .map(c => ({
      id: c.id,
      count: c.reviewCount,
      question: questions.find(q => q.id === c.id)?.question ?? '',
    }))
    .sort((a, b) => b.count - a.count);

  if (data.length === 0) return null;

  const max = data[0].count;

  return (
    <div className="review-chart">
      <h3 className="review-chart-title">Reviews per question — most to least struggled</h3>
      <div className="review-chart-body">
        {data.map((item, i) => {
          const pct = (item.count / max) * 100;
          // Red (0) → green (120) across the sorted list
          const hue = Math.round((i / Math.max(data.length - 1, 1)) * 120);
          return (
            <div key={item.id} className="chart-row">
              <span className="chart-rank">{i + 1}</span>
              <span className="chart-label" title={item.question}>
                {item.question.length > 50 ? item.question.slice(0, 50) + '…' : item.question}
              </span>
              <div className="chart-bar-track">
                <div
                  className="chart-bar-fill"
                  style={{
                    '--bar-width': `${pct}%`,
                    '--i': i,
                    backgroundColor: `hsl(${hue}, 65%, 48%)`,
                  }}
                />
              </div>
              <span className="chart-bar-count">{item.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Session complete screen ───────────────────────────────────────────────────

function SrComplete({ stats, totalReviewed, elapsedSeconds, cards, onReset }) {
  const avg = (totalReviewed / Math.max(stats.total, 1)).toFixed(1);
  return (
    <div className="sr-complete">
      <div className="sr-complete-check">&#10003;</div>
      <h2>Session Complete!</h2>
      <p>All {stats.total} questions mastered.</p>

      <div className="sr-complete-stats">
        <div className="sr-complete-stat">
          <span className="sr-complete-stat-val">{formatTime(elapsedSeconds)}</span>
          <span className="sr-complete-stat-label">Time</span>
        </div>
        <div className="sr-complete-stat">
          <span className="sr-complete-stat-val">{totalReviewed}</span>
          <span className="sr-complete-stat-label">Reviews</span>
        </div>
        <div className="sr-complete-stat">
          <span className="sr-complete-stat-val">{avg}</span>
          <span className="sr-complete-stat-label">Avg / card</span>
        </div>
      </div>

      <button className="reveal-btn" onClick={onReset}>Start New Session</button>

      <div className="chart-divider" />
      <ReviewChart cards={cards} />
    </div>
  );
}

// ── SR mode (active session) ──────────────────────────────────────────────────

function SrMode({ cards, totalReviewed, elapsedSeconds, isComplete, answerVisible, onToggleAnswer, onRate, onReset }) {
  const stats = getSrStats(cards);

  if (isComplete) {
    return (
      <SrComplete
        stats={stats}
        totalReviewed={totalReviewed}
        elapsedSeconds={elapsedSeconds}
        cards={cards}
        onReset={onReset}
      />
    );
  }

  const currentId = getNextCard(cards, totalReviewed);
  const q = questions.find(item => item.id === currentId);
  const cardState = cards[currentId];

  return (
    <>
      <div className="mode-meta">
        <div className="sr-meta-top">
          <SrStats stats={stats} />
          <span className="sr-timer">{formatTime(elapsedSeconds)}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(stats.mastered / stats.total) * 100}%`,
              background: 'linear-gradient(90deg, #22c55e, #16a34a)',
            }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-badges">
          <CategoryBadge category={q.category} />
          <SrStatusBadge status={cardState.status} />
        </div>
        <p className="question-text">{q.question}</p>
        <button className="reveal-btn" onClick={onToggleAnswer}>
          {answerVisible ? 'Hide Answer' : 'Show Answer'}
        </button>
        {answerVisible && (
          <>
            <AnswerBlock answer={q.answer} />
            <RatingButtons onRate={onRate} />
          </>
        )}
      </div>

      <div className="sr-footer">
        <button className="sr-reset-btn" onClick={onReset}>Reset session</button>
      </div>
    </>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [mode, setMode] = useState('browse');
  const [srCards, setSrCards] = useState(() => initCards(questions));
  const [totalReviewed, setTotalReviewed] = useState(0);
  const [srAnswerVisible, setSrAnswerVisible] = useState(false);
  const [srElapsedSeconds, setSrElapsedSeconds] = useState(0);

  // Derived: true when every card has been mastered.
  const isSessionComplete = Object.values(srCards).every(c => c.status === 'mastered');

  // Timer — ticks only while in SR mode and the session is ongoing.
  useEffect(() => {
    if (mode !== 'sr' || isSessionComplete) return;
    const id = setInterval(() => setSrElapsedSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [mode, isSessionComplete]);

  function handleRate(rating) {
    const currentId = getNextCard(srCards, totalReviewed);
    if (currentId === null) return;
    setSrCards(prev => rateCard(prev, currentId, rating, totalReviewed));
    setTotalReviewed(t => t + 1);
    setSrAnswerVisible(false);
  }

  function handleReset() {
    setSrCards(initCards(questions));
    setTotalReviewed(0);
    setSrAnswerVisible(false);
    setSrElapsedSeconds(0);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Interview Prep</h1>
        <div className="mode-tabs">
          <button
            className={`mode-tab ${mode === 'browse' ? 'active' : ''}`}
            onClick={() => setMode('browse')}
          >
            Browse
          </button>
          <button
            className={`mode-tab ${mode === 'sr' ? 'active' : ''}`}
            onClick={() => setMode('sr')}
          >
            Spaced Repetition
          </button>
        </div>
      </header>

      <main>
        {mode === 'browse' ? (
          <BrowseMode />
        ) : (
          <SrMode
            cards={srCards}
            totalReviewed={totalReviewed}
            elapsedSeconds={srElapsedSeconds}
            isComplete={isSessionComplete}
            answerVisible={srAnswerVisible}
            onToggleAnswer={() => setSrAnswerVisible(v => !v)}
            onRate={handleRate}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;
