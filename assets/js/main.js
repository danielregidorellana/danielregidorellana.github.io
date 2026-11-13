const navigation = [...document.querySelectorAll(".header-inner nav a")];
const sections = navigation.map((link) => document.querySelector(link.hash));
const languages = [...document.querySelectorAll(".language-picker a")].map((link) => ({
  link,
  alternate: link.getAttribute("href"),
}));

function updateNavigation() {
  const readingLine = window.innerHeight * 0.33;
  let current;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = sections.at(-1);
  for (const link of navigation) {
    if (current && link.hash === "#" + current.id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

function syncLanguage() {
  const target = document.getElementById(window.location.hash.slice(1));
  for (const { link, alternate } of languages) {
    link.href = alternate + (target && target.closest("main") ? window.location.hash : "");
  }
}

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("resize", updateNavigation);
window.addEventListener("hashchange", syncLanguage);
updateNavigation();
syncLanguage();
