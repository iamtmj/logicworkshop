function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Create a FormData object with the user's data
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    // Send the data to Formspree
    fetch("https://formspree.io/f/xwkdnegl", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Email sending failed. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}