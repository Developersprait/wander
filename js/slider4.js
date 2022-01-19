$('#slider4').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range2').attr('max',amount);
  });
  
  $('#slider4').on('afterChange',function(e,slick,currentSlide){
    $('#range2').val(currentSlide+1);
  });
  
  $('#range2').on('input change',function(){
    $('#slider4').slick('slickGoTo',this.value-1);
  });
  
  $('#slider4').slick({
    variableWidth: true,
    slidesToShow:2,
    arrows:false,
    dots:false,
    infinite:true
  });