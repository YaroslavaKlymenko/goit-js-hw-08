import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('#vimeo-player'))

player.on('timeupdate', throttle (saveCurrentTime, 1000))

function saveCurrentTime () {
    player.getCurrentTime().then (function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds)
    }
)}

const savedTime = localStorage.getItem("videoplayer-current-time")

if (savedTime) {
    player.setCurrentTime(savedTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:

            break;
    }
});
}
































// const player = new Player(document.querySelector('#vimeo-player'))

// player.on('timeupdate', throttle(saveCurrentTime, 1000));

// function saveCurrentTime () {
//     player.getCurrentTime().then(function (seconds) {
//         localStorage.setItem("videoplayer-current-time", seconds)
//     }
// )}

// const savedTime = localStorage.getItem('videoplayer-current-time');

// if (savedTime) {
//     player.setCurrentTime(savedTime).catch((error) => {
//       switch (error.name) {
//         case 'RangeError':

//           break;
//         default:

//           break;
//       }
//     });
//   }




























