var settings = {
    log_enabled: true,
};

$(document).ready(function(){
    //log function:
    window.log = function(text,object){
        if(settings.log_enabled){
            if(object === undefined){
                object = {};
            }
            console.error(text,object);
        }
    }
    log("script:global:loaded");
});