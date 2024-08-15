const profileDetails = {
  name: "Jessica Randall",
  address: "London, United Kingdom",
  about: "Front-end developer and avid reader.",
  links: ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"],
};

export default function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="card">
      <ProfileDetails />
    </div>
  );
}

function ProfileDetails() {
  return (
    <div>
      <img
        className="image-jessica"
        src="images/avatar-jessica.jpeg"
        alt="avatar jessica"
      />
      <div>
        <h2 className="name">{profileDetails.name}</h2>
        <p className="address">{profileDetails.address}</p>
      </div>
      <p className="about">"{profileDetails.about}"</p>
      <ProfileLinks />
    </div>
  );
}

function ProfileLinks() {
  return (
    <div className="links">
      {profileDetails.links.map(link => (
        <p className="link">{link}</p>
      ))}
    </div>
  );
}
