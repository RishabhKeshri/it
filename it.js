document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simple login validation logic (can be expanded with real back-end)
    if (username === "admin" && password === "admin123") {
        alert("Login successful");
        // Redirect to the dashboard (for example purposes)
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});
