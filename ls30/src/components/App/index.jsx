import React from 'react'
import Nav from '../Nav'
import ConfigurationsPage from '../../pages/ConfigurationsPage'
import TeamsPage from '../../pages/TeamsPage'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'


export default function App() {

  const [ teams, setTeams ]  = useState ([]);

  const add_team = (team_value) => {
  setTeams ( [...teams, {value : team_value, label: team_value } ] )
  }

  return (
    <div>
      <Nav />
        <Routes>
          <Route path='/configurations' element= { <ConfigurationsPage teams={teams} add_team= {add_team}/> } /> 
          <Route path='/teams' element= { <TeamsPage/> } /> 
        </Routes>
        
    </div>
  )
}

