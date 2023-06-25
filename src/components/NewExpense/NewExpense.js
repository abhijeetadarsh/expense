import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
    function saveExpenseDateHandler (enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler}/>
    </div>;
}