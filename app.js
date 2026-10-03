const modal = document.getElementById("walletModal");
const open = () => { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); };
const close = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };

document.getElementById("mintBtn")?.addEventListener("click", open);
document.getElementById("closeModal")?.addEventListener("click", close);
document.getElementById("closeModalBtn")?.addEventListener("click", close);
document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

document.querySelectorAll(".wallet-option").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("walletStatus").textContent = `${button.dataset.wallet} selected — connect your NEAR integration here.`;
  });
});
