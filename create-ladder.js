const ladder = document.getElementById('ladder');

const showLadder = () => {
  ladder.className += ' opened';
  const folds = document.getElementsByClassName('fold');
  unfoldQ(folds,0);
};

const unfoldQ = (elem,inx) =>{
  if(inx != elem.length) {
    elem[inx].className += ' unfolded';
    inx = parseInt(inx)+1;
    setTimeout(() => {
      unfoldQ(elem,inx);
    }, 500);
  }
}

const addHandlersToElements = () => {
  const challenge = document.getElementsByClassName('challenge');
  for(var i = 1; i < navItems.length; i++) {
    ((i) => {
      challenge[i].addEventListener("submit", () => {
        e.preventDefault();
      });
    })(i);
  }
}
window.onload = showLadder, addHandlersToElements;
