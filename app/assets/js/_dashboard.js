import breakpoints from './_breakpoints.js';

const backBtn = document.querySelector('.view-projects-btn');
const projectsCol = document.querySelector('.projects-col');
const projectItems = document.querySelectorAll('.projects-col .list-item__label');
const tabletLandscapeUpMediaQuery = window.matchMedia(breakpoints.tabletLandscapeUp);

if(backBtn) {
  backBtn.addEventListener('click', (e) => {
    projectsCol.classList.add('projects-col--active');
  });
}

if(projectItems !== undefined && projectItems.length > 0) {
  projectItems.forEach(item => item.addEventListener('click', (e) => {
    if(!tabletLandscapeUpMediaQuery.matches){
      projectsCol.classList.remove('projects-col--active');
    }
  }));
}