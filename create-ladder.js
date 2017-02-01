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
  newStep.className = 'challenge fold box';
  newStep.innerHTML = step;
  ladder.appendChild(newStep);
  setTimeout(() => {
    ladder.lastChild.className += ' unfolded';
  }, 100);
})

const completeLadder = document.getElementById('completeLadder');

completeLadder.addEventListener('click', ()=> {
  //ladder first step
  const firstStep =document.getElementById('firstStep');
  firstStep.style.display = 'none';
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
  // ladder.className += ' animated fadeOut'
})


//REORDER steps


completeLadder.addEventListener("click", layout);

function layout() {
  console.log('complete clicked');
  var group = document.querySelector(".group");
  var nodes = document.querySelectorAll(".box");
  var total = nodes.length;
  var ease  = Power1.easeInOut;
  var boxes = [];

  for (var i = 0; i < total; i++) {

    var node = nodes[i];

    // Initialize transforms on node
    TweenLite.set(node, { x: 0 });

    boxes[i] = {
      transform: node._gsTransform,
      x: node.offsetLeft,
      y: node.offsetTop,
      node
    };
  }
  group.classList.toggle("reorder");
  console.log('group classlist: ', group.classList);
  console.log(group.classList);
  for (var i = 0; i < total; i++) {

    var box = boxes[i];

    var lastX = box.x;
    var lastY = box.y;

    box.x = box.node.offsetLeft;
    box.y = box.node.offsetTop;

    // Continue if box hasn't moved
    if (lastX === box.x && lastY === box.y) continue;

    // Reversed delta values taking into account current transforms
    var x = box.transform.x + lastX - box.x;
    var y = box.transform.y + lastY - box.y;

    // Tween to 0 to remove the transforms
    TweenLite.fromTo(box.node, 0.5, { x, y }, { x: 0, y: 0, ease });
  }
}



window.onload = showLadder, addHandlersToElements;
