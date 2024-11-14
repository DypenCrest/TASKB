import React, { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../apiLayer";

const Detailpage = () => {
  const params = useParams();
  console.log(params, "params");
  const [productId, setProductId] = useState(params.productId || "");
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
  useEffect(() => {
    setProductId(params.productId);
  }, [productId]);
  useEffect(() => {
    getSingleProduct(productId).then((data) => {
      setProductData(data);
      setIsLoading(false);
    });
  }, []);
  console.log(productData, "productData");
  return (
    <div className="py-8">
      <a
        href=""
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
