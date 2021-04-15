import axios from "axios";
import React from "react";
import { FaSmile } from 'react-icons/fa';
import { FaSadCry } from 'react-icons/fa';
import { FaKiss } from 'react-icons/fa';
import { FaSurprise } from 'react-icons/fa';

const baseApi = process.env.REACT_APP_BACKENDURL;

export default class Feed extends React.Component {
    state = {
        memes: []
    };

    componentDidMount() {
        axios.get(`${baseApi}/meme`, { headers: { "X-meme-token": window.localStorage.getItem("X-meme-token") } }).then(res => {
            console.log(res);
            this.setState({ memes: res.data });
        });
    }

    render() {
        return (
            <div>
                {this.state.memes.map(meme =>
                    <span key={meme.createdAt}>
                        <h2>
                            {meme.caption}
                        </h2>
                        <img src={meme.image}></img>
                        <div>
                            <button>{meme.funny} Funny <FaSmile /> </button>
                            <button>{meme.sad} Sad <FaSadCry /> </button>
                            <button>{meme.erotic} Erotic <FaKiss /> </button>
                            <button>{meme.scary} Scary <FaSurprise /> </button>
                            Created by : {meme.username}
                            <button>See comments</button>
                        </div>
                    </span>)}
            </div>
        );
    }
}