import axios from "axios";
import React from "react";

const baseApi = process.env.REACT_APP_BACKENDURL;
    

export default class Feed extends React.Component {
    state = {
        memes: []
    };
   
    componentDidMount() {
        axios.get(`${baseApi}/meme`,{ headers: { "X-meme-token" : window.localStorage.getItem("X-meme-token")}}).then(res => {
            console.log(res);
            this.setState({ memes: res.data});
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
                            {meme.image} 
                            <span>{meme.funny} {meme.sad} {meme.erotic} {meme.scary} Created by : {meme.username} </span>
                         </span>)};          
            </div>
        );
    }
}