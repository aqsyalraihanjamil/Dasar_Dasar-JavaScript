/*const add = {
    a: 1,
    b: 2,
    c: 3
  }
  
  const total = Object.values(add).reduce((t, n) => t + n)
  
  console.log(total)
  */
 const barang = [
     { nama: "Beras", harga: 10000, jumlah: 5},
     { nama: "Gula", harga: 14000, jumlah: 5},
     { nama: "Telur", harga: 20000, jumlah: 2},
     { nama: "Minyak Goreng", harga: 9000, jumlah: 10}
 ]

 const total = barang.reduce((total,barang) => {
    return total+(barang.harga * barang.jumlah)
 }, 0);


 console.log(total)