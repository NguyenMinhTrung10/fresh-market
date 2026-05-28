/**
 * Mock Products Data Source
 */
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Dâu Tây Đà Lạt Chuẩn Hữu Cơ',
    price: 120000,
    oldPrice: 150000,
    category: 'organic',
    rating: 4.8,
    reviewsCount: 24,
    image: '/images/strawberry.png',
    emoji: '🍓',
    fallbackBg: 'linear-gradient(135deg, #ff4e50, #f9d423)',
    origin: 'Đà Lạt, Lâm Đồng',
    nutrition: {
      vitC: '98%',
      kali: '4%',
      folate: '6%',
      calories: '32 kcal'
    },
    benefits: 'Chống oxy hóa mạnh mẽ, cung cấp lượng vitamin C dồi dào giúp sáng mịn da và tăng cường hệ đề kháng tự nhiên.',
    tag: 'Bán chạy nhất'
  },
  {
    id: 2,
    name: 'Bơ Sáp Đắk Lắk Dẻo Béo',
    price: 65000,
    oldPrice: 80000,
    category: 'local',
    rating: 4.7,
    reviewsCount: 18,
    image: '/images/avocado.png',
    emoji: '🥑',
    fallbackBg: 'linear-gradient(135deg, #11998e, #38ef7d)',
    origin: 'Đắk Lắk, Tây Nguyên',
    nutrition: {
      vitC: '10%',
      kali: '14%',
      fats: '15g',
      calories: '160 kcal'
    },
    benefits: 'Cung cấp nguồn chất béo không bão hòa đơn cực tốt cho sức khỏe tim mạch, giàu chất xơ hỗ trợ hệ tiêu hóa mượt mà.',
    tag: 'Chuẩn VietGAP'
  },
  {
    id: 3,
    name: 'Nho Đỏ Phan Rang Giòn Ngọt',
    price: 95000,
    oldPrice: null,
    category: 'local',
    rating: 4.6,
    reviewsCount: 15,
    image: '/images/grapes.png',
    emoji: '🍇',
    fallbackBg: 'linear-gradient(135deg, #b06ab3, #4568dc)',
    origin: 'Phan Rang, Ninh Thuận',
    nutrition: {
      vitC: '15%',
      kali: '8%',
      iron: '4%',
      calories: '69 kcal'
    },
    benefits: 'Giàu Resveratrol trong lớp vỏ mỏng giúp chống lão hóa hiệu quả, điều hòa huyết áp và cải thiện lưu thông máu.',
    tag: 'Đặc sản vùng miền'
  },
  {
    id: 4,
    name: 'Xoài Cát Hòa Lộc Loại 1',
    price: 110000,
    oldPrice: 130000,
    category: 'organic',
    rating: 4.9,
    reviewsCount: 32,
    image: null,
    emoji: '🥭',
    fallbackBg: 'linear-gradient(135deg, #f12711, #f5af19)',
    origin: 'Cái Bè, Tiền Giang',
    nutrition: {
      vitA: '25%',
      vitC: '60%',
      fiber: '1.6g',
      calories: '60 kcal'
    },
    benefits: 'Mùi hương ngào ngạt quyến rũ, chất xoài ngọt lịm không xơ, cung cấp Vitamin A dồi dào bổ mắt.',
    tag: 'Độc quyền hữu cơ'
  },
  {
    id: 5,
    name: 'Cherry Đỏ Mỹ Nhập Khẩu Cao Cấp',
    price: 380000,
    oldPrice: 450000,
    category: 'import',
    rating: 5.0,
    reviewsCount: 45,
    image: null,
    emoji: '🍒',
    fallbackBg: 'linear-gradient(135deg, #8a2387, #e94057)',
    origin: 'Bang Washington, Hoa Kỳ',
    nutrition: {
      vitC: '12%',
      kali: '6%',
      iron: '3%',
      calories: '50 kcal'
    },
    benefits: 'Cherry to tròn mọng nước, ngọt giòn cao cấp. Giàu chất kháng viêm tự nhiên và melatonin cải thiện sâu giấc ngủ.',
    tag: 'Nhập khẩu cao cấp'
  },
  {
    id: 6,
    name: 'Sầu Riêng Ri6 Cơm Vàng Hạt Lép',
    price: 160000,
    oldPrice: null,
    category: 'local',
    rating: 4.9,
    reviewsCount: 28,
    image: null,
    emoji: '🍈',
    fallbackBg: 'linear-gradient(135deg, #a8ff78, #78ffd6)',
    origin: 'Vĩnh Long, Miền Tây',
    nutrition: {
      kali: '12%',
      vitB6: '15%',
      fiber: '3.8g',
      calories: '147 kcal'
    },
    benefits: 'Cơm sầu riêng vàng ươm, dẻo ngọt đậm đà quyến rũ tuyệt đỉnh. Cung cấp năng lượng tức thì cho cơ thể hoạt động.',
    tag: 'Đặc sản Miền Tây'
  },
  {
    id: 7,
    name: 'Táo Xanh Ninh Thuận Giòn Ngọt',
    price: 45000,
    oldPrice: 55000,
    category: 'organic',
    rating: 4.5,
    reviewsCount: 10,
    image: null,
    emoji: '🍏',
    fallbackBg: 'linear-gradient(135deg, #56ab2f, #a8ff78)',
    origin: 'Ninh Thuận',
    nutrition: {
      vitC: '40%',
      fiber: '2.4g',
      water: '85%',
      calories: '40 kcal'
    },
    benefits: 'Giòn rau ráu, vị ngọt mát giải nhiệt hiệu quả. Giúp hỗ trợ giảm cân, đào thải độc tố và kiểm soát lượng đường huyết.',
    tag: 'Nắng gió Việt'
  },
  {
    id: 8,
    name: 'Giỏ Quà Trái Cây Thượng Hạng',
    price: 499000,
    oldPrice: 550000,
    category: 'combo',
    rating: 4.9,
    reviewsCount: 19,
    image: null,
    emoji: '🎁',
    fallbackBg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    origin: 'FreshMarket Tuyển Chọn',
    nutrition: {
      vitC: 'Phong phú',
      fiber: 'Cao',
      minerals: 'Hỗn hợp',
      calories: 'Biến đổi'
    },
    benefits: 'Thiết kế giỏ đan mây sang trọng đính kèm thiệp chúc mừng độc bản, kết hợp đa dạng các loại quả mọng tươi ngon.',
    tag: 'Quà biếu sang trọng'
  }
];
