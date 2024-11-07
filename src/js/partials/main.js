const headerHiddenContainer = document.querySelector('.header-hidden');
const body = document.querySelector('body');
const backdrop = document.querySelector('.header-backdrop');
const openTrigger = document.querySelector('.header-trigger.open');
const closeTrigger = document.querySelector('.header-trigger.close');
const navigation = document.querySelectorAll('.navigation li a');

function closeNavigation() {
  headerHiddenContainer.classList.remove('open');
  headerHiddenContainer.classList.add('close');
  window.setTimeout(() => {
    headerHiddenContainer.classList.remove('close');
    body.classList.remove('navigation-open');
  }, 400)
}

openTrigger.addEventListener('click', () => {
  body.classList.add('navigation-open');
  headerHiddenContainer.classList.add('open');
});

backdrop.addEventListener('click', closeNavigation);
closeTrigger.addEventListener('click', closeNavigation);

window.addEventListener('load', (event) => {
  const page = window.location.pathname;
  navigation.forEach((item) => {
    if (item.pathname === page) {
      return item.classList.add('active');
    }
  })
});