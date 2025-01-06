document.querySelector(".hero button").addEventListener("click", () => {
    alert("Learn more about our enterprise solutions!");
  });


  const navLinks = document.querySelectorAll("header nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.5s ease";
      link.style.transform = "rotateY(360deg)";
    });
  
    link.addEventListener("mouseleave", () => {
      link.style.transition = "all 0.5s ease";
      link.style.transform = "rotateY(0deg)";
    });
  });

  const herodiv = document.querySelectorAll("main div");

  herodiv.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.5s ease";
      link.style.transition = "rotateY(360deg)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transition = "all 0.5s ease";
      link.style.transform = "rotateY(0deg)";
    });

  });

 
  
  