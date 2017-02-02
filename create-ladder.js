(() => {
  const ladder = document.getElementById('ladder');

  //Show first challenge input field
  const showLadder = () => {
    const folds = document.getElementsByClassName('fold');
    unfoldQ(folds,0);
    addEventToSliders();
  };

  const unfoldQ = (elem,inx) =>{
    if(inx != elem.length) {
      let current = elem[inx];
      current.classList.add('unfolded');
      inx = parseInt(inx)+1;
      setTimeout(() => {
        unfoldQ(elem,inx);
      }, 500);
    }
  }

  const showBorders = () => {
    const folds = document.querySelectorAll('.fold');
    addBorder(folds,0);
  }

  //Add Border to folds
  const addBorder = (folds) =>{
    folds.forEach( fold => {
      fold.classList.add('border');
    })
  }

  const addStep = document.getElementById('addStep');
  addStep.addEventListener('click', () => {
    let step = `
      <textarea class='challenge__description' id="description-1" placeholder="Description"></textarea>
      <span class="challenge_hints">Description</span>
    </label>
    <label class='anxiety-rating' for="rating-1"> <p>Low</p><p>Anxiety rating</p> <p>High</p></label>
    <input class='anxiety-rating__input' id="rating-1" type="range" min="0" max="100" value="50"/>
    `
    let newStep = document.createElement('SECTION');
    newStep.className = 'challenge fold box';
    newStep.innerHTML = step;
    ladder.appendChild(newStep);
    setTimeout(() => {
      ladder.lastChild.classList.add('unfolded');
      addEventToSliders();
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
    cloudTitle.className += ' animated pulse move-up';
    showBorders();
    reOrder();
    changeButtons();
    setText('.challenge__description');
    setText('.anxiety-rating__input');
    removeElementsByClass('anxiety-rating');
  })

  //Remove elements by className
  const removeElementsByClass = (className) => {
  var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }

  //Swap button title on completion of ladder
  const changeButtons = () => {
    addStep.textContent = 'Edit ladder';
    completeLadder.textContent = 'Back to my Goals';
  }

  //Set text of input fields to ladder
  const setText = (select) => {
    const desc = document.querySelectorAll(select);
    desc.forEach( (d) => {
      var contents = document.createElement('P');
      contents.innerText = d.value;
      d.replaceWith(contents);
    })
  }

  //Slider
  const addEventToSliders = () => {
    const sliders = document.querySelectorAll(".anxiety-rating__input");
    sliders.forEach((slider) => {
      slider.addEventListener('input', function() {
        const v = this.value;
        slider.style.background = "linear-gradient(to right,  #3B3561 0%,#3B3561 "+ v +"%,white "+ v +"%,white 100%)";
      });
    })
  }

  //REORDER steps
  const reOrder = () => {
    var nodes = document.querySelectorAll(".box");
    var ease  = Power1.easeInOut;
    var boxes = [];

    nodes.forEach( (node,i) => {
      var node = nodes[i];
      TweenLite.set(node, { x: 0 });
      boxes[i] = {
        transform: node._gsTransform,
        x: node.offsetLeft,
        y: node.offsetTop,
        node
      };
    });

    ladder.classList.toggle("reorder");
    boxes.forEach( (box,i) => {
      var box = boxes[i];
      var lastX = box.x;
      var lastY = box.y;
      box.x = box.node.offsetLeft;
      box.y = box.node.offsetTop;
      if (lastX !== box.x && lastY !== box.y) return;
      var x = box.transform.x + lastX - box.x;
      var y = box.transform.y + lastY - box.y;
      TweenLite.fromTo(box.node, 2, { x, y }, { lastX, lastY, ease });
    });
  }
  showLadder();
})();
