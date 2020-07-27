geometri = (a,r,n) => {
    for(let i=1;i <= 10;i++){
        let hasil =+ a*(r**(n-1))
        return hasil
    }
}

console.log(geometri(4,3,10))