/* anulowanie domyslnego wybierania tekstu i infografik przy kliknieciu */
document.addEventListener("mousedown", (e) => {
  e.preventDefault();
})

/* ----------------------- || Services Cards Filter || ----------------------- */

const buttonsPanel = document.querySelector(".buttons-panel");

const manageOverlays = (event) => {

  if (event.target.tagName != "BUTTON") {
    return false;
  }
  let button = event.target;
  button.classList.toggle("active");

  const notActiveButtons = buttonsPanel.querySelectorAll(":not(.active)");
  const activeButtons = buttonsPanel.querySelectorAll(".active");

  document.querySelectorAll(".service-filter-button").forEach((button) => {
    if (!button.className.includes("active")) {
      document
        .querySelectorAll("." + button.dataset.toggleClass)
        .forEach((overlay) => {
          overlay.classList.add("blurred");
        });
    } else {
      document
        .querySelectorAll("." + button.dataset.toggleClass)
        .forEach((overlay) => {
          overlay.classList.remove("blurred");
        });
    }

    if (activeButtons.length === 0) {
      document
        .querySelectorAll("." + button.dataset.toggleClass)
        .forEach((overlay) => {
          overlay.classList.remove("blurred");
        });
    }
  });

  if (notActiveButtons.length === 1) {
    notActiveButtons[0].setAttribute("disabled", true);
  } else {
    notActiveButtons.forEach((button) => {
      button.removeAttribute("disabled");
    });
  }
  /*   if (buttonsPanel.childElementCount === activeButtons.length) {
    activeButtons.forEach(button => button.classList.remove('active'));
  } */
};

buttonsPanel.addEventListener("click", manageOverlays);


/* ------------------------- || Price List Accordion || ------------------------- */

const priceList = document.querySelector(".price-list");

function priceListAccordion(currentAccordionHeader) {
  /* if (!event.target.className.includes('accordion-header') && event.target.tagName !== 'SPAN') {
    return false;
  } */
  document.querySelectorAll(".accordion-header").forEach((header) => {
    if (header !== currentAccordionHeader) {
      header.classList.remove("open");
      header.parentElement.classList.remove("open");
      header.nextElementSibling.classList.remove("visible");
    }
  });

  currentAccordionHeader.classList.toggle("open");
  currentAccordionHeader.parentElement.classList.toggle("open");
  currentAccordionHeader.nextElementSibling.classList.toggle("visible");

}

document.querySelectorAll(".accordion-header").forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (e) => {
    e.stopPropagation();
    priceListAccordion(accordionHeader);
  });
});


document.querySelector("body").addEventListener("click", () => {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.classList.remove("open");
    header.parentElement.classList.remove("open");
    header.nextElementSibling.classList.remove("visible");
  });
});

/* --------------------------- || Contact Dropdown || --------------------------- */

// document.querySelector(".contact-dropdown").addEventListener("click", (e) => {
//   /* e.stopPropagation(); */
//   e.target.nextElementSibling.classList.toggle('visible')
// });
const contactDropdown = document.querySelector('.contact-dropdown');
const selectList = document.querySelector('.select-list');
const dropdownPlaceholder = document.querySelector(".contact-dropdown .placeholder");

const handleDropdown = (e) => {
  if (!e.target.closest('.contact-dropdown')) {
    return;
  }
  contactDropdown.classList.toggle('open');
  contactDropdown.querySelector('.select-list').classList.toggle('open');
}

const handleItemSelect = (e) => {
  if (!e.target.closest('.select-list')) {
    return;
  }
  dropdownPlaceholder.textContent = e.target.textContent;

  document.querySelectorAll(".address").forEach((address) => {
    address.classList.remove("visible");
  });

  document.querySelector(".city-address-" + e.target.dataset.address).classList.add("visible");
}

contactDropdown.addEventListener('click', handleDropdown);
selectList.addEventListener('click', handleItemSelect);


/* -------------------------- || Burger Menu || -------------------------- */

const mobileHamburger = document.querySelector('.mobile-hamburger');
const responsiveMenu = document.querySelector('.hamburger-menu');

const handleResponsveMenu = (e) => {
  const target = e.target

  if (target.closest('.mobile-hamburger') || target.closest('.hamburger-menu')) {
    mobileHamburger.classList.toggle('active');
    responsiveMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('scroll-lock');
  }

}

mobileHamburger.addEventListener('click', handleResponsveMenu);
responsiveMenu.addEventListener('click', handleResponsveMenu);
