$(document).ready( function() {
    $('#search').click(function(e) {
        bringSearchResults();
    });

    $(document).on("keydown", "#searchform", function(event) { 
        if(event.key == "Enter") {
            bringSearchResults();
        }
    });

    $(document).on("keydown", "#searchform", function(event) { 
        return event.key != "Enter";
    });

    
});

function bringSearchResults() {
    var type = $("input:radio[name ='type']:checked").val();
    $('#results').html('');
        $.ajax({
            global: false,
            type: 'GET',
            url: '/search/'+type,
            dataType: 'html',
            data: {
                search: $("#searchinput").val()
            },
            success: function (result) {
                response = $.parseJSON(result);
                $('#results').append('<span class="h2">Results</span>');
                for(var item in response) {
                    let name = response[item].split('\\');
                    let shortName = name[name.length-1];
                    $('#results').append('<div class="card mb-3"><div class="row align-items-center"><div class="col-md-8"><h5 class="card-body">'+shortName.substring(0,shortName.length-4)+'</h5></div><div class="col-md-4 text-center"><button class="btn btn-primary" onClick="getPDF(\''+escape(response[item])+'\')">Open</button></div></div></div>');
                }
            },
            error: function (request, status, error) {
                console.log(error);
                $('#results').append('<h4>PN not found!</h4>');
            }
        });
}

function getPDF(file) {
    console.log(file);
    $('.modal-body').html('<img id="pdfimg" class="img-fluid" src="/generatejpg?file='+file+'" />');
    $('#myModal').modal({show:true})
}


(function($) {
    $.fn.imageResize = function(options) {

        var that = this;
        var settings = {
            width: 150,
            height: 150
        };
        options = $.extend(settings, options);

        if (!that.is('img')) {
            return;
        }

        return that.each(function() {

            var maxWidth = options.width;
            var maxHeight = options.height;
            var ratio = 0;
            var width = $(that).width();
            var height = $(that).height();

            if (width > maxWidth) {
                ratio = maxWidth / width;
                $(that).css('width', maxWidth);
                $(that).css('height', height * ratio);

            }

            if (height > maxHeight) {
                ratio = maxHeight / height;
                $(that).css('height', maxHeight);
                $(that).css('width', width * ratio);

            }

        });

    };
})(jQuery);