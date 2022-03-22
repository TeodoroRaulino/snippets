jQuery(".listItem").on("click", function(){
    jQuery(".question-label").each(function(){
        jQuery(this).css("background-color", "#FFF9FA");
        jQuery(this).css("border", "1px solid #A3143D");
        jQuery(this).css("color", "#A3143D");
    })
    
    jQuery(this).find("input + label").css("background-color", "#a5a5a5 !important");
    jQuery(this).css("border", "1px solid #A3143D");
    jQuery(this).css("color", "#FFF9FA");
    
    let valor = jQuery(this).find("input").val();
    console.log(valor);
})