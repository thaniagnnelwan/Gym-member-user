const navbar = document.querySelector(".navbar")
const sidebarMainWrapper = document.querySelector(".sidebar-main-wrapper")
const loadingScreen = document.getElementById("loadingScreen")
// const sidebarNav = document.querySelector(".sidebar-nav")
const main = document.querySelector("main")
const sidebarNavButton = document.querySelector('button[data-toggle="sidebarNav"]')

const setMainSidebarPadTop = (height)=>{
  const navbarHeight = height || navbar.clientHeight
  sidebarMainWrapper.style.paddingTop = `${navbarHeight}px`
}

// INIT MAINSIDEBAR PADDING TOP SAAT GLOBAL.JS DIMUAT
setMainSidebarPadTop()
main.style.minHeight = `calc(100vh - ${navbar.clientHeight}px)`

// SET MAINSIDEBAR PADDING TOP SETIAP RESIZE
window.addEventListener('resize',(e)=>{
  setMainSidebarPadTop()
})

window.addEventListener("DOMContentLoaded",()=>{
  // HILANGKAN LOADING SCREEN SAAT CONTENT LOADED
  setTimeout(()=>{
    loadingScreen.style.visibility = "hidden"
    loadingScreen.style.opacity = "0"
    setTimeout(()=>{
      loadingScreen.remove()
    },400)
  },100)

  // SIDEBAR NAV TOGGLE EVENT
  sidebarNavButton.addEventListener("click",()=>{
    document.body.classList.toggle("sidebar-collapse")
  })
})
