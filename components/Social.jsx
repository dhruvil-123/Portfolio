import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/dhruvil-123" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/dhruvildhanani/" },
  // { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "https://x.com/dhananidhruvil0?t=GBUc1ZNCv84btQ5BPVueVQ&s=09" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a 
            key={index} 
            href={item.path} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
