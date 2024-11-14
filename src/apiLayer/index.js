import axios from "axios";

const baseUrl = "https://fakestoreapi.com";
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export const getAllProducts = async () => {
  const res = await axiosInstance.get("/products");
  const data = res.data;
  return data;
};

export const getSingleProduct = async (id) => {
  const res = await axiosInstance.get(`/products/${id}`);
  return res.data;
};
