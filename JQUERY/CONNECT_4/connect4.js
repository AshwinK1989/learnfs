var pone = prompt('Player one: Enter your name, you will be blue')
var ptwo = prompt('Player two: Enter your name, you will be red')
var playerstatus=0;
var colorChange="";
var num = 6;
var i = 0;
var redCount = 0;
var blueCount = 0;
$('h4').text(pone + ': it is your turn, please pick a column to drop your red chip')

$('td').click(function(e) {

    if (ptwo !== null &&  pone !== null && playerstatus==0) {
      $('h4').text(ptwo + ': it is your turn, please pick a column to drop your blue chip')

      colorChange='changeRed';
      playerstatus=1;

    } else if (ptwo !== null &&  pone !== null && playerstatus==1) {
      $('h4').text(pone + ': it is your turn, please pick a column to drop your red chip')

      colorChange='changeBlue';
      playerstatus=0;

    }

  var col = $(this).parent().children().index($(this))+1;
  var row = $(this).parent().parent().children().index($(this).parent());
  console.log('The column number is '+col)
  //$(this).addClass('changeRed')
  console.log(colorChange);

  changeColor(col, colorChange);

})

function changeColor(col, colorChange)  {

  for (i = num; i >= 1; i--) {

   var className = $('tr:nth-child('+i+') td:nth-child('+col+')').attr('class')
   console.log('The class name '+className);
   if (className.includes('changeRed')!==true && className.includes('changeBlue') ===false && playerstatus===1) {
     console.log('red'+className);
     console.log('The colorChange is '+ colorChange);

     $('tr:nth-child('+i+') td:nth-child('+col+')').addClass(colorChange);

     break;
   } else if (className.includes('changeBlue')!==true && className.includes('circle changeRed')!==true && playerstatus===0) {
     console.log('blue'+className);
     console.log('blue'+i);
     console.log('blue'+col);
     console.log('blue'+colorChange);
     $('tr:nth-child('+i+') td:nth-child('+col+')').addClass(colorChange);

     break;
   }


  }

  setTimeout(checkWin(),100);


}

function checkWin() {
  for (var r=1 ; r<=7;r++) {
    var colorConst = $('tr:nth-child('+i+') td:nth-child('+r+')').attr('class');
    console.log('The checkWin() --'+colorConst);
    if(colorConst == 'circle') {
      blueCount=0;
      redCount=0
      break;

    }
    if(colorConst.includes('changeRed')) {
      redCount++;
      blueCount=0;

      if(redCount==4){

        alert(pone+' is winner')
      }


    } else if (colorConst.includes('changeBlue')) {

      blueCount++;
      redCount=0

      if(blueCount==4){

        alert(ptwo+' is winner')
      }

    }

  }
}
