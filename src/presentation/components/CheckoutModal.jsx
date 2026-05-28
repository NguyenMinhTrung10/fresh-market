import React from 'react';
import { X, ChevronRight, Truck, CreditCard, CheckCircle } from 'lucide-react';

export function CheckoutModal({
  isOpen,
  step,
  form,
  errors,
  subtotal,
  discount,
  shipping,
  total,
  onClose,
  onChangeForm,
  onNext,
  onPrev,
  onSubmit
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content animate-pop-in" style={{ maxWidth: '600px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Stepper Status Head */}
        <div className="checkout-steps">
          <div className={`step-node ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-circle">1</div>
            <span className="step-label">Thông Tin</span>
          </div>
          <div className={`step-node ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-circle">2</div>
            <span className="step-label">Thanh Toán</span>
          </div>
          <div className={`step-node ${step >= 3 ? 'active' : ''}`}>
            <div className="step-circle">3</div>
            <span className="step-label">Hoàn Tất</span>
          </div>
        </div>

        {/* Step 1: User Info */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              👤 Nhập Thông Tin Nhận Hàng
            </h3>

            <div className="form-group">
              <label className="form-label">Họ và Tên:</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Nguyễn Văn A" 
                value={form.name}
                onChange={(e) => onChangeForm({ name: e.target.value })}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Số Điện Thoại:</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="09XXXXXXXX" 
                value={form.phone}
                onChange={(e) => onChangeForm({ phone: e.target.value })}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Địa Chỉ Giao Hàng:</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Số 123 Đường ABC, Quận X, TP. Hồ Chí Minh" 
                value={form.address}
                onChange={(e) => onChangeForm({ address: e.target.value })}
              />
              {errors.address && <span className="form-error">{errors.address}</span>}
            </div>

            <div className="modal-split-layout" style={{ gap: '1rem', marginTop: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Ngày Giao:</label>
                <input 
                  type="date" 
                  className="form-input" 
                  value={form.deliveryDate}
                  onChange={(e) => onChangeForm({ deliveryDate: e.target.value })}
                />
                {errors.deliveryDate && <span className="form-error">{errors.deliveryDate}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Khung Giờ:</label>
                <select 
                  className="form-input"
                  value={form.deliveryTime}
                  onChange={(e) => onChangeForm({ deliveryTime: e.target.value })}
                >
                  <option value="morning">Sáng (08:00 - 12:00)</option>
                  <option value="afternoon">Chiều (12:00 - 17:00)</option>
                  <option value="evening">Tối (17:00 - 21:00)</option>
                </select>
              </div>
            </div>

            <button 
              className="checkout-action-btn" 
              style={{ marginTop: '1.5rem' }} 
              onClick={onNext}
            >
              Tiếp Tục Thanh Toán <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Step 2: Payment options */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '1.25rem' }}>💳 Chọn Phương Thức Thanh Toán</h3>

            <div className="payment-grid">
              <div 
                className={`payment-card ${form.paymentMethod === 'cod' ? 'selected' : ''}`}
                onClick={() => onChangeForm({ paymentMethod: 'cod' })}
              >
                <Truck className="payment-card-icon" size={24} />
                <div className="payment-card-info">
                  <span className="payment-title">Tiền Mặt (COD)</span>
                  <span className="payment-desc">Thanh toán khi nhận hàng</span>
                </div>
              </div>

              <div 
                className={`payment-card ${form.paymentMethod === 'bank' ? 'selected' : ''}`}
                onClick={() => onChangeForm({ paymentMethod: 'bank' })}
              >
                <CreditCard className="payment-card-icon" size={24} />
                <div className="payment-card-info">
                  <span className="payment-title">Chuyển Khoản</span>
                  <span className="payment-desc">Quét mã QR Ngân hàng nhanh</span>
                </div>
              </div>
            </div>

            {form.paymentMethod === 'bank' && (
              <div className="bank-transfer-pane">
                <div className="qr-mock-box">
                  <div className="qr-dots"></div>
                  <div style={{ position: 'absolute', background: 'white', padding: '0.2rem', borderRadius: '4px' }}>
                    <span style={{ fontSize: '1rem' }}>💸</span>
                  </div>
                </div>
                <div className="bank-info-table">
                  <h4 style={{ color: 'var(--primary)', fontWeight: '800' }}>HỆ THỐNG QR THANH TOÁN</h4>
                  <div>Ngân hàng: <strong>Vietcombank</strong></div>
                  <div>Số tài khoản: <strong>1028394857</strong></div>
                  <div>Chủ tài khoản: <strong>CONG TY FRESHMARKET</strong></div>
                  <div>Nội dung CK: <strong>FM {form.phone || '9999'}</strong></div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-red)', marginTop: '0.4rem' }}>
                    * Quét mã trên để tự động nhận dạng giao dịch cực kỳ nhanh chóng.
                  </div>
                </div>
              </div>
            )}

            {form.paymentMethod === 'cod' && (
              <div className="bank-transfer-pane" style={{ background: 'var(--primary-light)', borderColor: 'var(--primary)' }}>
                <Truck size={36} color="var(--primary)" />
                <div style={{ fontSize: '0.9rem' }}>
                  Bạn đã chọn phương thức <strong>Thanh toán khi nhận hàng (COD)</strong>. 
                  FreshMarket sẽ gọi xác nhận số điện thoại trước khi nhân viên giao hàng vận chuyển trái cây.
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button 
                className="filter-btn" 
                style={{ flex: 1 }}
                onClick={onPrev}
              >
                Quay Lại
              </button>
              <button 
                className="checkout-action-btn" 
                style={{ flex: 2 }}
                onClick={onNext}
              >
                Xác Nhận Đơn Hàng <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Receipt success */}
        {step === 3 && (
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>ĐẶT HÀNG THÀNH CÔNG!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Cảm ơn bạn đã tin chọn FreshMarket. Đơn hàng đang được điều phối giao đúng lịch hẹn!
            </p>

            <div className="confetti-container">
              <div className="confetti-piece" style={{ background: 'var(--primary)' }}></div>
              <div className="confetti-piece" style={{ background: 'var(--secondary)' }}></div>
              <div className="confetti-piece" style={{ background: 'var(--accent-red)' }}></div>
              <div className="confetti-piece" style={{ background: 'var(--accent-purple)' }}></div>
            </div>

            <div className="receipt-box">
              <div className="receipt-header">
                <h3>FRESHMARKET INVOICE</h3>
                <div>Mã ĐH: #FM-{Date.now().toString().slice(-6)}</div>
                <div>Ngày đặt: {new Date().toLocaleDateString('vi-VN')}</div>
              </div>

              <div className="receipt-row">
                <span>Khách hàng:</span>
                <span>{form.name}</span>
              </div>
              <div className="receipt-row">
                <span>Số điện thoại:</span>
                <span>{form.phone}</span>
              </div>
              <div className="receipt-row">
                <span>Giao tới:</span>
                <span style={{ maxWidth: '60%', textAlign: 'right', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {form.address}
                </span>
              </div>
              <div className="receipt-row">
                <span>Lịch giao hàng:</span>
                <span>{form.deliveryDate} ({form.deliveryTime === 'morning' ? 'Sáng' : form.deliveryTime === 'afternoon' ? 'Chiều' : 'Tối'})</span>
              </div>
              <div className="receipt-row" style={{ borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                <span>HT Thanh toán:</span>
                <span>{form.paymentMethod === 'bank' ? 'Chuyển Khoản' : 'Tiền mặt (COD)'}</span>
              </div>

              <div className="receipt-row">
                <span>Tổng tạm tính:</span>
                <span>{subtotal.toLocaleString('vi-VN')}đ</span>
              </div>
              {discount > 0 && (
                <div className="receipt-row" style={{ color: 'var(--accent-red)' }}>
                  <span>Mã giảm giá:</span>
                  <span>-{discount.toLocaleString('vi-VN')}đ</span>
                </div>
              )}
              <div className="receipt-row">
                <span>Phí ship:</span>
                <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString('vi-VN')}đ`}</span>
              </div>
              <div className="receipt-row" style={{ borderTop: '2px solid var(--text-heading)', paddingTop: '0.5rem', marginTop: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>
                <span>TỔNG TIỀN:</span>
                <span>{total.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <button 
                type="submit" 
                className="checkout-action-btn" 
                style={{ marginTop: '1.5rem', width: '100%' }}
              >
                Hoàn Tất & Về Trang Chủ
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
