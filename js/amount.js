const div_section1 = document.querySelector('#section1');

function fn_onmouseenter(){
  console.log('div_section1:\n', div_section1);
}

function init(){
  addEventListener('click', fn_onmouseenter);
}

init();