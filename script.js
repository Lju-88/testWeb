const year = new Date().getFullYear();
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = year;
});

const glicoDialog = document.querySelector("#glico-dialog");
const openGlicoDialog = document.querySelector("[data-open-glico-dialog]");
const closeGlicoDialog = document.querySelector("[data-close-glico-dialog]");

openGlicoDialog?.addEventListener("click", (event) => {
  event.preventDefault();
  glicoDialog?.showModal();
});
closeGlicoDialog?.addEventListener("click", () => glicoDialog?.close());
glicoDialog?.addEventListener("click", (event) => {
  if (event.target === glicoDialog) glicoDialog.close();
});
