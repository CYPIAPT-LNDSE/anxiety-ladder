const ladder = document.getElementById('ladder');

const showLadder = function(){
  ladder.className += ' opened';
  const folds = document.getElementsByClassName('fold'); console.log(folds);


  unfoldQ(folds,0);

  function unfoldQ(elem,inx){
    if(inx != elem.length){
      elem[inx].className += ' unfolded';
      inx = parseInt(inx)+1;
      setTimeout(function(){
        unfoldQ(elem,inx);
      }, 500);
    }
  };
}




window.onload = showLadder;
