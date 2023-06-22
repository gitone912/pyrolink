const storeToken = (value) => {
    if(value){
        console.log("Token stored");
        const {accessToken, refreshToken} = value;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

    }
}
const getToken = () => {
    let accessToken = localStorage.getItem("accessToken");
    let refreshToken = localStorage.getItem("refreshToken");
    return {accessToken, refreshToken};
}

const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}
export {storeToken, getToken, removeToken};