function toggleLogo() {
  let logo = (document.getElementById("footer-logo").src =
    "img/logo-white.png");
}

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
