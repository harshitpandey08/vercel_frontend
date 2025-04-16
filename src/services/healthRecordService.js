import api from './api';

// Add a health record
export const addHealthRecord = async (healthRecordData) => {
  const response = await api.post('/health-records', healthRecordData);
  return response.data;
};

// Get all health records for a pet
export const getHealthRecords = async (petId) => {
  const response = await api.get(`/health-records/pet/${petId}`);
  return response.data;
};

// Get a health record by ID
export const getHealthRecordById = async (id) => {
  const response = await api.get(`/health-records/${id}`);
  return response.data;
};

// Update a health record
export const updateHealthRecord = async (id, healthRecordData) => {
  const response = await api.put(`/health-records/${id}`, healthRecordData);
  return response.data;
};

// Delete a health record
export const deleteHealthRecord = async (id) => {
  const response = await api.delete(`/health-records/${id}`);
  return response.data;
};

// Get health statistics for a pet
export const getHealthStats = async (petId) => {
  const response = await api.get(`/health-records/stats/${petId}`);
  return response.data;
};
