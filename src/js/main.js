// if (process.env.NODE_ENV !== 'production') {
//   if (module.hot) {
//     module.hot.accept();
//     }
// }
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signup from './components/Signup/Signup.js';
// import { GoogleLogin } from 'react-google-login';

// js helpers
// var qs = function(selector){
//   return document.querySelector(selector);
// }
// var element = function(id){
//   return document.getElementById(id);
// }
//
// class WorkDetails extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.props.post.title}</h1>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       posts: []
//     }
//   }
//
//   // gets called after the first render takes place...
//   componentDidMount(){
//     axios.post('/posts').then((response) => {
//       this.setState({
//         posts: response.data.posts
//       });
//     });
//
//     axios.post('/posts/5a92af3a0b5d185866acf4c6').then((response) => {
//       console.log(response.data.post);
//     });
//   }
//   render(){
//     return(
//       <Switch>
//       <Route exact path='/' render={() => {
//         return(
//           this.state.posts && this.state.posts.map((postItem) => {
//             return (
//               <Link to={`posts/${postItem._id}`} key={postItem._id} style={{ color: 'tomato' }}>
//                 <h3>{postItem.title}</h3>
//                 <p>{postItem.shortDescription}</p>
//               </Link>
//             );
//           })
//         );
//       }
//       }/>
//       <Route path='/posts/:postId' render={({ match }) => <WorkDetails post = {this.state.posts.find((post) => post._id === match.params.postId)} />}/>
//       </Switch>
//     );
//   }
// }

// export default Signup;

ReactDOM.render(<Signup />,
  document.getElementById('root'));
