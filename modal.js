"use strict";

import images from "./gallery-items.js";

const lightBoxImage = document.querySelector(".lightbox__image");
const gallery = document.querySelector(".gallery");
const modalWindow = document.querySelector(".js-lightbox");
const buttonEsc = document.querySelector(".lightbox__button");

const createGallery = function createElements() {
  images.map((image) => {
    let galleryItem = document.createElement("li");
    galleryItem.classList.add("gallary__item");
    let galleryLink = document.createElement("a");
    galleryLink.classList.add("gallary__link");
    galleryLink.setAttribute("href", image.original);
    let galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.setAttribute("src", image.preview);
    galleryImage.setAttribute("data-source", image.original);
    galleryImage.setAttribute("alt", image.description);

    gallery.appendChild(galleryItem);
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
  });
};
createGallery();

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;

  lightBoxImage.src = largeImageURL;
  modalWindow.classList.add("is-open");
}

modalWindow.addEventListener("click", modalClose);

function modalClose(event) {
  if (event.target.nodeName !== "IMG") {
    modalWindow.classList.remove("is-open");
    lightBoxImage.src = "#";
  }
}

modal;
