let mesaj = 
`
Migros'a hoşgeldiniz.
Money Kartınız var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat : 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat : 100
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat : 220
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    let isim = prompt("Adınızı giriniz:");
    let soyisim = prompt("Soyadınızı giriniz:");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    let odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tutar : ${odenecekTutar}
    `);
}
else{
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`);
}