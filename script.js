document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials! Try admin / 1234");
      }
    });
  }

  const bookForm = document.getElementById("bookForm");
  const bookList = document.getElementById("bookList");

  if (bookForm) {
    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("bookTitle").value;
      const author = document.getElementById("bookAuthor").value;

      const li = document.createElement("li");
      li.textContent = `${title} by ${author}`;
      bookList.appendChild(li);

      bookForm.reset();
    });
  }
});
