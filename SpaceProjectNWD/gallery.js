$(function(){
    var images
    let scrollId = 4

    /*$.getJSON("nasa.json", function(json) {
        $.each(json, function(index, value){
            //imagesArray[index] = value.hdurl
            console.log(value.title)
        })
    })*/

    let titleArray = [
        "NGC 1818: A Young Globular Cluster",
        "Spiral galaxy NGC 5037",
        "Night of the Long Leonid",
        "V838 Mon: Echoes from the Edge",
        "Earth's Moon",
        "M51: The Whirlpool Galaxy",
        "Mjølnir: Impact Crater",
        "Phoenix Lander Arrives at Mars",
        "Space Station Silhouette on the Moon",
        "Comet Hale-Bopp Over Val Parola Pass"
    ]

    let imagesArray = [
        "https://apod.nasa.gov/apod/image/9702/ngc1818_hst_big.jpg",
        "images/galaxy.jpg",
        "https://apod.nasa.gov/apod/image/1211/leonid2012bolideVetter1500.jpg",
        "https://apod.nasa.gov/apod/image/0403/v838feb04_hst_bck.jpg",
        "images/moon1.jpg",
        "https://apod.nasa.gov/apod/image/1206/135M51OsservatorioMTM.jpg",
        "https://apod.nasa.gov/apod/image/9906/hammer_tsikalas_big.gif",
        "images/nebula1.jpg",
        "https://apod.nasa.gov/apod/image/1904/IssMoon_Holland_1063.jpg",
        "images/nebula3.jpg"
    ]


    $.each(imagesArray, function(index, value){
        $('#upper').append(`
        <img data-id="` + index + `" class = "galleryImage" src="` + value + `">
        `)
    })
    

    function setTitle(){
    $.each(titleArray, function(index, value){
        if(scrollId == index){
        $('#text-div').html(`
        <h5 data-id="` + index + `" class = "title-box" >${value}</h5>
        `)}
     })}

    images = $('#upper').find('img');
    $.each(images, function(index, image){
    })

    var arrowL = $('#left')
    var arrowR = $('#right')

    arrowL.on('click', function(e) {
        e.preventDefault()
        scrollId = (decrementId(scrollId))
        scrollId = String(scrollId)
        if(scrollId < 0){
            scrollId = 0
        }
        checkClick()
        setTitle()
        })
   

    arrowR.on('click', function(e) {
        e.preventDefault()
        scrollId = (incrementId(scrollId))
        scrollId = String(scrollId)
        if(scrollId > 10){
            scrollId = 10
        }
        checkClick()
        setTitle()
    })

    function incrementId(id) {
        id++
        return id
    }
    function decrementId(id) {
        id--
        return id
    }

    function checkClick() {
        $.each(images, function (index, value){
                if (scrollId == $(this).data('id')){
                $(value).css("z-index", "2")
            }
                else {
                $(value).css("z-index", "0")
            }
    })
    }

})