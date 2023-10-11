import React from "react";
import HomePageNavBar from "../HomePageNavBar";
import "../../css/SummonerMainPage.css"; // Import the CSS file with a relative path
import { useLocation } from 'react-router-dom';
import SummonerInfoCard from "./SummonerInfoMainContainer/SummonerInfoCard";
import SummonerMasteryCard from "./SummonerInfoMainContainer/SummonerMasteryCard";
import { Container } from "react-bootstrap";
import RankInfoContainer from "./SummonerInfoMainContainer/RankInfoContainer";

const SummonerMainPage = () => {
    const location = useLocation();
    const summonerInfo = location.state.summonerInfo;
    console.log('highest mastery info is:', summonerInfo.highestMasteryChamp)
    
    return (
        <div className='main-container'>
            <HomePageNavBar className="homepage-nav-bar" />
            <div className="summoner-main-page">
                <div className="summoner-info-main-container">
                  <div className="summ-card-info-container">
                  <SummonerInfoCard summonerInfo={summonerInfo} />
                    <SummonerMasteryCard highestMasteryChamp={summonerInfo.highestMasteryChamp} />
                  </div>
                    <div className="summ-stats">
                        <div className="summ-ranked-flex-wr-container">
                            <Container className='ranked-info-container'>
                                <RankInfoContainer rankinfo={summonerInfo.leagueEntries.soloQueueInfo} />
                            </Container>
                            <div className='ranked-info-container'>summone rank flex</div>
                            <div className="champ-wr-container">champ winrates</div>
                        </div>
                        <div className="summ-match-history-container">3</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SummonerMainPage;