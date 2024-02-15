export const setCookie = ({email=false,login=true})=>{
    document.cookie = 'email=' + email
    document.cookie = 'login=' + login
}

export const getCookie = ()=>{
    const thereturnCook = document.cookie;
    const cookArr = thereturnCook.split('; ')
    const modifiedCook = cookArr.map(item =>item.split('='));
    // console.log(modifiedCook);
    const CookieData = Object.fromEntries(modifiedCook)
    const CookieDataStringyfied = JSON.stringify(CookieData);
    const finalCookieData = JSON.parse(CookieDataStringyfied,(key, value)=>{
        if(value === "true") return true
        else if(value === "false") return false;
        return value
    })
    // 
    return finalCookieData;
}