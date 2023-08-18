function addColorSplash(event) {
  const splash = document.createElement("div");
  splash.classList.add("color-splash");
  splash.style.left = event.clientX + "px";
  splash.style.top = event.clientY + "px";
  document.body.appendChild(splash);

  setTimeout(() => {
    document.body.removeChild(splash);
  }, 2000); // Remove the splash after 2 seconds (adjust the time as needed)
}

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  // console.log(panel) this will iterate through each pannel as foreach is used 
  panel.addEventListener('click' , () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}