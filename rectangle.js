/* global $ :true*/
function roundFractional(x,y){
  return Math.round(x*Math.pow(10,y))/ Math.pow(10,y);
}

$(function(){

  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click enent*/
  $btnCal.click(function(){
    //get value
    var w = Number($width.val()),
        h = Number($height.val());
    //calculate
    /*  
    var p=2 * roundFractional(w+h,2);
        a = roundFractional(w*h,2);
    */
    var rect = rectangle();

    //output
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));

  });
});
