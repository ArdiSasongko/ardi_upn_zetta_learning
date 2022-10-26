//object buku
const book = [
    {nama : "Buku baru", harga : 100000, produksi : true, stok : 10},
    {nama : "Buku lama", harga : 90000, produksi : true, stok : 2},
    {nama : "Buku Mainan", harga : 150000, produksi : false, stok : 1}
]

let diskon = 20
let pajak = 5
let interes = 3
let pricepermonth = 0

function pembelianBuku(namabuku,jumlahbuku){
    const result = book.find(({nama})=> nama === namabuku)
    if(result != undefined){
        const totaldiskon = result.harga*(diskon/100)
        const setelahdiskon = result.harga-totaldiskon
        const totalpajak = setelahdiskon*(pajak/100)
        const setelahpajak = setelahdiskon-totalpajak
        const jumlahpembelian = setelahpajak*jumlahbuku
        calCredit(jumlahpembelian)
        console.group();
        console.log("Stok : ", result.stok)
        if(result.stok >= jumlahbuku){
            console.log("Stok Tersedia")
            console.log("Harga per Buku : ", result.harga)
            console.log("Harga Diskon : ", totaldiskon)
            console.log("Harga Setelah Diskon : ", setelahdiskon)
            console.log("Harga Pajak : ", totalpajak)
            console.log("Harga Setelah Pajak : ", setelahpajak)
            console.log("Harga yang harus dibayarkan : ", jumlahpembelian)
            console.log()
            console.log("Price to pay with credit due every month ", pricepermonth)
            console.groupEnd()
        }
        else{
            console.log("Stok habis atau tidak mencukupi")
        }
    }
}

function calCredit(jumlahpembelian){
    pricepermonth = jumlahpembelian + (jumlahpembelian*(interes/100))
    return pricepermonth
}

/* function perhitungan(buku,diskon,pajak,amount_of_stock,amount_of_purchased){
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
} */

console.log(pembelianBuku("Buku baru", 4))