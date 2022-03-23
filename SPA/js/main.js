function initMap() {
  const loc = { lat: 40.90384171526252, lng: -74.12189232222342 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150) {
    this.document.querySelector("#navbar").style.backgroundColor =
      "rgba(51,51,51, .9)";
  } else {
    this.document.querySelector("#navbar").style.backgroundColor =
      "rgba(51,51,51, 1)";
  }
});
