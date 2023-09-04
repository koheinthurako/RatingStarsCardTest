const ratingBox = document.querySelector(".rating-box");
const stars = document.querySelectorAll(".stars i");

window.addEventListener('DOMContentLoaded', () => {
    ratingBox.classList.add("introAnimate");
});

stars.forEach((star, index1) => {
    star.addEventListener('click', _ => {
        // star ကို click တစ်ချက်နှိပ်လိုက်တာနဲ့ stars အကုန် loop ပြန်ပတ် condition စစ်ပြီး active class များထည့်သွားခြင်း
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            if(star.classList.contains("active")) {
                star.addEventListener('click', () => {
                    star.classList.remove("active");
                });
            } else if(!star.classList.contains("active")) {
                star.addEventListener('click', () => {
                    star.classList.add("active");
                })
            }
        });
    })
});