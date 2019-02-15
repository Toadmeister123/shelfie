import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        // const {inventoryList} = this.props
        // const mappedInventoryList = this.props.map(product => {
            // return (
                // <Product 
                
                // />
            // )
        // })
        return(
            <div>
                <h1>Dashboard</h1>
                <Product />
                {/* {mappedInventoryList} */}
            </div>
        )
    }
}

export default Dashboard;