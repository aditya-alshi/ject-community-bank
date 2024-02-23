export const localStorageResult = ()=>{
    const localStorageData = localStorage.getItem('userInfo');
    const userInfoParsed = JSON.parse(localStorageData);
    return userInfoParsed;
}