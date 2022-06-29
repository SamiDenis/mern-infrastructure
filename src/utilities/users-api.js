import { getToken } from "./users-service"


// This is the base path of the Express route we'll define
const BASE_URL = '/api/users'

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
     // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc. 
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json'},
//      // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData)
//   })
//   //check if request was successful
//   if (res.ok) {
//     return res.json()
//   } else {
//     throw new Error('Invalid Sign Up')
//   }
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function checkToken(credentials){
  return sendRequest(`${BASE_URL}/check-token`)
}
//   const res = await fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(credentials)
//   })
//   if (res.ok) {
//     return res.json()
//   } else {
//     throw new Error('Invalid User/Login')
//   }
// }

/*--Helper Functions --*/
async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method }
  if (payload) {
    options.headers = { 'Content-Type': 'application/json'}
    options.body = JSON.stringify(payload)
  }

  const token = getToken()
    if (token){
      options.headers = options.headers || {};
      options.headers.Authorization = `Bearer ${token}`
    }
  
  const res = await fetch(url, options)
  // res.ok will be false if the status code set to 4xx in the code
  if (res.ok) return res.json();
  throw new Error('Bad Request ')
}