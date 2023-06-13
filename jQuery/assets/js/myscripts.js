// jquery
jQuery(document).ready(function($){

    // alert('Hello jQuery');

    $('.mybtn-cls').on('click',function(){
        //alert('I am clicked');
        // $(this).css('background-color','#ff0000');

        $('#test-content').show();
        $('#test-content').hide();
        $('#test-content').toggle();
        $('#test-content').slideToggle();
    });

    $('#sum').on('click',function(){
        let num1 = $('#num1').val();
        console.log(num1);

        if(num1 == ''){
            alert('Please enter number on num1');
            $('#num1').focus();
            return false;
        }

        let num2 = $('#num2').val();
        console.log(num2);

        if(num2 == ''){
            alert('Please enter number on num2');
            $('#num2').focus();
            return false;
        }

        let sum = parseInt(num1) + parseInt(num2);

        alert('The result is ' + sum );

    });

});