$(document).ready(function(){

  var $charCount = $("#char-count").hide()
  var $tweetSubmit= $('#tweet-submit').hide()
  var maxChar = 140
  var textVal
  var fin


  $('#ourtext').click(function(){

     $charCount = $("#char-count").show()
     $tweetSubmit= $('#tweet-submit').show()
    $("#ourtext").height(45)

  })

 var strCount = $("#char-count").text();
 var intCount = parseInt(strCount)

 $( "#ourtext" ).keydown(function() {
    textVal = $("#ourtext").val()
    fin = maxChar - textVal.length
    if(fin <= 0){
     $charCount.html("<div id=\"char-count\"><span style=\"color:red\">" + fin.toString() + "</span></div>")
     $('#tweet-submit').prop("disabled",true)
   }else if (fin <= 10) {
     $charCount.html("<div id=\"char-count\"><span style=\"color:red\">" + fin.toString() + "</span></div>")
     $('#tweet-submit').prop("disabled",false)
   }else{
    $charCount.html("<div id=\"char-count\">" + fin.toString() + "</div>")
  }
 })



});
