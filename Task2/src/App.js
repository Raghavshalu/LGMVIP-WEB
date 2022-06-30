import React from "react";
import Home from './Home'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      DataisLoaded:true
    };
    this.uodate=this.update.blind(this)
  }
  update(){
    const link="https://reqres.in/api/users?page=1";
    fetch(link)
    .then((res)=>res.json())
    .then((items)=>{
      this.setState({
        items:items.data,
        DataisLoaded:false
      });
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  render(){
    return(<>
    <nav>
          <div className="box" >
            <div className="row">
            <div className="column1">
            <h2>User Data </h2>
            </div>
            <div>
            <button onClick={this.update}>Get Users</button>
            </div>
            </div>
          </div>
    </nav>
    <div className="box2">
         <Home Dataisloaded={this.state.loading} items={this.state.users_data}/>
         </div>
    </>)
  }
}
export default App;
