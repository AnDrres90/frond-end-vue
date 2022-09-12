import { Users, User } from "@/interfaces/users";
import { Devices } from "@/interfaces/devices";
import axios from "@/services/axios";
import { AxiosResponse } from "axios";

export const createUser = async (user: Users) => await axios.post('/signup', user);

export const signInUser = async (user: User) => await axios.post('/signin', user);

export const getUsers = async (): Promise<AxiosResponse<Users[]>> => await axios.get('/users');

export const getUser = async (): Promise<AxiosResponse<Users>> => await axios.get('/user');

export const getDevices = async (): Promise<AxiosResponse<Devices[]>> => await axios.get('/device');

export const getDevicesUser = async (): Promise<AxiosResponse<Devices[]>> => await axios.get('/deviceuser');

export const updatedUser = async (user: Users) => await axios.patch('/user/updated', user);

export const updatedUsersAdmin = async (id: string, user: Users) => await axios.patch('/admin/updated/' + id, user);

export const getUserAdmin = async (id: string): Promise<AxiosResponse<Users>> => await axios.get('/admin/user/' + id);

export const updatedDevicesAdmin = async (id: string, device: Devices) => await axios.patch('/device/updated/' + id, device);

export const getDevicesAdmin = async (id: string): Promise<AxiosResponse<Devices>> => await axios.get('/api/device/' + id);