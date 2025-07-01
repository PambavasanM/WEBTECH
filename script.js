document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission refresh

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const event = document.getElementById('event').value;

    if (name === "" || email === "" || event === "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById('message').innerText =
        `Thank you, ${name}! You have successfully registered for the "${event}" event.`;

    document.getElementById('eventForm').reset();
});
