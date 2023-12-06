const findOut  = document.querySelector('section.hoped-banner div.action button');
const aspirations = document.querySelector('section.aspirations');
const footer = document.querySelector('footer');
console.log(findOut);

class UI{
    static show(item){
        item.style.display = "block";
    }
    static hide(item){
        item.style.display = "none";
    }

    static scroll(item){
        item.scrollIntoView();
    }
}

findOut.addEventListener('click', activate);

function activate(){
    UI.show(aspirations);
    UI.scroll(aspirations);
    UI.show(footer);    
}