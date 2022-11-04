import React, { useContext } from 'react'
import { Context } from '../../context';
import s from './index.module.css'

export default function AddTeamForm() {
    
const { add_team } = useContext(Context);

    const submit = event => {
        event.preventDefault(); 
        const { team_title } = event.target;
        add_team(team_title.value)
        team_title.value = '';
      }
  return (
    <div className={s.team_form_container}>
         <p>Add team</p>
        <form className={s.team_form} onSubmit={submit}>
            <input type="text"  placeholder="Team's name" name = 'team_title'/>
            <button>Add</button>

        </form>

    </div>
  )
}
