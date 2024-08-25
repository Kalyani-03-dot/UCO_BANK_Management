document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    alert(`Logged in as ${username}`);
});

document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const searchTerm = document.getElementById("searchInput").value;
        performSearch(searchTerm);
    });

    function performSearch(term) {

        alert("You searched for: " + term);
    }
});
