function kata(name, firstIndex, lastIndex) {
    var hasil = "";
    for (var i = firstIndex; i < lastIndex; i++) {
        hasil += name[i];
    }
    return hasil;
}
console.log(kata("Learning Typescript is different than Javascript", 9, 19));
