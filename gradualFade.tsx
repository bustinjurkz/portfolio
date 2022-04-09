export function gradualFade(headerName: string, slowFade?: boolean) {
  const header = document.getElementById(headerName);

  function fadeOutOnScroll(element: HTMLElement | null) {
    if (!element) {
      return;
    }
    const MULTIPLIER = slowFade ? 0.5 : 1.0;

    const distanceToTop =
      window.pageYOffset + element.getBoundingClientRect().top;
    const elementHeight = element.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
      opacity = 1 - ((scrollTop - distanceToTop) / elementHeight) * MULTIPLIER;
    }

    if (opacity >= 0) {
      element.style.opacity = opacity.toString();
    }
  }

  function scrollHandler() {
    fadeOutOnScroll(header);
  }

  window.addEventListener("scroll", scrollHandler, true);
}
