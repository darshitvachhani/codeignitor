/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }*/

  self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});