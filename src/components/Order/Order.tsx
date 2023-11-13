import { OrderProps } from "@/types/order";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Order: React.FC<OrderProps> = (props) => {
  const { order } = props;
  const [itemsCount, setItemsCount] = useState<number>(0);

  useEffect(() => {
    const countItems = () => {
      const count = order.items?.length
        ? order.items.reduce(
            (totalQuantity, item) => totalQuantity + item.quantity,
            0
          )
        : 0;
      setItemsCount(count);
    };
    countItems();
  }, [order]);

  return (
    <div className={`border ${order?.status === 0 ? "border-zo-highlight" : "border-zo-stroke" }  p-6 w-[280px] bg-zo-stroke flex flex-col justify-between`}>
      <div>
        <h3 className="font-medium text-2xl">{`${itemsCount} Items`}</h3>
        <p className="text-zo-secondary">{`${order?.location} • 11:05 AM`}</p>
        <table className="order-table my-6">
          {order?.items?.length
            ? order?.items?.map((item) => {
                return (
                  <tr key={item?.id}>
                    <td>{item?.quantity}</td>
                    <td>
                      <ul>
                        <li>{item?.name}</li>
                        {item?.variant?.length
                          ? item?.variant?.map((variant) => (
                              <li key={variant?.id}>{variant?.name}</li>
                            ))
                          : null}
                      </ul>
                    </td>
                  </tr>
                );
              })
            : null}
        </table>
      </div>
      <div className="flex items-center justify-between gap-6">
        <button className="text-zo-highlight">
          {order?.status === 0
            ? "Accept"
            : order?.status === 1
            ? "Start"
            : order?.status === 2
            ? "Served"
            : null}
        </button>
        <button className="h-10 w-10 relative">
          <Image src="/assets/svgs/more.svg" alt="more option" layout="fill" />
        </button>
      </div>
    </div>
  );
};

export default Order;
