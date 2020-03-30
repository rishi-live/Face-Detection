const video = document.getElementById('video');

//========
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  //detect facial part
  /*faceapi.nets.faceLandmark68Net.loadFromUri('/models'),*/
  //API helps to recognition your face whre is your face and surround by the box
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  //face expression (happy,sad,.....)
  /*faceapi.nets.faceExpressionNet.loadFromUri('/models')*/
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()) //.withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

    //resize detection...
    faceapi.draw.drawDetections(canvas, resizedDetections)
    // detect the face with doted line (nose,eye,mouth,....)
    /*faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)*/
    // face expression ( angry,happy,sad)
    /*faceapi.draw.drawFaceExpressions(canvas, resizedDetections)*/
  }, 50)
})