export const bgs = Array.from({ length: 12 + 1 }, (_, i) => `website_backgrounds/bg${i}.gif`);
console.log(bgs)
var preloadedImages = [];

// Updates all elements of a classname to an image based on a delay
export const updateImg = (name, idx, delay) => {
  for (const elt of document.getElementsByClassName(name)) {
    elt.setAttribute(
      "style",
      "background-image: url(" +
        bgs[idx] +
        ");" +
        "transition-duration: " +
        delay +
        "ms;"
    );
  }
};

// Updates all SVG elements with a given class name to use a background image based on an index and a delay
export const updateSvg = (name, idx, delay) => {
  for (const elt of document.getElementsByClassName(name)) {
      elt.setAttribute("href", bgs[idx]);
      // Use a random height size to get a variety of parts from images transposed on background
      elt.setAttribute("height", Math.random() * 750 + 50);
      elt.setAttribute(
        "style",
          "transition-duration: " +
          delay +
          "ms;"
      );
  }
};

export const preloadImages = () => {
  for (const elt of bgs) {
   let img = new Image();
   img.src = elt;
   preloadedImages.push(img);
  }
}
