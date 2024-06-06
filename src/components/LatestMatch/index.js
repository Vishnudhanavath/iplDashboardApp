import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatch

  return (
    <div className="latest-match-bg">
      <div>
        <p className="opponent-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>
          <span className="venue">Venue: </span>
          {venue}
        </p>
        <p>status: {result}</p>
        {/* <p>status: {matchStatus}</p> */}
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-img"
        />
      </div>
      <div>
        <p>Umpires: {umpires}</p>
        <p>firstInnings: {firstInnings}</p>
        <p> secondInnings: {secondInnings}</p>
        <p>Man of the Match: {manOfTheMatch}</p>
      </div>
    </div>
  )
}
export default LatestMatch
