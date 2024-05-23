function showPopUp() {
  let popUpElement = document.querySelector("#pop-up");
  popUpElement.classList.remove("hidden");
  popUpElement.innerHTML = `<div><div>A magyar nyelvű információkért kattintson a Nori névre</div><div class="line"></div><div>Pro informace v češtině klikněte na jméno Tom</div><i class="fa-solid fa-square-xmark fa-2xl" id="cross"></i></div>`;

  let crossButton = document.querySelector("#cross");
  crossButton.addEventListener("click", function () {
    popUpElement.classList.add("hidden");
  });
}

setTimeout(showPopUp, 7000);
