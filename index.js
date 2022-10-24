function perhitungan(buku,diskon,pajak,amount_of_stock,amount_of_purchased){
    let total = 0
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
    
    for(let i = 0; i < amount_of_stock;i++){
        if(amount_of_purchased>amount_of_stock){
            console.group()
            console.log("Pembelian Melebihi Stok")
            console.groupEnd()
            break;
        }
        else{
            total = amount_of_purchased*HargaSetelahPajak
            console.group()
            console.log("Pembelian masih tercukupi")    
            console.groupEnd()
        }
    }
    console.group()
    console.log("Total : ", total)
    console.groupEnd()
}

console.log(perhitungan({title:'Buku Baru',Harga:100000},20,5,5,6))