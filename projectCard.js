class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.innerHTML = "Loading..."
  }

  static get observedAttributes() {
    return ["name", "desc", "img-src", "img-alt", "read-more"];
  }

  attributeChangedCallback(name, oldval, newval) {
  }

  getAttributes() {
    return {
      name: this.getAttribute("name") || "",
      desc: this.getAttribute("desc") || "",
      imgSrc: this.getAttribute("img-src") || "",
      imgAlt: this.getAttribute("img-alt") || "",
      readMore: this.getAttribute("read-more") || "",
    };
  }

  rrerender() {
    let template = document.getElementById('project-card-template').content;
    this.shadowRoot.appendChild(template.cloneNode(true));

    let attrs = this.getAttributes();
    let img = this.shadowRoot.querySelector("img");
    let a = this.shadowRoot.querySelector("a");

    img.src = attrs.imgSrc;
    img.alt = attrs.imgAlt;

    a.href = attrs.readMore;
  }
}

window.customElements.define('project-card', ProjectCard);