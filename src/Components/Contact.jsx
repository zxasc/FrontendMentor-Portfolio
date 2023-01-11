import React from "react";

export default function Contact() {
    return(
        <section className="contact">
            <img src="/images/pattern-rings.svg" alt="" className="bg--ring3" />
            <div className="contact--info">
                <h2>Contact</h2>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <form className="contact--form">
                <input type="text" placeholder="NAME" />
                <input type="email" id="email--input" placeholder="EMAIL" />
                <label htmlFor="email" className="email--input-label">Sorry, invalid format here</label>
                <input type="text" id="message--input" placeholder="MESSAGE" />
                <button type="submit" className="contact--form--button">SEND MESSAGE</button>
            </form>
        </section>
    )
}