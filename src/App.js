import React from "react";
import Card from "./components/Card";

import './App.css'

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchValue: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => this.setState({ posts: data }))
  }

  render() {

    const filteredPosts = this.state.posts.filter((post) => {
      if(post.title.includes(this.state.searchValue)){
        return true
      } else {
        return false 
      }
    })

    return (
      <div style={{ textAlign: 'center' }}>

        <input type="text" value={this.state.searchValue} onChange={(event) => {
          this.setState({ searchValue: event.target.value})
        }}/>

        <div className="card-list">
          {filteredPosts.map((p) => {
            return <Card name={p.title} body={p.body} size="medium" />
          })}
        </div>
      </div>
    )
  }
}

export default Main;