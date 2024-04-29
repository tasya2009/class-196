AFRAME.registerComponent("drive" , {
    init : function(){
        this.driveCar();
    },
    
    driveCar : function(){
        var wheelRot = 0, multiply = 10;
        window.addEventListener("keydown", function(e){
            var wheel = document.querySelector("#wheelcontrol");
            var camerarag = document.querySelector("#camerarag");
            var cameraposition = camerarag.getAttribute("position");
            var camerarotation = camerarag.getAttribute("rotation");
            var cameraMove = camerarag.getAttribute("movement-controls");
            if(e.code == "ArrowRight" && wheelRot > -40){
                wheelRot = wheelRot -5;
                wheel.setAttribute("rotation", {x: 0, y: 0, z: wheelRot})
            }
            if(e.code == "Arrowleft" && wheelRot < 40){
                wheelRot = wheelRot +5;
                wheel.setAttribute("rotation", {x: 0, y: 0, z: wheelRot})
            }
            camerarag.setAttribute("movement-controls", {"speed": cameraMove.speed + 0.005})
            if(e.code == "ArrowRight"){
                camerarotation.y = camerarotation.y -5;
            } 
            if(e.code == "ArrowLeft"){
                camerarotation.y = camerarotation.y +5;
            } 
            camerarag.setAttribute("rotation", {x: 0, y:camerarotation.y , z: 0}) 
            camerarag.setAttribute("movement-controls", {"speed": cameraMove.speed + 0.005})
            if(e.code == "ArrowUp"){
                multiply = multiply +0.5;
                if(multiply < 100 && cameraposition.z > -500){
                    camerarag.setAttribute("movement-controls", {"speed": cameraMove.speed + 0.005})
                    var acce = document.querySelector("#acccontrol");
                    acce.setAttribute("material", "color" , "green")
                    var speed = document.querySelector("#speed")
                    speed.setAttribute("text", {value : multiply})
                }
            }
        })
    }
})