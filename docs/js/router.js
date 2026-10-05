import { setActiveNavLink } from "./components/navbar.js";

export function initRouter(routes) {
  function renderRoute() {
    const hash = window.location.hash;

    // Хоосон хаяг бол Тойм хуудас руу шилжүүлнэ
    if (!hash || hash === "#") {
      window.location.replace("#/overview");
      return;
    }

    const page = routes[hash] || routes["#/404"];
    if (page) page();

    setActiveNavLink(hash);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", renderRoute);

  // Module script нь DOM бэлэн болсны дараа ажилладаг тул шууд дуудна
  renderRoute();
}
