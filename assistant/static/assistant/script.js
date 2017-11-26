$(document).ready(function(){
    var log = window.log;
    var assistant = {
        start: function(source){
            assistant.start_movement();
        },
        start_movement: function(){
            log("start_movement");
            setTimeout(function(){
                var list = assistant.movements.list;
                var random_movement = list[Math.floor(Math.random()*list.length)];
                log('random_movement: ' + random_movement);
                time = assistant.movements.random_time();
                if( assistant.movements.random_movement[random_movement]() && assistant.movements.auto_movement_allowed ){
                    // finished && allowed?
                    assistant.start_movement();
                }
            }, Math.floor(Math.random() * 4500) + 500);
        },
        movements: {
            list: [1, 1, 1, 2, 3, 4, 5, 8, 9, 10, 11],
            auto_movement_allowed: true,
            random_time: function(){ return Math.floor(Math.random() * 3000) + 150 },
            range: 20,
            eye: {
                'knipperen': function(time=assistant.movements.random_time()){
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
                'left_right': function(time=assistant.movements.random_time()){
            log("left-right");
            $( ".eye-iris" ).animate({
                left: "+="+assistant.movements.range+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "-="+(assistant.movements.range*2-1)+"px",
            }, 250, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+=1px",
            }, time, function() { /* Animation complete. */  });
            $( ".eye-iris" ).animate({
                left: "+="+(assistant.movements.range-1)+"px",
            }, 250, function() { /* Animation complete. */  });
        },
                'right': function(time=assistant.movements.random_time()){
                    log("eye-right");
                    $( ".eye-iris" ).animate({
                        left: "+="+assistant.movements.range+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
                'left': function(time=assistant.movements.random_time()){
                    log("eye-left");
                    $( ".eye-iris" ).animate({
                        left: "-="+assistant.movements.range+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
                'right_left': function(time=assistant.movements.random_time()){
                    log("right-left");
                    $( ".eye-iris" ).animate({
                        left: "-="+assistant.movements.range+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+="+(assistant.movements.range*2-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
                'knipoog_right': function(time=assistant.movements.random_time()){
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
                'knipoog_left': function(time=assistant.movements.random_time()){
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
                'left_top': function(time=assistant.movements.random_time()){
                    log("eye-left-top");
                    $( ".eye-iris" ).animate({
                        left: "-="+(assistant.movements.range-1)+"px",
                        top: "-="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+=1px",
                        top: "+=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+="+(assistant.movements.range-2)+"px",
                        top: "+="+(assistant.movements.range-2)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
                'right_top': function(time=assistant.movements.random_time()){
                    log("eye-right-top");
                    $( ".eye-iris" ).animate({
                        left: "+="+(assistant.movements.range-1)+"px",
                        top: "-="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-=1px",
                        top: "+=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-="+(assistant.movements.range-2)+"px",
                        top: "+="+(assistant.movements.range-2)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
                'left_bottom': function(time=assistant.movements.random_time()){
                    log("eye-left-bottom");
                    $( ".eye-iris" ).animate({
                        left: "-="+(assistant.movements.range-1)+"px",
                        top: "+="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+=1px",
                        top: "-=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "+="+(assistant.movements.range-2)+"px",
                        top: "-="+(assistant.movements.range-2)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
                'right_bottom': function(time=assistant.movements.random_time()){
                    log("eye-right-bottom");
                    $( ".eye-iris" ).animate({
                        left: "+="+(assistant.movements.range-1)+"px",
                        top: "+="+(assistant.movements.range-1)+"px",
                    }, 250, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-=1px",
                        top: "-=1px",
                    }, time, function() { /* Animation complete. */  });
                    $( ".eye-iris" ).animate({
                        left: "-="+(assistant.movements.range-2)+"px",
                        top: "-="+(assistant.movements.range-2)+"px",
                    }, 250, function() { /* Animation complete. */  });
                },
            },
            random_movement: {
                1: function(){
                    assistant.movements.eye['knipperen']();
                    return true;
                },
                2: function(){
                    assistant.movements.eye['left_right']();
                    return true;
                },
                3: function(){
                    assistant.movements.eye['right']();
                    return true;
                },
                4: function(){
                    assistant.movements.eye['left']();
                    return true;
                },
                5: function(){
                    assistant.movements.eye['right_left']();
                    return true;
                },
                6: function(){
                    assistant.movements.eye['knipoog_right']();
                    return true;
                },
                7: function(){
                    assistant.movements.eye['knipoog_left']();
                    return true;
                },
                8: function(){
                    assistant.movements.eye['left_top']();
                    return true;
                },
                9: function(){
                    assistant.movements.eye['right_top']();
                    return true;
                },
                10: function(){
                    assistant.movements.eye['left_bottom']();
                    return true;
                },
                11: function(){
                    assistant.movements.eye['right_bottom']();
                    return true;
                },
            }
        },
    };

    window.assistant = assistant;
    log("script:assist");
});