import { MOCK_REVIEWS } from '../sources/mockReviews';

/**
 * ReviewRepository
 * Manages reviews feed (in-memory with local storage backup)
 */
export class ReviewRepository {
  constructor() {
    const saved = localStorage.getItem('fresh_market_reviews');
    if (saved) {
      try {
        this.reviews = JSON.parse(saved);
      } catch (e) {
        this.reviews = [...MOCK_REVIEWS];
      }
    } else {
      this.reviews = [...MOCK_REVIEWS];
    }
  }

  /**
   * Get all reviews
   * @returns {Array}
   */
  getAll() {
    return this.reviews;
  }

  /**
   * Add a new review
   * @param {Object} review 
   * @returns {Array} Updated reviews list
   */
  add(review) {
    const newReview = {
      id: Date.now(),
      ...review,
      date: new Date().toISOString().split('T')[0]
    };
    
    this.reviews = [newReview, ...this.reviews];
    localStorage.setItem('fresh_market_reviews', JSON.stringify(this.reviews));
    return this.reviews;
  }

  /**
   * Get average rating score
   * @returns {string}
   */
  getAverageRating() {
    if (this.reviews.length === 0) return '0.0';
    const total = this.reviews.reduce((sum, item) => sum + item.rating, 0);
    return (total / this.reviews.length).toFixed(1);
  }
}
