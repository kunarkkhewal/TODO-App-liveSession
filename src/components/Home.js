import React, {Component} from 'react';
import Item from './Item';

class Home extends Component{
    render(){
        let items = this.props.items.map(item=>{
            return(
                <Item 
                    key={item.id} 
                    item={item}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                />
            )
        })
        return(
            <div>
                <h1>Welcome to TODO List</h1>
                <div>
                    {items}
                </div>
            </div>
        )
    }
}

export default Home;