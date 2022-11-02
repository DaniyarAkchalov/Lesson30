import React from 'react'
import AddTeamForm from '../../components/AddTeamForm'
import AddUserForm from '../../components/AddUserForm'


export default function ConfigurationcPage( {add_team, teams} ) {
  return (
    <div>
      <AddTeamForm add_team ={ add_team}/>
      <AddUserForm teams={ teams }/>

    </div>
  )
}
