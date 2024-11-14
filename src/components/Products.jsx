import React, { useEffect, useState } from "react";
import { getAllProducts } from "../apiLayer";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => setProductData(data));
  }, []);
  console.log(productData, "data");
  const topRated = productData.filter((product) => product?.rating?.rate > 4);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold py-12 text-zinc-700">
          Top Rated Products
        </h1>
        <div className="flex flex-wrap gap-4">
          {topRated.slice(0, 4).map((product) => (
            <div
              class="w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <a href="" className="flex justify-center">
                <img
                  class="p-8 rounded-t-lg w-[250px] h-[250px]"
                  src={product.image}
                  alt="product image"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product?.title}
                  </h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    Rated: {product?.rating?.rate}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product?.price}
                  </span>
                  <a
                    href=""
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-3xl font-bold py-12 text-zinc-700">ALL PRODUCTS</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {productData.map((product) => (
          <div
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <a href="" className="flex justify-center">
              <img
                class="p-8 rounded-t-lg w-[350px] h-[350px]"
                src={product.image}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product?.title}
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  Rated: {product?.rating?.rate}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product?.price}
                </span>
                <a
                  href=""
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
