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

const priceList = document.querySelector(".price-list");

function priceListAccordion(currentAccordionHeader) {

  /* if (!event.target.className.includes('accordion-header') && event.target.tagName !== 'SPAN') {
    return false;
  } */

  document.querySelectorAll(".accordion-header").forEach((header) => {
    if (header !== currentAccordionHeader) {
      header.classList.remove("open");
      header.nextElementSibling.classList.remove("visible");
    }
  });

  currentAccordionHeader.classList.toggle("open");
  currentAccordionHeader.nextElementSibling.classList.toggle("visible");
}

document.querySelectorAll(".accordion-header").forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (e) => {
    /* e.stopPropagation(); */
    priceListAccordion(accordionHeader);
  });
});

/* document.querySelector("body").addEventListener("click", () => {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.classList.remove("open");
    header.nextElementSibling.classList.remove("visible");
  });
}); */

// document.querySelector(".contact-dropdown").addEventListener("click", (e) => {
//   /* e.stopPropagation(); */
//   e.target.nextElementSibling.classList.toggle('visible')
// });

document.querySelector(".select-list").addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") {
    return;
  }

  document.querySelector(".contact-dropdown .placeholder").textContent = e.target.textContent;

  document.querySelectorAll(".address").forEach((address) => {
    address.classList.remove("visible");
  });

  document.querySelector(".city-address-" + e.target.dataset.address).classList.add("visible");
});

console.log(`My mark: \n

  При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service 50
  При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
  Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20
  Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
  Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50

  При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
  Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25

  В разделе contacts реализован select с выбором городов 15
  В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
  При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу 0

  115 points
`);
