export interface OrderListingProps {
    orders: OrderItem[];
}
export interface OrderProps {
  order: OrderItem;
}

export interface OrderItem {
  id: number;
  status: number;
  location: string;
  timestamp: string;
  items: MenuItem[];
}

interface MenuItem {
  id: string;
  name: string;
  quantity: number;
  variant: Variant[];
}

interface Variant {
  id: number;
  name: string;
}
