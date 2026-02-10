const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const errorMsg = document.getElementById("errorMsg");

// Restrict past dates
const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkout.min = today;

checkin.addEventListener("change", () => {
    checkout.min = checkin.value;
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkout.value <= checkin.value) {
        errorMsg.textContent = "Check-out date must be after Check-in date.";
        return;
    }

    errorMsg.textContent = "";
    alert("Booking Successful!");
    form.reset();
});
