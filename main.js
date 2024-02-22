const landingPage = document.querySelector('#landingSection');
const buttons = document.querySelectorAll('button[data-target]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        landingPage.style.display = 'none';
        const targetId = button.getAttribute('data-target');  
        document.querySelector(`#${targetId}`).style.display = 'block';
    });
});



