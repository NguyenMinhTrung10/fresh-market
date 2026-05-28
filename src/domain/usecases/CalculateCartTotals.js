/**
 * CalculateCartTotals Use Case
 * Implements business rules for cart calculations (discounts, delivery fees, thresholds)
 */
export function CalculateCartTotals(cartItems, activeCoupon) {
  // 1. Subtotal calculation
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
  }, 0);

  // 2. Discount coupon calculation
  let discount = 0;
  if (activeCoupon === 'FRESH10') {
    discount = Math.round(subtotal * 0.1);
  }

  // 3. Shipping fee calculation (Free ship threshold: 300,000đ or free shipping coupon)
  let shipping = 0;
  if (subtotal > 0) {
    if (activeCoupon === 'FREETRANS' || subtotal >= 300000) {
      shipping = 0;
    } else {
      shipping = 25000;
    }
  }

  // 4. Final total
  const total = Math.max(0, subtotal - discount + shipping);

  return {
    subtotal,
    discount,
    shipping,
    total
  };
}
