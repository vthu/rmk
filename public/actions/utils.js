export const storeToken = (token) => {
    window.localStorage.setItem('accessToken', token);
}

export const getToken = (token) => {
    return window.localStorage.getItem('accessToken');
}
