
import React from 'react'; 
import PropTypes from 'prop-types'
class ExpenseEntryItem extends React.Component {

   render() {
      return (
         <div>
            <div><b>Item:</b> <em>{this.props.item.name}</em></div>
            <div><b>Amount:</b> <em>{this.props.item.amount}</em></div>
            <div><b>Spend Date:</b> <em>{this.props.item.spendDate.toString()}</em></div>
            <div><b>Category:</b> <em>{this.props.item.category}</em></div>

            <p>The sum of {this.props.item.num1} and {this.props.item.num2} ,<br/>
      is {parseInt(this.props.item.num1) + parseInt(this.props.item.num2)}
      </p>
         </div>
      );
   }
}
ExpenseEntryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    spendDate: PropTypes.instanceOf(Date),
    category: PropTypes.string,
    num1: PropTypes.number,   
    num2: PropTypes.number
  }).isRequired
}

export default ExpenseEntryItem;