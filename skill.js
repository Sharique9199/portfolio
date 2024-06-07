
const boxes = document.querySelectorAll('.project-main');
window.addEventListener('scroll' , checkBoxes);
checkBoxes()
function checkBoxes(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxes);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const boxeses = document.querySelectorAll('.cont-box-1');
window.addEventListener('scroll' , checkBoxeses);
checkBoxeses()

function checkBoxeses(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxeses);
    boxeses.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

const boxese = document.querySelectorAll('#skills1>#skills-container1>div');
window.addEventListener('scroll' , checkBoxese);
checkBoxese()

function checkBoxese(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxese);
    boxese.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const box = document.querySelectorAll('.skill-2');
window.addEventListener('scroll' , checkBox);
checkBox()

function checkBox(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(box);
    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const boxes_1 = document.querySelectorAll('.abt-img-c');
window.addEventListener('scroll' , check);
check()
function check(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxes_1);
    boxes_1.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


const boxes_2 = document.querySelectorAll('.skills-box');
window.addEventListener('scroll' , check4);
check4()
function check4(){
    const triggerBottom = window.innerHeight/5 *4
  console.log(boxes_2);
    boxes_2.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}







