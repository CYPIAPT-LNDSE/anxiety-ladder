

$('#box').click(function(){
  $(this).addClass('opened');

  var folds = $('.fold', '#ladder'); console.log(folds);
  setTimeout(function(){
    unfoldQ(folds,0);
  }, 1750);
});

$('#closeLetter').click(function(e){
  $('#box').removeClass('opened');
  $('.unfolded').removeClass('unfolded');
  e.stopPropagation();
});

function unfoldQ(elem,inx){
  if(inx != elem.length){
console.log(elem[inx]);
    $(elem[inx]).addClass('unfolded');
console.log('index: ' + inx);
    inx = parseInt(inx)+1;
console.log('index: ' + inx);

    setTimeout(function(){
      unfoldQ(elem,inx);
    }, 500);
  }
}
