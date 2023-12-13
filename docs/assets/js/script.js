new Splide(".splide", {
  type: "loop", // ループあり
  arrows: false, // 矢印非表示
  pagination: false, // ページネーション非表示
  fixedWidth: "200px", // スライドのwidth200px
  gap: "20px", // スライド間の余白20px

  breakpoints: {
    // 767px以下のスタイル
    767: {
      fixedWidth: "100px", // スライドのwidth100px
      gap: "10px", // スライド間の余白10px
    },
  },
}).mount(window.splide.Extensions);
