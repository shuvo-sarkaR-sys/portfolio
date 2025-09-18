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
    delay: 4000,
  },
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const labels = ["Calcutta Restaurant", "Rajah Restaurant", "Castle Restaurant", "Poco de Gallo  "];
      return `<button class="${className} ">${labels[index]}</button>`;
    },
  },
});
 // Counter Animation
  document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = 150;
    const increment = target / speed;

    const animate = () => {
      count += increment;
      if (count < target) {
        counter.textContent =   Math.floor(count);
        requestAnimationFrame(animate);
      } else {
        counter.textContent =   target;
      }
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    observer.observe(counter);
  });
const swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    
    pagination: {
      el: ".custom-pagination-3",
      clickable: true,
      renderBullet: function (index, className) {
        const thumbs = [
          "assets/303.jpg", // thumb 1
          "assets/1149.jpg", // thumb 2
          "assets/2148176206.jpg", // thumb 3
        ];
        return `
          <button class="${className} overflow-hidden rounded-lg border-2 border-transparent hover:border-fuchsia-500 transition">
            <img src="${thumbs[index]}" class="w-20 h-20 object-cover " />
          </button>`;
      },
    },
  });
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
 const links = document.querySelectorAll('.nav-link');
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });
    // Grab all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Smooth scroll with offset (if you have a fixed header, adjust offset)
  function scrollToSection(target) {
    const headerOffset = 20; // adjust if needed
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // On click: smooth scroll + active link
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        scrollToSection(target);
      }
      // Active immediately
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

const navLinks2 = document.querySelectorAll(".nav-link");
 // Smooth scroll on click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // offset for navbar
        behavior: "smooth"
      });
    }
  });
});
const hovers = document.querySelectorAll(".hover-text");

// Highlight active section on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
 
  navLinks.forEach((link, i) => {
    link.classList.remove("active");
    hovers[i].classList.remove("text-show");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
      hovers[i].classList.add("text-show");
    }
  });
});
// skill animation start from here
 const skillsSection = document.getElementById('skills-section');
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(skillsSection);