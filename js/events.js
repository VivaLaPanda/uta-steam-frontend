var apiKey = "";

window.addEventListener('beforeunload', function(e) {
  ga('send','pageview'{'sessionControl':'end'});
});

/**
 * display that song was successfully queued.
 */
function submitToQueueResult(){
    var inputElement = document.getElementById('song');
    if(this.status == 200 ){
        inputElement.style.background = "green";
        inputElement.value = "Song queued"
        window.setTimeout(function(){
            inputElement.style.background = "white";
            inputElement.value = "";
        },1000);
    }
    else{
        createErrorMessage(httpRequest.responseText);
    }
}

/**
 * Add song to the playlist queue.
 * @param event the click event of the "Queue" button
 */
function submitToQueue(event){
    ga('send', 'event', 'Manage', 'queue', 'Stream play tracking');
    var httpRequest = new XMLHttpRequest();
    var inputElement = document.getElementById('song');
    var songUrl = inputElement.value;
    if(songUrl){
        httpRequest.open('POST', 'https://VivaLaPanda.moe/api/enqueue?song='+ songUrl);
        httpRequest.withCredentials = true;
        httpRequest.setRequestHeader("Authorization", "Bearer " + apiKey);
        httpRequest.onload = submitToQueueResult;
        httpRequest.send();
    }
}

/**
 * skips the current song
 */
function skipSong(event){
    ga('send', 'event', 'Manage', 'skip', 'Stream play tracking');
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'https://VivaLaPanda.moe/api/skip');
    httpRequest.withCredentials = true;
    httpRequest.setRequestHeader("Authorization", "Bearer " + apiKey);
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

/**
 * skips the current song
 */
function setApiKey(event){
  apiKey = $('#apiKey').val();
  localStorage.apiKey = apiKey;
  ga('set', 'userId', apiKey);
  ga('send', 'event', 'Manage', 'setkey', 'Stream play tracking', apiKey);
}

/**
 * changes the volume whenever the volume slider gets moved
 * @param event the change event.
 */
function changeVolume(event){
    var volume = event.target.value;
    document.audioPlayer.volume = volume/ 100;
    if(document.audioPlayer.paused){
        document.audioPlayer.play();
        hideErrorMessage();
    }
}
