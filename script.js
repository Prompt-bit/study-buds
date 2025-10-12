  function registerUser() {
    const input = document.querySelector(".username").value.trim();
    const status = document.getElementById("status");

    if (!input) {
      status.textContent = "❌ Please enter a username.";
      return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.includes(input)) {
      status.textContent = "⚠️ Username already taken!";
    } else {
      users.push(input); // add new user
      localStorage.setItem("users", JSON.stringify(users));
      status.textContent = "✅ Username registered!";
    }
  }
