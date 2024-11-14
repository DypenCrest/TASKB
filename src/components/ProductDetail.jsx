import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Zoom from "react-medium-image-zoom";

const ProductDetail = ({
  isLoading,
  productData,
  openModal,
  closeModal,
  selectedImage,
  isModalOpen,
}) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF"];
  const imgGallery = [
    "https://m.media-amazon.com/images/I/81q9sIBgGjL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71J-oBT+KyL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71B1LZsbfCL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71cf2926SZL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/712Zpjgr6-L._AC_SY450_.jpg",
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const handleSelectColor = (color) => setSelectedColor(color);

  const handleCart = () => {
    const newCartItem = {
      id: productData?.id,
      title: productData?.title,
      img: productData?.image,
      price: productData?.price,
      color: selectedColor,
    };

    // get existing cart items from local storage
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Check if the item already exists in the cart
    const itemExists = currentCart.some((item) => item.id === newCartItem.id);

    if (!itemExists) {
      // Add the new item to the cart if it doesn't exist
      currentCart.push(newCartItem);
      localStorage.setItem("cart", JSON.stringify(currentCart));
      alert("Item added to cart successfully!");
    } else {
      alert("Item already exists in the cart.");
    }
  };

  return (
    <div className="px-32 py-12">
      {/* Skeleton loading */}
      {isLoading ? (
        <div className="flex border rounded-lg shadow-lg px-12">
          <div className="py-8">
            <Skeleton variant="rectangular" width={400} height={400} />
          </div>
          <div className="p-8">
            <h1 className="font-bold text-2xl">
              <Skeleton variant="rectangular" width={500} height={40} />
            </h1>
            <div className="flex flex-col gap-8 pt-8">
              <p className="text-zinc-300 ">
                <Skeleton variant="rectangular" width={450} height={100} />
              </p>
              <span className="rounded-full p-2 w-[150px]">
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              </span>
            </div>
          </div>
        </div>
      ) : (
        // Render Product Details
        <div className="border rounded-lg shadow-xl py-4 px-12">
          <div className="flex">
            {/* Product Image */}
            <div className="w-[30%] h-[400px]">
              <img
                src={productData?.image}
                alt={productData?.title}
                className="zoom-image w-[500px] h-[400px]"
              />
            </div>
            {/* Product Info */}
            <div className="p-8 w-[70%]">
              <h1 className="font-bold text-2xl">{productData?.title}</h1>
              <div className="flex flex-col gap-4 pt-8">
                <p className="text-zinc-500">{productData?.description}</p>
                <div className="flex gap-3">
                  <span className="rounded-full bg-pink-500 p-2 w-fit">
                    {productData?.category}
                  </span>
                  <span className="flex items-center justify-center rounded-md bg-zinc-400 p-2 w-fit">
                    {productData?.rating?.rate}
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </span>
                </div>
                <div className="text-4xl font-semibold text-green-600">
                  <span>$ {productData?.price}</span>
                </div>
                <div className="color-selection">
                  <h4>Select Color:</h4>
                  <div className="color-options flex gap-2 mt-2">
                    {colors.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          selectedColor === color
                            ? "border-4 border-zinc-300"
                            : "border"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleSelectColor(color)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2 text-white"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="pt-12">
            <h2 className="font-bold text-zinc-700 text-xl mb-4">
              IMAGE GALLERY
            </h2>
            <div className="flex gap-4">
              {imgGallery.map((img, index) => (
                <div
                  className="w-[150px] h-[150px] border hover:scale-105 duration-200 cursor-pointer"
                  key={index}
                  onClick={() => openModal(img)}
                >
                  <img src={img} alt="Gallery" />
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded shadow-lg text-end">
                <CloseIcon
                  onClick={closeModal}
                  className="cursor-pointer hover:bg-zinc-200"
                />

                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-full max-h-[80vh]"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
