(function () {
  var modal = document.querySelector("#modal");
  var modalOverlay = document.querySelector("#modal-overlay");
  var closeButton = document.querySelector("#close-button");
  var createGoal = document.getElementById("create-goal");

  createGoal.addEventListener('mouseover', function() {
    createGoal.classList += ' show';
  })

  closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });

  createGoal.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
})();
