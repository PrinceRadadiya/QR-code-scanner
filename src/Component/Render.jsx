import React, { useRef, useState } from "react";
import  QrReader  from "react-qr-reader";

const Render = () => {
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  // console.log(scanResultWebCam);

  const qrRef = useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  return (
    <div className="w-full h-full font-thin flex flex-col items-center justify-center">
      <h1 className="text-2xl">Scan QR</h1>

      <div className="w-[500px] h-[500px] border border-black">
        <div className="flex flex-col items-center justify-center my-2">
          <button
            className="p-1 w-[200px] bg-red-500 rounded-md"
            onClick={onScanFile}
          >
            Scan Qr Code
          </button>

          <div>
            <QrReader
              ref={qrRef}
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorFile}
              onScan={handleScanFile}
              legacyMode
            />
            <h3>Scanned Code: {scanResultFile}</h3>
          </div>

          <div>
            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render;
