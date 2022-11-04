import React, { useContext } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context';

export default function AddUserForm() {

  const { teams, add_user  } = useContext(Context);

const submit = event => {
  event.preventDefault ();
  const { name, team } = event.target;
  add_user(name.value, team.value);
  name.value = '';
  team.value = '';
}

  return (
    <div className={s.user_form_container}>
        <p>Add user</p>
            <form className={s.user_form} onSubmit={submit}>
               <input type="text"  placeholder="Name" name = 'name'/>
               <Select options = {teams} name='team' />
               <button>Add user</button>
            </form>
    </div>
  )
}
