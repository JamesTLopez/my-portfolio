import React, { useState } from "react";
import { Cat, Email, Resume, Arrow, Copy } from "../../images/images";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PDF from "../../images/JamesTheoLopezCV.pdf";

function Contact() {
  let [isEmailCopied, setEmailCopied] = useState(false);

  let onEmailCopy = () => {
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  let onClick = () => {
    console.log("Logged");
  };
  return (
    <div className="title-content">
      <div className="contact-content">
  
        <div className="contact-information">
          <div className="information">
            <div className="images">
              <a
                href="https://github.com/JamesTLopez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="Cat" src={Cat} alt="Github" />
              </a>
            </div>
            <div className="text">
              <a
                href="https://github.com/JamesTLopez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="Git"onClick={onClick()}>
                  <span>www.github.com/JamesTLopez</span>
                </button>
              </a>
            </div>
          </div>
          <div className="information">
            <div className="images">
              <img id="Email" src={Email} alt="Email" />
            </div>
            <div className="text">
              <CopyToClipboard
                onCopy={onEmailCopy}
                text="James.Theo.Lopez@gmail.com"
              >
                <button onClick={onClick()}>
                  <img src={Arrow} alt="arrow"></img>
                  <span>James.Theo.Lopez@gmail.com</span>
                  <img id="copy" src={Copy} alt="copy"></img>
                </button>
              </CopyToClipboard>
              <div className="notify">
                {isEmailCopied ? <span id="noti">Copied.</span> : null}
              </div>
            </div>
          </div>

          <div className="information">
            <div className="images">
              <a href={PDF} target="_blank" rel="noopener noreferrer">
                <img id="Resume" src={Resume} alt="Resume" />
              </a>
            </div>
            <div className="text">
              <a href={PDF} target="_blank" rel="noopener noreferrer">
                <button id="Resume">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
