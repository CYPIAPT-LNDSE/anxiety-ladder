const letsGo = document.getElementById('letsGo');
const login = document.getElementById('login');

letsGo.addEventListener('click', () => {
  letsGo.className += ' animated bounceOutDown'
  setTimeout(function () {
    login.style.visibility = 'visible';
  }, 500);

})
