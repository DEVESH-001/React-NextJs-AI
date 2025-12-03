import React from "react";

async function ProductReviewPage({ params }) {
  const { id, reviewid } = await params;

  return (
    <div>
      <h2>Product ID: {id}</h2>
      <p>Review ID: {reviewid}</p>
    </div>
  );
}

export default ProductReviewPage;
