let form = document.getElementsByClassName("postForm")[0];
let formSuccess = document.getElementById("formSuccessMsg");
let formFailure = document.getElementById("formFailureMsg");
let loader = document.getElementById("loading");

// Prepare UI Vars
form.addEventListener("submit", e => {
  formSuccess.style.display = "none";
  formFailure.style.display = "none";

  loader.style.display = "block";

  // Just to test the loader in action
  setTimeout(postForm, 500);
  e.preventDefault();
});

// Post Data + Update UI
function postForm() {
  let formData = new FormData(form);
  let url = "https://actum-form-ulcrunoxba.now.sh/api/submit";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(response => {
      loader.style.display = "none";
      console.log("Response", response);
      formSuccess.style.display = "block";
      formSuccess.innerHTML = response.message;
    })
    .catch(error => {
      console.error("Response", error);
      formFailure.style.display = "block";
      formFailure.innerHTML = `
      The was some problem with the data submition. The server says: 
      ${response.error}`;
    });
}
