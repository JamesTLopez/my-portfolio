import React, { useState } from "react";
import { Cat, Email, Resume, Arrow, Copy } from "../../images/images";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Contact() {
  let [isGitCopied, setGitCopied] = useState(false);
  let [isEmailCopied, setEmailCopied] = useState(false);

  let onGitCopy = () => {
    setGitCopied(true);
    setTimeout(function () {
      setGitCopied(false);
    }, 3000);
  };

  let onEmailCopy = () => {
    setEmailCopied(true);
    setTimeout( () => {
      setEmailCopied(false);
    }, 3000);
  };

  let onClick = () => {
    console.log("Logged");
  };
  return (
    <div className="title-content">
      <div className="contact-content">
        <div className="contact-title">
          <h2>Contact Information</h2>
        </div>
        <div className="contact-information">
          <div className="information">
            
            <div className="images">
              <img id="Cat" src={Cat} alt="Github" />
            </div>
            <div className="text">
              <CopyToClipboard
                onCopy={onGitCopy}
                text="https://github.com/JamesTLopez"
              >
                <button onClick={onClick()}>
                  <img src={Arrow} alt="Arrow"></img>
                  <span>www.github.com/JamesTLopez</span>
                  <img id="copy" src={Copy} alt="copy"></img>
                </button>
              </CopyToClipboard>
              <div className="notify">
                {isGitCopied ? <span id="noti">Copied.</span> : null}
              </div>
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
              <img id="Resume" src={Resume} alt="Resume" />
            </div>
            <div className="text">
                <button >Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
