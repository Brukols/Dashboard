import React, {Component} from "react";
import {FiSettings} from "react-icons/fi";
import './CovidCountryCase.css'
import history from "../../../../history";
import TwitterService from "../../../../core/services/services/TwitterService";
import SearchTweetsModel from "../../../../core/models/services/twitter/response/SearchTweetsModel";

class TwitterSearchTweets extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            model: new SearchTweetsModel()
        }
        this.service = new TwitterService();

        this.onClickParameters = this.onClickParameters.bind(this);

        let getWidgetsData = this.props.parentState.getWidgetData;

        getWidgetsData.push(() => {
            this.getDataWidget();
        });
        this.props.parentState.setGetWidgetData(getWidgetsData);

        this.getDataWidget();
    }

    getDataWidget()
    {
        console.log('yeah');
        this.service.getSearchTweets(this.props.id, () => {

            // GET RESPONSE HERE
            console.log( this.service.getSearchTweetResponse());
            // this.setState({
            //     model: this.service.getDataCountryCaseResponse()
            // })
        }, () => {

        });
    }

    onClickParameters()
    {
        history.push({
            pathname: '/home/widget/twitter/search-tweets/',
            search: '?id=' + this.props.id
        })
    }

    render() {
        return (
            <div id="twitter-search-tweets">
                <div className="content">
                    <div className="header">
                        <div className="covid-logo">
                            <img  />
                        </div>
                        <div className="title">
                            <p>Search tweets</p>
                        </div>
                        <div className="logo-parameters" onClick={this.onClickParameters}>
                            <FiSettings color="white" size={30}/>
                        </div>
                    </div>
                    <div className="content">
                    </div>
                </div>
            </div>
        );
    }
}

export default TwitterSearchTweets;