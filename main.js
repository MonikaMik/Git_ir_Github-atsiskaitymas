const landingPage = document.querySelector('#landingSection');

document
    .querySelector('#introButton')
    .addEventListener('click', () => {
        landingPage.style.display = "none";
        document.querySelector('#introTab').style.display = 'block';
    });

document
    .querySelector('#workButton')
    .addEventListener('click', () => {
        landingPage.style.display = "none";
        document.querySelector('#workTab').style.display = 'block';
    });

document
    .querySelector('#aboutButton')
    .addEventListener('click', () => {
        landingPage.style.display = "none";
        document.querySelector('#aboutTab').style.display = 'block';
    });

document
    .querySelector('#contactButton')
    .addEventListener('click', () => {
        landingPage.style.display = "none";
        document.querySelector('#contactTab').style.display = 'block';
    });

