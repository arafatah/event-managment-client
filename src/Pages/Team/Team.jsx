import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Team = ({ team }) => {
  const { name, role, picture } = team;
  return (
    <div className="ml-24 md:ml-0">
      <img
        className="mask mask-decagon md:w-44 object-cover w-72 h-96 md:h-52"
        src={picture}
      />
      <div className="mr-8 md:mr-24">
        <div className="text-center justify-center">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <p className="font-normal text-lg">{role}</p>
        </div>
        <div className="flex items-center justify-center mt-6 gap-4 text-2xl">
          <a href={team.social.linkedin}>
            <FaLinkedin></FaLinkedin>
          </a>
          <a href={team.social.twitter}>
            <FaTwitter></FaTwitter>
          </a>
          <a href={team.social.facebook}>
            <FaFacebook></FaFacebook>
          </a>
          <a href={team.social.instagram}>
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
