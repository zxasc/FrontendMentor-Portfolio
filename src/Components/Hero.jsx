import React from "react";

export default function Hero({ handleScrollToContact, windowWidth }) {
 
    const ImgDesktop = "/images/image-profile-desktop.webp";
    const ImgTablet = "/images/image-profile-tablet.webp";
    const ImgMobile = "/images/image-profile-mobile.webp";
    

  return (
    <section className="hero">
        <img src="/images/pattern-rings.svg" alt="" className="bg--ring1" />
        <img src="/images/pattern-circle.svg" alt="" className="bg--circle"/>
        <img
            src={(windowWidth >= 1101) ? ImgDesktop : ((windowWidth < 1101)&&(windowWidth >= 709)) ? ImgTablet : (windowWidth < 709) ? ImgMobile : null} 
            alt=""
            className="hero--photo"
        />
        <div className="hero--text">
            <h1 className="hero--header">
                Nice to{(windowWidth<=1101 && windowWidth>709) && <br />} meet you! I'm <div className="stack"><span className="hero--header--name">Adam Keyes.</span></div>
            </h1>
            <p className="hero--paragraph">
                Based in the UK, I'm a front-end developer passionate about building
                accessible web apps that users love.
            </p>
            <button href="link" className="contact-me--button" onClick={handleScrollToContact}>
                CONTACT ME
            </button>
        </div>
        
    </section>
  );
}
