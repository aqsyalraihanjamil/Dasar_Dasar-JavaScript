class lingkaran{
    constructor(r){
        this.r=r
    }
    luas = () => {
        return 3.14*this.r**2
    }
    keliling = () => {
        return 2*3.14*this.r
    }
}

class tabung extends lingkaran{
    constructor(r,t){
        super(r)
        this.t=t
    }
    volume = () =>{
        return 3.14 * this.t * this.r**2 
    }
    luasperm = () => {
        return 2 * 3.14 * this.r * (this.r+this.t)    
    }
    luassel = () => {
        return 2 * 3.14 * this.r * this.t
    }

}

class kerucut extends lingkaran{
    constructor(r,t){
        super(r)
        this.t=t
        
    }

    volume = () =>{
        return 1/3 * 3.14 * this.r**2 *this.t
    }
    luasperm = () => {
        return 3.14 * this.r * (this.r + (this.t**2 + this.r**2) **0.5)
    }
    luassel = () => {
        return 3.14 * this.r * (this.t**2 + this.r**2) **0.5
    }

}

class bola extends lingkaran{
    constructor(r){
        super(r)
    }
    volume = () =>{
        return 4/3 * 3.14 * this.r**3
    }
    luasperm = () => {
        return 4 * 3.14 * this.r**2
    }
}

let bal = new bola(15)
console.log("Volume Bola : " + bal.volume());
console.log("Luas Permukaan : " + bal.luasperm());
console.log();
let cut = new kerucut(10,40)
console.log("Volume Kerucut : " + cut.volume());
console.log("Luas Permukaan : " + cut.luasperm());
console.log("Luas Permukaan : " + cut.luassel());
console.log();
let gelas = new tabung(7.5,50)
console.log("Volume Tabung : " + gelas.volume());
console.log("Luas Permukaan : " + gelas.luasperm());
console.log("Luas Permukaan : " + gelas.luassel());