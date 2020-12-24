/* MENU Button */



//Selecting DOM Items

// const menuBtn= document.querySelector('.menu-btn');
// const menu= document.querySelector('.menu');
// const menuList= document.querySelector('.menu-list');

// const menuList_Item= document.querySelectorAll('.menu-list-item');

// //Set intital state of menu

// let showMenu=false;

// menuBtn.addEventListener('click',toggleMenu);

// function toggleMenu(){

//     if(!showMenu){
//         menuBtn.classList.add('hide');

//     }
// }





















// const menuBtn= document.querySelector('.menu-sign');
// const menu= document.querySelector('.menu-header');
// const menuList= document.querySelector('.menu-list');
// const menuList_Item= document.querySelectorAll('.menu-list-item');

// // Set Initial State of menu

// let showMenu= false;
// menuBtn.addEventListener('click',toggleMenu);

// function toggleMenu(){
//     if(!showMenu){
//         menuBtn.classList.add('hide');
//         menu.classList.add('show');
//         menuList.classList.add('show');

//         menuList_Item.forEach(item => item.classList.add('show'));

//         //Set Menu state
//         showMenu=true;
      
//     } else{
//         if(!showMenu){
//             menuBtn.classList.remove('hide');
//             menu.classList.remove('show');
//             menuList.classList.remove('show');
    
//             menuList_Item.forEach(item => item.classList.remove('show'));
    
//             //Set Menu state
//             showMenu=true;
          
//         }
//     }
// }










// var menu_sign= document.querySelector('.menu-sign');
// menu_sign.addEventListener('click',showMenu);


// function showMenu(){
//     var menu= document.getElementById('menu-header');
//     menu.classList.toggle('show');
//     menu.classList.toggle('hide');

// }


/* TYpeWriter Effect */

const TypeWriter = function (txtElement, words, wait=1000)
{
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait= parseInt(wait,10);
    this.type();
    this.isDeleting=false;
}

// Type Method

TypeWriter.prototype.type = function(){
    // Current index of word

    const current= this.wordIndex % this.words.length;

    // Get full text of current word

    const fullTxt= this.words[current];
    
    // Check if deleting

    if(this.isDeleting){
        // Remove character
        this.txt =fullTxt.
        substring(0,this.txt.length-1);

    }else {
        //Add char

        this.txt =fullTxt.
        substring(0,this.txt.length+1);
    }
    // Insert txt into element

    this.txtElement.innerHTML=`<span class="txt">
    ${this.txt}</span>`;

    // TYpe Speed

    let typeSpeed= 300;

    if(this.isDeleting){
        typeSpeed/=2; // TYpespeed/2;
    }

    // Check if word is compelte

    if(!this.isDeleting && this.txt===fullTxt){
        typeSpeed=this.wait; //Pausing at end

        this.isDeleting=true;


    }else if(this.isDeleting && this.txt===''){
        this.isDeleting=false;
        //Move to next word

        this.wordIndex++;

        //Pause before typing new word
        typeSpeed=500;
    }



    setTimeout(() => this.type(),typeSpeed);
}

//Initialize on DOM Load

document.addEventListener('DOMContentLoaded',init);

//Init App

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');
     //Initialize TypeWriter

     new TypeWriter(txtElement,words,wait);

}

/* Smooth Scroll */

$('#main-header a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});




/* Projects Tab Buttons */

var html_projects=document.getElementById('html-projects');
var js_projects=document.getElementById('js-projects');
js_projects.style.display='none';





var html_css_btn= document.getElementById('html-css');
html_css_btn.addEventListener('click',showHtmlProjects);
var js_btn= document.getElementById('js').style.borderLeft='none';


function showHtmlProjects(){

        html_projects.style.display='grid';
        js_projects.style.display='none';

        var js_btn= document.getElementById('js').style.borderLeft='none';
        html_css_btn.style.borderLeft='red 2px solid';
}



var js_btn= document.getElementById('js').addEventListener('click',showJsProjects);


function showJsProjects(){

    html_projects.style.display='none';
    js_projects.style.display='grid';

    var js_btn= document.getElementById('js').style.borderLeft='red 2px solid';
    html_css_btn.style.borderLeft='none';


  }

