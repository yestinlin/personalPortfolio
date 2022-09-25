var topBtn = document.querySelector('.toTheTop')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.onclick = (e) => {
     e.preventDefault();
     window.scrollTo({top: 0, behavior: 'smooth'});  
};
