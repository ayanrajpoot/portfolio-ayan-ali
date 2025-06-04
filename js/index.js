
// projects section 

  const carousel = document.getElementById("projectCarousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: carousel.offsetWidth * 0.9, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -carousel.offsetWidth * 0.9, behavior: "smooth" });
  });



