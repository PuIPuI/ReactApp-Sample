import  React, { Component }  from 'react';
import axios from 'axios';

//Higher order component :: reuse component1 
export default url => WrappedComponent =>
    class extends Component {
        state = {
            data: []
        };

        async componentDidMount(){
            console.log("componentDidMount");
            const result = await axios.get(url);
            this.setState({ data: result.data});
        };

        render(){
            return(
                <WrappedComponent {...this.state} {...this.props} /> 
            )
        }
    }
