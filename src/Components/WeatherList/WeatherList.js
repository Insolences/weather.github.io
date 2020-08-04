import React from 'react';
import Card from '../Card/Card';
import "./Weather.css"
import { getWeatherList }  from '../API/API'

export default class WeatherList extends React.Component {
    state = {
        days: []
    }

    componentDidMount = () => {
        getWeatherList().then(res =>
            this.setState({
            days: res
        })
        )
    }

    renderCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index} time={index + 1}/>)
    }

    render() {
        return (
            <div className="text-center ">
                <div className="row justify-content-center w-100 d-flex align-content-center justify-content-center">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

