/*
todo: create three global variables:
* planeSpeed (initial value = 250)
* planePosition (initial value = 0)
* animation (no initial value)
*/
var planeSpeed = 250;
var planePosition = 0;
var animation;
/*
todo: listen for click events on the plane element and call a function named speedUp when they happen.
*/
var plane = document.getElementById("plane");
    plane.addEventListener("click", speedUp);
/*
todo: listen for click events on the stop button element and call a function called stopPlane when they happen.
*/
var stopButton = document.getElementById("stopButton");
    stopButton.addEventListener("click", stopPlane);

function speedUp() {
    /*
    todo: check whether the plane is already going as fast as it can. If not, increase the speed.
    */
    if (planeSpeed > 10) {
        planeSpeed -= 10;
    }
    clearInterval(animation);
    animation = setInterval(frame, planeSpeed);
    /*
    If the plane is already moving, stop it and then restart with the new speed by calling a function called frame.
    */
    function frame() {
        planePosition += 2;
        plane.style.left = planePosition + 'px';
        checkPosition(planePosition);
        /*
        reposition the plane and check whether the plane is crashed
        */
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 830) {
        alert("CRASH!");
        console.log("crash!");
        clearInterval(animation);
    }
    /*
    todo: check the plane's current position and crash it if it's at the end of the line
    */
}

function stopPlane() {
    if (planePosition < 830) {
        clearInterval(animation);
    }
    /*
    todo: test whether the plane is already crashed. If not, stop the plane.
    */
}
