import React, { useContext } from "react";
import { AppStoreImage, GooglePlayImage } from "../../assets/images";
import "./Devices.css";
import { devicesDataEn } from "../../assets/data/dataEn";
import { devicesDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Devices = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { title, description, images, info } = devicesDataEn;
  const {
    title: titleAr,
    description: descriptionAr,
    info: infoAr,
  } = devicesDataAr;
  return (
    <section className="devices-container">
      <div className="devices-container-details">
        <h1>{toggleLan ? titleAr : title}</h1>
        <p>{toggleLan ? descriptionAr : description}</p>
      </div>
      <div className="devices-container-img">
        {images.map((res, index) => (
          <div key={index} className="device-kind">
            <img src={res} />
          </div>
        ))}
      </div>
      <p>{toggleLan ? infoAr : info}</p>
    </section>
  );
};

export default Devices;
