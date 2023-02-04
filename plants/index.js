const buttonsPanel = document.querySelector('.buttons-panel');

const manageOverlays = (event) => {
  
  /* jezeli klikamy poza przycisk */
  if (event.target.tagName != 'BUTTON') {
    return false;
  }
  let button = event.target;
  button.classList.toggle('active');

  const notActiveButtons = buttonsPanel.querySelectorAll(':not(.active)');
  const activeButtons = buttonsPanel.querySelectorAll('.active');

  for( const button of notActiveButtons) {
    document.querySelectorAll('.' + button.dataset.toggleClass).forEach(overlay => {
      overlay.classList.add('blurred');
    })
  }
  for( const button of activeButtons) {
    document.querySelectorAll('.' + button.dataset.toggleClass).forEach(overlay => {
      overlay.classList.remove('blurred');
    })
  }
  
  if (notActiveButtons.length === 1) {
    notActiveButtons[0].setAttribute('disabled', true);
  } else {
    notActiveButtons[0].setAttribute('disabled', false);
  }
/*   if (buttonsPanel.childElementCount === activeButtons.length) {
    activeButtons.forEach(button => button.classList.remove('active'));
  } */


}

buttonsPanel.addEventListener('click', manageOverlays);

console.log(`Моя оценка: \n

`);