jwplayer.key = "W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99";
const getParams = (name, url) => {
  if (!url) url = location.href;
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? null : results[1];
};
function loadPlayer() {
  fetch(
    "https://api.icq.net/bot/v1/files/getInfo?token=001.3617003158.0151996798%3A754693810&fileId=8kEbC000EQZa6NO2Pugft05f13b1c31ac",
    {
      mode: "no-cors",
      method: "get",
    }
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      initPlayer(data)
    });
}
const initPlayer = (data) => {
  let player = jwplayer("player");
  let object = {
    playbackRateControls: [0.75, 1, 1.25, 1.5, 2],
    width: "100%",
    height: "100%",
    file: data.url,
    preload: "auto",
  };
  player.setup(object);
  document.title = data.filename
};
window.onload = function () {
  loadPlayer();
};
