console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)


const euroDun = 11.2

//euroDun = 11 // CONST DEĞERİ SONRADAN DEĞİŞTİRİLEMEZ.

console.log(euroDun)

//array - dizi
//camelCasing - kelimenin ilk harfi küçük, sonraki büyük olur.
//PascalCasing - kelimelerin ilk harfi büyük.
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){  // 3'e eşit olana kadar çalış
    console.log("<li>" + konutKredileri[i] + "</li>")
}

console.log("</ul>")

console.log(konutKredileri)