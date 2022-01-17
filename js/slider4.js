$('#slider4').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max',amount);
  });
  
  $('#slider4').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide+1);
  });
  
  $('#range').on('input change',function(){
    $('#slider4').slick('slickGoTo',this.value-1);
  });
  
  $('#slider4').slick({
    variableWidth: true,
    slidesToShow:2,
    arrows:false,
    dots:false
  });