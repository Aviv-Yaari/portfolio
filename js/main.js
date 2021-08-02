let gProjs = [
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'Minesweeper',
    desc: 'Coding Academy first sprint',
    url: 'https://aviv-yaari.github.io/minesweeper/',
    publishedAt: 1626901200000,
    labels: ['Matrixes', 'Keyboard Events', 'Games'],
  },
  {
    id: 'todos',
    name: 'Todos',
    title: 'Todos',
    desc: 'MVC CRUD Exercise',
    url: 'https://aviv-yaari.github.io/Vanilla-Todos/',
    publishedAt: 1627419600000,
    labels: ['CRUD', 'Filter', 'Sort', 'Todos'],
  },
  {
    id: 'bookshop',
    name: 'Bookshop',
    title: 'Bookshop',
    desc: 'MVC Full CRUD Exercise #2',
    url: 'https://aviv-yaari.github.io/bookshop/',
    publishedAt: 1627419600000,
    labels: ['Full CRUD', 'Modals', 'SPA'],
  },
];
$(initPage);
$('.contact-form').submit(onFormSubmit);

function initPage() {
  renderPortfolio();
  renderModals();
}

function renderPortfolio() {
  const projectsHTML = gProjs.map(
    (proj, index) =>
      `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${index + 1}">
      <div class="portfolio-hover">
      <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
      </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
      </a>
      <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.desc}</p>
      </div>
      </div>`
  );
  let strHTML = projectsHTML.join('');
  $('.projects-container').html(strHTML);
}

function renderModals() {
  const modalsHTML = gProjs.map((proj, index) => {
    const date = new Date(proj.publishedAt);
    // prettier-ignore
    return `<div class="portfolio-modal modal fade" id="portfolioModal${index + 1}"
     tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
        <div class="lr">
        <div class="rl"></div>
        </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.labels.join(', ')}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <a href="${proj.url}" target="blank">Demo</a>
                  <li>Published At: ${date.toLocaleString('en-us', {month: 'long',})} ${date.getFullYear()}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  let strHTML = modalsHTML.join('');
  $('.modals-container').html(strHTML);
}

function onFormSubmit(ev) {
  ev.preventDefault();
  const formEmail = ev.target.formEmail.value;
  const formSubject = ev.target.formSubject.value;
  const formMessage = ev.target.formMessage.value;
  ev.target.reset();
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=avivyar@gmail.com&su=${formSubject}&body=${formMessage}`;
  window.open(url, '_blank');
}
