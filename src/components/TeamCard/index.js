import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImgUrl, id} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="card">
        <img src={teamImgUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
