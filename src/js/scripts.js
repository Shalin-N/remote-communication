document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const teamsInterface = document.getElementById("teamsInterface");
  
    startButton.addEventListener("click", () => {
      startButton.style.display = "none"; // Hide the Start button
      teamsInterface.style.display = "flex"; // Show the Teams interface
    });
  });
  