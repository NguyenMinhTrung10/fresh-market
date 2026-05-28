import { useState, useMemo } from 'react';
import { ProductRepository } from '../../data/repositories/ProductRepository';
import { ReviewRepository } from '../../data/repositories/ReviewRepository';
import { CalculateCartTotals } from '../../domain/usecases/CalculateCartTotals';
import { ApplyDiscountCoupon } from '../../domain/usecases/ApplyDiscountCoupon';

// Single repository instances for lifecycle
const productRepo = new ProductRepository();
const reviewRepo = new ReviewRepository();

/**
 * useAppController Hook (ViewModel / Presenter)
 * Orchestrates domain use cases, repositories, and state management
 */
export function useAppController() {
  // 1. Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 2. Cart & Favorites State
  const [cart, setCart] = useState([]);
  const [likedItems, setLikedItems] = useState(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [detailQty, setDetailQty] = useState(1);

  // 3. Checkout State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryDate: '',
    deliveryTime: 'morning',
    paymentMethod: 'cod'
  });
  const [checkoutErrors, setCheckoutErrors] = useState({});

  // 4. Coupons State
  const [couponInput, setCouponInput] = useState('');
  const [activeCoupon, setActiveCoupon] = useState(null);

  // 5. Reviews State
  const [reviews, setReviews] = useState(() => reviewRepo.getAll());
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });

  // --- Domain Queries ---
  // Query Products using Repository
  const filteredProducts = useMemo(() => {
    return productRepo.query(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  // Compute Cart totals using CalculateCartTotals Domain Use Case
  const { subtotal, discount, shipping, total } = useMemo(() => {
    return CalculateCartTotals(cart, activeCoupon);
  }, [cart, activeCoupon]);

  const avgRating = useMemo(() => {
    return reviewRepo.getAverageRating();
  }, [reviews]);

  // --- Cart Handlers ---
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (productId, change) => {
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId) {
          const nextQty = item.quantity + change;
          return nextQty > 0 ? { ...item, quantity: nextQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const toggleLike = (productId) => {
    setLikedItems(prev => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  };

  // --- Coupon Handler ---
  const applyCoupon = () => {
    const result = ApplyDiscountCoupon(couponInput);
    if (result.isValid) {
      setActiveCoupon(result.coupon);
      setCouponInput('');
    } else {
      alert(result.description);
    }
  };

  // --- Checkout Handlers ---
  const handleCheckoutNext = () => {
    if (checkoutStep === 1) {
      const errors = {};
      if (!checkoutForm.name.trim()) errors.name = 'Vui lòng điền họ tên.';
      if (!checkoutForm.phone.trim() || !/^\d{9,11}$/.test(checkoutForm.phone.trim())) {
        errors.phone = 'Số điện thoại không hợp lệ (9 - 11 số).';
      }
      if (!checkoutForm.address.trim()) errors.address = 'Vui lòng điền địa chỉ giao hàng.';
      if (!checkoutForm.deliveryDate) errors.deliveryDate = 'Vui lòng chọn ngày giao hàng.';

      if (Object.keys(errors).length > 0) {
        setCheckoutErrors(errors);
        return;
      }
      setCheckoutErrors({});
      setCheckoutStep(2);
    } else if (checkoutStep === 2) {
      setCheckoutStep(3);
    }
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCart([]);
    setIsCheckoutOpen(false);
    setCheckoutStep(1);
    setActiveCoupon(null);
    setCheckoutForm({
      name: '',
      phone: '',
      address: '',
      deliveryDate: '',
      deliveryTime: 'morning',
      paymentMethod: 'cod'
    });
    alert('Đặt hàng thành công! Đơn hàng của bạn đang được chuẩn bị.');
  };

  // --- Review Handlers ---
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      alert('Vui lòng nhập đầy đủ tên và bình luận!');
      return;
    }

    const updated = reviewRepo.add(newReview);
    setReviews(updated);
    setNewReview({ name: '', comment: '', rating: 5 });
  };

  return {
    // States
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

    // Calculated
    filteredProducts,
    subtotal,
    discount,
    shipping,
    total,
    avgRating,

    // Handlers
    addToCart,
    updateCartQty,
    removeFromCart,
    toggleLike,
    applyCoupon,
    handleCheckoutNext,
    handleCheckoutSubmit,
    handleReviewSubmit
  };
}
