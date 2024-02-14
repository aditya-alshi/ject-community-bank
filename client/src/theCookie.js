export const setCookie = (email)=>{
    
    document.cookie = 'email=' + email
}

export const getCookie = ()=>{
    const thereturnCook = document.cookie;
    const cookArr = thereturnCook.split('; ')
    const modifiedCook = cookArr.map(item =>item.split('='));
    // console.log(modifiedCook);
    const finalCookieData = Object.fromEntries(modifiedCook);
    return finalCookieData;
}