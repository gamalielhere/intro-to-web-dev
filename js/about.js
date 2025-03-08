function contactUsSubmit(e) {
  const form = document.getElementById("contactUsForm");
  e.preventDefault();
  e.stopPropagation();
  alert("Thank you for contacting us!");
  form.reset();
}
