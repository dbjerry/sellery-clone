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
    if(e.wheelDelta === -120){
      console.log('wheel down');
    } else {
      console.log('wheel up');
      scrollTo(document.querySelector('.sc2'), 'down');
    }
  }
}

function init(){
  onMouseWheel();
  // onMouseOver();
}

init();