import React from 'react';
import { Star, MessageSquare, ThumbsUp } from 'lucide-react';

export function ReviewsSection({
  reviews,
  avgRating,
  newReview,
  onSetNewReview,
  onSubmitReview
}) {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h5 className="section-subtitle" style={{ textAlign: 'center' }}>Khách Hàng Đánh Giá</h5>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Nhận Xét Thực Tế</h2>

        <div className="reviews-summary-box">
          <div>
            <span className="reviews-score">{avgRating}</span>
            <div className="product-rating" style={{ fontSize: '1.2rem', justifyContent: 'center' }}>
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Đánh giá trung bình từ người dùng</span>
          </div>

          <div style={{ flexGrow: 1, maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', width: '30px' }}>5 sao</span>
              <div style={{ height: '8px', background: 'var(--border-color)', borderRadius: '4px', flexGrow: 1, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', width: '80%' }}></div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>80%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', width: '30px' }}>4 sao</span>
              <div style={{ height: '8px', background: 'var(--border-color)', borderRadius: '4px', flexGrow: 1, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', width: '20%' }}></div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>20%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', width: '30px' }}>3 sao</span>
              <div style={{ height: '8px', background: 'var(--border-color)', borderRadius: '4px', flexGrow: 1, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', width: '0%' }}></div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>0%</span>
            </div>
          </div>
        </div>

        {/* Input Feedback form */}
        <div className="add-review-form animate-fade-in">
          <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MessageSquare size={18} color="var(--primary)" /> Chia Sẻ Trải Nghiệm Của Bạn
          </h4>
          
          <form onSubmit={onSubmitReview}>
            <div className="form-group">
              <label className="form-label">Tên của bạn:</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Nhập tên..." 
                value={newReview.name}
                onChange={(e) => onSetNewReview({ ...newReview, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Chấm điểm chất lượng:</label>
              <div className="star-rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={24} 
                    className="star-interactive"
                    fill={star <= newReview.rating ? 'var(--secondary)' : 'none'} 
                    color={star <= newReview.rating ? 'var(--secondary)' : 'var(--text-muted)'} 
                    onClick={() => onSetNewReview({ ...newReview, rating: star })}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Ý kiến đóng góp:</label>
              <textarea 
                rows="3" 
                className="form-input" 
                placeholder="Hãy chia sẻ nhận định thực tế của bạn về chất lượng hoa quả và đóng gói..." 
                style={{ resize: 'vertical', fontFamily: 'inherit' }}
                value={newReview.comment}
                onChange={(e) => onSetNewReview({ ...newReview, comment: e.target.value })}
              />
            </div>

            <button 
              type="submit" 
              className="checkout-action-btn"
              style={{ width: 'fit-content', padding: '0.6rem 2rem' }}
            >
              Gửi Đánh Giá Ngay <ThumbsUp size={16} style={{ marginLeft: '0.5rem' }} />
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="review-list">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-user-row">
                <span className="review-user-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
              
              <div className="product-rating" style={{ marginBottom: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={14} 
                    fill={star <= review.rating ? 'var(--secondary)' : 'none'} 
                    color={star <= review.rating ? 'var(--secondary)' : 'var(--text-muted)'} 
                  />
                ))}
              </div>

              <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{review.comment}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
