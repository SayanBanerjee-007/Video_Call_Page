const cameraBtn = document.getElementById("camera-btn");
const micBtn = document.getElementById("mic-btn");
const participentNavBtn = document.getElementById("participant-nav-btn");
const messageNavBtn = document.getElementById("message-nav-btn");
const messageContent = document.getElementById("message-content");
const copyUrlBtn = document.getElementById("copy-url-btn");
const messageText = document.getElementById("message-text");
const sendMessageBtn = document.getElementById("send-message-btn");
const chat = document.getElementById("chat");

cameraBtn.addEventListener("click", () => {
  cameraBtn.title = cameraBtn.classList.contains("camera-off")
    ? "Turn off camera"
    : "Turn on camera";
  cameraBtn.classList.toggle("camera-off");
  cameraBtn.classList.toggle("number-1");
});
micBtn.addEventListener("click", () => {
  micBtn.title = micBtn.classList.contains("mic-off") ? "Mute" : "Unmute";
  micBtn.classList.toggle("mic-off");
  micBtn.classList.toggle("number-1");
});
participentNavBtn.addEventListener("click", () => {
  messageContent.classList.remove("visible");
  setTimeout(() => {
    messageContent.style.visibility = "hidden";
  }, 200);
  participentNavBtn.style.color = "red";
  messageNavBtn.style.color = "white";
});
messageNavBtn.addEventListener("click", () => {
  messageContent.style.visibility = "visible";
  messageContent.classList.add("visible");
  messageNavBtn.style.color = "red";
  participentNavBtn.style.color = "white";
});
copyUrlBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(location.href);
});
sendMessageBtn.addEventListener("click", () => {
  const value = messageText.value;
    if (!/^\s\s{1,}/.test(value) && value !== "") {
        const element = document.createElement('p');
        element.innerText = value;
        chat.appendChild(element);
        messageText.value = '';
    } 
});
