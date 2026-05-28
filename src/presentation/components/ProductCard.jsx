import React from 'react';
import { Heart, Plus, Star } from 'lucide-react';

export function ProductCard({ 
  product, 
  isLiked, 
  onToggleLike, 
  onSelectProduct, 
  onAddToCart 
}) {
  const hasDiscount = product.hasDiscount();

  return (
    <div className="product-card animate-fade-in">
      {/* Badge based on Category */}
      <div className={`product-badge ${
        product.category === 'organic' ? 'badge-organic' :
        product.category === 'import' ? 'badge-import' :
        product.category === 'combo' ? 'badge-discount' : 'badge-local'
      }`}>
        {product.emoji} {product.tag}
      </div>

      {/* Favorite Button */}
      <button 
        className={`like-btn ${isLiked ? 'liked' : ''}`}
        onClick={() => onToggleLike(product.id)}
        title={isLiked ? 'Bỏ thích' : 'Yêu thích'}
      >
        <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
      </button>

      {/* Visual Area */}
      <div 
        className="product-img-wrapper"
        onClick={() => onSelectProduct(product)}
        style={{ cursor: 'pointer' }}
      >
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-card-img" />
        ) : (
          <div className="svg-fallback-container" style={{ background: product.fallbackBg }}>
            <span>{product.emoji}</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="product-info">
        <span className="product-origin">Xuất xứ: {product.origin}</span>
        <h3 
          className="product-name"
          onClick={() => onSelectProduct(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>
        
        <div className="product-rating">
          <Star size={14} fill="currentColor" />
          <span>{product.rating}</span>
          <span className="rating-count">({product.reviewsCount} Đánh giá)</span>
        </div>

        <div className="product-meta-row">
          <div className="price-box">
            <span className="current-price">{product.price.toLocaleString('vi-VN')}đ</span>
            {hasDiscount && (
              <span className="old-price">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
            )}
          </div>

          <button 
            className="add-cart-btn" 
            onClick={() => onAddToCart(product, 1)}
            title="Thêm vào giỏ hàng"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
