// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-              S C R O L L   T O              -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("[data-scroll]");
  const headerHeight = document.querySelector("#home").offsetHeight;
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-scroll");
      const targetElement = document.getElementById(targetId);
      const topOffset = targetId === "home" ? 0 : headerHeight;
      window.scrollTo({
        top: targetElement.offsetTop - topOffset,
        behavior: "smooth",
      });
    });
  });
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-          T E L E G R A M   C A R D          -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function toggleTelegramWrapper() {
  const telegramIcon = document.querySelector(".telegram__link");
  const telegramWrapper = document.querySelector(".telegram__wrapper");
  telegramIcon.addEventListener("click", () => {
    telegramWrapper.classList.toggle("open");
  });
  const telegramCloseBtn = document.querySelector(".fa-circle-xmark");
  telegramCloseBtn.addEventListener("click", () => {
    telegramWrapper.classList.remove("open");
  });
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".telegram__wrapper") &&
      !event.target.closest(".telegram__link")
    ) {
      telegramWrapper.classList.remove("open");
    }
  });
  document.addEventListener("touchend", (event) => {
    if (
      !event.target.closest(".telegram__wrapper") &&
      !event.target.closest(".telegram__link")
    ) {
      telegramWrapper.classList.remove("open");
    }
  });
}
toggleTelegramWrapper();
