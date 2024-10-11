//Navigation bar
const contentArea = document.getElementById("titlepage");
const aboutLink = document.getElementById("about-link");

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  // Use fetch to load the about.html file content
  fetch("about.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No Response");
      }
      return response.text(); // Get HTML content as text
    })
    .then((data) => {
      contentArea.innerHTML = data; // Inject the loaded HTML content into the content-area
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

// Signup
const opensignup = document.getElementById("opensignup");
const modalContainerSignup = document.getElementById("modal-container-signup");
const submitSignupBtn = document.getElementById("signup-btn");
const cancelSignup = document.getElementById("cancel-signup");
const loginForm = document.getElementById("loginform");

opensignup.addEventListener("click", () => {
  modalContainerSignup.classList.add("show");
});

submitSignupBtn.addEventListener("click", (event) => {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const signupEmail = document.getElementById("emailid").value.trim();
  const signupPassword = document.getElementById("signuppassword").value.trim();

  if (
    firstName.checkValidity() &&
    lastName.checkValidity() &&
    signupEmail.checkValidity() &&
    signupPassword.checkValidity()
  ) {
    return true;
  } else {
    event.preventDefault();
  }
});

cancelSignup.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainerSignup.classList.remove("show");
});

// Login
const openlogin = document.getElementById("openlogin");
const modalContainerLogin = document.getElementById("modal-container-login");
const submitLoginBtn = document.getElementById("login-btn");
const cancelLogin = document.getElementById("cancel-login");

openlogin.addEventListener("click", () => {
  modalContainerLogin.classList.add("show");
});

submitLoginBtn.addEventListener("click", (event) => {
  const loginEmail = document.getElementById("login-email").value.trim();
  const loginPassword = document.getElementById("login-password").value.trim();

  if (loginEmail.checkValidity() && loginPassword.checkValidity()) {
    return true;
  } else {
    event.preventDefault();
  }
});

cancelLogin.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainerLogin.classList.remove("show");
});
