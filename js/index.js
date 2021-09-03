// Your code goes here

//Header
const mainHeader = document.querySelector('.main-navigation');
const navigationLinks = document.querySelectorAll('.nav .nav-link');
const introHeader = document.querySelector('.intro');
const sections = document.querySelectorAll('section');
//Images
const images = document.querySelectorAll('img');
const imageContent = document.querySelectorAll('.img-content');

//events

//mark the sections
//mouse enter & leave
function markElement(event){
    event.target.style.backgroundColor = 'lightgrey'; 
}
function unmarkElement(event){
    event.target.style.backgroundColor = 'white';
}

sections.forEach ( elem => {
    elem.addEventListener('mouseenter', markElement);
    elem.addEventListener('mouseleave', unmarkElement);
})

introHeader.addEventListener('mouseenter', markElement);
introHeader.addEventListener('mouseleave', unmarkElement);


//hide all images
//key down
function hideImages(event){
    if(event.key === 'i'){
        images.forEach (imgElem =>
            {
                if (imgElem.classList.toggle('seen')){
                    imgElem.style.visibility = 'visible';
                }else{
                    imgElem.style.visibility = 'hidden';
                }
            });
    }
}

document.addEventListener('keydown', hideImages);

//wheel make IMAGE BIGGER!!
function wheelZoom(event){
    event.preventDefault();

    let scale = 1;
    scale += (event.deltaY * -0.01);
    scale = Math.min(Math.max(.123, scale), 4);

    event.target.style.transform = `scale(${scale})`;
    event.stopPropagation();
}

imageContent.forEach (imageElem => {
   imageElem.addEventListener('wheel', wheelZoom);
})

//load and turn header green to go!
document.onreadystatechange = () => {
    if (document.readyState === 'complete'){
        mainHeader.style.backgroundColor = 'lightblue';
    }
};

//making some ranom color
function random(number) {
    return Math.floor(Math.random() * number);
}
  
function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
//RANDOM COLOR END

//no context menu
function noContextMenu(event){
    event.preventDefault();
}


//clicking both buttons
function onClick(event){
    if(event.target.nodeName === 'DIV'){
        event.target.style.backgroundColor = randomColor();
    }
    event.stopPropagation();
}

function auxclick(event){
    event.preventDefault();
    if(event.target.nodeName === 'DIV'){
        event.target.style.color = randomColor();
    }
    event.stopPropagation();
}

sections.forEach (sectionElem => {
    sectionElem.addEventListener('contextmenu', noContextMenu);
    sectionElem.addEventListener('click', onClick);
    sectionElem.addEventListener('auxclick', auxclick);
})

mainHeader.addEventListener('contextmenu', noContextMenu);


//stopping default from a tags
navigationLinks.forEach ( naveElem =>{
    naveElem.addEventListener('click', e =>{
        
        console.log(naveElem);
        e.preventDefault();
        e.target.style.color = randomColor();
    })
})

//double click to increas and decrease size

function doubleSizeChange(event){
    console.log(event.target);
    event.target.style.transition = 'transform .6s'
    if (event.target.classList.toggle('large')){
        event.target.style.transform = 'scale(1.3)';
    }else{
        event.target.style.transform = 'scale(1)';
    }
}

const destinationContentImage = document.querySelector('.content-destination img');

destinationContentImage.addEventListener('dblclick', doubleSizeChange);