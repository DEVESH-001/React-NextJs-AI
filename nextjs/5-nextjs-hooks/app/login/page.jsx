// useRouter : [https://nextjs.org/docs/app/api-reference/functions/use-router]
"use client";

import { useRouter } from "next/navigation";

const LogIN = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };

  return (
    <div>
      LogIN
      <button className="bg-sky-600 text-white px-4 py-2" onClick={handleClick}>
        Go to products
      </button>
    </div>
  );
};

export default LogIN;
