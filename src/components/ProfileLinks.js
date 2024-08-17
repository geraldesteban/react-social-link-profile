import React from "react";

const profileDetails = {
  links: ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"],
};

export function ProfileLinks() {
  return (
    <div className="links">
      {profileDetails.links.map(link => (
        <p key={link} className="link">
          {link}
        </p>
      ))}
    </div>
  );
}
