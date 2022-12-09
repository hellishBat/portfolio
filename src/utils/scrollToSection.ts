// scrollToId
export const scrollToSection = (scrollTo: string | null) => {
  if (scrollTo != null) {
    document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
  }
}
