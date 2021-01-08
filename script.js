;(function(){
    function id(v){return document.getElementById(v); }
    
    function loadbar() {
        const ovrl = id("overlay"),
            prog = id("progress"),
            bar = id("progressbar")

        let img = document.images,
            c = 0,
            tot = img.length;
        
        function imgLoaded(){
            c += 1;
            var perc = ((100/tot*c) << 0) +"%";
            bar.style.width = perc;
            prog.innerHTML = "Loading "+ perc;
            if(c===tot) return doneLoading();
        }

        function doneLoading(){
            ovrl.style.opacity = 0;
            setTimeout(function(){ 
                ovrl.style.display = "none";
            }, 1400); 
        }

        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }    
    }

    document.addEventListener('DOMContentLoaded', loadbar, false);
}());