
bmi = (bb,tb) => {
    let mib = bb/(tb**2)
    if (mib > 30){
        return "Kegemukan (Obesitas)"
    }else if(mib < 30 && mib >= 25){
        return "Kelebihan Berat Badan"
    }else if(mib < 25 && mib >= 18.5){
        return "Normal (ideal)"
    }else{
        return "Kekurangan berat badan"
    }
    
}


console.log(bmi(90,1.7))