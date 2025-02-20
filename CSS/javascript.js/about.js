//the loader for DOMs
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".expand_me").addEventListener("click", () => {
        const more_details = document.querySelector(".extended_other");
        const expand =  document.querySelector(".expand_me");
        if (more_details.classList.contains("hidden")) {
            more_details.classList.remove("hidden");
            more_details.classList.add("show");
            expand.textContent = "show less";
        } else {
            more_details.classList.remove("show");
            more_details.classList.add("hidden");
            expand.textContent = "More About Me";
        }
    });
    //the function for showing for more details
    document.querySelector(".more_details").addEventListener("click", () => {
        const more_details2 = document.querySelector(".more_project1");
        const expand2 =  document.querySelector(".more_details");
        if (more_details2.classList.contains("hidden")) {
            more_details2.classList.remove("hidden");
            more_details2.classList.add("show");
            expand2.textContent = "Less Details";
        } else {
            more_details2.classList.remove("show");
            more_details2.classList.add("hidden");
            expand2.textContent = "More Details";
        }
});
    //validator for forms
   
    document.querySelector(".form2").addEventListener("submit", (e) => {
        console.log("Form submitted, but preventDefault should stop it.");
        e.preventDefault();
        const first_name = document.getElementById("first_name").value;
        const second_name = document.getElementById("second_name").value;
        const email = document.getElementById("email").value;
        const text_area = document.getElementById("textarea").value;
        alert(`The Message is Sent By ${second_name} ${first_name}`);
    });
});