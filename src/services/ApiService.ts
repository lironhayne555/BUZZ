import { User } from "../models/user";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const serverUrl = "http://localhost:8080/";
const usersUrl = `${serverUrl}users/`;

export async function signup(userForm: User): Promise<User> {
  const res = await fetch(`${usersUrl}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userForm),
  });
  if (!res.ok) {
    toast.error(" ");
    return res.json();
  }

  return res.json();
}

export async function signin(userForm: User): Promise<User> {
  const res = await fetch(`${usersUrl}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userForm),
  });
  return res.json();
}
