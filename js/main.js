document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date(2022, 10, 06, 08, 00, 00, 00).getTime() / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)
  .start()

  // Do something when the countdown ends
  .ifEnded(() => {
    console.log('The countdown has ended!');
  });
});
