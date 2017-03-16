var controller = new ScrollMagic.Controller({
  pushFollowers: false
});

// >>>> pin images <<<<

new ScrollMagic.Scene({
  triggerElement: "#page2",
  triggerHook: "onEnter",
  duration: "100%"
})
  .setPin("#page1 .pin-container")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#page2",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setPin("#page2 .pin-container")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#page3",
  triggerHook: "onEnter",
  duration: "200%"
})
  .setPin("#page3 .pin-container")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#page4",
  triggerHook: "onEnter",
  duration: "100%"
})
  .setPin("#page4 .pin-container")
  .addTo(controller);

// >>>> content animations <<<<

const content = new TimelineMax();
content
  .staggerTo('#page1 .content > *', 1, {
    opacity: 0,
    transform: 'translateX(30px)'
  }, 1)

new ScrollMagic.Scene({
  triggerElement: "#page2",
  triggerHook: 0.5,
  duration: '25%',
})
  .setTween(content)
  // .addIndicators()
  .addTo(controller);

// >>>> navigation <<<<

let currentPage;

const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".button");
const buttonsArray = [...buttons]
const pagesArray = [...pages];

pages.forEach(element => {
  new ScrollMagic.Scene({
    triggerElement: `#${element.attributes.id.value}`,
    triggerHook: 0.5,
    duration: '100%',
  })
    .on("enter", function() {
      currentPage = element.dataset.page;
    })
    // .addIndicators()
    .addTo(controller);
})

buttonsArray.forEach(button => {
  button.addEventListener("click", onClick);
})

function onClick() {
  this.attributes.href.value = `#page${Number(currentPage) + Number(this.dataset.value)}`;
}
