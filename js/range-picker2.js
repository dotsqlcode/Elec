$("#pl6").slider({
    min: 0,
    max: 6000,
    values: [2000, 4000],
    range: true,
    animate: "slow",
    slide : function(event, ui) {    
        $("#pl6-l").val(ui.values[ 0 ]);   
        $("#pl6-r").val(ui.values[ 1 ]);  
    }    
});
$("#pl6-l").val($("#pl6").slider("values", 0));
$("#pl6-r").val($("#pl6").slider("values", 1));
$("#plc6 input").change(function() {
    var input_left = $("#pl6-l").val().replace(/[^0-9]/g, ''),    
    opt_left = $("#pl6").slider("option", "min"),
    where_right = $("#pl6").slider("values", 1),
    input_right = $("#pl6-r").val().replace(/[^0-9]/g, ''),    
    opt_right = $("#pl6").slider("option", "max"),
    where_left = $("#pl6").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $("#pl6-l").val(input_left); 
    $("#pl6-r").val(input_right); 
    if (input_left != where_left) {
        $("#pl6").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $("#pl6").slider("values", 1, input_right);
    }
});
$("#pl7").slider({
    min: 0,
    max: 6000,
    values: [2000, 4000],
    range: true,
    animate: "slow",
    slide : function(event, ui) {    
        $("#pl7-l").val(ui.values[ 0 ]);   
        $("#pl7-r").val(ui.values[ 1 ]);  
    }    
});
$("#pl7-l").val($("#pl7").slider("values", 0));
$("#pl7-r").val($("#pl7").slider("values", 1));
$("#plc7 input").change(function() {
    var input_left = $("#pl7-l").val().replace(/[^0-9]/g, ''),    
    opt_left = $("#pl7").slider("option", "min"),
    where_right = $("#pl7").slider("values", 1),
    input_right = $("#pl7-r").val().replace(/[^0-9]/g, ''),    
    opt_right = $("#pl7").slider("option", "max"),
    where_left = $("#pl7").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $("#pl7-l").val(input_left); 
    $("#pl7-r").val(input_right); 
    if (input_left != where_left) {
        $("#pl7").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $("#pl7").slider("values", 1, input_right);
    }
});