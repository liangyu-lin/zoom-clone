const socket = io('/')

const videoGrid = document.querySelector('#video-grid')
const myVideo = document.createElement('video')
myVideo.muted = true

const peer = new Peer(undefined, {
    path: '/peerjs',
    host: '/',
    port: '3030'
})


let myVideoStream;

navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true

}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})


peer.on('open', id => {
    socket.emit('join-room', ROOM_ID);
})

socket.on('user-connected', (userId) => {
    connectToNewUser(userId);
})


const connectToNewUser = (userId) => {

  
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video);
}