const tabsNavigation = document.querySelector('.tabs__navigation');
const tabsItems = tabsNavigation.querySelectorAll('.tabs__item');
const tabsContent = document.querySelector('.tabs__content');
const tabsPanes = tabsContent.querySelectorAll('.tabs__pane');

tabsItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabsItems.forEach((item) => item.classList.remove('active'));
    tabsPanes.forEach((pane) => pane.classList.remove('active'));
    
    item.classList.add('active');
    tabsPanes[index].classList.add('active');
  });
});
