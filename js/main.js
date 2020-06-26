let button = document.getElementById('myButton');
let closeModal = document.getElementById('close');
button.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);


function toggleModal(event) {
    let myModal = document.querySelector('.container');
    if(event.target.id === 'myButton') {
        myModal.style.display = 'block';
        // button.style.top = '360px';
    }
    else {
        myModal.style.display = 'none';
    }
}
