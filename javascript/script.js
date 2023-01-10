function emailValid() {
  let emailElem = document.getElementById("email");
  let emailError = document.getElementById("emailError");

  if (!emailElem.checkValidity() && emailElem.value.length >= 1) {
    emailError.innerText = "Please provide e valid email ";
    emailError.style.display = "flex";
    emailElem.style.border = "1px solid var(--ColorLightRed)";
  } else if (!emailElem.checkValidity() && emailElem.value.length == 0) {
    emailError.innerText =
      "Whoops! It looks like you forgot to add your email ";
    emailError.style.display = "flex";
    emailElem.style.border = "1px solid var(--ColorLightRed)";
  } else {
    emailError.value = "";
    emailError.style.display = "none";
    emailElem.style.border = "1px solid var(--ColorPaleBlue)";
  }
}
