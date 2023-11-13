import Image from "next/image";
import React, { useState } from "react";
import Order from "./Order";
import {OrderItem, OrderListingProps } from "@/types/order";

const OrderListing : React.FC<OrderListingProps> = (props) => {
  const { orders } = props;

  if (orders?.length === 0) {
    return (
      <div className="w-full flex items-center justify-center min-h-[90vh]">
        <div className="h-36 w-36 relative">
          <Image
            src="/assets/svgs/food-plate.svg"
            alt="Zo world logo"
            layout="fill"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="zo-container grid grid-flow-col auto-cols-max justify-between gap-6">
        {
           orders?.length ? 
           orders?.map((item : OrderItem)=><Order key={item?.id} order={item}/>)
            : null 
        }
        
    </div>
  );
};

export default OrderListing;
