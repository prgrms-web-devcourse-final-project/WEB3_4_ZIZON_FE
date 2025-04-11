import { DigitalContent } from './product';

export interface Order {
  id: number;
  orderId: string;
  sellerName: string;
  productType: 'PHYSICAL' | 'DIGITAL';
  productThumbnail: string;
  productTitle: string;
  productPrice: number;
  quantity: number;
  totalPrice: number;
  status: 'PAID' | 'PREPARING' | 'SHIPPING' | 'DELIVERED' | 'CANCELLED';
  paymentMethod: string;
  orderedAt: string;
  digitalContent: DigitalContent[];
}

export interface OrderPageResponse {
  content: Order[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
