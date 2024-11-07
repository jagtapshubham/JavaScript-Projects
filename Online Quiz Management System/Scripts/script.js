//Navigation bar
const contentArea = document.getElementById("titlepage");
const aboutLink = document.getElementById("about-link");

if (aboutLink && contentArea) {
  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    // Use fetch to load the about.html file content
    fetch("Pages/about.html")
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
}

// Signup
const opensignup = document.getElementById("opensignup");
const modalContainerSignup = document.getElementById("modal-container-signup");
const submitSignupBtn = document.getElementById("signup-btn");
const cancelSignup = document.getElementById("cancel-signup");
const loginForm = document.getElementById("loginform");

if (opensignup) {
  opensignup.addEventListener("click", () => {
    modalContainerSignup.classList.add("show");
  });
}

if (submitSignupBtn) {
  submitSignupBtn.addEventListener("click", (event) => {
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const signupEmail = document.getElementById("emailid").value.trim();
    const signupPassword = document
      .getElementById("signuppassword")
      .value.trim();
    if (firstName && lastName && signupEmail && signupPassword) {
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      sessionStorage.setItem("email", signupEmail);
      sessionStorage.setItem("passkey", signupPassword);
      event.preventDefault();
      modalContainerLogin.classList.add("show");
    }
  });
}

if (cancelSignup) {
  cancelSignup.addEventListener("click", (event) => {
    event.preventDefault();
    modalContainerSignup.classList.remove("show");
  });
}

// Login
const openlogin = document.getElementById("openlogin");
const modalContainerLogin = document.getElementById("modal-container-login");
const submitLoginBtn = document.getElementById("login-btn");
const cancelLogin = document.getElementById("cancel-login");
const displayError = document.getElementById("display-error");

if (openlogin) {
  openlogin.addEventListener("click", () => {
    modalContainerLogin.classList.add("show");
  });
}

if (submitLoginBtn) {
  submitLoginBtn.addEventListener("click", (event) => {
    const loginEmail = document.getElementById("login-email").value.trim();
    const loginPassword = document
      .getElementById("login-password")
      .value.trim();
    const sessionEmail = sessionStorage.getItem("email");
    const sessionPass = sessionStorage.getItem("passkey");

    if (loginEmail && loginPassword) {
      event.preventDefault();
      if (loginEmail === sessionEmail && loginPassword === sessionPass) {
        window.location.href = "Pages/quizmenu.html";
      } else {
        if (!sessionEmail && !sessionPass) {
          displayError.textContent = "Signup first! No account found.";
        } else {
          displayError.textContent = "Invalid email or password";
        }
      }
    }
  });
}

if (cancelLogin) {
  cancelLogin.addEventListener("click", (event) => {
    event.preventDefault();
    displayError.textContent = "";
    modalContainerLogin.classList.remove("show");
  });
}

// Account icon info Modal
const accountIcon = document.getElementById("account-icon");
const accountModalContainer = document.getElementById(
  "modal-container-account"
);
const closeInfoModalBtn = document.getElementById("close-account-btn");

if (accountIcon) {
  accountIcon.addEventListener("click", () => {
    accountModalContainer.classList.add("show");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailId = document.getElementById("email-info");
    const password = document.getElementById("pass-info");

    firstName.textContent = sessionStorage.getItem("firstName");
    lastName.textContent = sessionStorage.getItem("lastName");
    emailId.textContent = sessionStorage.getItem("email");
    password.textContent = "********";
  });

  closeInfoModalBtn.addEventListener("click", () => {
    accountModalContainer.classList.remove("show");
  });
}
