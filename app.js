const navList = document.querySelector(".nav-list")
const toggleBtn = document.querySelector(".menu-icon")

toggleBtn.addEventListener("click", () => {
  const visibility = navList.getAttribute("data-visible")

  if (visibility === "false") {
    navList.setAttribute("data-visible", "true")
    toggleBtn.setAttribute("aria-expanded", "true")
  } else if (visibility === "true") {
    navList.setAttribute("data-visible", "false")
    toggleBtn.setAttribute("aria-expanded", "false")
  }
})
