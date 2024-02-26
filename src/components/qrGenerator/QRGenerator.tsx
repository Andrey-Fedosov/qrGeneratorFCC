import React, { ChangeEvent, useEffect, useState } from "react";
import QRCode from "react-qr-code";

export function QRGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const generateHandler = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h2>This is QR Generator</h2>
      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="enter your value here"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.currentTarget.value)
          }
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={generateHandler}
        >
          Generate
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} />
    </div>
  );
}
