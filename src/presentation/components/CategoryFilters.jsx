import React from 'react';

export function CategoryFilters({ selectedCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: '🍎 Tất Cả' },
    { id: 'organic', label: '🍃 Đạt Chuẩn Hữu Cơ' },
    { id: 'local', label: '🇻🇳 Đặc Sản Trong Nước' },
    { id: 'import', label: '✈️ Trái Cây Nhập Khẩu' },
    { id: 'combo', label: '🎁 Giỏ Quà / Combo' }
  ];

  return (
    <section className="category-container">
      <h5 className="section-subtitle">Phân Loại Trái Cây</h5>
      <h2 className="section-title">Lựa Chọn Cho Sức Khỏe</h2>

      <div className="filters-wrapper">
        {categories.map(cat => (
          <button 
            key={cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
