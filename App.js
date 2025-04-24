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

// let yas = Number(prompt("Yaşınızı giriniz: "));
// console.log(typeof yas);
// let para = Number(prompt("Para miktarınızı giriniz: "));

// if(yas > 18 && para > 3000){
//     console.log("Hoş geldiniz!");
// }
// else{
//     console.log("Giriş yapamazsınız!");
// }

// let vize1 = Number(prompt("1. Vize notunuzu giriniz: "));
// let vize2 = Number(prompt("2. Vize notunuzu giriniz: "));

// let final = Number(prompt("Final notunuzu giriniz: "));

// let ortalama = (vize1 * 0.3 + vize2 * 0.3 + final * 0.4);

// if(ortalama >= 60){
//     alert("Geçtiniz! Not ortalamanız: " + ortalama);
//     console.log("Geçtiniz! Not ortalamanız: " + ortalama);
// }
// else{
//     alert("Kaldınız! Not ortalamanız: " + ortalama);
//     console.log("Kaldınız! Not ortalamanız: " + ortalama);60
// }

// let seçilenyol = prompt("Lütfen gitmek istediğiniz yolu seçiniz: 1, 2, 3");

// if(seçilenyol == 1){
//     alert("Seçilen Yol " + seçilenyol + ". Yoldur");
// }
// else if(seçilenyol == 2){
//     alert("Seçilen Yol " + seçilenyol + ". Yoldur");
// }
// else if(seçilenyol == 3){
//     alert("Seçilen Yol " + seçilenyol + ". Yoldur");
// }
// else{
//     alert("Geçersiz yol seçimi!");
// }

// let ad = prompt("Adınızı giriniz: ");
// let tckn = prompt("TC Kimlik Numaranızı giriniz: ");

// kontrolEt2(ad, tckn)

// function kontrolEt(ad, tckn){
//     if(ad != ""){
//         if(tckn.length == 11){
//             alert("İsim ve Tckn problemsiz girildi");
//         }
//         else{
//             alert("TC Kimlik Numarası 11 haneli olmalıdır!");
//         }
//     }
//     else{
//         alert("İsim boş bırakılamaz!");
//     }
// }

// function kontrolEt2(ad, tckn){
//     if(ad == ""){
//         alert("İsim boş bırakılamaz!");
//         return;
//     }
//     if(tckn.length != 11){
//         alert("TC Kimlik Numarası 11 haneli olmalıdır!");
//         return;
//     }
//     alert("İsim ve Tckn problemsiz girildi");
// }
// debugger
// let yenisatır = "\r\n";
// let bakiye = 1000;

// let metin = "1. Bakiye Görüntüleme" + yenisatır + "2. Para Yatırma" + yenisatır + "3. Para Çekme" + yenisatır + "4. Çıkış Yapma" + yenisatır + "Lütfen yapmak istediğiniz işlemi seçiniz: ";

// let seçim = prompt(metin);

// switch(seçim){
//     case "1":
//         alert("Bakiyeniz: " + bakiye + " TL");
//         break;
//     case "2":
//         let yatir = Number(prompt("Yatırmak istediğiniz miktarı giriniz: "));
//         bakiye += yatir;
//         alert("Yeni Bakiyeniz: " + bakiye + " TL");
//         break;
//     case "3":
//         let cek = Number(prompt("Çekmek istediğiniz miktarı giriniz: "));
//         if(cek > bakiye){
//             alert("Yetersiz bakiye!");
//         }
//         else{
//             bakiye -= cek;
//             alert("Yeni Bakiyeniz: " + bakiye + " TL");
//         }
//         break;
//     case "4":
//         alert("Çıkış yapıldı!");
//         break;
//     default:
//         alert("Geçersiz seçim!");
// }

// for(let i=1 ; i<=10 ; i++){
//     if(i%2 == 1){
//         console.log("Burchan")
//     }
//     else{
//         console.log("Naber");
//     }
// }

// let toplam = 0;
// for(let i = 50 ; i>=1 ; i--){
//     toplam += i;
//     console.log(i);
// }

// console.log("Toplam: " + toplam);

// let sayac = 0;

// while(sayac <= 10){
//     if(sayac %2 == 0){
//         console.log(sayac);
//     }
//     sayac++;
// }

// let sayac = 1;
// while(true){
//     console.log(sayac);
//     if(sayac == 7 ){
//         break;
//     }
//     sayac++;
// }

// let sayac = 0;

// while(sayac <= 10){
//     sayac++;
//     if(sayac>10){
//         break;
//     }
//     if(sayac == 8){
//         continue;
//     }
//     console.log(sayac);
// }

// for(let i = 1; i<=10; i++){
//     for(let j = 1; j<=10; j++){
//         console.log(i + " x " + j + " = " + (i*j));
//     }
//     console.log("-----------------")
// }

// let sayi = Number(prompt("Bir sayı giriniz: "));
// let asalmi = true;
// for(let i = 2; i < sayi; i++){
//     if(sayi % i == 0){
//         asalmi = false;
//         break;
//     }
// }
// if(asalmi){
//     alert(sayi + " asal bir sayıdır.");
// }
// else{
//     alert(sayi + " asal bir sayı değildir.");
// }

// let donenDeger = cube(2);
// kareAl(donenDeger);

// function kareAl(sayi){
//     let sonuc = sayi * sayi;
//     console.log(sonuc);
// }

// function cube(sayi){
//     let sonuc = sayi * sayi * sayi;
//     return sonuc;
// }

// let metin = prompt("Bir metin giriniz: ");

// let harf = prompt("Harf giriniz: ");

// let sonuc = bul(harf);
// alert("Harf Sayısı: " + sonuc);

// function bul(harf){
//     let toplam = 0;
//     for(let i = 0; i<metin.length ; i++){
//         if(metin.charAt(i).toLocaleLowerCase() === harf.toLocaleLowerCase()){
//             toplam += 1;
//         }
//     }
//     return toplam;
// }

// let number = prompt("Bir sayı giriniz: ");

// convertDecimalToBinary(number);

// function convertDecimalToBinary(number){
//     let binary="";
//     while(true){
//         binary += (number % 2 ).toString();
//         number = Math.floor(number / 2);
//         if(number == 1){
//             binary +=1;
//             break;
//         }
//     }
//     let result = reserve(binary);
//     alert("Sonuç : " + result);
// }

// function reserve(binary){
//     let reverseBinary = "";
//     for(let i = binary.length - 1; i >= 0; i--){
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }

// let binary = prompt("Binary sayı giriniz: ");

// function convertBinaryToDecimal(binary){
//     let toplam = 0;
//     let ust = 0;
//     for(let i = binary.length-1 ; i>=0 ; i--){
//         if(Number(binary.charAt(i))!=0){
//             toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
//         }
//         ust++;
//     }
//     alert("Sonuç: " + toplam);
// }

// convertBinaryToDecimal(binary);

let isimler = ["enes", "ahmet", "mehmet", "ali", "ayşe"];

isimler.forEach(function(isim){
    console.log(isim);
});