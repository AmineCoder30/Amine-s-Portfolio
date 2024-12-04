import { MdOutlineWhatsapp } from "react-icons/md";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://m.me/100022436844351",
    icon: <CiFacebook size={24} />,
  },
  {
    name: "whatsapp",
    url: "https://wa.me/+212651167495",
    icon: <MdOutlineWhatsapp size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amine-mohamed-5a914a23a",
    icon: <CiLinkedin size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/AmineCoder30",
    icon: <IoLogoGithub size={24} />,
  },
];
export default socialMediaLinks;
