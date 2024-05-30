function downloadFile() {
         window.open("Resume_Fajardo, Ma. Betina Julianna C.pdf")
      }

      const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#51306e",
  "#6a3872",
  "#814276",
  "#954e79",
  "#a85b7c",
  "#b96a7f",
  "#c87984",
  "#d58a89",
  "#e29b90",
  "#ecad98",
  "#f6bfa3",
  "#ffd1af",
  // Added colors with a gradient towards yellow (no orange)
  "#fde6c0", // Lighter shade of the last color
  "#fcdca4", // Lighter, cooler yellow than previous
  "#fcb698", // Lighter, even cooler yellow
  "#f9aab0", // Very light yellow
  "#f79c9c", // Light yellow with a hint of cream
  "#f58e8e", // Light yellow with a touch of peach (subtle)
  "#f38080", // Light yellow with a warmer tone
  "#f17272", // Warmer yellow
  "#eff474"  // Final color - bright yellow
];




circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();