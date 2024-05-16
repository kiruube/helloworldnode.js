// Form validation
const form = document.getElementById("adminRegistrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    // Form submission logic
    alert("Registered successfully!");
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  // Reset error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });

  // Admin's Information validation
  const fullName = form.elements["fullName"].value.trim();
  if (fullName === "") {
    document.getElementById("fullNameError").textContent =
      "Full name is required";
    isValid = false;
  }

  const gender = form.elements["gender"].value;
  if (gender === "") {
    document.getElementById("genderError").textContent = "Gender is required";
    isValid = false;
  }

  const dateOfBirth = form.elements["dateOfBirth"].value.trim();
  if (dateOfBirth === "") {
    document.getElementById("dateOfBirthError").textContent =
      "Date of birth is required";
    isValid = false;
  }

  const religion = form.elements["religion"].value.trim();
  if (religion === "") {
    document.getElementById("religionError").textContent =
      "Religion is required";
    isValid = false;
  }

  const phone = form.elements["phone"].value.trim();
  if (phone === "") {
    document.getElementById("phoneError").textContent =
      "Telephone Number is required";
    isValid = false;
  }

  const email = form.elements["email"].value.trim();
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  }

  const location = form.elements["location"].value.trim();
  if (location === "") {
    document.getElementById("locationError").textContent =
      "location is required";
    isValid = false;
  }

  const nationality = form.elements["nationality"].value.trim();
  if (nationality === "") {
    document.getElementById("nationalityError").textContent =
      "Nationality is required";
    isValid = false;
  }

  const nin = form.elements["nin"].value.trim();
  if (nin === "") {
    document.getElementById("ninError").textContent =
      "National ID Number is required";
    isValid = false;
  }

  const userName = form.elements["userName"].value.trim();
  if (userName === "") {
    document.getElementById("userNameError").textContent =
      "Username is required";
    isValid = false;
  }

  const password = form.elements["password"].value.trim();
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required";
    isValid = false;
  }

  return isValid;
}
