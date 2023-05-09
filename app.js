let toTop = document.querySelector(".toTop");
toTop.style.display = "none";

window.addEventListener("scroll", () => {
  if (this.scrollY > 500) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});

toTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
