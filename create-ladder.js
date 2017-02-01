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

const addStep = document.getElementById('addStep');
addStep.addEventListener('click', () => {
  let step = `
        <label>Description:</label>
        <input class='challenge__description'/>
        <label>Fear rating:</label>
        <input type="range"  min="0" max="100" value="50"/>
      `
  let newStep = document.createElement('FORM');
  newStep.className = 'challenge fold';
  newStep.innerHTML = step;
  ladder.appendChild(newStep);
  setTimeout(() => {
    ladder.lastChild.className += ' unfolded';
  }, 100);
})

const completeLadder = document.getElementById('completeLadder');

completeLadder.addEventListener('click', ()=> {
  //main cloud
  const cloud = document.getElementById('cloud');
  cloud.className += ' animated bounceOutUp';
  //small cloud
  const cloudS = document.getElementById('cloudS');
  cloudS.style.display ='none'
  //medium cloud
  const cloudM = document.getElementById('cloudM');
  cloudM.style.display ='none'
  //title
  const cloudTitle = document.getElementById('cloudTitle');
  cloudTitle.className += ' animated zoomOut'
  ladder.className += ' animated fadeOut'

})




window.onload = showLadder, addHandlersToElements;
