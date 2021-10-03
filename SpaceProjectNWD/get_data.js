$(function(){

    var query ='10'
    var $item = $('#item')
    //OVO JE DOHVACANJE GLAVNOG NASA API-a
    
    $.ajax({
        method: 'GET',
        url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=' + query,
        headers: { 'api_key': 'DEMO_KEY'},
        contentType: 'application/json',
        success: function(item) {
            $.each(item, function(i, item){
                $item.append(
                `<div id="items" class="col-sm-12">
                    <img src="${item.url}" class="rounded">
                    <h2>` + item.title + `</h2>
                    <p>`+ item.explanation + `</p>
                    <small>`+ item.date + `</small>
                </div>`)
            });
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    })
    /*
    $.ajax({
        method: 'GET',
        url: 'https://api.cascadus.hr/api/admin/products/active',
        contentType: 'json',
        success: function(item) {
            console.log(item);
            $.each(item, function(i, item){
                $item.append(
                    `<div id="items" class="col-sm-12">
                        <img src="${item.thumbnail}">
                        <h2>` + item.naziv + `</h2>
                        <p>`+ item.opis + `</p>
                    </div>`)
            });
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })
})*/