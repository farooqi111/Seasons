import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
//    constructor(props){
//        super(props);
//        this.state = { lat: null, errorMessage: "" }; 
//     }
    state = { lat: null, errorMessage: "" }; //alternate state initiallization

    componentDidMount(){
        console.log("componenet Mounted");
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
            
           )
    }
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please Accept to Continue" />
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    render(){
        return(
       <div className="border red">
       {this.renderContent()}
       </div>
        );
    }

};
  
ReactDom.render(<App/>, document.querySelector('#root'));