(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // ns-hugo-params:D:\Project\Other\Blog\CoreyBlog\themes\hugo-theme-bootstrap\assets\js\mode\index.ts
  var mode_default = { author: { avatar: "images/profile.jpg", bio: "Freelance | Full-Stack Developer | Web Development Project Manager", location: "<a href='https://www.openstreetmap.org/relation/449220' target='_blank'>Taiwan</a>", name: "Corey", social: { facebook: "corey924", github: "corey924", instagram: "corey.924", linkedin: "corey-ko-6957ba70", rss: "", youtube: "UCfAFaiB3ozsLYLCkeU1IJiQ" } }, baseURL: "http://localhost:13389/", breadcrumb: true, carouselpostcount: 5, codeblock: { linenos: false, maxlines: 20 }, color: "auto", counttaxonomyposts: true, creativecommons: { by: true, nc: true, nd: true }, customcss: [], customjs: [], dateformat: "2006-01-02", description: "Corey \u7684\u500B\u4EBA\u8CC7\u8A0A\u751F\u6D3B\u7B46\u8A18\uFF0C\u5206\u4EAB\u8EDF\u9AD4\u958B\u767C\u3001GenAI\u3001\u8077\u6DAF\u3001\u904A\u6232\u8207\u65C5\u884C\u4E2D\u7684\u5BE6\u4F5C\u7D93\u9A57\u8207\u6574\u7406\u3002", diagram: false, docs: { nav: { expand: false } }, docsnav: { reducefontsize: true }, featuredpostcount: 5, fixedheader: true, fullwidth: false, logo: "images/logo.webp", mainsections: ["posts", "docs"], palette: "blue", palettes: ["blue", "blue gray", "brown", "cyan", "green", "indigo", "orange", "pink", "purple", "red", "teal", "yellow"], pinnedpost: true, pinnedpostcount: 3, post: { excerpt: "description", excerptmaxlength: 120, featuredimage: true, imagetitleascaption: true, numberifyheadingsseparator: "." }, postdate: true, poweredby: true, pwa: { precache: {} }, readingtime: true, recentpostcount: 5, relatedpostcount: 5, sass_transpiler: "dartsass", search: { fuse: { minmatchcharlength: 3 }, indexpaginate: 100 }, searchbar: false, sidebartaxonomies: ["series", "categories", "tags", "authors"], socialshare: false, taxonomypaginate: 10, taxonomypostcount: 20, titlecase: true, titleseparator: "-", tocwordcount: 1, viewer: true };

  // ns-hugo-params:D:\Project\Other\Blog\CoreyBlog\themes\hugo-theme-bootstrap\assets\js\local-storage\index.ts
  var local_storage_default = { author: { avatar: "images/profile.jpg", bio: "Freelance | Full-Stack Developer | Web Development Project Manager", location: "<a href='https://www.openstreetmap.org/relation/449220' target='_blank'>Taiwan</a>", name: "Corey", social: { facebook: "corey924", github: "corey924", instagram: "corey.924", linkedin: "corey-ko-6957ba70", rss: "", youtube: "UCfAFaiB3ozsLYLCkeU1IJiQ" } }, baseURL: "http://localhost:13389/", breadcrumb: true, carouselpostcount: 5, codeblock: { linenos: false, maxlines: 20 }, color: "auto", counttaxonomyposts: true, creativecommons: { by: true, nc: true, nd: true }, customcss: [], customjs: [], dateformat: "2006-01-02", description: "Corey \u7684\u500B\u4EBA\u8CC7\u8A0A\u751F\u6D3B\u7B46\u8A18\uFF0C\u5206\u4EAB\u8EDF\u9AD4\u958B\u767C\u3001GenAI\u3001\u8077\u6DAF\u3001\u904A\u6232\u8207\u65C5\u884C\u4E2D\u7684\u5BE6\u4F5C\u7D93\u9A57\u8207\u6574\u7406\u3002", diagram: false, docs: { nav: { expand: false } }, docsnav: { reducefontsize: true }, featuredpostcount: 5, fixedheader: true, fullwidth: false, logo: "images/logo.webp", mainsections: ["posts", "docs"], palette: "blue", palettes: ["blue", "blue gray", "brown", "cyan", "green", "indigo", "orange", "pink", "purple", "red", "teal", "yellow"], pinnedpost: true, pinnedpostcount: 3, post: { excerpt: "description", excerptmaxlength: 120, featuredimage: true, imagetitleascaption: true, numberifyheadingsseparator: "." }, postdate: true, poweredby: true, pwa: { precache: {} }, readingtime: true, recentpostcount: 5, relatedpostcount: 5, sass_transpiler: "dartsass", search: { fuse: { minmatchcharlength: 3 }, indexpaginate: 100 }, searchbar: false, sidebartaxonomies: ["series", "categories", "tags", "authors"], socialshare: false, taxonomypaginate: 10, taxonomypostcount: 20, titlecase: true, titleseparator: "-", tocwordcount: 1, viewer: true };

  // ns-hugo-imp:D:\Project\Other\Blog\CoreyBlog\themes\hugo-theme-bootstrap\assets\js\local-storage\index.ts
  var PathLocalStorage = class {
    constructor(baseURL) {
      __publicField(this, "baseURL", baseURL);
      __publicField(this, "prefix", "hbs:");
      if (baseURL.substring(0, 2) === "//") {
        baseURL = "http:" + baseURL;
      }
      let url;
      try {
        url = new URL(baseURL);
      } catch (e) {
        url = new URL(baseURL, location.protocol + "//" + location.host);
      }
      const pathname = url.pathname.replace(/^(\/+)/, "").replace(/(\/+)$/, "");
      if (pathname !== "") {
        this.prefix += pathname.replace("/", "-") + ":";
      }
    }
    getItem(key) {
      return localStorage.getItem(this.prefix + key);
    }
    setItem(key, value) {
      localStorage.setItem(this.prefix + key, value);
    }
    removeItem(key) {
      localStorage.removeItem(this.prefix + key);
    }
  };
  var local_storage_default2 = new PathLocalStorage(local_storage_default.baseURL);

  // ns-hugo-imp:D:\Project\Other\Blog\CoreyBlog\themes\hugo-theme-bootstrap\assets\js\mode\index.ts
  var MODE_AUTO = "auto";
  var MODE_DARK = "dark";
  var MODE_LIGHT = "light";
  var modes = [MODE_AUTO, MODE_DARK, MODE_LIGHT];
  var ModeToggle = class _ModeToggle {
    constructor() {
      // Cache key.
      __publicField(this, "key", "mode");
      // Current color mode.
      __publicField(this, "mode");
      __publicField(this, "items");
      let mode = local_storage_default2.getItem(this.key);
      if (!mode) {
        mode = mode_default.color;
      }
      this.mode = modes.includes(mode) ? mode : MODE_AUTO;
    }
    run() {
      this.setMode(this.mode);
      window.addEventListener("load", () => {
        this.initListeners();
        this.active(this.mode);
      });
    }
    initListeners() {
      this.items = document.querySelectorAll(".mode-item");
      this.items.forEach((ele) => {
        ele.addEventListener("click", () => {
          const mode = ele.getAttribute("data-color-mode");
          this.setMode(mode);
          this.active(mode);
        });
      });
      window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
        if (this.isAuto()) {
          this.setMode(e.matches ? "dark" : "light");
        }
      });
    }
    isAuto() {
      return this.mode === MODE_AUTO;
    }
    // Active the relative HTML elements.
    active(mode) {
      var _a, _b;
      this.mode = mode;
      local_storage_default2.setItem(this.key, mode);
      this.items.forEach((ele) => {
        const classList = ele.querySelector(".dropdown-item").classList;
        if (ele.getAttribute("data-color-mode") === mode) {
          classList.add("active");
        } else {
          classList.remove("active");
        }
      });
      const icon = (_a = document.querySelector('.mode-item[data-color-mode="' + mode + '"] .mode-icon')) == null ? void 0 : _a.cloneNode(true);
      if (!icon) {
        return;
      }
      icon.setAttribute("id", "modeIcon");
      (_b = document.querySelector("#modeIcon")) == null ? void 0 : _b.replaceWith(icon);
    }
    setMode(value) {
      if (value === "auto") {
        value = _ModeToggle.getPreferredMode();
      }
      console.debug(`Switch to ${value} mode`);
      document.documentElement.setAttribute("data-bs-theme", value);
      const event = new CustomEvent("hbs:mode", { detail: { mode: value } });
      document.dispatchEvent(event);
    }
    static getPreferredMode() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }
  };
  var mode_default2 = ModeToggle;

  // ns-hugo-imp:D:\Project\Other\Blog\CoreyBlog\themes\hugo-theme-bootstrap\assets\js\palettes\index.ts
  var PaletteSelector = class {
    constructor() {
      __publicField(this, "key", "palette");
    }
    run() {
      const palette = this.getPalette();
      if (palette) {
        this.setPalette(palette);
      }
      window.addEventListener("load", () => {
        this.initPalette();
      });
    }
    initPalette() {
      const selected = this.getPalette();
      document.querySelectorAll(".palette").forEach((element) => {
        const paletteId = element.getAttribute("id").replace("palette-", "");
        if (paletteId === selected) {
          element.classList.add("active");
        }
        element.addEventListener("click", () => {
          this.setPalette(paletteId);
          document.querySelector(".palette.active").classList.remove("active");
          element.classList.add("active");
        });
      });
    }
    getPalette() {
      const palette = local_storage_default2.getItem(this.key);
      if (palette) {
        return palette;
      }
      const paletteMeta = document.documentElement.getAttribute("data-palette");
      if (paletteMeta) {
        return paletteMeta;
      }
      return "";
    }
    setPalette(palette) {
      console.debug(`switch to palette: ${palette}`);
      document.documentElement.setAttribute("data-palette", palette);
      local_storage_default2.setItem(this.key, palette);
    }
  };
  var palettes_default = PaletteSelector;

  // <stdin>
  new mode_default2().run();
  new palettes_default().run();
})();
