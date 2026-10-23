/* ============================================================
   SITE SETTINGS: edit everything here. You rarely need to touch index.html.
   ============================================================ */
window.SITE = {

  /* LOGO: put your file in the /images folder (png, svg, jpg) and write its path here.
     Example: logo: "my-logo.png"  */
  logo: "logo.svg",
  brandName: "7-Figures Printers",

  /* VIDEOS: now plain HTML in index.html. Search for "testimony-1.mp4" and change the src/poster paths (2 places each: hero and testimonials). */

  /* MODEL GALLERY: "image" is optional. Leave it "" to show the built-in illustration,
     or put your own picture in /images and write its path, e.g. "model-1.jpg".
     "hair" only changes the built-in illustration color. */
  gallery: [
    { name: "Aria",  hair: "#ff4fa3", image: "" },
    { name: "Luna",  hair: "#37b6ff", image: "" },
    { name: "Vesper", hair: "#a76bff", image: "" },
    { name: "Nova",  hair: "#ff7a7a", image: "" }
  ],

  /* SUPERCAR PHOTOS: add your own car photos (put files in /images). Leave image "" for the built-in artwork.
     "style": "gt" (rounded red coupe) or "wedge" (low angular wedge). "color" tints the artwork. */
  cars: [
    { name: "Italian V12 GT",    style: "gt",    color: "#d4132b", image: "car-left.jpg" },
    { name: "Wedge supercar",    style: "wedge", color: "#f2c200", image: "car-right.jpg" },
    { name: "Gold and crypto",   style: "wedge", color: "#37b6ff", image: "coins.jpg" }
  ],

  /* CHECKOUT LINKS: paste your Stripe / Whop / Gumroad / Calendly links. */
  links: {
    starter: "$70",
    program: "$250",
    mentorship: "$1000"
  },

  /* PRICES shown on the cards */
  prices: { starter: "$70", program: "$250", mentorship: "$1000" }
};
