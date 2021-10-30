import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h1>{props.title}</h1>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card >
    )
}

export default ExpenseItem
