import  { Component } from 'react';
import TitleComponent from './title/title';

class Catalogo extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'julian'
        }
    }

    render() { 
        return <div>
            <TitleComponent name={this.state.name}>
            </TitleComponent>
        </div>;
    }
}
 
export default Catalogo;