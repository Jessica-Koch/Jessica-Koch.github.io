import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const {post} = this.props;

        if(!post) {
            console.log('NO POST')
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// first argument is the app state, second argument is ownProps which are the
// props going to that particular component
const mapStateToProps = ({posts}, ownProps) => {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);
