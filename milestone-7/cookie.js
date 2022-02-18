const getcookies=name=>{
    const cookie=document.cookie;   
    const allcookie= cookie.split("; ");

    const findcookie=allcookie.find(c=>c.includes(name));
    if(findcookie){
        const cookieNameValue=findCookie.split('=')

        return cookieNameValue[1];
};
}

