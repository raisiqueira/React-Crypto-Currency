import React, { Component } from 'react';
import './Tickers.css';

import CryptoCurrency from './CryptoCurrency.js';
import Axios from 'axios';

class Tickers extends Component {
    constructor (props) {
        super(props);
        // set the state of the app
        this.state = {
            data: [
                {
                    id: 'bitcoin',
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0',
                    price: 1
                },

                {
                    id: 'ethereum',
                    name: 'Ethereum',
                    symbol: 'ETH',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0',
                    price: 1
                },

                {
                    id: 'bitcoin-cash',
                    name: 'Bitcoin Cash',
                    symbol: 'BCC',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0',
                    price: 1
                },
            ]
        };
    }

    // when the component did load, the data is loaded and updated every 10 seconds
    componentDidMount () {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }

    // Get data from Coinmarketcap API with Axios
    fetchCryptocurrencyData () {
        Axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=5`)
        .then(res => {
            let wanted = ['bitcoin', 'ethereum', 'bitcoin-cash'];
            let result = res.data.filter(currency => wanted.includes(currency.id));
            this.setState({ data: result})
        })
        .catch(err => console.log(err));
    }

    render () {
        let tickers = this.state.data.map((currency) => 
            <CryptoCurrency data={currency} key={currency.id} />
        );

        return (
            <div className="tickers-container">
            <ul className="tickers">{tickers}</ul>
            </div>
        );
    }
}

export default Tickers;