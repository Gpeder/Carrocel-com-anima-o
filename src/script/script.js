let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');

let main = document.querySelector('.main');
let list = document.querySelector('.list');
let thumb = document.querySelector('.thumb');


btnNext.onclick = () => moveItensOnClick('next');
btnPrev.onclick = () => moveItensOnClick('prev');

function moveItensOnClick(type){

    let listItem = document.querySelectorAll('.list .list-item');
    let thumbItem = document.querySelectorAll('.thumb .thumb-item');



    if(type == 'next'){
        list.appendChild(listItem[0]);
        thumb.appendChild(thumbItem[0]);

        main.classList.add('next');
    }else{
        list.prepend(listItem[listItem.length - 1]);
        thumb.prepend(thumbItem[thumbItem.length - 1]);
        main.classList.add('back');
    }

    setTimeout(() => {
        main.classList.remove('next');
        main.classList.remove('back');
    }, 2000);

}