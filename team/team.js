var cent = 3;

window.onload = function(){
  //HEY HEY HEY
  //a que no sabes qué coche usa Papá Noél
  //un renol
  //:D
    
  var ph = [];
  var right_pic;
  var auto = true;

  for (var i = 1; i < 8; i++){
      ph.push(document.getElementById("i" + i.toString()));
  }
  plus1(ph[0]);
  function plus1(a) {
      console.log("ey")
      if(a.classList.contains("l")){
          cent += 1;
          if(cent == ph.length){
              cent = 0;
          }
      }
      else if(a.classList.contains("r")){
          cent -= 1;
          if(cent == -1){
              cent = ph.length - 1;
          }
      }
      for (let i = 0; i < ph.length; i++){
          ph[i].classList.remove("c");
          ph[i].classList.remove("h");
          ph[i].classList.remove("l");
          ph[i].classList.remove("r");
          if(i == cent + 1 || (i == 0 && cent == 6)){
              ph[i].classList.add("l");
          }
          else if(i == cent - 1 || (i == 6 && cent == 0)){
              ph[i].classList.add("r");
              right_pic = ph[i]
          }
          else if(i == cent){
              ph[i].classList.add("c");
          }
          else{
              ph[i].classList.add("h");
          }
      }
  }
  var interv = setInterval(ey, 3000);
  function ey(){
      plus1(right_pic);
  }
  for (let p of ph){
      p.onclick = function(){clickplus1(p)};
  }
  function clickplus1(p){
      clearInterval(interv);
      plus1(p);
  }
}
