import axios from "axios";

/** Setup an API instance */
const instanceApi = axios.create({
    baseURL: "http://localhost:80/cosmetics",
    headers: {
        "Content-Type": "application/json",
    },
});

// requestInterceptor
const requestInterceptor = request => {
    for (const key in request.params) {
        if (request.params[key] === "") {
            request.params[key] = null;
        }
    }
    if (localStorage.getItem('token')) {
        request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return request
};

const errorRequestInterceptor = error => {
    Promise.reject(error);
};

// responseInterceptor
const responseInterceptor = async response => {
    if (

        response?.data?.result?.status_code === 401

    ) {
        try {
            console.log(response)

            return Promise.resolve(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return Promise.resolve(response);
};

const errorResponseInterceptor = async error => {
    if (error && error.response?.status) {
        switch (error.response?.status) {
            case 401: // Both RefreshToken and AccessToken expired
                localStorage.clear();
                window.location.assign("/sign-in");
                break;
            case 404: // Page not found
                // window.location.assign("/404");
                break;
            default:
                break;
        }
    }
    return Promise.reject(error);
};

/** Add interceptor */
instanceApi.interceptors.request.use(
    requestInterceptor,
    errorRequestInterceptor
);
instanceApi.interceptors.response.use(
    responseInterceptor,
    errorResponseInterceptor
);

export default instanceApi;