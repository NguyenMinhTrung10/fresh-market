import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <span>🌿</span>
        <span style={{ color: 'var(--text-heading)' }}>Fresh</span>
        <span>Market</span>
      </div>

      <div className="footer-links">
        <a href="#" className="footer-link">Giới Thiệu</a>
        <a href="#" className="footer-link">Chính Sách Bảo Mật</a>
        <a href="#" className="footer-link">Hợp Tác Đối Tác</a>
        <a href="#" className="footer-link">Liên Hệ Hỗ Trợ</a>
      </div>

      <div className="footer-text">
        <p>© 2026 FreshMarket. Được vận hành bởi Antigravity AI. Đã đăng ký bản quyền thương mại.</p>
        <p style={{ marginTop: '0.4rem', fontSize: '0.75rem', opacity: 0.8 }}>Địa chỉ: 123 Đường Tươi Sạch, Quận 1, TP. Hồ Chí Minh. Hotline: 1900-FRESH</p>
      </div>
    </footer>
  );
}
