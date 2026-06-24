// SM-2 inspired session-based spaced repetition.
// "Interval" here means number of other reviews before showing again,
// not calendar days.

const MIN_EASE = 1.3;
const MAX_EASE = 3.0;
const DEFAULT_EASE = 2.5;

// How many other cards to skip before re-showing a learning card at each step.
const LEARNING_STEPS = [1, 2];

// Starting interval when a card graduates from learning to review.
const GRADUATE_INTERVAL = 3;

const HARD_FACTOR = 1.2;
const EASY_BONUS = 1.3;

// Once a review card's interval reaches this, it's removed from the session.
export const MASTERED_THRESHOLD = 10;

// ── Init ─────────────────────────────────────────────────────────────────────

export function initCards(questions) {
  const cards = {};
  questions.forEach((q, i) => {
    cards[q.id] = {
      id: q.id,
      status: 'new',      // 'new' | 'learning' | 'review' | 'mastered'
      easeFactor: DEFAULT_EASE,
      interval: 0,
      step: 0,            // index into LEARNING_STEPS
      dueAt: i,           // stagger new cards: introduce one per review
      reviewCount: 0,     // total times this card has been rated
    };
  });
  return cards;
}

// ── Scheduling ───────────────────────────────────────────────────────────────

export function getNextCard(cards, totalReviewed) {
  const active = Object.values(cards).filter(c => c.status !== 'mastered');
  if (active.length === 0) return null;

  const due = active.filter(c => c.dueAt <= totalReviewed);

  if (due.length > 0) {
    // Priority: learning first (returning cards), then review, then new introductions.
    const priority = { learning: 0, review: 1, new: 2 };
    due.sort((a, b) => {
      const p = priority[a.status] - priority[b.status];
      return p !== 0 ? p : a.dueAt - b.dueAt;
    });
    return due[0].id;
  }

  // Nothing due yet — show the soonest upcoming card (reviewing slightly early).
  active.sort((a, b) => a.dueAt - b.dueAt);
  return active[0].id;
}

// ── Rating ───────────────────────────────────────────────────────────────────

// rating: 1=Again  2=Hard  3=Good  4=Easy
export function rateCard(cards, id, rating, totalReviewed) {
  const card = { ...cards[id] };
  card.reviewCount += 1;
  const next = totalReviewed + 1; // base for dueAt (after this review is counted)

  if (card.status === 'new' || card.status === 'learning') {
    applyLearningRating(card, rating, next);
  } else {
    applyReviewRating(card, rating, next);
  }

  if (card.status === 'review' && card.interval >= MASTERED_THRESHOLD) {
    card.status = 'mastered';
  }

  return { ...cards, [id]: card };
}

function applyLearningRating(card, rating, next) {
  switch (rating) {
    case 1: // Again — reset to first learning step
      card.status = 'learning';
      card.step = 0;
      card.dueAt = next + LEARNING_STEPS[0];
      break;
    case 2: // Hard — repeat current step
      card.status = 'learning';
      card.dueAt = next + LEARNING_STEPS[Math.min(card.step, LEARNING_STEPS.length - 1)];
      break;
    case 3: // Good — advance step or graduate
      if (card.step < LEARNING_STEPS.length - 1) {
        card.status = 'learning';
        card.step += 1;
        card.dueAt = next + LEARNING_STEPS[card.step];
      } else {
        card.status = 'review';
        card.interval = GRADUATE_INTERVAL;
        card.dueAt = next + GRADUATE_INTERVAL;
      }
      break;
    case 4: // Easy — graduate immediately
      card.status = 'review';
      card.interval = GRADUATE_INTERVAL;
      card.dueAt = next + GRADUATE_INTERVAL;
      break;
    default:
      break;
  }
}

function applyReviewRating(card, rating, next) {
  switch (rating) {
    case 1: { // Again — back to learning, ease penalty
      card.status = 'learning';
      card.step = 0;
      card.easeFactor = Math.max(MIN_EASE, card.easeFactor - 0.2);
      card.interval = 0;
      card.dueAt = next + LEARNING_STEPS[0];
      break;
    }
    case 2: { // Hard — small interval increase, ease penalty
      const iv = Math.max(card.interval + 1, Math.round(card.interval * HARD_FACTOR));
      card.easeFactor = Math.max(MIN_EASE, card.easeFactor - 0.15);
      card.interval = iv;
      card.dueAt = next + iv;
      break;
    }
    case 3: { // Good — standard interval growth
      const iv = Math.max(card.interval + 1, Math.round(card.interval * card.easeFactor));
      card.interval = iv;
      card.dueAt = next + iv;
      break;
    }
    case 4: { // Easy — boosted interval growth, ease bonus
      const iv = Math.max(card.interval + 1, Math.round(card.interval * card.easeFactor * EASY_BONUS));
      card.easeFactor = Math.min(MAX_EASE, card.easeFactor + 0.15);
      card.interval = iv;
      card.dueAt = next + iv;
      break;
    }
    default:
      break;
  }
}

// ── Stats ────────────────────────────────────────────────────────────────────

export function getSrStats(cards) {
  const all = Object.values(cards);
  return {
    total: all.length,
    new: all.filter(c => c.status === 'new').length,
    learning: all.filter(c => c.status === 'learning').length,
    review: all.filter(c => c.status === 'review').length,
    mastered: all.filter(c => c.status === 'mastered').length,
  };
}
