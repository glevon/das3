import React from 'react';
import './App.css';
import Product from '../../das2/src/components/Product'

class  App extends React.Component {
  constructor(){
    super()
    this.state={
      products:[
        {id:215,name:"Banan",price:500},
        {id:123,name:"Apple",price:400},
        {id:232,name:"Kiwi",price:800},
      ]
    }
  }
  add(x){
    console.log(x)
  }
  render(){
    return (
      <div>
      {
        // <h1>barev</h1>
        // <Product anun={this.state.name} azganun={"Sargsyan"} />        
        this.state.products.map((a,i)=>{
          return(
            <Product key={a.id} obj={a} index={i} addCart={this.add.bind(this)} />
          )
        })
      }
      </div>
    );
  }

}
export default App;
