(function () {
  var modal = document.querySelector("#modal");
  var modalOverlay = document.querySelector("#modal-overlay");
  var closeButton = document.querySelector("#close-button");
  var createCloud = document.querySelector("#create-goal");

  closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });

  createCloud.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
})();
