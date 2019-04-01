import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.item);
    }

    onEdit = event => {
        event.preventDefault();
        let newItem = this.props.item;
        if (event.target[0].value.length !== 0) {
            newItem.name = event.target.value;
            this.props.onEdit(newItem);
        }
    }

    render() {
        return (
            <div>
                <div>
                    {console.log("in item",this.props.item)}
                    {this.props.item.name}
                </div>
                <div>
                    <button onClick={this.onDelete}>Delete</button>
                </div>
                <div>
                    <button>
                        <Link to={{
                            pathname: `/edit_item/${this.props.item.id}`,
                            name: this.props.item.name,
                            onEdit: this.onEdit
                        }}>
                            Edit
                        </Link>
                    </button>

                </div>
            </div>
        )
    }
}

export default Item;