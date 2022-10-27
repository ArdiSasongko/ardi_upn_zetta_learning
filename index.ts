function kata(name : string, firstIndex : number, lastIndex : number): string {
    let hasil : string = "";

    for(let i = firstIndex; i < lastIndex;i++){
        hasil += name[i];
    }
    return hasil;
}

console.log(kata("Learning Typescript is different than Javascript",9,19))

