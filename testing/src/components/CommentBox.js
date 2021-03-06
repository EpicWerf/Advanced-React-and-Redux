import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"

class CommentBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comment: "",
		}
	}

	handleChange = (event) => {
		this.setState({ comment: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.saveComment(this.state.comment)
		this.setState({ comment: "" })
	}

	render() {
		return (
			<div className="comment-box">
				<form onSubmit={this.handleSubmit}>
					<textarea
						onChange={this.handleChange}
						value={this.state.comment}
						placeholder="Enter your comment"
					/>
					<br />
					<button>Submit comment</button>
				</form>
			</div>
		)
	}
}

export default connect(null, actions)(CommentBox)
