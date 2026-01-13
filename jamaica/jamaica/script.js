const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const navMenu = document.querySelector(".nav-menu")

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroFlag = document.querySelector(".hero-flag")
  if (heroFlag) {
    heroFlag.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  { threshold: 0.1 }
)

document
  .querySelectorAll(".about-card, .req-card, .member-card")
  .forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })

const applicationForm = document.querySelector(".application-form")
const formMessage = document.getElementById("formMessage")

if (applicationForm) {
  applicationForm.addEventListener("submit", (e) => {
    const age = Number(document.getElementById("age").value)
    const possuiDiscordMic = document.getElementById("possuiDiscordMic").value

    if (age < 13) {
      e.preventDefault()
      showMessage("Você precisa ter pelo menos 13 anos para se candidatar.", "error")
      return
    }

    if (possuiDiscordMic === "nenhum") {
      e.preventDefault()
      showMessage("Discord e microfone são obrigatórios.", "error")
      return
    }

    showMessage("Enviando candidatura...", "success")
  })
}

function showMessage(message, type) {
  if (!formMessage) return
  formMessage.textContent = message
  formMessage.className = `form-message ${type}`
  formMessage.style.display = "block"
}

let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key)
  konamiCode = konamiCode.slice(-10)

  if (konamiCode.join("") === konamiSequence.join("")) {
    document.body.style.animation = "rainbow 2s infinite"
    setTimeout(() => {
      document.body.style.animation = ""
    }, 5000)
  }
})

window.addEventListener("load", () => {
  let visitors = Number(localStorage.getItem("jamaica_visitors") || 0)
  visitors++
  localStorage.setItem("jamaica_visitors", visitors)
})

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (!header) return
  header.style.background =
    window.scrollY > 100 ? "rgba(0,0,0,0.98)" : "rgba(0,0,0,0.95)"
})
