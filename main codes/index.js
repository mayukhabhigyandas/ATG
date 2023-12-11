window.onload = function() {
    var desktopNav = document.querySelector(".navbar-desktop");
    var mobileNav = document.querySelector(".navbar");

    function toggleNavigation() {
      if (window.innerWidth <= 768) { 
        desktopNav.style.display = "none";
        mobileNav.style.display = "block";
      } else {
        desktopNav.style.display = "block";
        mobileNav.style.display = "none";
      }
    }
    toggleNavigation();
    window.onresize = function() {
      toggleNavigation();
    };
  };

  function hideElementsOnResize() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 768) {
      
      document.querySelector(".first").style.display = "none";
      document.querySelector(".second").style.display = "none";
      document.querySelector(".third").style.display = "none";
      document.querySelector(".forth").style.display = "none";
      document.getElementById("myButton").style.display = "none";
      document.querySelector(".activ-lis").style.display = "block";
      document.querySelector(".data-right").style.display = "none";
      
      document.querySelector(".no-views1").style.display = "none";
      document.querySelector(".no-views2").style.display = "none";
      document.querySelector(".no-views3").style.display = "none";
      document.querySelector(".no-views4").style.display = "none";
      
      document.querySelector(".no-view1").style.display = "block";
      document.querySelector(".no-view2").style.display = "block";
      document.querySelector(".no-view3").style.display = "block";
      document.querySelector(".no-view4").style.display = "block";
     
      
     
    } 

    else{
        document.querySelector(".first").style.display = "block";
        document.querySelector(".second").style.display = "block";
        document.querySelector(".third").style.display = "block";
        document.querySelector(".forth").style.display = "block";
        document.querySelector(".activ-lis").style.display = "block";
        document.querySelector(".desk-flex").style.display = "block";
     
        document.querySelector(".data-right").style.display = "block";
        document.querySelector(".no-views1").style.display = "block";
        
      document.querySelector(".no-views2").style.display = "block";
      document.querySelector(".no-views3").style.display = "block";
      document.querySelector(".no-views4").style.display = "block";

      document.querySelector(".no-view1").style.display = "none";
      document.querySelector(".no-view2").style.display = "none";
      document.querySelector(".no-view3").style.display = "none";
      document.querySelector(".no-view4").style.display = "none";
    }
  }
  
  
  hideElementsOnResize();
  

  window.addEventListener('resize', hideElementsOnResize);

