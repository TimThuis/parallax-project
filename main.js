var controller = new ScrollMagic.Controller({
  pushFollowers: false
});

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
