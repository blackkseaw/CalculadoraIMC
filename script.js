function imc (){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var peso100 = peso*10000
    var imc = peso100 / (altura*altura)
    
    
     
        if (imc < 18.5){
    
        alert(`O seu imc é de ${imc} é recomendado que você procure um especialista, pois está abaixo do seu peso ideal`);
      
    }
    
        if (imc > 18.5 && imc < 24.9){
        alert(`O seu IMC é de ${imc} e você está dentro do seu peso ideal`);
        }
    
        if (imc > 25.0 && imc < 29.9){
        alert(`O seu IMC é de ${imc} e você está com sobrepeso`);
        }
    
        if (imc > 30.0 && imc < 39.9){
        alert(`O seu IMC é de ${imc} e você está com obesidade`);
    }
    
        if (imc > 40){
        alert (`O seu IMC é de ${imc} e vocé está com obesidade mórbida` );
    }
    
    
    }
    
    
    
    
    
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000080}";
        document.body.appendChild(css);
    };
    
    