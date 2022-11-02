import React from 'react'
import s from './index.module.css'
import Select from 'react-select'

export default function AddUserForm({teams }) {

  console.log(teams)

    return (
    <div className={s.user_form_container}>
        <p>Add user</p>
        
        <form className={s.user_form} >
           
           <input type="text"  placeholder="Name" name = 'name'/>
           <Select options = {teams} />
           <button>Add user</button>


        </form>
    </div>
  )
}
