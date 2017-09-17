import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        console.log(`props in post index component: ${this.props.fetchPosts}`)
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        console.log(this.props.posts)
        return (
            <div className="container">
                <div className="text-xs-right text-right">
                    <Link className="btn btn-outline-warning" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

// shortcut for map dispatch to props, connect handles the dispatch action
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
