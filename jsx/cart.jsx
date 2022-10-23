const React = require('react')
const {
  Link
} = require('react-router')

class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.getInvoice = this.getInvoice.bind(this)
  }
  getInvoice (event) {
    this.props.route.getTotalAmount(this.props.route.cartItems)
  }
  render() {
    return <div>
      {(Object.keys(this.props.route.cartItems).length == 0) ? <p>Your cart is empty</p> : '' }
       <ul>
        {Object.keys(this.props.route.cartItems).map((item, index, list)=>{
          return <li key={item}>{this.props.route.products[item].title} - {this.props.route.cartItems[item]}</li>
        })}
      </ul>
      <Link to="/checkout" 
      onClick={this.getInvoice} 
      className="btn btn-primary" >Checkout
      </Link>
      <Link to="/" className="btn btn-info">Home</Link>
    </div>
  }
}

module.exports = Cart