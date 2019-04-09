const body = document.querySelector("body");

function handleScroll(event){
  console.log(event);
}

function init(){
  body.onscroll = function(){
    handleScroll();
  };
}

init();