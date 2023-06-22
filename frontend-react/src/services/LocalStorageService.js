const storeToken = (token) => {
    if(value){
        console.log("Token stored");
        const {accessToken, refreshToken} = value;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

    }
}
const getAccessToken = () => {
    return localStorage.getItem("accessToken");
}
const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
}