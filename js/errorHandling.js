/**
 * hides the error message
 */
function hideErrorMessage(){
    document.getElementById("error-message-wrapper").style.display = "none";
}

/**
 * shows an error message on the page.
 * @param {Error|String} error object or error message
 */
function createErrorMessage(error, addContactInfo=true){
    document.getElementById("error-message-wrapper").style.display = "block";
    if(addContactInfo){
        document.getElementById("error-message").innerHTML = "Playback failed please contact <a href='https://github.com/VivaLaPanda/uta-steam-frontend/issues/new'>server owner</a> and send the following error message: \n"
    }
    if(error instanceof Error){
        document.getElementById("error-message-wrapper").innerHTML += "<pre>"+ error.name +":\n\t" +error.message +"</pre>";
        return;
    }
    if(isString){
        document.getElementById("error-message-wrapper").innerHTML += "<pre>"+ error +"</pre>";
        return;
    }
}

/**
 * show an error message in case of an error during the autoplay.
 */
function autoPlayError(error){
    if(error.name === "NotAllowedError"){
        createErrorMessage("Autoplay not allowed without interaction, please press play button or change volume", false);
    }
    else{
        createErrorMessage(error);
    }
}
