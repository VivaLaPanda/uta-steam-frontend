window.onload = function(){
    var audio = new Audio("https://VivaLaPanda.moe/stream.mp3");
    document.audioPlayer = audio;
    console.log(audio);
    var volumeSlider = document.getElementById("volume");
    initVolume(volumeSlider);
    audio.volume = 0.1;
    audio.load();
    audio.play().catch(autoPlayError);
}

/**
 * detects if the current Object is a String element.
 * @param {Object} object object which gets checked for being a String.
 * @return true if a form of String, false if not.
 */
function isString(object){
    return typeof(object) === "string" || object instanceof String;
}

/**
 * initializes the volume slider at 10% volume.
 * @param element the range input element which is the volume slider.
 */
function initVolume(element){
    element.value = 10;
}

/**
 * gets info about the current playlist
 */
function getPlaylistInfo(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://VivaLaPanda.moe/api/playing');
    httpRequest.onload = function(){
        if(httpRequest.status == 200 ){
            console.log(httpRequest.response);
        }
        else{
            createErrorMessage(httpRequest.responseText);
        }
    }
    httpRequest.send();
}


