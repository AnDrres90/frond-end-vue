import { Users, User } from "@/interfaces/users";
import axios from "@/services/axios";

export const createUser = async (user: Users) => await axios.post('/signup', user);

export const signInUser = async (user: User) => await axios.post('/signin', user);