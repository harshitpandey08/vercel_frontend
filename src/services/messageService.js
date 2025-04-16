import api from './api';

// Send a message
export const sendMessage = async (messageData) => {
  const response = await api.post('/messages', messageData);
  return response.data;
};

// Get all messages for a user
export const getMessages = async (withUser) => {
  const response = await api.get('/messages', {
    params: { with: withUser },
  });
  return response.data;
};

// Get all conversations for a user
export const getConversations = async () => {
  const response = await api.get('/messages/conversations');
  return response.data;
};

// Mark messages as read
export const markMessagesAsRead = async (sender) => {
  const response = await api.put('/messages/read', { sender });
  return response.data;
};
