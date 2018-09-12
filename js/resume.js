    $(document).ready(function() {
        var height = 0;
        $( ".row" ).each(function( index ) {
          height = Math.max($(this).find( ".rhs" ).height(), $(this).find( ".lhs" ).height());
          console.log( "height : " + height );
          $(this).find( ".lhs" ).height(height);
          $(this).find( ".rhs" ).height(height);
        });

    });