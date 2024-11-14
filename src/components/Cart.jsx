import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // get cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setProductCart(storedCart);
  }, []);
  console.log(productCart, "productCart");
  const handleRemove = (id) => {
    const updatedCart = productCart.filter((product) => product.id !== id);
    setProductCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = productCart.reduce(
    (acc, product) => acc + (product.price || 0),
    0
  );
  const deliveryFee = 5;
  const taxRate = 0.13;
  const totalWithTaxAndDelivery =
    totalPrice + deliveryFee + totalPrice * taxRate;

  return (
    <div>
      <section className="bg-zinc-200 py-8 antialiased md:py-16 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-2xl font-bold text-gray-900">SHOPPING CART</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {productCart.map((product, index) => (
                  <div
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 w-[80%]"
                    key={index}
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-4 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20"
                          src={product?.img}
                          alt={product?.title}
                        />
                      </a>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">
                            ${product?.price}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:underline"
                          onClick={() => navigate(`/products/${product?.id}`)}
                        >
                          {product?.title}
                        </a>
                        <span>
                          Color:{" "}
                          <span
                            className="inline-block w-[10px] h-[10px] rounded-full"
                            style={{ backgroundColor: product?.color }}
                          ></span>
                        </span>

                        <button
                          type="button"
                          className="mx-6 inline-flex items-end text-sm font-medium text-red-600 hover:underline"
                          onClick={() => handleRemove(product?.id)}
                        >
                          X Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Order Summary */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-[40%]">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900 ">
                  Order Summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Subtotal
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        ${totalPrice.toFixed(2)}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Delivery Fee
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        ${deliveryFee.toFixed(2)}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Tax (13%)
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        ${(totalPrice * taxRate).toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      ${totalWithTaxAndDelivery.toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <button className="flex w-full items-center justify-center rounded-lg bg-zinc-700 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500">or</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                    onClick={() => navigate("/")}
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
