document.addEventListener("DOMContentLoaded", () => {
  // Field Vars
  document.getElementById("fNameInput").addEventListener("blur", validateNames);
  document.getElementById("lNameInput").addEventListener("blur", validateNames);
  document.getElementById("emailInput").addEventListener("blur", validateEmail);

  function validateNames(e) {
    let currEl = e.target;
    let nextChild = currEl.parentNode.children[2];

    if (!e.target.value) {
      currEl.classList.add("alertedField");
      nextChild.style.display = "block";
      return false;
    } else {
      currEl.classList.remove("alertField");
      nextChild.style.display = "none";
      return false;
    }
  }

  function validateEmail(e) {
    // console.log(e.target.classList);

    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let currEl = e.target;
    let nextChild = currEl.parentNode.children[2];

    if (!re.test(e.target.value)) {
      currEl.classList.add("alertedField");
      nextChild.style.display = "block";
      return false;
    } else {
      currEl.classList.remove("alert");
      nextChild.style.display = "none";
      return false;
    }
  }
});
