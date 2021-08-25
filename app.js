const navBarHtml = `
<nav>
  <div class="nav-center">

    <div class="nav-header">
      <iiiiiiimg src="./logo.svg" class="logo" alt="logo">
      <button class="nav-toggle">
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
    <img src="./logo.svg" class="sidebar-logo" alt="logo">
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

// secret code variabel
const pressed = [];
const secretCode = 'changenav';
const navWraper = document.querySelector('.nav-wraper');

window.addEventListener('DOMContentLoaded', function () {
  navWraper.innerHTML = navBarHtml;
  navWraper.classList.add('nav-bar-on');
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
    navWraper.innerHTML = navBarHtml;
    // navBar functionality load via function
  }
  else if (navWraper.classList.value.includes('side-bar-on')) {
    navWraper.innerHTML = sideBarHtml;
    // sidebar functionality load via function
  }
};

// nav bar elements
const navBar = document.querySelector('.nav-center');
// console.log(navBar);

// sidebar elements
const sidebar = document.querySelector('.sb-sidebar');
const toggleBtn = document.querySelector('.sb-sidebar-toggle');
const closeBtn = document.querySelector('.sb-close-btn');


function toggleMenu() {
  const links = document.querySelector('.links');
  links.classList.toggle('show-links');
};


// sidebar

function toggleFunc() {
  sidebar.classList.toggle('sd-show-sidebar');
}

function closeFunc() {
  sidebar.classList.remove('sd-show-sidebar');
}

toggleBtn.addEventListener('click', toggleFunc);
closeBtn.addEventListener('click', closeFunc);
