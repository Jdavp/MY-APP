import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        post : []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.setState({post: data})
    }

    render() {
        return (
            <div>
               <h1>publication post</h1> 
            </div>
        )
    }
}
