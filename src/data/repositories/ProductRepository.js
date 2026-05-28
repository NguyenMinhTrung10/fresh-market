import { MOCK_PRODUCTS } from '../sources/mockProducts';
import { Product } from '../../domain/entities/Product';

/**
 * ProductRepository
 * Provides abstraction for fetching and filtering products data
 */
export class ProductRepository {
  constructor() {
    // Instantiate entities from mock data source
    this.products = MOCK_PRODUCTS.map(item => new Product(item));
  }

  /**
   * Get all products
   * @returns {Product[]}
   */
  getAll() {
    return this.products;
  }

  /**
   * Get single product by ID
   * @param {number} id 
   * @returns {Product|null}
   */
  getById(id) {
    return this.products.find(item => item.id === id) || null;
  }

  /**
   * Query products with search and category filtering
   * @param {string} searchTerm 
   * @param {string} category 
   * @returns {Product[]}
   */
  query(searchTerm = '', category = 'all') {
    const term = searchTerm.toLowerCase().trim();
    
    return this.products.filter(product => {
      const matchSearch = product.name.toLowerCase().includes(term) || 
                          product.origin.toLowerCase().includes(term);
      const matchCategory = category === 'all' || product.category === category;
      return matchSearch && matchCategory;
    });
  }
}
