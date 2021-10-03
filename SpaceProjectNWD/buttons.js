$(function(){

//hover button
$('.btn-default').hover(function(){
    $(this).css("background-color", "#3366ff")
    $(this).css("color", "lightgrey")
    }, function(){
    $(this).css("background-color", "#bfbfbf")
    $(this).css("color", "black")
})

$('.btn-default').click(function(){
    $('#myNav').css("height", "0%")
    $('#closebtn-box').css("visibility", "hidden")
})

function changeContent() {
    $('#news').click(function(){
        $('#item2').hide()
        $('#item3').hide()
        $('#item').fadeIn()
    })

    $('#gallery').click(function(){
        $('#item').hide()
        $('#item3').hide()
        $('#item2').show()
        $('#item2').fadeIn()
    })

    $('#anims').click(function(){
        $('#item').hide()
        $('#item2').hide()
        $('#item3').fadeIn()
    })
    $('#item2').css("display", "default")
    $('#item3').css("display", "default")
}$(changeContent)

})