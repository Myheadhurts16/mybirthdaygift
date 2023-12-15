let balloonsReleased = false;

function openGift() {
  showGallery();
  showNewMessage();
  startFireworks();
  showLine();
}

function showLine() {
  const line = document.getElementById("line");
  line.style.display = "block";
}

function showGallery() {
  const buttonSection = document.getElementById("buttonSection");
  const gallery = document.querySelector(".gallery");
  const newMessage = document.getElementById("newMessage");

  buttonSection.style.display = "none";
  gallery.style.display = "flex";
  newMessage.style.display = "block";
}
function showNewMessage() {
  var messageContent = document.getElementById("messageContent");
  var balloonContainer = document.getElementById("balloonContainer");

  messageContent.textContent =
    "Dear Babe, On this special day, I want to let you know how much you mean to me... You are incredibly special, kind, and beautiful in every way. Here's to celebrating you today! Wishing you all the happiness in the world! Love, James";

  messageContent.style.display = "flex";
  messageContent.style.justifyContent = "center";
  messageContent.style.alignItems = "center";
  messageContent.style.padding = "30px";
  messageContent.style.font = "Georgia";
  messageContent.style.fontSize = "25px";
  messageContent.style.fontWeight = "bold";

  if (!balloonsReleased) {
    balloonsReleased = true;

    for (var i = 0; i < 5; i++) {
      var balloon = document.createElement("img");
      balloon.src = "balloon.png";
      balloon.classList.add("balloon");
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDelay = Math.random() * 5 + "s";
      balloonContainer.appendChild(balloon);
    }
  }
}

function startFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  function Particle() {}

  Particle.prototype.draw = function () {};

  Particle.prototype.update = function () {};

  function createParticles() {
    for (let i = 0; i < 50; i++) {
      const particle = new Particle();
      particles.push(particle);
    }
  }

  function animate() {
    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createParticles();

      particles.forEach((particle, index) => {
        if (!particle.update()) particles.splice(index, 1);
      });
    }, 100);
  }

  animate();
}
function openLightbox(imageSrc) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");

  lightboxImg.src = imageSrc;
  lightbox.style.display = "flex";
  lightbox.style.alignItems = "center";
  lightbox.style.justifyContent = "center";
  lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightboxImg.style.maxWidth = "90%";
  lightboxImg.style.maxHeight = "90%";
  lightboxImg.style.objectFit = "contain";
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
}
function showCaption(event, id) {
  const img = event.currentTarget.querySelector("img");
  const caption = document.getElementById(id);

  const imgRect = img.getBoundingClientRect();
  const xOffset = event.clientX - imgRect.left;
  const yOffset = event.clientY - imgRect.top;

  caption.style.top = yOffset + "px";
  caption.style.left = xOffset + "px";
  caption.style.display = "block";
}

function hideCaption(id) {
  const caption = document.getElementById(id);
  caption.style.display = "none";
}
