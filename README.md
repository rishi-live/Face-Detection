# Face-Detection
Real time face detection using JavaScript
# IMPORTANT: Bug Fixes

## `navigator.getUserMedia`

`navigator.getUserMedia` is now deprecated and is replaced by `navigator.mediaDevices.getUserMedia`. To fix this bug replace all versions of `navigator.getUserMedia` with `navigator.mediaDevices.getUserMedia`

## Low-end Devices Bug

The video eventListener for `play` fires up too early on low-end machines, before the video is fully loaded, which causes errors to pop up from the Face API and terminates the script (tested  Windows [Chrome]). Replaced by `playing` event, which fires up when the media has enough data to start playing.

## No css included

for faster response, more design take more time to load.

## Only run in Google Chrome

give the permission to camera to take real time picture for detection

## More features
if you need more feature like `face Land mark` & `face expression` .Remove `/*`..`*/` from `/*faceapi.nets.faceExpressionNet.loadFromUri('/models')*/` and `faceapi.nets.faceLandmark68Net.loadFromUri('/models')` & `/*faceapi.draw.drawFaceExpressions(canvas, resizedDetections)*/` & `/*faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)*/` and remove `//` before `//.withFaceLandmarks().withFaceExpressions()`

## rishi-live
