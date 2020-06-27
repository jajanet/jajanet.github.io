export const bgs = [
  "https://66.media.tumblr.com/ae454ed3a5d1e6b4df199cde688d32ef/tumblr_inline_n25dowxCKH1qhwjx8.gif",
  "https://66.media.tumblr.com/216d25968d77c83c2ceb63d19ec4d9cc/tumblr_o9dt2kn0wH1u9h2kwo1_500.gif",
  "https://66.media.tumblr.com/e5f83e8449c721dcba63e349f8da2e59/tumblr_pinr0hCzYA1whahvko1_500.gif",
  "https://66.media.tumblr.com/27473867ced23faf621fb68324d30c32/tumblr_inline_n25domQgkU1qhwjx8.gif",
  "https://66.media.tumblr.com/aa90fd031f93f81e1e78b75b2b9c2b81/tumblr_inline_n25dprlpXk1qhwjx8.gif",
  "https://66.media.tumblr.com/b2cec9103a37a961e20ae58cdc8beb3c/tumblr_inline_mveh1lmP0G1rfdbtm.png",
  "https://66.media.tumblr.com/c51948eb6509dcfe7e92132222be83c8/tumblr_mnbn5imrQ61qd9lk5o1_500.gif",
  "https://66.media.tumblr.com/7d11803587deb08adb0ed3b390b2f013/tumblr_inline_mw4aqeCwVj1s5t339.gif",
  "https://66.media.tumblr.com/25a185bdee36783b1cc6ab20d78db5e4/tumblr_inline_n13w50lfNs1rm4vf3.gif",
  "https://66.media.tumblr.com/4ae402e22c8db660345b982c0b900ea6/tumblr_inline_n25dr7bJkN1qhwjx8.gif",
  "https://66.media.tumblr.com/e2e2319f466264369efd7d12172fd3a4/tumblr_inline_n25drhzWyF1qhwjx8.gif",
  "https://66.media.tumblr.com/4045aaa050f8213d1430cfc33f63dffa/tumblr_inline_n25dmgkBPR1qhwjx8.gif",
  "https://66.media.tumblr.com/7cbd49cfa3474ebcb58be505b09a4848/tumblr_inline_n25dm6hLOg1qhwjx8.gif"
];

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

export const preloadImages = () => {
  for (const elt of bgs) {
   let img = new Image();
   img.src = elt;
   preloadedImages.push(img);
  }
}
