import React from 'react';
import {Link} from 'react-router-dom';

class AddItem extends React.Component{
    onAdd = (event) => {
        console.log(event);
        this.props.onAdd(event);
        this.props.history.push('/');
    }
    render(){
        return(
            <div className='itemdiv'> 
                <form className='additem' onSubmit={this.onAdd}>
                    <input type="text" placeholder="Add your TODO Task here"/>
                    <br/><br/>
                    <button type="submit">Add ToDo</button>
                </form>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}

export default AddItem;