$(document).ready(function(){
    var log = window.log;
    var assistant = {
        start: function(source){
            assistant.start_movement();
        },
        start_movement: function(){
            log("start_movement");
            var random_time = Math.floor(Math.random() * 6000) + 1000;
            setTimeout(function(){
                var random_movement = assistant.movements[Math.floor(Math.random()*assistant.movements.length)];
                if( assistant.movement(random_movement) ){ // finished?
                    assistant.start_movement();
                }
            }, random_time);
        },
        movements: [1, 2, 3, 6, 7, 8, 9, 10, 11],
        movement: function(movement) {
            var random_time = Math.floor(Math.random() * 200) + 1000;
            switch(movement){
                case 1:
                    assistant.movement_knipperen(random_time);
                    break;
                case 2:
                    assistant.movement_left_right(random_time);
                    break;
                case 3:
                    assistant.movement_right_left(random_time);
                    break;
                case 4:
                    assistant.movement_knipoog_right(random_time);
                    break;
                case 5:
                    assistant.movement_knipoog_left(random_time);
                    break;
                case 6:
                    assistant.movement_right(random_time);
                    break;
                case 7:
                    assistant.movement_left(random_time);
                    break;
                case 8:
                    assistant.movement_right_top(random_time);
                    break;
                case 9:
                    assistant.movement_left_top(random_time);
                    break;
                case 10:
                    assistant.movement_right_bottom(random_time);
                    break;
                case 11:
                    assistant.movement_left_bottom(random_time);
                    break;
                default:
                    log("movement '" + movement + "' not configured.");
                    break;
            };
            return true;
        },
        movement_range: 20,
        movement_knipperen: function(){
            log("knipperen");
            setTimeout(function(){
                log("dicht");
                $(".eye").removeClass("eye-open");
                $(".eye").addClass("eye-shut");
            }, 10);
            setTimeout(function(){
                log("open");
                $(".eye").removeClass("eye-shut");
                $(".eye").addClass("eye-open");
            }, 300);
        },
        movement_left_right: function(time){
            log("left-right");
            $( ".eye-iris" ).animate({
                left: "+="+assistant.movement_range+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range*2-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_right: function(time){
            log("eye-right");
            $( ".eye-iris" ).animate({
                left: "+="+assistant.movement_range+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_left: function(time){
            log("eye-left");
            $( ".eye-iris" ).animate({
                left: "-="+assistant.movement_range+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_right_left: function(time){
            log("right-left");
            $( ".eye-iris" ).animate({
                left: "-="+assistant.movement_range+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range*2-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_knipoog_right: function(){
            log("knipoog-rechts");
            setTimeout(function(){
                log("dicht");
                $(".eye-right").removeClass("eye-open");
                $(".eye-right").addClass("eye-shut");
            }, 10);
            setTimeout(function(){
                log("open");
                $(".eye-right").removeClass("eye-shut");
                $(".eye-right").addClass("eye-open");
            }, 300);
        },
        movement_knipoog_left: function(){
            log("knipoog-links");
            setTimeout(function(){
                log("dicht");
                $(".eye-left").removeClass("eye-open");
                $(".eye-left").addClass("eye-shut");
            }, 10);
            setTimeout(function(){
                log("open");
                $(".eye-left").removeClass("eye-shut");
                $(".eye-left").addClass("eye-open");
            }, 300);
        },
        movement_left_top: function(time){
            log("eye-left-top");
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range-1)+"px",
                top: "-="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+=1px",
                top: "+=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range-2)+"px",
                top: "+="+(assistant.movement_range-2)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_right_top: function(time){
            log("eye-right-top");
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range-1)+"px",
                top: "-="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-=1px",
                top: "+=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range-2)+"px",
                top: "+="+(assistant.movement_range-2)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_left_bottom: function(time){
            log("eye-left-bottom");
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range-1)+"px",
                top: "+="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+=1px",
                top: "-=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range-2)+"px",
                top: "-="+(assistant.movement_range-2)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
        movement_right_bottom: function(time){
            log("eye-right-bottom");
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movement_range-1)+"px",
                top: "+="+(assistant.movement_range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-=1px",
                top: "-=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movement_range-2)+"px",
                top: "-="+(assistant.movement_range-2)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
    };

    window.assistant = assistant;
    log("script:assist");
});