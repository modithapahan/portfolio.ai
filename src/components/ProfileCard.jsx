import React from "react";
import "../styles/ProfileCard.css";
import BackgroundEffect from './BackgroundEffect';
import BottomMenu from "./BottomMenu";

function ProfileCard() {
  return (
    <>
      <BackgroundEffect />
      <div class="card-wrapper">
        <div className="profile-card">
          <div className="avatar-section">
            <img
              src="/face.png" // replace with your photo
              alt="Profile"
              className="profile-img"
            />
            <div className="info">
              <h2>Moditha Pahan</h2>
              <p>25 years old • Matara, Sri Lanka</p>
              <p className="intro">
                Hey👋, I'm Moditha. I love develop softwares specializing in
                AI/ML. Also I’m passionate about AI and DevOps.
              </p>
              <div className="tags">
                {["AI/ML", "problem Solving", "DevOps", "Sport"].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bio">
            <p>
              I'm Raphaël Giraud, a 21-year-old full-stack developer
              specializing in AI, currently rocking it at 42 Paris. Before tech,
              I was a mountain biker! Now at LightOn AI, I get to play with some
              cool AI stuff. I love tech, entrepreneurship, and building awesome
              SaaS products. Voilà! What about you?
            </p>
          </div>
        </div>
      </div>
      <BottomMenu />
    </>
  );
}

export default ProfileCard;
