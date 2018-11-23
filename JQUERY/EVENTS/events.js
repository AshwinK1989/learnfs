$('h1').click(function(){
  console.log("Hello There")
  // Here this refers to the element grabbed via $('h1')
  $(this).text("I am changed")
})

/* Example of using keypress, once we type anythin in textbox
 then the color of h2 will change.*/

 $('input').keypress(function(){
   $('h2').eq(1).toggleClass('changeBlue');
 })

// If the keyboard pressed is enter then toggleClass red for h2

 $('input').keypress(function(event){
   console.log(event.which)
   if(event.which==13) {
   $('h2').eq(0).toggleClass('changeRed');
 }
 })

//It will call the toggleClass on click on p element
$('p').on('click',function(){

  $(this).toggleClass('changeRed')

})

//It will fade away the elements in container when you click on it

$('.container').on('click',function(){

  $(this).fadeOut(2000)

})
