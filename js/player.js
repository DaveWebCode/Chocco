let player;

function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "480",
  //  width: "662",
   videoId: "LXb3EKWsInQ",
   events: {
     // onReady: onPlayerReady,
     // onStateChange: onPlayerStateChange
   },
   playerVars: {
    // controls: 0,
    disablekb: 0,
    showinfo: 0,
    rel: 0,
    autoplay: 0,
    modestbranding: 0
   }
 });
}