const showLadder = function(){
  $('#ladder').addClass('opened');
  var folds = $('.fold', '#ladder'); console.log(folds);
  unfoldQ(folds,0);

  function unfoldQ(elem,inx){
    if(inx != elem.length){
      $(elem[inx]).addClass('unfolded');
      inx = parseInt(inx)+1;
      setTimeout(function(){
        unfoldQ(elem,inx);
      }, 500);
    }
  };
}




window.onload = showLadder;
