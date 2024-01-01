import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Team = ({ team }) => {
  const { name, role, picture, social } = team;

  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-8 md:py-4 md:items-start md:mb-8">
      <img
        className="mask mask-decagon md:w-44 object-cover w-72 h-96 md:h-52"
        src={picture}
        alt={`${name}'s picture`}
      />
      <div className="md:w-64 md:mt-14">
        <div className="md:ml-14 text-center md:text-left">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <p className="font-normal text-lg">{role}</p>
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-6 gap-4 text-2xl">
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
