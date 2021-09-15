const pdfButton = document.querySelector("#pdf-button");

pdfButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.print();
});
