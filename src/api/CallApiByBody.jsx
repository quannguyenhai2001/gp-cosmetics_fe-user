import axios from "axios";
const BASE_URL = "http://localhost/api"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
axiosInstance.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req
})
export default function CallApiByBody(endpoint, method = "GET", body) {
    return axiosInstance({
        url: `/${endpoint}`,
        method: method,
        data: body
    })
}
// export default async function CallApiByBody(endpoint, method = "GET", body) {
//     const response = await axiosInstance.get(endpoint)
//     const data = response.data
//     return data
// }