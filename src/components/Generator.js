import React, { useState, useEffect } from "react";
import { Meme } from "./Meme";
import axios from "axios";
const baseApi = process.env.REACT_APP_BACKENDURL;

const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);
  const [caption, setCaption] = useState("");
  let data = new FormData();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setTemplates(response.data.memes))
    );
  }, []);

  const submit = async (e) => {
    e.preventDefault();
        axios.post(`${baseApi}/meme`, data,{
      headers: {
        "X-meme-token": window.localStorage.getItem("X-meme-token"),
      },
    });
  
  };

  if (meme) {
    data.append("caption", caption);
    data.append("file", meme);
    

    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={submit}>
          <input
            placeholder="caption"
            type="text"
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <img style={{ width: 200 }} src={meme} alt="custom meme" />
          <input value={meme}></input>
          <button type="submit">Save & Post</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      {template && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // add logic to create meme from api
            const params = {
              template_id: template.id,
              text0: topText,
              text1: bottomText,
              username: process.env.REACT_APP_IMGFLIP_USERNAME,
              password: process.env.REACT_APP_IMGFLIP_PASSWORD,
            };
            const response = await fetch(
              `https://api.imgflip.com/caption_image${objectToQueryParam(
                params
              )}`
            );
            const json = await response.json();

            setMeme(json.data.url);
          }}
        >
          <Meme template={template} />
          <input
            placeholder="top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            placeholder="bottom text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <button type="submit">create meme</button>
        </form>
      )}
      {!template && (
        <>
          <h1>Pick a template</h1>
          {templates.map((template) => {
            return (
              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
