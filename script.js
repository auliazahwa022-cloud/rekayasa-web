const searchInput = document.getElementById("searchBook");
const bookGrid = document.getElementById("bookGrid");
const emptyMessage = document.getElementById("emptyMessage");

if (searchInput && bookGrid) {
  const books = [...bookGrid.querySelectorAll(".book-card")];

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    let visibleCount = 0;

    books.forEach(function (book) {
      const matches = book.textContent
        .toLowerCase()
        .includes(keyword);

      book.hidden = !matches;

      if (matches) visibleCount++;
    });

    emptyMessage.hidden = visibleCount !== 0;
  });
}