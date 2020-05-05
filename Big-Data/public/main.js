$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://picsum.photos/list",
    })
        .done(function( data ) {
            for(let i=0; i<data.length; i++){
                let box = $('<div class="col-3"></div>');
                let img = $('<img src="https://picsum.photos/200/200?image='+data[i].id+'" alt="" class="img-responsive img-thumbnail image">')
                box.append(img);
                $('.images').prepend(box);
            }

            test()

        });

    function test(){
        $('.image').click(function () {
            let element = $(this);
            let urlToTest = element.attr('src');
            $.ajax({
                method: "GET",
                url: "/test",
                data:{ url: urlToTest }
            })
                .done(function( data ) {
                    if (!element.parent().next().hasClass('desc')){
                        getResults(element, data);
                    }

                });
        })
    }

    function getResults(element, data) {
        let box = $('<div class="col-3 desc" style="font-size:10px ;"></div>');
        let res = JSON.parse(data);
        let description = "<p>Description: <b>"+ res.description.captions[0].text +'</b><br>';
        description += "Taux de sureté: <b>"+ res.description.captions[0].confidence +'</b></p>';
        let tags = "<p class='tags'>Tags: "+ res.description.tags
        description += tags;
        box.append(description);
        element.parent().after(box);
    }

});
