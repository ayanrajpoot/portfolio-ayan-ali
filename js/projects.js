const projects = [
  {
    id: 1,
    title: "Dead Man's Voyage",
    subtitle: "Shopify App integration and design customization",
    description: `
Client wanted to integrate zip pay to allow customer to pay in installments but was having trouble integrating it so i did that for him.He also wanted to use a specific images for products in collections page instead of featured image so i implemented that.He also needed help with designs in certain areas, that needed CSS so I did that for him`,
    tools: ["Shopify", "Liquid", "HTML", "CSS"],
    image: "./assets/projects/project1.png"
  },
  {
    id: 2,
    title: "Eazcart ",
    subtitle: "WordPress|Woo-Commerece Based E-Commerce site",
    description: `As a freelance web developer, I recently had the opportunity to work with a client who wanted to launch an ecommerce clothing store using a WordPress website Here are the key points about the project:</br>
=>The client had a clear vision for their brand and products, but they needed a website that would help them showcase their offerings and reach their target audience.</br>
=>We spent time analyzing the client's competitors, target audience, and market trends to ensure that the website would stand out and appeal to potential customers.`,
    tools: ["Wordpress", "Seo", "Copywriting"],
    image: "./assets/projects/eaz-cart.png"
  },
  {
    id: 3,
    title: "Space Shooter",
    subtitle: "Space Game in pygame",
    description: "Space shooter game in pygame, with sound controls, ranknig system ,powerups </br> score history storing and meny",
    tools: ["python", "pygame"],
    image: "./assets/projects/space-game.png"
  }
];

const carousel = document.getElementById("projectCarousel");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card flex-shrink-0 me-3";
  card.style.width = "50%";
  card.setAttribute("data-id", project.id);

  card.innerHTML = `
    <div class="project-hover-card position-relative overflow-hidden rounded-3">
      <img src="${project.image}" alt="${project.title}" class="img-fluid w-100">
      <div class="overlay d-flex flex-column justify-content-center align-items-center text-center">
        <h3 class="text-white fw-bold">${project.title}</h3>
        <p class="text-white small">${project.subtitle}</p>
      </div>
    </div>
  `;

  carousel.appendChild(card);
});

// Project details logic
const detailSection = document.getElementById('project-details');

carousel.addEventListener('click', (e) => {
  const card = e.target.closest('.project-card');
  if (!card) return;

  const id = card.getAttribute('data-id');
  const project = projects.find(p => p.id == id);

  if (!project) return;



  detailSection.innerHTML = `
  <div class="project-details-card">
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tools Used:</strong> ${project.tools.join(', ')}</p>
  </div>
`;

  detailSection.classList.remove('hidden');
  detailSection.scrollIntoView({ behavior: 'smooth' });
});

// // Arrows
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: carousel.offsetWidth * 0.9, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -carousel.offsetWidth * 0.9, behavior: "smooth" });
});


