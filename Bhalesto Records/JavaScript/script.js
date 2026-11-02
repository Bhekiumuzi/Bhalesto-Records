// ==================================
// BHAL3STO RECORDS - PART 3
// JavaScript Functionality
// ==================================

// 1. Display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 2. Display the current date and time
function updateDateTime() {
  const dateTimeElement = document.getElementById("date-time");

  if (dateTimeElement) {
    const now = new Date();

    dateTimeElement.textContent = "Date and time: " + now.toLocaleString();
  }
}

updateDateTime();

setInterval(updateDateTime, 1000);

// 3. Gallery lightbox functionality
const galleryImages = document.querySelectorAll("[data-lightbox]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("lightbox-close");

// Open image when clicked
galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    if (lightbox && lightboxImage) {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    }
  });
});

// Close lightbox using the close button
if (closeButton && lightbox) {
  closeButton.addEventListener("click", function () {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  });
}

// Close lightbox when clicking outside the image
if (lightbox) {
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}

// Close lightbox using the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && lightbox) {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
});

// 4. Basic form validation
const forms = document.querySelectorAll("form");

forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
    }
  });
});
