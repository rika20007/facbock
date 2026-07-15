emailjs.init({
    publicKey: "jzLFk-5zLU3DAHhj3"
});

const form = document.getElementById("feelingForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        user_email: document.getElementById("email").value,
        truth: document.getElementById("truth").value
    };

    emailjs.send(
        "service_v67j4dg",
        "template_fzn126i",
        data
    )
    .then(function() {
        msg.style.color = "green";
        msg.innerHTML = "تم تسجيل الدخول بنجاح✔";
        form.reset();
    })
    .catch(function(error) {
        msg.style.color = "red";
        msg.innerHTML = "حدث خطأ أثناء التسجيل";
        console.log(error);
    });
});