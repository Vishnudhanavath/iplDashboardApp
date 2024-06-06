import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {
    // umpires,
    result,
    // manOfTheMatch,
    // id,
    // date,
    // venue,
    competingTeam,
    competingTeamLogo,
    matchStatus,
    // firstInnings,
    // secondInnings,
  } = eachMatch
  const status = matchStatus === 'Lost' ? 'lost' : 'won'
  return (
    <li className="recent-match-bg">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-log"
      />
      <p className="match-heading">{competingTeam}</p>
      <p className="param">{result}</p>
      <p className={`${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
