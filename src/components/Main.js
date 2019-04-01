import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AddItem from './AddItems';
import EditItem from './EditItem';

class Main extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        render={props=>{
                            return <Home items={this.props.items} 
                                        onDelete={this.props.onDelete}
                                        onEdit={this.props.onEdit}
                                        {...props}                                        
                                    />
                        }}
                    />
                    <Route
                        path='/add'
                        render={props=>{
                            return <AddItem onAdd={this.props.onAdd} {...props}/>
                        }}
                    />
                    <Route
                        path='/edit/:id'
                        component={EditItem}
                    />
                </Switch>
            </main>
        )
    }
}

export default Main