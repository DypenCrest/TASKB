import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Layoutpage = () => {
  const navigate = useNavigate();
  const [cartNumber, setCartNumber] = useState(0);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    setCartNumber(cart ? JSON.parse(cart).length : 0);
  }, []);
  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href=""
              class="flex items-center space-x-3 rtl:space-x-reverse"
              onClick={() => navigate("/")}
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ecommerce
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white rounded hover:text-orange-500 md:p-0"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 rounded md:border-0  hover:text-orange-500 md:p-0 text-white "
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                    <ShoppingCartIcon />
                    {cartNumber > 0 && (
                      <span className="text-xs bg-zinc-600 rounded-full px-1">
                        {cartNumber}
                      </span>
                    )}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layoutpage;
