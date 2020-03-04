import React, {Component} from 'react';
import './App.css';

let elems = {
    header: 'Dinos are gone',
    author: 'timmy',
    content: 'this is a post'
}

let commentStuff =[
    {
        commentHeader: 'rawr',
        commentBody: ' hi'
    },
    {
        commentHeader: 'Radasaurus',
        commentBody: 'rawrrawr'
    }
];
class Header extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.author}</h3>

            </div>
        )
    }
}

class Content extends Component {
    constructor(props) {
        super()
        this.state = {
            body: 'Check out this body property!'
        }
    }
    changeBody(e) {
        e.preventDefault()
        let content = prompt('enter content')
        this.setState({
            body: content
        })
    }
    render () {
        return (
            <div>
                <p>{this.state.body}</p>
                <button onClick={e => this.changeBody(e)}>edit</button>
            </div>
        )
    }
}

class Comment extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.commentHeader}</h3>
                <p>{this.props.commentBody}</p>
            </div>
        )
    }
}

class Commentpost extends Component {
    render () {
        let comments = [];
        commentStuff.forEach(function(comment, index) {
            comments.push(
            <Comment
                commentHeader={comment.commentHeader}
                commentBody={comment.commentBody}
                />)
        })

        return <div>{comments}</div>
            
    
    }
}

function Post() {
    return (
        <div>
            <Header header={elems.header} author={elems.author} />
            <Content content={elems.content} />
            
            <Commentpost />
        </div>
    )
}

export default Post;