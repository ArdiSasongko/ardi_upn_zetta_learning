function perhitungan(buku,diskon,pajak){
    let result = 0
    let harga = buku.Harga
    const amount_of_diskon = harga*(diskon/100)
    const HargaSetelahDiskon = harga - amount_of_diskon
    const amount_of_task = (pajak*HargaSetelahDiskon)/100
    const HargaSetelahPajak = HargaSetelahDiskon-amount_of_task

    console.group()
    console.log("Harga Buku : ", harga)
    console.log("Harga Diskon : ", amount_of_diskon)
    console.log("Harga Setelah Diskon : ", HargaSetelahDiskon)
    console.log("Harga Pajak : ", amount_of_task)
    console.log("Harga Setelah Pajak : ", HargaSetelahPajak)
    console.groupEnd()
    return result
}

console.log(perhitungan({title:'Buku Baru',Harga:100000},20,5))