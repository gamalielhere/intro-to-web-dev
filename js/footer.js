function formSubmit(e) {
  const form = document.getElementById("emailForm");
  e.preventDefault();
  alert("Thank you for subscribing!");
  form.reset();
}
