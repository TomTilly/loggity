const textInputs = document.querySelectorAll('.text-field__input');

function handleFocus(e) {
  const target = e.currentTarget;
  const container = e.currentTarget.parentNode;
  if (!container.classList.contains('active')){
    container.classList.add('active');
  }
}

function handleBlur(e) {
  const target = e.currentTarget;
  const container = e.currentTarget.parentNode;
  if (!target.value){
    container.classList.remove('active');
  }
}

textInputs.forEach(input => {
  input.addEventListener('focus', handleFocus);
  input.addEventListener('blur', handleBlur);
});