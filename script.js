let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", year: "1925", status: "Available" },
  { title: "1984", author: "George Orwell", isbn: "9780451524935", year: "1949", status: "Available" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084", year: "1960", status: "Borrowed" },
  { title: "Pride and Prejudice", author: "Jane Austen", isbn: "9781503290563", year: "1813", status: "Available" },
  { title: "Moby-Dick", author: "Herman Melville", isbn: "9781503280786", year: "1851", status: "Available" }
];

function updateSummary() {
  document.getElementById("total").textContent = `Total: ${books.length}`;
  document.getElementById("available").textContent = `Available: ${books.filter(b => b.status === "Available").length}`;
  document.getElementById("borrowed").textContent = `Borrowed: ${books.filter(b => b.status === "Borrowed").length}`;
}

function renderBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";
  const filter = document.getElementById("filter").value;
  const search = document.getElementById("searchInput").value.toLowerCase();

  books.forEach((book, index) => {
    if ((filter === "available" && book.status !== "Available") ||
        (filter === "borrowed" && book.status !== "Borrowed")) return;

    if (!book.title.toLowerCase().includes(search) &&
        !book.author.toLowerCase().includes(search) &&
        !book.isbn.toLowerCase().includes(search)) return;

    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <span><strong>Title:</strong> ${book.title}</span>
      <span><strong>Author:</strong> ${book.author}</span>
      <span><strong>ISBN:</strong> ${book.isbn}</span>
      <span><strong>Year:</strong> ${book.year}</span>
      <span><strong>Status:</strong> ${book.status}</span>
    `;

    const borrowBtn = document.createElement("button");
    borrowBtn.textContent = "Borrow";
    borrowBtn.className = "borrow";
    borrowBtn.onclick = () => {
      book.status = "Borrowed";
      renderBooks();
      updateSummary();
    };

    const returnBtn = document.createElement("button");
    returnBtn.textContent = "Return";
    returnBtn.className = "return";
    returnBtn.onclick = () => {
      book.status = "Available";
      renderBooks();
      updateSummary();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => {
      books.splice(index, 1);
      renderBooks();
      updateSummary();
    };

    card.appendChild(borrowBtn);
    card.appendChild(returnBtn);
    card.appendChild(deleteBtn);
    list.appendChild(card);
  });
}

// Modal handling
document.getElementById("addBookBtn").onclick = () => {
  document.getElementById("modal").style.display = "block";
};
document.get
