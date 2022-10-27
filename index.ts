function combinator(text:(string | number)[]):string{
    let hasil: string = ""
    text.map((text)=>{
        hasil+=" "+text;
    })
    return hasil;
}

let text1 = [1, "data","3","result"]
let text2 = ["Bejo","has","4","sport","car"]
console.log(combinator(text1))
console.log(combinator(text2))
