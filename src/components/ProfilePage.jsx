import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import NavMenu from "./NavMenu";

function ProfilePage() {

  const location = useLocation();
  const [question, setQuestion] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (location.state?.autoQuery) {
      setQuestion(location.state.autoQuery);

      setTimeout(() => {
        setShowProfile(true);
        setQuestion("");
      }, 3000); // Show profile after 3 seconds
    }
  }, [location.state]);

  return (
    <div className="profile-page">
      <div className="search-bar">
        <input
          type="text"
          value={question}
          placeholder="Ask me anything..."
          readOnly
        />
      </div>

      {showProfile && <ProfileCard />}
    </div>
  );
}

export default ProfilePage;
