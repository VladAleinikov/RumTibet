const modal = [...document.getElementsByClassName("modal")];
const modalBg = document.getElementById("modal-bg");
const body = document.body;

const closeModal = () => {
      modalBg.classList.remove("active");
      body.classList.remove("modal-active");
      modal.map(e => e.classList.remove("active"));
}
modalBg.addEventListener("click", closeModal)


//about modal
const opernAboutModal = document.getElementById("about__open-modal");
const aboutModal = document.getElementById("about-modal");
const video = document.querySelector("video");

opernAboutModal.addEventListener("click", e => {
      aboutModal.classList.add("active");
      modalBg.classList.add("active");
      body.classList.add("modal-active");
      video.play();
})


// photos modal
const photos = [...document.getElementsByClassName("photos__item")];
const photosUrl = [...document.querySelectorAll(".photos__item img")].map(photo => photo.getAttribute("src"));
const photosModal = document.getElementById("photos-modal");

photos.map((photo, id) => {
      photo.addEventListener("click", e => {
            const img = document.createElement("img");
            img.src = photosUrl[id];
            photosModal.innerHTML = "";
            photosModal.appendChild(img);
            photosModal.classList.add("active");
            modalBg.classList.add("active");
            body.classList.add("modal-active");
      })
})

// burger
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const closeBurger = document.getElementById("close-burger");

burger.addEventListener("click", e => {
      nav.classList.add("active");
})
closeBurger.addEventListener("click", e => {
      nav.classList.remove("active");
})