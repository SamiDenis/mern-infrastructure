// import SignUpForm from "../components/SignUpForm/SignUpForm"

// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from "./users-api"

export async function signUp(userData) {
// Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData)
  //Persist the "token"
  localStorage.setItem('token', token)
  return getUser()
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials)
  localStorage.setItem('token', token)
  return getUser()
}

export function getToken() {
//getItem return null if there's no string
const token = localStorage.getItem('token')
if (!token) return null
//obtain the payload of the token
const payload = JSON.parse(atob(token.split(".")[1]));
if (payload.exp <Date.now()/ 1000) {
//Toekn has expired - remove it from local storage
  localStorage.removeItem('token')
  return null
}
return token
}

export function getUser(){
  const token = getToken()
  //If there is a token, return the user in the payload
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;

}

export function logOut() {
  localStorage.removeItem('token')
}

export function checkToken(){
 return usersAPI.checkToken()
 .then(dateStr => new Date(dateStr))
}