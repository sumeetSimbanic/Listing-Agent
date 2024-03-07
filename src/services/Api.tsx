// apiService.ts
import axios, { AxiosResponse } from 'axios';

type SignUpUserResponse = {
  token: string;
};

type SignUpAgentResponse = {
  agentId: string;
};

type LoginUserResponse = {
  token: string;
};

type ForgetPasswordResponse = {
  message: string;
};

type ResetPasswordResponse = {
  message: string;
};
type UserDetailResponse = {
  userId: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
};
const API_BASE_URL = "http://104.237.141.171:3000";

export const signUpUser = async (email: string, password: string): Promise<SignUpUserResponse> => {
  try {
    const response: AxiosResponse<SignUpUserResponse> = await axios.post(`${API_BASE_URL}/auth/signup/user`, {
      email,
      password,
    });
    return response.data;
    
  } catch (error) {
    throw error;
  }
};

export const signUpAgent = async (userId: string, firstName: string, lastName: string, mobile: string, email: string): Promise<SignUpAgentResponse> => {
  try {
    const response: AxiosResponse<SignUpAgentResponse> = await axios.post(`${API_BASE_URL}/auth/signup/agent`, {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      mobile,
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string): Promise<LoginUserResponse> => {
  try {
    const response: AxiosResponse<LoginUserResponse> = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgetPassword = async (email: string): Promise<ForgetPasswordResponse> => {
  try {
    const response: AxiosResponse<ForgetPasswordResponse> = await axios.post(`${API_BASE_URL}/auth/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (newPassword: string, resetToken: string): Promise<ResetPasswordResponse> => {
  try {
    const response: AxiosResponse<ResetPasswordResponse> = await axios.post(`${API_BASE_URL}/auth/reset-password/${resetToken}`, {
      new_password: newPassword,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserDetail = async (userId: string): Promise<UserDetailResponse> => {
  try {
    const response: AxiosResponse<UserDetailResponse> = await axios.get(`${API_BASE_URL}/agent/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};