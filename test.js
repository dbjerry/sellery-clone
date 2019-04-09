const body = document.querySelector('body');
const section = body.querySelector('.section');

function handleWheel(event){
  console.log(event);
}

function init(){
  // body.addEventListener('window.onmousewheel', handleWheel);
  window.onmousewheel = function(e){
    console.dir(e);
    if(e.wheelDelta === -120){
      console.log('wheel down');
    } else {
      console.log('wheel up');
    }
  }
}

init();