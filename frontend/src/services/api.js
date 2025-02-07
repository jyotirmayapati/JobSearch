import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Backend URL

// Fetch jobs from backend
export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  return response.data;
};

// Fetch companies from backend
export const fetchCompanies = async () => {
  const response = await axios.get(`${API_URL}/companies`);
  return response.data;
};

// User login
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

// User registration
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};
