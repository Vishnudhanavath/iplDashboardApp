import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatch: {},
    recentMatch: [],
    teamName: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseData = await response.json()
    const teamBannerUrl = responseData.team_banner_url
    const latestMatchDetails = this.convertKeysToCamelCase(
      responseData.latest_match_details,
    )
    const recentMatchDetails = responseData.recent_matches.map(eachItem =>
      this.convertKeysToCamelCase(eachItem),
    )

    this.setState({
      bannerUrl: teamBannerUrl,
      latestMatch: latestMatchDetails,
      recentMatch: recentMatchDetails,
      teamName: id,
      isLoading: false,
    })
  }

  convertKeysToCamelCase = obj => {
    const camelCaseObj = {}
    Object.entries(obj).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const camelCaseKey = key.replace(/_(\w)/g, (_, letter) =>
          letter.toUpperCase(),
        )
        camelCaseObj[camelCaseKey] = value
      }
    })
    return camelCaseObj
  }

  render() {
    const {
      bannerUrl,
      latestMatch,
      recentMatch,
      teamName,
      isLoading,
    } = this.state
    console.log(latestMatch)
    console.log(recentMatch)
    return isLoading ? (
      <div>
        <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`bg-container ${teamName}`}>
        <img src={bannerUrl} alt="team banner" className="banner" />
        <h1 className="latest-matches">Latest Matches</h1>
        <div>
          <LatestMatch latestMatch={latestMatch} />
        </div>
        <ul className="recent-list-items">
          {recentMatch.map(eachItem => (
            <MatchCard eachMatch={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
