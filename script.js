;(function(){
    const id = (v)=> document.getElementById(v); 
    
    const loadbar = ()=> {
        const ovrl = id("overlay"),
            prog = id("progress"),
            bar = id("progressbar")

        let img = document.images,
            c = 0,
            stop = 0,
            tot = img.length;
        
        const doneLoading= () => {
            ovrl.style.opacity = 0;
            setTimeout(()=>{ 
                ovrl.style.display = "none";
            }, 1400); 
        }

        const imgLoaded= ()=> {
            clearInterval(timer)
            c += 1;
            var perc = ((100/tot*c) << 0) +"%";
            bar.style.width = perc;
            prog.innerHTML = "Loading "+ perc;
            if(c===tot) return doneLoading();
        }
        
        var autoInc = ()=>{
            console.log("hola")
            stop++
            var perc = (stop) +"%";
            bar.style.width = perc;
            prog.innerHTML = "Loading "+ perc;
            if (stop == 50) {
                clearInterval(timer)
            }
        }  
        var timer = setInterval(autoInc, 250);

        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }     
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);

    const forWeb = id("web"),
          forApp = id("app"),
          toMail = id("toMail"),
          toWhats = id("toWhats");
    
    const changeLink = ()=> {
        let prod = ''
        if (forApp.checked) prod = "una%20Aplicaci%C3%B3n%20Web"
        if (forWeb.checked) prod = "un%20Sitio%20Web"
        if (!forWeb.checked && !forApp.checked) prod = "uno%20de%20los%20productos"
    
        toMail.href = `mailto:yajday@hotmail.com?subject=Pedir%20m%C3%A1s%20informaci%C3%B3n&body=Buenas%20tardes%2C%20estoy%20interesado%20en%20${prod}.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20por%20favor.`

        toWhats.href = `https://wa.me/5214492201244?text=Buenas%20tardes%2C%20estoy%20interesado%20en%20${prod}.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20por%20favor.`
    }

    forWeb.addEventListener('change', changeLink)
    forApp.addEventListener('change', changeLink)
    
}());