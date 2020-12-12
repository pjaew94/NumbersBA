import React from 'react'
import './Stats.scss'

import ListedPlayers from './ListedPlayers/ListedPlayers'
import FilterBar from './FilterBar/FilterBar'



export const Stats = () => {


    
    return (
        <div className='stats-container'>
            <FilterBar />
            <ListedPlayers />
        </div>
    )
}
