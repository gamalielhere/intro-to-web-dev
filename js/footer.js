function formSubmit(e) {
  const form = document.getElementById("emailForm");
  e.preventDefault();
  e.stopPropagation();
  alert("Thank you for subscribing!");
  form.reset();
}
