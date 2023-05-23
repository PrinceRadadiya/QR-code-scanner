import React, { useState } from "react";
import QRCode from "qrcode";

const Genreat = () => {
  const [text, settext] = useState("");
  const [imagesrc, setImageUrl] = useState("");

  const onhader = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
        window.alert("Please Fill Up Your Information")
    }
  };
  return (
    <div className="w-full h-full font-thin flex flex-col items-center justify-center">
      <h1 className="text-2xl">Create a QR-code</h1>

      <div className="w-[500px] h-[500px] border border-black">
        <input
          type="text"
          className="border-black border p-1 mx-2 my-2 rounded-lg font-thin"
          placeholder="https://youtube.com/"
          value={text}
          onChange={(e) => settext(e.target.value)}

          // defaultValue={"https://"}
        />
        <button
          className="p-1 mx-2 my-2 bg-blue-500 rounded-md"
          onClick={() => onhader()}
        >
          GENERATE
        </button>
        {imagesrc ? (
          <div className="flex items-center justify-center">
            <a href={imagesrc} download>
              <img src={imagesrc} alt="img" className="w-[300px] h-[300px]" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Genreat;
