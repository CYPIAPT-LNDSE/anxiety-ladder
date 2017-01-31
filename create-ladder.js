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

window.onload = showLadder;
