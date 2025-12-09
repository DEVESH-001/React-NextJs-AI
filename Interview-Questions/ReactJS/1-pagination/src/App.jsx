import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=50&skip=10");
      const data = await response.json();

      if (data && data.products) {
        setProducts(data.products);
      }
    };

    fetchProducts();
  }, []);
  // console.log(products);

  const selectPageHandler = (pageNumber) => {
    //logic for selecting page
    if (
      pageNumber >= 1 &&
      pageNumber <= products.length / 10 &&
      pageNumber !== page
    )
      setPage(pageNumber);
  };

  return (
    <div>
      <h1>Pagination</h1>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <span key={prod.id} className="products__single">
              <h6>{prod.title}</h6>
              <img src={prod.thumbnail} alt={prod.title} className="prod-img" />
            </span>
          ))}
        </div>
      )}
      {/* ui of pagination */}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "disabled__pagination"}
          >
            ⬅️
          </span>

          <span>
            {[...Array(products.length / 10)].map((_, i) => (
              <span
                key={i}
                onClick={() => selectPageHandler(i + 1)}
                className={page === i + 1 ? "active__pagination" : ""}
              >
                {i + 1}
              </span>
            ))}
          </span>
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < products.length / 10 ? "" : "disabled__pagination"
            }
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
