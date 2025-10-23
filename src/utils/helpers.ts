export const scrollTo = (navOption: string) => {
  const itemToScroll = document.querySelector(`#${navOption}`)
  if (itemToScroll) {
    
    const scrollPosition = itemToScroll.getBoundingClientRect().top - 150;
    window.scrollBy({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth'
    })
  }
}