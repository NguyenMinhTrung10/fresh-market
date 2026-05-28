/**
 * ApplyDiscountCoupon Use Case
 * Validates promotional discount codes
 */
export function ApplyDiscountCoupon(couponCode) {
  const code = couponCode.toUpperCase().trim();
  
  if (code === 'FRESH10') {
    return {
      isValid: true,
      coupon: 'FRESH10',
      description: 'Giảm giá 10% tổng đơn hàng'
    };
  }

  if (code === 'FREETRANS') {
    return {
      isValid: true,
      coupon: 'FREETRANS',
      description: 'Miễn phí giao hàng (Free Ship)'
    };
  }

  return {
    isValid: false,
    coupon: null,
    description: 'Mã giảm giá không hợp lệ hoặc đã hết hạn!'
  };
}
