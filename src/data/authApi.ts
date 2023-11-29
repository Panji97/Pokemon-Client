import axios from 'axios'

const baseUrl = 'http://localhost:9090/o/oauth/v1'

export interface dataAuth {
  email: string
  password: string
  access_token: string
}

export const loginData = async (data: dataAuth) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

// export const registerData = async (data: dataAuth) => {
//   try {
//     const response = await axios.post(`${baseUrl}/register`, data)

//     return response.data
//   } catch (error) {
//     console.log(error)
//   }
// }
