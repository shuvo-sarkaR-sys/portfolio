 window.onload = () => {
      document.getElementById("fadeBtn").classList.add("show");
      document.querySelector(".profile").classList.add("show");
    };
 const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const img1 = document.getElementById("inner-box");
  const img2 = document.getElementById("inner-box-1");

  btn1.addEventListener("click", () => {
    img1.classList.remove("hidden");
    img2.classList.add("hidden");

    btn1.classList.add("bg-fuchsia-600", "text-white");
    btn2.classList.remove("bg-fuchsia-600", "text-white");
  });

  btn2.addEventListener("click", () => {
    img2.classList.remove("hidden");
    img2.classList.add("flex");
    img1.classList.add("hidden");

    btn2.classList.add("bg-fuchsia-600", "text-white");
    btn1.classList.remove("bg-fuchsia-600", "text-white");
  });
   const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".custom-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          const labels = ["Restaurant Website", "Ecommerce Website", "Dashboard"];
          return `<button class="${className}">${labels[index]}</button>`;
        },
      },
    });