import React, { Component } from "react";
// import React from 'react';
import resume from "../assets/res1.png";
import resume2 from "../assets/res2.png";
import "../../components/index.css";
import Dexter_Resume from "../assets/Dexter_Resume.pdf";

export default function Resume() {
  const color = {
    backgroundColor: "#f4f4f4",
  };

  const btn = {
    backgroundColor: "pink!important",
  };

  function handleDownload() {
    const pdfFilePath = Dexter_Resume;

    // Create a temporary anchor element and set its attributes.
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "Dexter_Resume.pdf"; // Set the downloaded file's name.

    // Append the link to the body and click it programmatically to trigger the download.
    document.body.appendChild(link);
    link.click();

    // Clean up: Remove the temporary link from the DOM.
    document.body.removeChild(link);
  }

  return (
    <div style={color} className="col-12">
      <button className="PDFbtn" onClick={handleDownload}>
        Download
      </button>
      <img className="mainResume" src={resume} alt="dexter" s resume />
      <img className="mainResume" src={resume2} alt="dexter" s resume />
    </div>
  );
}
