/**
 * this is that check if there is a price in the salary input.
 */
function checkInputValue(t){
  if(t[1].value === ''){
    fullpage_api.setAllowScrolling(false, 'down');
  } else {
    fullpage_api.setAllowScrolling(true);
  }
}

/**
 * this section that I see now.
 */
function getCurrentSection(e){
  if(e.target.parentNode.id === 'section1'){
    const div_target = e.target.getElementsByTagName('input');
    checkInputValue(div_target);
  } else {
    fullpage_api.setAllowScrolling(true);
  }
}

/**
 * initialization
 */
function init(){
  window.onmouseover = getCurrentSection; // ex. section0, section1 ...
  // fn_section1_input_value_check();
}

init(); // call the init().