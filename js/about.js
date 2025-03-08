function contactUsSubmit(e) {
  const formValues = new FormData(e.target);
  const obj = Object.fromEntries(formValues);
  const form = document.getElementById("contactUsForm");
  e.preventDefault();
  e.stopPropagation();
  alert("Thank you for contacting us!");
  window.localStorage.setItem(`${obj.fname} ${obj.lname}`, JSON.stringify(obj));
  form.reset();
}
