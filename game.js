AFRAME.registerComponent("game",{
    schema : {
        gameState : {type : "string", default : "play"}
    },
    init : function (){
        var duration = 100 ;
        var timer = document.querySelector("#timer");
        this.startTimer(duration, timer);

    },
    startTimer: function(duration, timer){
        var mins, secs;
        setInterval(()=>{
            if (duration >= 0){
                this.data.gameState = "play";
                mins = parseInt(duration/60);
                secs = parseInt(duration%60);
                if(mins < 10){
                    mins = "0" + mins;
                }
                if(secs < 10){
                    secs = "0" + secs;
                }
                timer.setAttribute("text", {value : mins + ":" + secs})
                duration = duration - 1;
            }
            else {
                this.data.gameState = "over";
                var camera = document.querySelector("#camerarag");
                camera.setAttribute("velocity", {x: 0, y: 0, z:0})
                var speed = document.querySelector("#speed");
                speed.setAttribute("text", {value : "0"});
            }
        },100)
    }
})