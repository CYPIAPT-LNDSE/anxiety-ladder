(() => {
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
    ladder.style.marginTop = '5rem';
    const firstStep =document.getElementById('firstStep');
    firstStep.style.display = 'none';
    const cloud = document.getElementById('cloud');
    cloud.className += ' animated bounceOutUp';
    const cloudS = document.getElementById('cloudS');
    cloudS.style.display ='none'
    const cloudM = document.getElementById('cloudM');
    cloudM.style.display ='none'
    const cloudTitle = document.getElementById('cloudTitle');
    cloudTitle.className += ' animated pulse move-up'
    layout();
  })


  //REORDER steps
  const layout = () => {
    console.log('complete clicked');
    var group = document.querySelector(".group");
    var nodes = document.querySelectorAll(".box");
    var total = nodes.length;
    var ease  = Power1.easeInOut;
    var boxes = [];

    for (var i = 0; i < total; i++) {
      var node = nodes[i];
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
      if (lastX === box.x && lastY === box.y) continue;
      var x = box.transform.x + lastX - box.x;
      var y = box.transform.y + lastY - box.y;
      TweenLite.fromTo(box.node, 2, { x, y }, { x: 0, y: 0, ease });
    }
  }
  showLadder();
})();
