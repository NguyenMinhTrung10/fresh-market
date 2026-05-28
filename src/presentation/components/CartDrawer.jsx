import React from 'react';
import { ShoppingBag, X, Minus, Plus, Trash2, ChevronRight } from 'lucide-react';

export function CartDrawer({
  isOpen,
  cartItems,
  couponInput,
  activeCoupon,
  subtotal,
  discount,
  shipping,
  total,
  onClose,
  onUpdateQty,
  onRemove,
  onSetCouponInput,
  onApplyCoupon,
  onRemoveCoupon,
  onCheckout
}) {
  if (!isOpen) return null;

  return (
    <>
      <div className="cart-sidebar-backdrop" onClick={onClose}></div>
      <div className="cart-sidebar animate-slide-in">
        
        <div className="cart-header">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={20} color="var(--primary)" />
            Giỏ Hàng Của Bạn
          </h3>
          <button className="icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.product.id} className="cart-item">
                {item.product.image ? (
                  <img src={item.product.image} alt={item.product.name} className="cart-item-img" />
                ) : (
                  <div className="cart-item-fallback" style={{ background: item.product.fallbackBg }}>
                    {item.product.emoji}
                  </div>
                )}
                
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.product.name}</h4>
                  <span className="cart-item-price">
                    {item.product.price.toLocaleString('vi-VN')}đ / đơn vị
                  </span>
                  
                  <div className="qty-selector" style={{ marginTop: '0.4rem', padding: '0.2rem' }}>
                    <button className="qty-btn" style={{ width: '24px', height: '24px' }} onClick={() => onUpdateQty(item.product.id, -1)}>
                      <Minus size={10} />
                    </button>
                    <span className="qty-val" style={{ width: '20px', fontSize: '0.85rem' }}>{item.quantity}</span>
                    <button className="qty-btn" style={{ width: '24px', height: '24px' }} onClick={() => onUpdateQty(item.product.id, 1)}>
                      <Plus size={10} />
                    </button>
                  </div>
                </div>

                <button className="cart-remove-btn" onClick={() => onRemove(item.product.id)} title="Xóa">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              <span style={{ fontSize: '3rem' }}>🛒</span>
              <h4 style={{ color: 'var(--text-heading)' }}>Giỏ hàng còn trống</h4>
              <p style={{ fontSize: '0.85rem' }}>Mời bạn thêm các món trái cây thơm ngon vào giỏ nhé!</p>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            
            {/* Coupons wrapper */}
            <div className="coupon-wrapper">
              <div className="coupon-section">
                <input 
                  type="text" 
                  placeholder="Mã giảm giá (FRESH10 / FREETRANS)..." 
                  className="coupon-input"
                  value={couponInput}
                  onChange={(e) => onSetCouponInput(e.target.value)}
                />
                <button className="coupon-btn" onClick={onApplyCoupon}>Áp Dụng</button>
              </div>
              {activeCoupon && (
                <div className="coupon-success-tag">
                  <span>
                    🎉 Áp dụng thành công: <strong>{activeCoupon === 'FRESH10' ? 'Giảm giá 10% đơn hàng' : 'Miễn phí giao hàng'}</strong>
                  </span>
                  <button style={{ color: 'var(--accent-red)', fontWeight: 'bold' }} onClick={onRemoveCoupon}>Xóa</button>
                </div>
              )}
            </div>

            {/* Calculations Area */}
            <div style={{ marginTop: '1.25rem' }}>
              <div className="cost-row">
                <span>Tạm tính:</span>
                <span>{subtotal.toLocaleString('vi-VN')}đ</span>
              </div>
              {discount > 0 && (
                <div className="cost-row" style={{ color: 'var(--accent-red)' }}>
                  <span>Giảm giá:</span>
                  <span>-{discount.toLocaleString('vi-VN')}đ</span>
                </div>
              )}
              <div className="cost-row">
                <span>Phí vận chuyển:</span>
                <span>
                  {shipping === 0 ? (
                    <strong style={{ color: 'var(--primary)' }}>Miễn phí</strong>
                  ) : (
                    `${shipping.toLocaleString('vi-VN')}đ`
                  )}
                </span>
              </div>
              <div className="cost-row total">
                <span>Tổng thanh toán:</span>
                <span>{total.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <button 
              className="checkout-action-btn animate-pop-in"
              style={{ marginTop: '1rem' }}
              onClick={onCheckout}
            >
              Tiến Hành Thanh Toán <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
