import React from 'react';
import { Sparkles, Search } from 'lucide-react';

export function Hero({ searchTerm, setSearchTerm }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-tag">
          <Sparkles size={16} /> Trái Cây Đạt Chuẩn Organic & VietGAP
        </span>
        <h1 className="hero-title">
          Trái Cây Tươi Sạch <br />
          Giao Tận Nơi Mỗi Ngày
        </h1>
        <p className="hero-desc">
          FreshMarket cam kết mang lại nguồn dinh dưỡng tốt lành nhất cho gia đình bạn. 
          Tuyển chọn nghiêm ngặt, đóng gói chuyên nghiệp, giao nhanh giữ nguyên vị tươi ngọt thanh mát.
        </p>

        <div className="hero-search-bar">
          <Search className="search-icon-inside" size={18} />
          <input 
            type="text" 
            placeholder="Tìm kiếm trái cây tươi mát..."
            className="search-input"
            style={{ display: 'block', width: '100%' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Tự nhiên & Sạch</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">30m</span>
            <span className="stat-label">Giao nhanh nội thành</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">2K+</span>
            <span className="stat-label">Khách hàng tin chọn</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img 
          src={`${import.meta.env.BASE_URL || '/'}images/strawberry.png`} 
          alt="Dâu tây tươi mát" 
          className="hero-main-img" 
        />
        <div className="floating-badge badge-1">
          <span style={{ fontSize: '1.5rem' }}>🥑</span>
          <div>
            <h4 style={{ fontSize: '0.9rem' }}>Bơ Đắk Lắk dẻo</h4>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Cực béo & bổ dưỡng</p>
          </div>
        </div>
        <div className="floating-badge badge-2">
          <span style={{ fontSize: '1.5rem' }}>🍇</span>
          <div>
            <h4 style={{ fontSize: '0.9rem' }}>Nho Ninh Thuận</h4>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Giòn ngọt thanh mát</p>
          </div>
        </div>
      </div>
    </section>
  );
}
