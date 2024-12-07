'use strict';

/**
 * Add event listener on multiple elements with support for multiple event types
 */
const addEventOnElements = function (elements, eventTypes, callback) {
  const types = eventTypes.split(' ');
  for (let i = 0, len = elements.length; i < len; i++) {
    types.forEach(type => {
      elements[i].addEventListener(type, callback);
    });
  }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click touchstart", toggleNavbar);

/**
 * HEADER
 * Active header when window scroll down to 100px
 */
const header = document.querySelector("[data-header]");

// Debounce function to improve scroll performance
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const handleScroll = debounce(function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}, 100);

window.addEventListener("scroll", handleScroll);

/**
 * SCROLL REVEAL
 */
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

// Adding resize event to reveal elements
const revealOnResize = () => {
  reveal(); // Check if elements need to be revealed on resize
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
window.addEventListener("resize", revealOnResize);

///Custom Buttons

function showProjects(category) {
  // Hide all project lists
  document.querySelectorAll('.grid-list li').forEach(project => {
      project.style.display = 'none'; // Hide all projects
  });

  // Reset the colors of both buttons to red
  document.getElementById('steelBtn').style.backgroundColor = 'hsla(344, 53%, 62%, 1)';
  document.getElementById('concreteBtn').style.backgroundColor = 'hsla(344, 53%, 62%, 1)';
  document.getElementById('revitBtn').style.backgroundColor = 'hsla(344, 53%, 62%, 1)';
  document.getElementById('IDEA-StaticaBtn').style.backgroundColor = 'hsla(344, 53%, 62%, 1)';

  // Show only the selected project type and toggle the button color
  if (category === 'steel') {
      document.querySelectorAll('.steel-projects').forEach(project => {
          project.style.display = 'block'; // Show steel projects
      });
      // Toggle the steel button color
      var steelBtn = document.getElementById('steelBtn');
      steelBtn.style.backgroundColor = '#f1d151'; // Make it yellow when steel is selected
  } 
  
  else if (category === 'concrete') {
      document.querySelectorAll('.RC-projects').forEach(project => {
          project.style.display = 'block'; // Show concrete projects
      });
      // Toggle the concrete button color
      var concreteBtn = document.getElementById('concreteBtn');
      concreteBtn.style.backgroundColor = '#f1d151'; // Make it yellow when concrete is selected
    } 
    
    else if (category === 'revit') {
      document.querySelectorAll('.revit-projects').forEach(project => {
          project.style.display = 'block'; // Show Revit projects
      });
      
      var revitBtn = document.getElementById('revitBtn');
      revitBtn.style.backgroundColor = '#f1d151'; // Make it yellow when Revit is selected
  }


  else if (category === 'IDEA-Statica') {
      document.querySelectorAll('.IDEA-Statica').forEach(project => {
          project.style.display = 'block'; // Show IDEA-Statica projects
      });
      
      var revitBtn = document.getElementById('IDEA-StaticaBtn');
      revitBtn.style.backgroundColor = '#f1d151'; // Make it yellow when IDEA-StaticaBtn is selected
  }
  
}


/////////////////// Message send  ////////////
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission (you can implement actual sending logic here)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Display success message
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.innerText = "Your message has been sent successfully!";
  responseMessage.style.display = 'block';

  // Clear form fields
  document.getElementById('messageForm').reset();
});


/////////////image slider 



