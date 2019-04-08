const navBottom = document.querySelector(".nav-bottom");
const nextBtn = navBottom.querySelector(".nextBtn");

function handleButton(event){
  console.dir(event);
}

nextBtn.addEventListener('click', handleButton);