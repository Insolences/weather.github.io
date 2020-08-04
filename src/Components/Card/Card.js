import React from 'react';
import './Card.css';

export default class Card extends React.Component {

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderCards(){
        const tm = this.props.time * 500;
        const dayName = new Date(this.props.day.dt * 1000).toLocaleString('ru', {weekday: 'long'});
        const imgURL = `http://openweathermap.org/img/wn/${this.props.day.weather[0].icon}@2x.png`

            return (
                <div className="col-auto" style={{
                    animation: `shadow ${tm}ms linear`,
                }}>
                    <div className="card">
                        <h2 className="card-title">{this.capitalizeFirstLetter(dayName)}</h2>
                        <img src={imgURL} alt={this.props.day.weather[0].description} className="card-img-top"/>
                        <h2>{Math.round(this.props.day.main.temp)} °C</h2>
                        <div className="card-body">
                            <h5>{this.capitalizeFirstLetter(this.props.day.weather[0].description)}</h5>
                        </div>
                    </div>
                </div>
            )
    }

    render() {
        return this.renderCards()
    }
}

