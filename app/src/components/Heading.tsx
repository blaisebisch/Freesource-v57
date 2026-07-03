import React from "react";
import { IonCard } from '@ionic/react';


const Heading: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <IonCard style={{ backgroundColor:"#1e1e1e", }}>
        <p
          style={{
            fontFamily: "'Inter'",
            fontSize: "25px",
            color: "#FFD054",
          }}
        >
          Welcome to{" "}
          <strong>
            FreeSource
          </strong>
          , the platform for crowdsourcing online resource collections!
        </p>
      </IonCard>

    </div>
  );
};

export default Heading;
