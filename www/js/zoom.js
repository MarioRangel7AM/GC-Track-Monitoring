$(document).ready(function(){
	$("#smallZoomImage").smartZoom(); // appel du plugin de zoom
$("#topPositionMap,#leftPositionMap,#rightPositionMap,#bottomPositionMap").bind("click",moveButtonClickHandler);
$("#zoomInButton,#zoomOutButton").bind("click", zoomButtonClickHandler);

function zoomButtonClickHandler(e){
   var scaleToAdd = 0.8;
   if(e.target.id == "zoomOutButton")
      scaleToAdd = -scaleToAdd;
   $("#smallZoomImage").smartZoom("zoom", scaleToAdd);
}
function moveButtonClickHandler(e){
   var pixelsToMoveOnX = 0;
   var pixelsToMoveOnY = 0;

   switch(e.target.id){
      case "leftPositionMap":
         pixelsToMoveOnX = 50;
         break;
      case "rightPositionMap":
         pixelsToMoveOnX = -50;
      break;
      case "topPositionMap":
         pixelsToMoveOnY = 50;	
      break;
      case "bottomPositionMap":
         pixelsToMoveOnY = -50;	
      break;
   }
   $("#smallZoomImage").smartZoom("pan", pixelsToMoveOnX, pixelsToMoveOnY);
}
Plein écran :
Pour tester le plugin en plein écran sur pc, tablette ou mobile clickez ici.
Documentation :
smartZoom(options):void

});