document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "WELCOME TO", "JUSTITIA", "THE FORENSICS CLUB OF<br>KMC MANIPAL"];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 50);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 10000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});
