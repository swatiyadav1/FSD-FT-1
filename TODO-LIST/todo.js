$(document).ready(function(){
    $("#addToList").click(
        function(){
            var addItem = $('input[name=listItem]').val();
            $('ol').append('<li>'+addItem+'</li>');
        }
    );

    $(document).on('dblclick','li',function(){
        $(this).toggleClass('strike').fadeOut('slow');
    });

    $('input').focus(function(){
        $(this).val('');
    })

    $('ol').sortable();
})