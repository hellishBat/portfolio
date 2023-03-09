// Scrolling utils
// Scroll to element by it's ID
export const scrollToSection = (scrollTo: string | null) => {
  if (scrollTo != null) {
    const element = document.getElementById(scrollTo)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// Scroll to top
export const scrollToTop = (event: { preventDefault: () => void }) => {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
