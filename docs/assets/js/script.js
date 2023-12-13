new Splide(".splide", {
  type: "loop",
  fixedWidth: "200px",
  gap: "20px",
  arrows: false,
  pagination: false,

  breakpoints: {
    767: {
      fixedWidth: "100px",
      gap: "10px",
    },
  },
}).mount(window.splide.Extensions);
