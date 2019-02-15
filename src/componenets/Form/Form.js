import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            ImageURL: '',
            ProductName: '',
            Price:0,
            input: ''
        }
    }

    handleImageUrl(val){
        this.setState({
            ImageURL: val
        });
    }

    handleProductName(val){
        this.setState({
            ProductName: val
        })
    }

    handlePrice(val){
        this.setState({
            Price: val
        })
    }

    cancelText(){
        this.setState({
            ImageURL: '',
            ProductName: '',
            Price: 0
        })
    }

    createProduct() {
        const {ImageURL, ProductName, Price} = this.state
        axios.post('/api/product', { ImageURL, ProductName, Price }).then(res => {
            this.setState({
                
            })
        })
      }

    render() {
        return(
            <div>
                <h1>Form</h1>
                <input value={this.state.ImageURL} onChange={(e) => this.handleImageUrl(e.target.value) }></input>
                <input value={this.state.ProductName} onChange={(e) => this.handleProductName(e.target.value) }></input>
                <input value={this.state.Price} onChange={(e) => this.handlePrice(e.target.value) }></input>
                <button onClick={(e) => this.cancelText(e.target.value)}>Cancel</button>
                <button onClick={() => this.createProduct()}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;