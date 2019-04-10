const spec_section_parent = document.querySelector('.section').parentNode;
const spec_section = document.querySelector('.section');
const pHTML = spec_section.querySelector('#pHTML');
const CLASSNAME_NUM = 1;

function onMouseWheel(name){
  let previousDiv = name.previousElementSbling;
  let nextDiv = name.nextElementSibling;
  window.onmousewheel = function(e){
    if(e.wheelDelta <= 0){
      pHTML.innerText = '??????????';
      console.log(nextDiv.offsetTop, 'wheel down');
      spec_section.animate([
        {
          opacity: 0,
          color: "#fff"
        }, 
        {
          opacity: 1,
          color: "#000"
        }
      ], 1000);
    } else if(e.wheelDelta >= 0) {
      console.log(previousDiv, 'wheel up');
    }
    // window.innerHeight <-- 일단 알아두기
  }
}

const mouseOver = function onMouseOver(e){
  const targetParent = e.target.parentNode; // 마우스 현재 위치의 부모 DOM
  if(targetParent.className.includes(targetParent.classList[CLASSNAME_NUM])){
    onMouseWheel(targetParent); // 현재 마우스의 div 위치
  }
}

function getCurrentDivClassName(){
  window.onmouseover = mouseOver;
}

function init(){
  getCurrentDivClassName();
}

init();

/* 
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
 *
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  console.log(scroll_pos);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  console.log('scroll');
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
      console.log('!ticking : before');
    });
    console.log('!ticking : after');
    ticking = true;
  }
}); */
