// Nav HTMLs
const navBarHtml = `
<nav>
  <div class="nav-center">

    <div class="nav-header">
      <img src="./images/avatar.jpg" class="avatar" alt="avatar">
      <button class="navbar-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <ul class="links">
      <li>
        <a href="index.html">home</a>
      </li>
      <li>
        <a href="about.html">about</a>
      </li>
      <li>
        <a href="projects.html">projects</a>
      </li>
      <li>
        <a href="contact.html">contact</a>
      </li>
    </ul>

    <ul class="social-icons">
      <li>
        <a href="https://www.twitter.com/martinvisca" target="blank">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/visca" target="blank">
          <i class="fab fa-behance"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/martinvisca" target="blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.github.com/mvisca" target="blank">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>

  </div>
</nav>`

const sideBarHtml = `
<button class="sidebar-toggle">
  <i class="fas fa-bars"></i>
</button>

<aside class="sidebar">

  <div class="sidebar-header">
      <img src="./images/avatar.jpg" class="avatar" alt="avatar">
    <button class="sidebar-close-btn">
      <i class="fas fa-times"></i>
    </button>
  </div>

  <ul class="sidebar-links">
    <li>
      <a href="index.html">home</a>
    </li>
    <li>
      <a href="about.html">about</a>
    </li>
    <li>
      <a href="projects.html">projects</a>
    </li>
    <li>
      <a href="contact.html">contact</a>
    </li>
  </ul>

  <ul class="sidebar-social-icons">
    <li>
      <a href="https://www.twitter.com/martinvisca" target="blank">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://www.behance.net/visca" target="blank">
        <i class="fab fa-behance"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/martinvisca" target="blank">
        <i class="fab fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://www.github.com/mvisca" target="blank">
        <i class="fab fa-github"></i>
      </a>
    </li>
  </ul>

</aside>`

// Switch nav
const pressed = [];
const secretCode = 'nav';
const navWraper = document.querySelector('.nav-wraper');
let links = document.querySelector('body');

window.addEventListener('DOMContentLoaded', function () {
  navWraper.innerHTML = navBarHtml;
  navWraper.classList.add('nav-bar-on');
  links = document.querySelector('.links');
  const navbarToggle = document.querySelector('.navbar-toggle');
  navbarToggle.addEventListener('click', toggleNavbar);
});

window.addEventListener('keyup', activateSecret);

function activateSecret(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    switchBar();
  }
};

function switchBar() {
  console.log("in the switchBar");
  navWraper.classList.toggle('nav-bar-on');
  navWraper.classList.toggle('side-bar-on');

  if (navWraper.classList.value.includes('nav-bar-on')) {
    // Switch html NAVBAR
    navWraper.innerHTML = navBarHtml;
    links = document.querySelector('.links');
    navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.addEventListener('click', toggleNavbar);
  }
  else if (navWraper.classList.value.includes('side-bar-on')) {
    // Switch html SIDEBAR
    navWraper.innerHTML = sideBarHtml;
    //
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const closeBtn = document.querySelector('.sidebar-close-btn');
    toggleBtn.addEventListener('click', toggleFunc);
    closeBtn.addEventListener('click', closeSidebar);
  }
};

// Sidebar
function toggleFunc() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show-sidebar');
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show-sidebar');
}

// Navbar
function toggleNavbar() {
  links.classList.toggle('show-links');
};

