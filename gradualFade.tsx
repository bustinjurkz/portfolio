export function gradualFade(headerName: string) {
  var header = document.getElementById(headerName);

  function fadeOutOnScroll(element: HTMLElement | null) {
    if (!element) {
      return;
    }

    var distanceToTop =
      window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
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
