import axios from "axios";

/**
 * 🌿 Central Axios Instance
 * All frontend ↔ backend communication goes through this file
 */
const API = axios.create({
  baseURL: "/api",
});

export default API;

/**
 * 🔐 Automatically attach JWT token to every request
 */
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// -----------------------------
// 🌿 Public Knowledge APIs
// -----------------------------

// Get all approved knowledge (Community / Knowledge page)
export const fetchKnowledge = async () => {
  const res = await API.get("/knowledge/public");
  return res.data;
};

// Get approved knowledge by category
export const fetchByCategory = async (category: string) => {
  const res = await API.get(`/knowledge/category/${category}`);
  return res.data;
};

// Get approved knowledge by region
export const fetchByRegion = async (region: string) => {
  const res = await API.get(`/knowledge/region/${region}`);
  return res.data;
};

// -----------------------------
// 🔐 Authentication APIs
// -----------------------------

export const loginUser = async (email: string, password: string) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data;
};

// -----------------------------
// 🧑‍🌾 User: Submit Knowledge
// -----------------------------

export const submitKnowledge = async (data: any) => {
  const res = await API.post("/knowledge", data);
  return res.data;
};

// -----------------------------
// 🛡️ Admin APIs
// -----------------------------

// Get all pending (unapproved) knowledge
export const fetchPendingKnowledge = async () => {
  const res = await API.get("/knowledge/pending");
  return res.data;
};

// Approve a knowledge entry
export const approveKnowledge = async (id: string) => {
  const res = await API.put(`/knowledge/${id}/approve`);
  return res.data;
};

// Reject a knowledge entry
export const rejectKnowledge = async (id: string) => {
  const res = await API.put(`/knowledge/reject/${id}`);
  return res.data;
};

export default API;
