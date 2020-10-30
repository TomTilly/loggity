const backBtn = document.querySelector('.tasks__back-btn');
const projectsCol = document.querySelector('.projects-col');

const projectItem = document.querySelector('.projects__list-item');

backBtn.addEventListener('click', (e) => {
  projectsCol.classList.add('projects-col--active');
});

projectItem.addEventListener('click', (e) =>{
  projectItem.classList.remove('projects-col--active');
});