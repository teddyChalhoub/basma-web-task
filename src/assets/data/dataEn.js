import {
  faBell,
  faBrush,
  faCheck,
  faCogs,
  faEnvelopeOpen,
  faFingerprint,
  faGlobe,
  faHandPointer,
  faLayerGroup,
  faMapMarkerAlt,
  faShoppingCart,
  faTint,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  AppImage,
  AppStoreImage,
  BikeImage,
  DownloadImage,
  GooglePlayImage,
  HouseContactImage,
  MailContactImage,
  MotorBikeImage,
  PhoneContactImage,
  SettingsImage,
} from "../images";

export const headerDataEn = {
  nav: ["Home", "Features", "Pages", "Screenshots", "Pricing", "Contact"],
  content: {
    title: "Creative way to Showcase your App",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    button: "Get Started",
  },
};

export const codeChallengeDataEn = {
  title: "Code Challenge",
  description:
    "Lorem Ipsum has been the industry's standard dummy " +
    "text ever since the 1500s,when an unknown printer took a galley of type.",
  content: [
    {
      iconName: faHandPointer,
      title: "Fully functional",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      iconName: faFingerprint,
      title: "Fully functional",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      iconName: faHandPointer,
      title: "Fully functional",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      iconName: faMapMarkerAlt,
      title: "Location Tracking",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      iconName: faCogs,
      title: "Powerful Settings",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      iconName: faGlobe,
      title: "Multiple Language",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ],
};

export const toolsDataEn = {
  title: "Work faster with powerful tools",
  content: [
    {
      icon: faCheck,
      description:
        "  Lorem Ipsum has been the industry's standard dummy text ever since" +
        "the 1500s",
    },
    {
      icon: faCheck,
      description:
        "  Lorem Ipsum has been the industry's standard dummy text ever since" +
        "the 1500s",
    },
    {
      icon: faCheck,
      description:
        "  Lorem Ipsum has been the industry's standard dummy text ever since" +
        "the 1500s",
    },
    {
      icon: faCheck,
      description:
        "  Lorem Ipsum has been the industry's standard dummy text ever since" +
        "the 1500s",
    },
    {
      icon: faCheck,
      description:
        "  Lorem Ipsum has been the industry's standard dummy text ever since" +
        "the 1500s",
    },
  ],
  icons: [faBell, faEnvelopeOpen, faVideo],
};

export const sharePhotosEn = {
  title: "Share your photos with friends easily",
  content: [
    {
      icon: faLayerGroup,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: faBrush,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: faTint,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: faShoppingCart,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ],
  btnText: "Learn More",
};

export const codeChallenge2DataEn = {
  title: "Code Challenge",
  description:
    "Lorem Ipsum has been the industry's standard dummy" +
    "text ever since the 1500s,when an unknown printer took a galley of type.",
  content: [
    {
      img: DownloadImage,
      title: "Install the App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: SettingsImage,
      title: "Setup your profile",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: AppImage,
      title: "Enjoy the features!",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ],
};

export const membershipDataEn = {
  title: "BASMA Code Challenge",
  description: `Lorem Ipsum has been the industry's standard dummy 
  text ever since the 1500s,when an unknown printer took a galley of type.`,
  content: [
    {
      img: BikeImage,
      title: "BASIC",
      price: {
        sign: "$",
        nb: "49",
      },
      details: [
        "5GB Linux Web Space",
        "5 MySQL Databases",
        "24/7 Tech Support",
        "Daily Backups",
      ],
    },
    {
      img: MotorBikeImage,
      title: "Pro",
      price: {
        sign: "$",
        nb: "129",
      },
      details: [
        "10GB Linux Web Space",
        "50 MySQL Databases",
        "Unlimited Email",
        "Daily Backups",
      ],
    },
  ],
  btnText: "SignUp",
  info: {
    message: "Not sure what to choose?",
    linkText: "Contacts Us",
  },
};

export const devicesDataEn = {
  title: "BASMA is available for all devices",
  description: `Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown printer took 
  a galley of type and scrambled it to make a type specimen book. It has
   survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
  images: [GooglePlayImage, AppStoreImage],
  info: "* Available on iPhone, iPad and all Android devices",
};

export const subscribeDataEn = {
  title: "Subscribe to get updates",
  description: `Lorem Ipsum has been the industry's standard dummy text ever 
  since the 1500s, when an unknown printer took a galley of type and scrambled 
  it to make a type specimen book.`,
  input: { placeholder: "Enter your email" },
  btnInputText: "Subscribe",
};

export const contactDataEn = {
  title: "Stay Tuned",
  description: `Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s,when an unknown 
  printer took a galley of type.`,
  info: {
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    details: [
      {
        icon: <HouseContactImage />,
        message:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        icon: <PhoneContactImage />,
        message: "+1 230 456 789-012 345 6789",
      },
      {
        icon: <MailContactImage />,
        message: "exampledomain@domain.com",
      },
    ],
  },
  mail: [
    { placeholder: "Name", name: "name" },
    { placeholder: "Email", name: "email" },
    { placeholder: "Subject", name: "subject" },
    { placeholder: "Message", name: "message" },
  ],
  btnText: "Send Message",
};

export const signUpFormDataEn = {
  title: "Sign Up",
  inputs: [
    { placeholder: "Enter your full name", name: "name", type: "text" },
    { placeholder: "Enter your email", name: "email", type: "text" },
    { placeholder: "Enter your password", name: "password", type: "password" },
  ],
  btnText: "Sign Up",
};
