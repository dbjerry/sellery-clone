const spec_section_parent = document.querySelector('.section').parentNode;

/**
 * https://cofs.tistory.com/191
 * 내가 현재 위치한 div의 값을 알고
 * wheel down시 div의 값 + 1을 하여
 * 아래 div로 이동
 */

function onMouseOver(){
  /**
   * 각 div에 id를 부여하고 mouseover가 된 div의 id를 변경? 삭제?
   */
}

function getCurrentDivClassName(){

}

function init(){
  getClassName();
}

init();
//////////////////// 잠시 보류 ////////////////////
// function onMouseWheel(){                     //
//   window.onmousewheel = function(e){         //
//     if(e.wheelDelta <= 0){                   //
//       console.log('wheel down');             //
//     } else if(e.wheelDelta >= 0) {           //
//       console.log('wheel up');               //
//                                              //
//     }                                        //
//   }                                          //
// }                                            //
//                                              //
// onMouseWheel();                              //
//////////////////////////////////////////////////

/* 각 div의 className 가져오기 ex) sec0, sec1 ... array에 담기
const section_number = [];
function getClassName(){
  for(let i = 0; i < spec_section_parent.childElementCount; i++){
    section_number.push(`sec${i}`);
  }
  setOffset(section_number);
}
 */

//////////////////// 이하 쓰레기통 ////////////////////

// const body = document.querySelector('body');
// const section = body.querySelector('.section');
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
