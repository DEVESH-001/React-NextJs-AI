import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <h2>Catch-all Route</h2>
      <p>Slug array: {JSON.stringify(slug)}</p>

      <p>Path: /docs/{slug?.join("/")}</p>
    </div>
  );
};

export default Page;
