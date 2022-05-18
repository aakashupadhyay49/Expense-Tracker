import React from 'react'
import ExpenseList from '../../expense-list';
import TopFold from '../../topfold';
import "./home.css";
const Home = () => {
  return (
    <div className='home'>
        <TopFold/>
        <ExpenseList/>
    </div>
  )
}

export default Home