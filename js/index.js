/**
 *
 */
function submitToQueue(event){
    var httpRequest = new XMLHttpRequest();
    var inputElement = document.getElementById('song');
    var songUrl = inputElement.value;
    if(songUrl){
        httpRequest.open('POST', 'http://localhost:8085/api/enqueue?song='+ songUrl);
        httpRequest.onload = function(){
            if(httpRequest.status == 200 ){
                alert('success');
                inputElement.value = "";
            }
        }
        httpRequest.send();
    }
}
function getPlaylistInfo(){
    var httpRequest = new XMLHttpRequest();
    var inputElement = document.getElementById('song');
    var songUrl = inputElement.value;
    httpRequest.open('GET', 'http://localhost:8085/api/playing');
    httpRequest.onload = function(){
        if(httpRequest.status == 200 ){
            console.log(httpRequest.response);
        }
    }
    httpRequest.send();
}
