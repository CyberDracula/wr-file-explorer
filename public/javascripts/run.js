
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
    if($("#searchinput").val().length > 2) {
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
    } else {
        $('#results').append('<h4>Add at least 3 characters</h4>');
    }

}

function getPDF(file) {
    console.log(file);
    $('#pdfimg').remove();
    $('canvas#pdfimg').remove();
    $('#spinner').show();
    img = '<img id="pdfimg" class="img-fluid" draggable="true" src="/generatejpg?file='+file+'" />';
    $('.modal-body').append(img);
    $('#pdfimg').on('load', function() {
        $('#spinner').hide();
        $( "#pdfimg" ).draggable();
    });
    $('#myModal').modal({show:true})
}

function rotateImage(orientation) {
    
    
    var degree = 0;
    if(orientation == 'left')
        degree = 270;
    var classList = ($('#pdfimg').attr('class')).split(' ');
    classList.forEach(c => {
        switch (c) {
            case 'rot90':
                orientation == 'right' ? degree = 180 : degree = 0;
                break;
            case 'rot180':
                orientation == 'right' ? degree = 270 : degree = 90;
                break;
            case 'rot270':
                orientation == 'right' ? degree = 0 : degree = 180;
                break;
            default:
                x = 0
                break;
        }
    });

    $('#pdfimg').animate({  transform: degree }, {
        step: function(now,fx) {
            if(degree != 0) {
                $(this).removeClass(['rot90','rot180','rot270']); 
                $(this).addClass('rot'+degree);
            }
            else {
                $(this).removeClass(['rot90','rot180','rot270']);  
                orientation == 'right' ? $(this).addClass('rot90') : null;
            }
            }
        });

}

function zoom(position) {
    var size = '100%';
    $( "#pdfimg" ).effect( "size", {
        to: { width: '80%', height: '80%' }
      }, 1000 );
}

