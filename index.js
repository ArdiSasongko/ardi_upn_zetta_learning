//object buku
const book = [
    {namaBuku : "Galau Brutal", hargaBuku : 150000, statusProduksi : true, stok : 10},
    {namaBuku : "Duduk Manis", hargaBuku : 150000, statusProduksi : true, stok : 5}
]

let discount = 20
let tax = 10
let result = 0

function transaksi(nameBook,order,term){
    const cariBuku = book.find(({namaBuku})=>namaBuku===nameBook)
    if(cariBuku != undefined){
        const judul = cariBuku.namaBuku;
        const stok = cariBuku.stok;
        const harga = cariBuku.hargaBuku;
        const totDiscount = harga * (discount/100);
        const afterDiscount = harga-totDiscount;
        const totTax = afterDiscount * (tax/100);
        const afterTax = afterDiscount+totTax;
        for(let i = 0;i<order;i++){
            if(nameBook && cariBuku.hargaBuku && i < order){
                result += afterTax;
            }else{
                console.log("Stok tidak mencukupi");
                break;
            }
        }

        console.group();
        console.log("Judul Buku : ", judul)
        console.log("Jumlah yang dipesan : ", order)
        console.log("Harga asli : ", harga)
        console.log("Jumlah Diskon : ", totDiscount)
        console.log("Harga setelah diskon : ", afterDiscount)
        console.log("Jumlah pajak : ", totTax)
        console.log("Harga setelah pajak : ",afterTax)
        console.log("Stok saat ini : ", stok-order)
        console.log()
        console.groupEnd();
        if(stok - order === 0){
            console.log("Stok Habis")
        }else{
            console.log("Stok : ", stok-order, " Masih bisa memesan")
        }

        console.log("Total Biaya : ", result)
        console.log();

        let kreditBulanan = result/term;
        let jumlahKredit = [];
        let index = 0

        console.log("Cicilan sebanyak ", term, " Kali sebanyak ", kreditBulanan , "Ribu per Bulan")

        while(index<term){
            jumlahKredit.push({
                cicilan : index + 1,
                jumlah : kreditBulanan,
            })
            index++
        }

        console.group();
        console.log(Array.from(jumlahKredit))
        console.groupEnd();
    }else{
        console.log("Buku tidak ada")
    }
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

transaksi("Galau Brutal",5,12)