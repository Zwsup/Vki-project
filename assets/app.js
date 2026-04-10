function hesapla(){
    var kilo,yas,boy,sonuc,cinsiyet;
    kilo = Number(document.getElementById("boy").value);
    yas = Number(document.getElementById("yas").value);
    boy = Number(document.getElementById("boy").value);
    cinsiyet = document.querySelector('input[name="cinsiyet"]:checked')?.value;


    document.getElementById("sonuc").innerHTML="boy="+boy+"<br>"+"yaş="+yas+"<br>"+"kilo="+kilo+"<br>"+"cinsiyet="+cinsiyet;


    
}