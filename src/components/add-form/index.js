import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { categories } from '../../constants/add-expense'
import { addExpense } from '../redux/actions/expenses';

import "react-toastify/dist/ReactToastify.css";
import "./add-form.css";
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from './success-modal';




const AddForm = () => {
  const cat=categories;
  const [categoryOpen,setcategoryOpen]=useState(false)
  const [title,setTitle]=useState('')
  const [amount,setAmount]=useState('')
  const [category, setCategory] = useState()
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch=useDispatch()

  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }

  const handleAmount=(e)=>{
    const val=parseFloat(e.target.value)
    if(isNaN(val)){
      setAmount("")
      return
    }

    setAmount(val)
  }

  const handleCategory=(category)=>{
    setCategory(category)
    setcategoryOpen(false)
  }

  const handleSubmit=()=>{
    if(title===""||amount===""||!category){
      const notify=()=>toast("please enter valid data")
      notify()
      return
    }
    const data={
      title,amount,category,createdAt:new Date()
    }
    dispatch(addExpense(data))
    setModalOpen(!modalOpen);
  }


  return (
    <div className='add-form'>

      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    <SuccessModal modalOpen={modalOpen} setmodalOpen={setModalOpen}/>
      <div className='form-item'>
        <label>Title</label>
        <input placeholder='Give  a name to your exenditure ' value={title}onChange={(e)=>handleTitle(e)}></input>
      </div>
      <div className='form-item'>
        <label>Amount ₹</label>
        <input  className='amount-input'  value={amount} placeholder="Enter Amount" onChange={(e)=>handleAmount(e)}></input>
      </div>
     


<div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setcategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='form-add-button'>
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class='fi-rr-paper-plane'></i>
        </div>
      </div>

    </div>
  )
}

export default AddForm