"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const goForward = () => {
    router.forward();
  };
  return (
    <div>
      <button
        onClick={goBack}
        className="bg-sky-600 px-4 py-2 text-white cursor-pointer"
      >
        ProductPage
      </button>
      <button
        onClick={goForward}
        className="bg-sky-600 px-4 py-2 text-white cursor-pointer"
      >
        GO Forward
      </button>
    </div>
  );
};

export default ProductPage;
