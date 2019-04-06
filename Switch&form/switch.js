window.onload = function(){

    let bigPhoto = document.getElementById('big');

    let allPhoto = document.querySelectorAll('.photo img');
    for (let i in allPhoto){
        allPhoto[i].onclick = function(){
            bigPhoto.src = this.src;
        }
    }
}