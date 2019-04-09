const sectionParent = document.querySelector('.section').parentNode;

function iteratorNaming(){
  for(let i = 0; i < sectionParent.childElementCount; i++){
    sectionParent.children[i].classList.add(`sec${i}`);
  }
}

function init(){
  iteratorNaming();
}

init();