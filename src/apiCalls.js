const axios = require('axios');

export const getPlayersByName = async (name) => {

    const nameConverted = name.replace(/\s+/g, '-').toLowerCase();

    const res = await axios({
        method: 'get',
        url: `https://api.mysportsfeeds.com/v2.1/pull/nba/players.json?player=${nameConverted}`,
        responseType: 'json',
        headers: {
          "Authorization": "Basic " + btoa("359f5987-f944-43bb-b65a-503ec4:MYSPORTSFEEDS")
        }
      })

      console.log(res.data)
      return res.data
}

export const seasonalPlayerStats = async (playerId) => {


  const res = await axios({
      method: 'get',
      url: `https://api.mysportsfeeds.com/v2.1/pull/nba/2019-2020-regular/player_stats_totals.json?player=${playerId}`,
      responseType: 'json',
      headers: {
        "Authorization": "Basic " + btoa("359f5987-f944-43bb-b65a-503ec4:MYSPORTSFEEDS")
      }
    })

    console.log(res.data.playerStatsTotals[0])
    return res.data
}

export const getRosterByTeam = async (team) => {
    const res = await axios({
        method: 'get',
        url:`https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/active_players.json?team={team}`,
        responseType: 'json',
        headers: {
          "Authorization": "Basic " + btoa("359f5987-f944-43bb-b65a-503ec4:wnstjd77")
        }
      })

      console.log(res.data.activeplayers.playerentry)

      return res.data.activeplayers.playerentry
}


export const teamStandings = async () => {
    const res = await axios({
        method: 'get',
        url:`https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/playoff_team_standings.json`,
        responseType: 'json',
        headers: {
          "Authorization": "Basic " + btoa("359f5987-f944-43bb-b65a-503ec4:wnstjd77")
        }
      })

      console.log(res.data)
    
}
