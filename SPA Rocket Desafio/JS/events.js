
export function Events() {

  const navHome = document.querySelector(".home")
  const navUniverse = document.querySelector(".universe")
  const navExploration = document.querySelector(".exploration")


  navHome.addEventListener('click', () => {
    navHome.classList.add("color-white-nav")
    navExploration.classList.remove("color-white-nav")
    navUniverse.classList.remove("color-white-nav")
  })

  navUniverse.addEventListener("click", () => {
    navUniverse.classList.add("color-white-nav")
    navHome.classList.remove("color-white-nav")
    navExploration.classList.remove("color-white-nav")
  })

  navExploration.addEventListener("click", () => {
    navExploration.classList.add("color-white-nav")
    navHome.classList.remove("color-white-nav")
    navUniverse.classList.remove("color-white-nav")
  })
}