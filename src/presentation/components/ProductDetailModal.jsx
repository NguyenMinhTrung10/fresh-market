import React from 'react';
import { X, Star, Minus, Plus, ShoppingBag } from 'lucide-react';

export function ProductDetailModal({ 
  product, 
  quantity, 
  onSetQuantity, 
  onClose, 
  onAddToCart 
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content animate-pop-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-split-layout">
          {/* Image Block */}
          <div className="modal-img-area">
            {product.image ? (
              <img src={product.image} alt={product.name} className="modal-img" />
            ) : (
              <div className="svg-fallback-container" style={{ background: product.fallbackBg, height: '320px' }}>
                <span style={{ fontSize: '6rem' }}>{product.emoji}</span>
              </div>
            )}
          </div>

          {/* Details & Actions Block */}
          <div className="modal-info-area">
            <div>
              <span className="product-origin" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                📍 Xuất xứ: {product.origin}
              </span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{product.name}</h2>
              
              <div className="product-rating" style={{ marginBottom: '1rem' }}>
                <Star size={16} fill="currentColor" />
                <span style={{ fontWeight: 'bold' }}>{product.rating}</span>
                <span className="rating-count">({product.reviewsCount} khách hàng tin dùng)</span>
              </div>

              <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                {product.benefits}
              </p>

              <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>Giá Trị Dinh Dưỡng Ước Tính:</h4>
              <div className="modal-nutrition-grid">
                <div className="nutrition-item">
                  <span className="nutrition-val">{product.nutrition.calories}</span>
                  <span className="nutrition-lbl">Năng Lượng</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-val">{product.nutrition.vitC || 'Đầy đủ'}</span>
                  <span className="nutrition-lbl">Vitamin C</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-val">{product.nutrition.kali || 'Khá cao'}</span>
                  <span className="nutrition-lbl">Kali</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-val">{product.nutrition.fiber || product.nutrition.fats || 'Có sẵn'}</span>
                  <span className="nutrition-lbl">{product.nutrition.fats ? 'Chất Béo Tốt' : 'Chất Xơ'}</span>
                </div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1.5rem 0 1rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)' }}>
                  {(product.price * quantity).toLocaleString('vi-VN')}đ
                </span>

                <div className="qty-selector">
                  <button 
                    className="qty-btn" 
                    disabled={quantity <= 1}
                    onClick={() => onSetQuantity(quantity - 1)}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-val">{quantity}</span>
                  <button 
                    className="qty-btn" 
                    onClick={() => onSetQuantity(quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button 
                className="checkout-action-btn"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
              >
                <ShoppingBag size={18} /> Thêm Vào Giỏ Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
