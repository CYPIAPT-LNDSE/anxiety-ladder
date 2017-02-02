(function () {
  var letsGo = document.getElementById('letsGo');
  var login = document.getElementById('login');

  letsGo.addEventListener('click', () => {
    letsGo.className += ' animated bounceOutDown'
    setTimeout(function () {
      login.style.visibility = 'visible';
    }, 500);
  })
})();
