function hesapla(){
    var kilo,yas,boy,sonuc,cinsiyet,bmi,meter,durum;
    kilo = Number(document.getElementById("kilo").value);
    yas = Number(document.getElementById("yas").value);
    boy = Number(document.getElementById("boy").value);
    cinsiyet = document.querySelector('input[name="cinsiyet"]:checked')?.value;
    document.getElementById("sonuc").innerHTML="";

    
    


    if(cinsiyet=="" || boy=="" || yas=="" || kilo==""){
        alert("Lütfen boş yer bırakmayınız");
    }
    else if(boy <=0 || boy >=250){
        alert("lütfen 0 ve 250 arası pozitif bir değer giriniz.");
    }
    else if(yas <=0 || yas >=100 ){
        alert("lütfen 0 ve 100 arası pozitif bir değer giriniz.");
    }
    else if(kilo <=0 || kilo >=300){
        alert("lütfen 0 ve 300 arası pozitif bir değer giriniz");
    }
    else{
        meter = boy / 100;
        bmi = kilo / (meter * meter);

        

        if(bmi < 18.5){
            durum = "Zayıf";
        }
        else if(bmi < 25){
            durum = "Normal";
        }
        else if(bmi < 30){
            durum = "Fazla Kilolu";
        }
        else{
            durum = "Obez"
        }

        document.getElementById("sonuc").innerHTML=
        "BMI: " +bmi.toFixed(2)+"<br>"+
        "Durum: " + durum + "<br>"+
        "Yaş: " + yas +"<br>"+
        "Kilo: "+ kilo + "<br>"+
        "Boy: " + boy + "<br>" +
        "Cinsiyet: "+ cinsiyet + "<br>"; 
        
        
    }

    
}


