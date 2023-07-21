var isOn1 = false;
function heart_click() {
    isOn1 = !isOn1;
    if(isOn1){
        document.getElementById("heart").src = "icons/heart_click.png";
    }else{
        document.getElementById("heart").src = "icons/heart.png";

    }
}

var isOn2 = false;
function bookmark_click() {
    isOn2 = !isOn2;
    if(isOn2){
        document.getElementById("bookmark").src = "icons/bookmark_click.png";
    }else{
        document.getElementById("bookmark").src = "icons/bookmark.png";

    }
}

var isOn3 = false;
function follow_click() {
    isOn3 = !isOn3;
    if(isOn3){
        document.getElementById("Follow_id").textContent = "Following";
    }else{
        document.getElementById("Follow_id").innerHTML = "Follow";

    }
}