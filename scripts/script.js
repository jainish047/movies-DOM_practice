const addMovieBtn = document.getElementById('addMovieBtn');
const addMovieModal = document.getElementById('addModal');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.cancel');
const saveMovieBtn = addMovieModal.querySelector('.save');
const errors = addMovieModal.querySelectorAll('.error');
const inputs = addMovieModal.querySelectorAll('input');

let movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleAddMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
    // if(backdrop.style.display)  backdrop.style.display=none;
    // else                        backdrop.style.display=block;
    clearValues();
    clearAlerts();
};

const clearValues = () => {
    const inputs = addMovieModal.querySelectorAll('input');
    for(const input of inputs){
        input.value='';
    }
}

const backdropClickHandler = () => {
    toggleAddMovieModal();
    clearValues();
}

const cancelAddMovie = () => {
    toggleAddMovieModal();
    clearValues();
}

const clearAlerts = () => {
    for(let i=0; i<inputs.length; i++){
        inputs[i].classList.remove('wrong');
        errors[i].classList.remove('visible');
    }
}

const saveMovieBtnHandler = () => {
    clearAlerts();
    console.log("checking data...");
    const title = inputs[0].value.trim();
    const url = inputs[1].value.trim();
    const rating = inputs[2].value.trim();
    if(title === ''){
        inputs[0].classList.add('wrong');
        errors[0].classList.add('visible');
        return;
    }
    else if(url === ''){
        inputs[1].classList.add('wrong');
        errors[1].classList.add('visible');
        return;
    }
    else if(rating === '' || +rating<1 || +rating>5){
        inputs[2].classList.add('wrong');
        errors[2].classList.add('visible');
        return;
    }
    
    const newMovie={
        title:title,
        imageURL:url,
        rating:rating
    };
    movies.push(newMovie);
    toggleAddMovieModal();
}

addMovieBtn.addEventListener('click', toggleAddMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovie);
saveMovieBtn.addEventListener('click', saveMovieBtnHandler);
for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('focusout', ()=>{
        inputs[i].classList.remove('wrong');
        errors[i].classList.remove('visible');
    });
}
