import React from 'react';
import { Search, ShoppingBag, Sun, Moon } from 'lucide-react';

export function Header({ 
  searchTerm, 
  setSearchTerm, 
  darkMode, 
  toggleTheme, 
  cartCount, 
  onOpenCart 
}) {
  return (
    <header className="navbar">
      <div className="logo-container">
        <span className="logo-icon">🌿</span>
        <span style={{ color: 'var(--text-heading)' }}>Fresh</span>
        <span>Market</span>
      </div>

      <div className="search-container">
        <Search className="search-icon-inside" size={18} />
        <input 
          type="text" 
          placeholder="Tìm kiếm trái cây tươi..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="nav-actions">
        <button 
          className="icon-btn" 
          onClick={toggleTheme}
          title={darkMode ? 'Chế độ sáng' : 'Chế độ tối'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button 
          className="icon-btn" 
          onClick={onOpenCart}
          title="Xem giỏ hàng"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="badge-count">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
