import React, { useState } from "react";
import Navbar from "@/components/Nav";
import OrderListing from "@/components/Order";
import { OrderItem } from "@/types/order";


export default function Home() {
  const [orders, setOrders] = useState<OrderItem[]>([
    {
      id: 1,
      status: 1, //0 - recived order, 1 - accepted order, 2 - started order
      location: "Table 3 Degen Lounge",
      timestamp: "1699838716",
      items: [
        {
          id: "1",
          name: "Cheese Sandwich",
          quantity: 1,
          variant: [],
        },
        {
          id: "2",
          name: "Maggi",
          quantity: 2,
          variant: [
            {
              id: 1,
              name: "Veg",
            },
            {
              id: 2,
              name: "Extra Cheese",
            }
          ],
        },
      ]
    },
    {
      id: 1,
      status: 0, //0 - recived order, 1 - accepted order, 2 - started order
      location: "Table 3 Degen Lounge",
      timestamp: "1699838716",
      items: [
        {
          id: "1",
          name: "Cheese Sandwich",
          quantity: 5,
          variant: [],
        },
        {
          id: "2",
          name: "Maggi",
          quantity: 2,
          variant: [
            {
              id: 1,
              name: "Veg",
            },
            {
              id: 2,
              name: "Extra Cheese",
            }
          ],
        },
      ]
    },
  ]);

  return (
    <main className="font-space-grotesk flex flex-col items-center justify-center">
      <Navbar orders={orders} />
      <OrderListing orders={orders} />
    </main>
  );
}
