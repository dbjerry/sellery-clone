const body = document.querySelector('body');
const section = body.querySelector('.section');
// const fullPage = section.parentNode;

/* const onMouseOver = section.onmouseover = function(e){
  handleMouseOver(e);
} */

/* function handleMouseOver(e){
  const target = e.target.classList[0];
  const targetParent = document.querySelector(`.${target}`).parentNode;
  console.log(targetParent === fullPage.firstElementChild);
  if(targetParent === fullPage.firstElementChild){
    console.log('Top of top is here');
  } else {
    onMouseWheel();
  }
} */

function onMouseWheel(){
  window.onmousewheel = function(e){
    if(e.wheelDelta <= 0){
      console.log('wheel down');
      window.onscroll(-window.innerHeight);
    } else if(e.wheelDelta >= 0) {
      console.log('wheel up');
      console.log(window.innerHeight); // 722
    }
  }
}

function init(){
  // onMouseWheel();
  // onMouseOver();
}

init();