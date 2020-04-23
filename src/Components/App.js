import React from 'react';
import Navbar from './Navbar';
class App extends React.Component{
  // GET request for remote image
  state={lang:"hindi"};
  componentDidMount=()=>{
    const s = document.createElement('script')
    const language=this.state.lang;
     s.setAttribute('src',`http://developer.quillpad.in/static/js/quill.js?lang=${language}&key=93b6b6f3c7c8d824afc9cb6d0b32454c`);    
     s.setAttribute('id','qpd_script'); 
     document.head.appendChild(s);
  } 
  handleKeyDown=(e)=>{
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`; 
    }
   extractvalue=(e)=>{
      this.setState({lang:e})
      console.log(e);
     }
  render(){
   
    return(

      <center className="container">
      <Navbar extract={this.extractvalue}/>
      <textarea style={{marginTop:'10px'}} rows="15" cols="100" onKeyDown={(e)=>this.handleKeyDown(e)} >
      </textarea>
      </center>
    )
  }
}
export default App;
