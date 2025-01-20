import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  const response = await api.get("/products/");
  return response.data;
};

export const createOrder = async (orderData: any) => {
  const response = await api.post("/orders/create_order/", orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get("/orders/");
  return response.data;
};

export default api;