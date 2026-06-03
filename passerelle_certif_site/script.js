function filterCertifications() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".certification-card");

  cards.forEach((card) => {
    const text = (card.innerText + " " + card.dataset.keywords).toLowerCase();

    if (!input || text.includes(input)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    filterCertifications();
  }
});
