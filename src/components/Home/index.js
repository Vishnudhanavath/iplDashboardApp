import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const responseData = await response.json()
    const formattedData = responseData.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImgUrl: eachItem.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamCardData: formattedData, isLoading: false})
  }

  render() {
    const {teamCardData, isLoading} = this.state
    return isLoading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="bgContainer">
        <div className="ipl-Desktop">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <div className="card-container">
          <ul className="team-list-items">
            {teamCardData.map(eachItem => (
              <TeamCard eachTeam={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
