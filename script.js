const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream, pass to the video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('Error: ', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;

  // Start PiP
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
