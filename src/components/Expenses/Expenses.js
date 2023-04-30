import React,{useState} from "react";
import Card from "../UI/Card";
 import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
 const Expenses=(props)=>{
  const[year,setyear]=useState("2020");
  const filterHandler=(selectedYear)=>{
    setyear(selectedYear);
  }
  const filteredExpenses=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === year;
  })

    return(
      <div>
       <Card className="expenses">
       <ExpenseFilter selected={year} onFilterChange={filterHandler}/>
       <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
}
export default Expenses;