import breakpoints from './_breakpoints.js';

const backBtn = document.querySelector('.tasks__back-btn');
const projectsCol = document.querySelector('.projects-col');
const projectItems = document.querySelectorAll('.projects__list-item');
const tabletLandscapeUpMediaQuery = window.matchMedia(breakpoints.tabletLandscapeUp);

backBtn.addEventListener('click', (e) => {
  projectsCol.classList.add('projects-col--active');
});

projectItems.forEach(item => item.addEventListener('click', (e) => {
  if(!tabletLandscapeUpMediaQuery.matches){
    projectsCol.classList.remove('projects-col--active');
  }
}));