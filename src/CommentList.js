class commentList {
	constructor(comments){
		this.comments = comments
	}

	render (){
		var x = `<ul>${this.comments.map(comment => comment.render())}</ul>`
		return x.replace(/,/g, '')
	}

	addComment (text){
		this.comments.push(new Comment(text))
	}

}