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
debugger
let yenisatır = "\r\n";
let bakiye = 1000;

let metin = "1. Bakiye Görüntüleme" + yenisatır + "2. Para Yatırma" + yenisatır + "3. Para Çekme" + yenisatır + "4. Çıkış Yapma" + yenisatır + "Lütfen yapmak istediğiniz işlemi seçiniz: ";

let seçim = prompt(metin);

switch(seçim){
    case "1":
        alert("Bakiyeniz: " + bakiye + " TL");
        break;
    case "2":
        let yatir = Number(prompt("Yatırmak istediğiniz miktarı giriniz: "));
        bakiye += yatir;
        alert("Yeni Bakiyeniz: " + bakiye + " TL");
        break;
    case "3":
        let cek = Number(prompt("Çekmek istediğiniz miktarı giriniz: "));
        if(cek > bakiye){
            alert("Yetersiz bakiye!");
        }
        else{
            bakiye -= cek;
            alert("Yeni Bakiyeniz: " + bakiye + " TL");
        }
        break;
    case "4":
        alert("Çıkış yapıldı!");
        break;
    default:
        alert("Geçersiz seçim!");
}