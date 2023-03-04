// scrollToId
export const scrollToSection = (scrollTo: string | null) => {
  if (scrollTo != null) {
    const element = document.getElementById(scrollTo)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
