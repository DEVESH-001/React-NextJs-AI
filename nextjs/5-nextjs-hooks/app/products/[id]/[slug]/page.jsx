//useParams: [https://nextjs.org/docs/app/api-reference/functions/use-params]

"use client";

import { useParams } from "next/navigation";

const ProdcutIdSlugPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h4>ProdcutIdSlugPage </h4>
      <p>ProductId : {params.id}</p>
    </div>
  );
};

export default ProdcutIdSlugPage;
