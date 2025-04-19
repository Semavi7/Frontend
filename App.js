// let yas = 20;
// let para = 3500;
// let sagliklimi = true;

// console.log(yas>18 && para>3000 || sagliklimi == true);

// let deneme = {
//     yas: 20,
//     para: 3500,
//     sagliklimi: true    
// }

// console.log(deneme)

// function method1(){
//     let sayi = 10;
//     console.log(sayi);
// }

// method1();

// let isim = prompt("İsminizi giriniz: ");
// console.log(isim);

// let sonuc = confirm("Devam etmek istiyor musunuz?");
// console.log(sonuc);

let yas = Number(prompt("Yaşınızı giriniz: "));
console.log(typeof yas);
let para = Number(prompt("Para miktarınızı giriniz: "));

if(yas > 18 && para > 3000){
    console.log("Hoş geldiniz!");
}
else{
    console.log("Giriş yapamazsınız!");
}