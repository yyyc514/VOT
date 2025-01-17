
/*
 ======================================
    This array is for image items to fade in and out
    ======================================  */
   
const timelineImages = [
  {
    //this goes with 
    id: "image-gen-1-2",
    imgUrl:  "cw_images/genesis_bible.jpeg", 
    x1: 350,
    x2: 750,
    y: 40,
  },

  { 
      id: "image-gen-1-2", 
      imgUrl: "cw_images/gen_1_2.jpeg",
      x1: 751,
      x2: 1050,
      y: 40,
    },

    { 
        id: "image-gen-1-8", 
        imgUrl: "cw_images/gen-1-8.jpeg",
        x1: 1050,
        x2: 1300,
        y: 40,
      },
      { 
        id: "image-gen-1-11", 
        imgUrl: "cw_images/gen_1-11.jpeg",
        x1: 1301,
        x2: 1600,
        y: 40,
      },
      {
        id: "image-gen-1-14",
        imgUrl: "cw_images/gen_1_14.jpeg",
        x1: 1601,
        x2: 1900,
        y: 40,
      },
]

/*   ===========================================  
    Timeline and viewport divs are defined in vot.js file
     ==========================================   */

    // const viewportDiv = document.getElementById
    // ('js-viewport');
    // const timelineDiv = document.getElementById
    // ('js-timeline');

    /* =========================================== 
        Custom javascript attached to the viewport's scroll event listener make images fade in and out.

        Notes:  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
       ===========================================   */

    viewportDiv.addEventListener('scroll', function() {
      
 /* Track the scroll position of the viewport */

 const scrollPosition = viewportDiv.scrollLeft;

// Dynamic conditionals for each item
timelineImages.map(function(item) {
   const thisImage = document.getElementById(item.id);

   if (scrollPosition > item.x1 && scrollPosition <= item.x2) { 
    thisImage.classList.add('fade-in');
    viewportDiv.setAttribute("style", `background-image: url("${item.imgUrl}"); `); 
    };


     // Dynamic conditionals for each item 


     if (scrollPosition > item.x2) {
        thisImage.classList.add('fade-out');
      };
  
  
      if (scrollPosition >= item.x2){
        setTimeout(function(){
        thisImage.classList.remove('fade-in', 'fade-out');
      }, 200);
    };
  
      if (scrollPosition <= item.x2 && scrollPosition > item.x1){
        thisImage.classList.add('fade-in');
      };
  
      if (scrollPosition < item.x1){
        setTimeout(function(){
        thisImage.classList.remove('fade-in', 'fade-out');
      }, 200);
    };
  
  
    });
  }, false);
  
  
  
  /* =================
    BUILD TIMELINE HTML
    
    Main function to generate the HTML for each item
    in our timelineImages array.
    =================== */
  function buildTimeline() {
    timelineImages.map(function(item) {
      // This sets the left x value to be in the middle of the fade in and fade out points
      const xPosition = item.x1 + (item.x2 - item.x1);
  
      /*
        Build the HTML item for each object in the array.
  
       Variables are inserted dynamically with the ${} notation.
  
        Styles for each item's
        position are applied dynamically via inline styling
        with the "style" attribute.  Values are inserted after the CSS property and a "px" is added directly after. Inspect the HTML
        source in the console.log to see how the final
        rendering looks.
      */
      const html = `
        <div id="${item.id}" class="timeline-image" style="left: ${xPosition}px; top: ${item.y}px;">
        </div>
      `;
  
      /*
        Append the HTML block to the timeline div.
  
        See more here:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
      */
      return timelineDiv.insertAdjacentHTML('beforeend', html);
    });
  };
  

  $("#viewport").delay(6000).animate({"opacity": "1"}, 1700); 

  
  buildTimeline();
  
  
  
  
  