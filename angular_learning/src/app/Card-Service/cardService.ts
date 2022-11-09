import { Output,EventEmitter,Input } from '@angular/core';

export class CardService{
    cardItem = [
        {name:"Batman",img:"https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png",power:"Intelegent, Rich",desc:"Batman muncul ketika malam hari"},
        {name:"Spiderman",img:"https://cdn-icons-png.flaticon.com/512/1090/1090806.png",power:"Intelegent",desc:"Spiderman bisa mengeluarkan jaring dari tangan"},
        {name:"Deadpool",img:"https://cdn-icons-png.flaticon.com/512/1674/1674298.png",power:"Profesional",desc:"Deadpool menyukai dirty joke dan dark joke"},
        {name:"Superman",img:"https://cdn-icons-png.flaticon.com/512/1674/1674292.png",power:"OverPower",desc:"Superman salah satu icon superhero"},
        {name:"Wolverine",img:"https://cdn-icons-png.flaticon.com/512/1674/1674293.png",power:"Strong",desc:"kadang seperti anti hero"},
        {name:"Hacker",img:"https://cdn-icons-png.flaticon.com/512/924/924915.png",power:"Strong",desc:"Suka mencuri data pribadi seseorang"},
    ]

    cardCreated = new EventEmitter<{name:string,img:string,power:string,desc:string}>();

    // onCardItem(name:string,img:string,power:string){
    //     this.cardCreated.emit({
    //         name : name,
    //         img : img,
    //         power : power
    //     })
    // }

    onCardItem(name:string,img:string,power:string,desc:string){
        this.cardItem.push({
            name : name,
            img : img,
            power : power,
            desc : desc
        })
    }

    detail(cardItem:{name:string,img:string,power:string,desc:string}){
        this.cardCreated.emit(cardItem)
    }
}