document.getElementById('menuButton').addEventListener('click', function() {
  const menuContainer = document.getElementById('menuContainer');
  const closeContainer = document.getElementById('closeContainer');
  const closeText = document.getElementById('closeText');
  const closeIcon = document.querySelector('.close-icon');

  // Toggle classes to trigger animations
  menuContainer.classList.toggle('animate-upward');

  // Wait for the menu-container animation to finish (assuming 500ms duration)
  setTimeout(() => {
    if (menuContainer.classList.contains('animate-upward')) {
      // Hide menu text and icon with opacity transition
      document.getElementById('menuText').style.opacity = '0';
      document.querySelector('.menu-icon').style.opacity = '0';

      // Show close text and icon with opacity transition
      closeText.style.display = 'block';
      closeIcon.style.display = 'block';
      setTimeout(() => {
        closeText.style.opacity = '1';
        closeIcon.style.opacity = '1';
      }, 50); // Delay the appearance for smoother transition

      closeContainer.style.display = 'grid';
      closeContainer.classList.toggle('animate-downward');
    } else {
      // Hide close text and icon with opacity transition
      closeText.style.opacity = '0';
      closeIcon.style.opacity = '0';
      setTimeout(() => {
        closeText.style.display = 'none';
        closeIcon.style.display = 'none';
      }, 500); // Wait for the transition to complete before hiding

      // Show menu text and icon with opacity transition
      document.getElementById('menuText').style.opacity = '1';
      document.querySelector('.menu-icon').style.opacity = '1';

      closeContainer.classList.toggle('animate-downward');
      closeContainer.style.display = 'none';
    }
  }, 500);
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const bioContainer = document.querySelector('.bio-container');
  const dp = document.querySelector('.dp');

  if (isInViewport(bioContainer)) {
    dp.style.opacity = '0';
  } else {
    dp.style.opacity = '1';
  }
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);
//
var modal = document.getElementById("menu-modal");
var bio = document.getElementById("bioContainer");
var dp = document.getElementById("dp");
var know = document.getElementById("know");
// var know_but = document.getElementById("know-but");



function menu_mod(){

    modal.style.display = "block";
    bio.style.display = "none";
    dp.style.display = "none";
    know.style.display = "none";
    // know_but.style.display = "none";
}

function m_close() {
    // modal.classList.add('hide'); // Apply the 'hide' class to trigger the fade-out animation

    // Revert the other elements' display properties after a short delay
    setTimeout(function() {
        modal.style.display = "none";
        bio.style.display = "block";
        dp.style.display = "block";
        know.style.display = "block";
        // know-but.style.display = "block";

    }, 500); // Adjust the delay to match the duration of the fade-out animation
}

function menu_amod(){
    var modal = document.getElementById("menu-modal");
    var abt = document.getElementById("abt-cont");
    var think = document.getElementById("think-cont");
    var sketch = document.getElementById("sketch-cont");
    var skill = document.getElementById("skill-set");
    var project = document.getElementById("project-cont");
    var gallary = document.getElementById("gallary");

    modal.style.display = "block";
    abt.style.display = "none";
    think.style.display = "none";
    sketch.style.display = "none";
    skill.style.display = "none";
    project.style.display = "none";
    gallary.style.display = "none";
}

function m_aclose() {
    var modal = document.getElementById("menu-modal");
    var abt = document.getElementById("abt-cont");
    var think = document.getElementById("think-cont");
    var sketch = document.getElementById("sketch-cont");
    var skill = document.getElementById("skill-set");
    var project = document.getElementById("project-cont");
    var gallary = document.getElementById("gallary");

    setTimeout(function() {
      modal.style.display = "none";
      abt.style.display = "block";
      think.style.display = "block";
      sketch.style.display = "block";
      skill.style.display = "block";
      project.style.display = "block";
      gallary.style.display = "block";
        // letter.style.display = "block";
        // modal.classList.remove('hide'); // Remove the 'hide' class to reset for next appearance
    }, 500); // Adjust the delay to match the duration of the fade-out animation
}

function menu_cmod(){
    var modal = document.getElementById("menu-modal");
    var letterImage = document.getElementById("letterImage");


    modal.style.display = "block";
    letterImage.style.display = "none";
}

function m_cclose() {
    var modal = document.getElementById("menu-modal");
    var letterImage = document.getElementById("letterImage");

    setTimeout(function() {
      modal.style.display = "none";
      letterImage.style.display = "block";
        // letter.style.display = "block";
        // modal.classList.remove('hide'); // Remove the 'hide' class to reset for next appearance
    }, 500); // Adjust the delay to match the duration of the fade-out animation

    // Other actions...
}
