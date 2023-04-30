import React,{useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const[editing,setEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
const expensesData={
    ...enteredExpenseData,
    id:Math.random.toString()
}
props.onAddExpense(expensesData);
setEditing(false);
    }
    const editHandler=()=>{
setEditing(true);
    }
    const cancelHandler=()=>{
        setEditing(false);
            }
    return(
        <div className="new-expense">
            {!editing&&<button onClick={editHandler}>Add New Expense</button>}
            {editing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
        </div>
    )
}
export default NewExpense;