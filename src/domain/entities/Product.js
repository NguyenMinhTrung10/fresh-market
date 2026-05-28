/**
 * Product Entity
 * Represents a Fruit Product in the store
 */
export class Product {
  constructor({
    id,
    name,
    price,
    oldPrice = null,
    category,
    rating = 5.0,
    reviewsCount = 0,
    image = null,
    emoji = '🍎',
    fallbackBg = 'linear-gradient(135deg, #eee, #ccc)',
    origin = 'Việt Nam',
    nutrition = {},
    benefits = '',
    tag = ''
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.oldPrice = oldPrice;
    this.category = category;
    this.rating = rating;
    this.reviewsCount = reviewsCount;
    this.image = image;
    this.emoji = emoji;
    this.fallbackBg = fallbackBg;
    this.origin = origin;
    this.nutrition = nutrition;
    this.benefits = benefits;
    this.tag = tag;
  }

  // Business Rules
  hasDiscount() {
    return this.oldPrice !== null && this.oldPrice > this.price;
  }

  getDiscountPercentage() {
    if (!this.hasDiscount()) return 0;
    return Math.round(((this.oldPrice - this.price) / this.oldPrice) * 100);
  }
}
