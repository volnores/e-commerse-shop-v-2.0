import { ProductItem } from '../productItem';

export interface ItemsList {
  products: ProductItem[];
  error?: string;
  isLoading: boolean;
}
