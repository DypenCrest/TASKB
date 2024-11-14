import React, { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../apiLayer";

const Detailpage = () => {
  const { productId } = useParams(); // Directly destructure the productId from useParams
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  // Fetch product data when productId changes
  useEffect(() => {
    if (productId) {
      setIsLoading(true); // Set loading state before fetching
      getSingleProduct(productId)
        .then((data) => {
          setProductData(data);
          setIsLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error("Failed to fetch product:", error);
          setIsLoading(false); // Handle error and stop loading
        });
    }
  }, [productId]); // Re-run when productId changes

  return (
    <div className="py-8">
      <a
        href="#"
        className="ml-8 text-xl font-semibold underline"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </a>
      <ProductDetail
        productData={productData}
        isLoading={isLoading}
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default Detailpage;
