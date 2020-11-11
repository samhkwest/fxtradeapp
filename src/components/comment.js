import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			isEditing: false,
			title: this.props.comment.title,
			desc: this.props.comment.desc
		};
		
		this.handleDescChange = this.handleDescChange.bind(this);
		this.handleTitleChange  =this.handleTitleChange.bind(this);
	}

	editComment(e) {
		this.setState({
			isEditing: true
		});
	}
	saveComment(e, id, title, desc) {
		this.props.actions.saveComment(id, title, desc);
		this.setState({
			isEditing: false
		})
	}
	handleTitleChange(e) {
		this.setState({
			title: e.target.value
		})
	}
	handleDescChange(e) {
		this.setState({
			desc: e.target.value
		})
	}

	render() {
		const {comment} = this.props;
		const {deleteComment, saveComment} = this.props.actions;
		return (
			<div className="comment">
				<input type="text" value={this.state.title} onChange={this.handleTitleChange} />
				<textarea value={this.state.desc} onChange={this.handleDescChange}></textarea>
				<div className="actions">
					<button type="button" onClick={(e) => this.saveComment(e, comment.id, this.state.title, this.state.desc)}>Save</button>
				</div>
			</div>		
		)
	}
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}

export default Comment;