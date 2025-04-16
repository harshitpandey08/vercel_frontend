import api from './api';

// Get dashboard data
export const getDashboardData = async () => {
  const response = await api.get('/dashboard');
  return response.data;
};
