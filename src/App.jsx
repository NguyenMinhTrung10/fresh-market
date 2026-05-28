import React from 'react';
import './App.css';
import { useTheme } from './presentation/hooks/useTheme';
import { useAppController } from './presentation/hooks/useAppController';

// Components
import { Header } from './presentation/components/Header';
import { Hero } from './presentation/components/Hero';
import { CategoryFilters } from './presentation/components/CategoryFilters';
import { ProductCard } from './presentation/components/ProductCard';
import { ProductDetailModal } from './presentation/components/ProductDetailModal';
import { CartDrawer } from './presentation/components/CartDrawer';
import { CheckoutModal } from './presentation/components/CheckoutModal';
import { ReviewsSection } from './presentation/components/ReviewsSection';
import { Footer } from './presentation/components/Footer';

function App() {
  // 1. Theme Logic
  const { darkMode, toggleTheme } = useTheme();

  // 2. State & Business Logic Controller
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    cart,
    likedItems,
    isCartOpen,
    setIsCartOpen,
    activeProduct,
    setActiveProduct,
    detailQty,
    setDetailQty,
    isCheckoutOpen,
    setIsCheckoutOpen,
    checkoutStep,
    setCheckoutStep,
    checkoutForm,
    setCheckoutForm,
    checkoutErrors,
    couponInput,
    setCouponInput,
    activeCoupon,
    setActiveCoupon,
    reviews,
    newReview,
    setNewReview,

    filteredProducts,
    subtotal,
    discount,
    shipping,
    total,
    avgRating,

    addToCart,
    updateCartQty,
    removeFromCart,
    toggleLike,
    applyCoupon,
    handleCheckoutNext,
    handleCheckoutSubmit,
    handleReviewSubmit
  } = useAppController();

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      
      {/* 1. Header / Navigation */}
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 2. Hero Promotion Banner */}
      <Hero 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* 3. Category Filters */}
      <CategoryFilters 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 4. Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                isLiked={likedItems.has(product.id)}
                onToggleLike={toggleLike}
                onSelectProduct={(p) => {
                  setActiveProduct(p);
                  setDetailQty(1);
                }}
                onAddToCart={addToCart}
              />
            ))
          ) : (
            <div className="no-results animate-pop-in">
              <span style={{ fontSize: '3rem' }}>🔍</span>
              <h3>Không tìm thấy sản phẩm phù hợp</h3>
              <p>Bạn hãy thử tìm từ khóa khác hoặc chuyển danh mục bộ lọc nhé!</p>
              <button 
                className="filter-btn active" 
                style={{ marginTop: '1rem' }}
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              >
                Reset Bộ Lọc
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Product Detail Modal */}
      {activeProduct && (
        <ProductDetailModal 
          product={activeProduct}
          quantity={detailQty}
          onSetQuantity={setDetailQty}
          onClose={() => setActiveProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* 6. Shopping Cart Sidebar Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        cartItems={cart}
        couponInput={couponInput}
        activeCoupon={activeCoupon}
        subtotal={subtotal}
        discount={discount}
        shipping={shipping}
        total={total}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        onSetCouponInput={setCouponInput}
        onApplyCoupon={applyCoupon}
        onRemoveCoupon={() => setActiveCoupon(null)}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
          setCheckoutStep(1);
        }}
      />

      {/* 7. Multi-step Checkout System */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        step={checkoutStep}
        form={checkoutForm}
        errors={checkoutErrors}
        subtotal={subtotal}
        discount={discount}
        shipping={shipping}
        total={total}
        onClose={() => setIsCheckoutOpen(false)}
        onChangeForm={(updatedFields) => setCheckoutForm(prev => ({ ...prev, ...updatedFields }))}
        onNext={handleCheckoutNext}
        onPrev={() => setCheckoutStep(prev => prev - 1)}
        onSubmit={handleCheckoutSubmit}
      />

      {/* 8. Dynamic Customer Feedback Reviews */}
      <ReviewsSection 
        reviews={reviews}
        avgRating={avgRating}
        newReview={newReview}
        onSetNewReview={setNewReview}
        onSubmitReview={handleReviewSubmit}
      />

      {/* 9. Footer */}
      <Footer />

    </div>
  );
}

export default App;
