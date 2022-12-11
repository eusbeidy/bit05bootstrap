
const $form = document.getElementById('form');

$form.addEventListener('submit', handlesubmit);

function handlesubmit(event) {
    event.preventDefault()
    
    if (!$form.email.value) {
     } else {
        const email = $form.email.value;
        localStorage.setItem('email', email);
        $form.reset();
    }
        
}