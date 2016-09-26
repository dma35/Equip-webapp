   $(document).ready(function() {
	   $("#sub-menu").hide();
        $( '.dropdown' ).hover(
            function(){
                $(this).children('#sub-menu').slideDown(200);
            },
            function(){
                $(this).children('#sub-menu').slideUp(200);
            }
        );
    }); // end ready
