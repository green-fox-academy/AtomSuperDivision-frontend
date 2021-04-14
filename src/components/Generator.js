import React, { useState, useEffect } from "react";
import { Meme } from "./Meme";


const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

function Generator() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);
  const [caption, setCaption] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setTemplates(response.data.memes))
    );
  }, []);

  if (meme) {
    console.log(meme);
    return (
      <div style={{ textAlign: "center" }}>
      <form> 
        <input placeholder="caption"
         value={caption}
         onChange={(e) => setCaption(e.target.value)}/>
        <img style={{ width: 200 }} src={meme} alt="custom meme" />
        <button>Save & Post</button>
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
          <button
            type="submit"
          >
            create meme
          </button>
        </form>
      )}
      {!template && (
        <>
          <h1>Pick a template</h1>
          {templates.map((template) => {
            return (
              <Meme
                key={template.id}
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

export default Generator;
