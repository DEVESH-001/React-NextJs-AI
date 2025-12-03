import React from "react";

async function Page({ params }) {
  const { id } = await params;

  return <div>Product ID: {id}</div>;
}

export default Page;
