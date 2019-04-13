//
document.addEventListener('DOMContentLoaded', main)

function main(){
    const clickToExpand = document.querySelectorAll('.clickToExpand');
    for(let i=0; i<clickToExpand.length;i++){
        clickToExpand[i].addEventListener('click', onClickExpand);
    }
}
function onClickExpand(){
    let bioElement = this.nextElementSibling;
    this.classList.toggle("active");
    if(bioElement.style.display === "block"){
        bioElement.style.display = "none";
    }else{
        bioElement.style.display = "block"
    }
}