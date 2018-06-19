import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import FetchPosts from './components/FetchPosts'
// import PostView from './components/PostView'
// import Posts from './components/Posts'
import Home from './components/Home'
import NoMatch from './components/NoMatch'

const Post = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={FetchPosts} />
    <Route component={NoMatch} />
  </Switch>
)



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={'mikebach.jpeg'} className="App-logo" alt="logo" />
//           <h1 className="App-title">hey, mike, found this pic of you</h1>
//         </header>
//         <p className="App-intro">
//           Hope you're still boatin'!  --Web Pres
//         </p>
//       </div>
//     );
//   }
// }

export default Post;