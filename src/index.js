$(document).ready(function(){
  // your code here!
  $("#note-form").on("submit", function(event){
  	event.preventDefault()
  	var input = $( "input:text" ).val()
  	var comm = new Comment(input)
  	var list = new commentList([comm])
  	$("#comment-list").append(list.render())
  	$("#note-form")[0].reset()
  })
})
