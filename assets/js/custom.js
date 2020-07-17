$(function() {
    // DATERANGE picker configuration
    $('input[name="daterange"]').daterangepicker();
    // $('input[name="dates"]').daterangepicker();
    $('[data-toggle="datepicker"]').datepicker({
      zIndex: 9999
    });

    $('#js-corporate').click(function() {
      var corporateField = $('#js-corporate-field');
      var fieldToggle = corporateField.css('display');
      if(fieldToggle == 'none') {
        corporateField.css('display', 'block');
      } else {
        corporateField.css('display', 'none');
      }
    })

    
});