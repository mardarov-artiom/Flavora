const headerHiddenContainer = document.querySelector('.header-hidden');
const body = document.querySelector('body');
const openTrigger = document.querySelector('.header-trigger.open');
const closeTrigger = document.querySelector('.header-trigger.close');
const navigation = document.querySelectorAll('.navigation li a');

openTrigger.addEventListener('click', () => {
  body.classList.add('navigation-open');
  headerHiddenContainer.classList.add('open');
});

closeTrigger.addEventListener('click', () => {
  headerHiddenContainer.classList.remove('open');
  headerHiddenContainer.classList.add('close');
  window.setTimeout(() => {
    headerHiddenContainer.classList.remove('close');
    body.classList.remove('navigation-open');
  }, 400)
});

window.addEventListener('load', (event) => {
  const page = window.location.pathname;
  navigation.forEach((item) => {
    if (item.pathname === page) {
      return item.classList.add('active');
    }
  })
});