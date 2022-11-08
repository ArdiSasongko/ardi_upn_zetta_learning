import { Output,EventEmitter,Input } from '@angular/core';

export class CardService{
    cardItem = [
        {name:"Batman",img:"https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png",power:"Intelegent, Rich"},
        {name:"Spiderman",img:"https://cdn-icons-png.flaticon.com/512/1090/1090806.png",power:"Intelegent"},
        {name:"Deadpool",img:"https://cdn-icons-png.flaticon.com/512/1674/1674298.png",power:"Profesional"},
        {name:"Superman",img:"https://cdn-icons-png.flaticon.com/512/1674/1674292.png",power:"OverPower"},
        {name:"Wolverine",img:"https://cdn-icons-png.flaticon.com/512/1674/1674293.png",power:"Strong"},
    ]

    cardCreated = new EventEmitter<{name:string,img:string,power:string}>();

    // onCardItem(name:string,img:string,power:string){
    //     this.cardCreated.emit({
    //         name : name,
    //         img : img,
    //         power : power
    //     })
    // }

    onCardItem(name:string,img:string,power:string){
        this.cardItem.push({
            name : name,
            img : img,
            power : power
        })
    }
}