import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import ResourceCreator from "./ResourceCreator";

const TopicModel: React.FC<{
  topicName: any;
  topicColor: any;
  setResourceOpen: any;
}> = ({ topicName, topicColor, setResourceOpen }) => {
  const [, setSubTopicName] = useState("");
  const [resourceTabOpen, setResourceTabOpen] = useState(false);

  const myArray = [
    "Calculators",
    "Contracts",
    "Grants",
    "Medical",
    "Nutrition",
    "Lifestyle",
    "Financing",
    "Courses",
    "Lessons",
    "Metrics",
    "Measurement",
    "Program",
    "Non-profits",
    "Co-ops",
    "Associations",
  ];

  const myArray2 = [
    "Online Calculators",
    "Contract Templates",
    "Grant Opportunities",
    "Medical Information",
    "Nutrition Guides",
    "Lifestyle Tips",
    "Financial Resources",
    "Online Courses",
    "Educational Lessons",
    "Metrics Tools",
    "Measurement Resources",
    "Program Development",
    "Non-profit Organizations",
    "Cooperative Resources",
    "Associations and Groups",
  ];

  return (
    <>
      <IonRow>
        <IonCol size="7">
          <p
            style={{
              marginTop: "30px",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#222428",
              textAlign: "center",
            }}
          >
            {topicName} Resource Lists
          </p>
        </IonCol>
        <IonCol size="5" style={{ marginTop: "30px" }}>
          <ResourceCreator topicColor={topicColor} topicName={topicName} />
        </IonCol>
      </IonRow>
      <IonContent
        color="light"
        style={{
          height: "90%",
          width: resourceTabOpen ? "50%" : "100%",
          float: "left",
          marginBottom: "30px",
        }}
      >
        <IonList inset={true} lines="full" style={{marginBottom: "40px",}}>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {myArray[Math.floor(Math.random() * myArray.length)]}
              </p>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                1 resources, 2 posts, 200 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                onClick={() => {
                  setResourceTabOpen(true);
                  setSubTopicName("first");
                }}
                color={topicColor}
              >
                Resources
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {myArray[Math.floor(Math.random() * myArray.length)]}
              </p>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                4 resources, 2 posts, 150 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceTabOpen(true);
                  setSubTopicName("second");
                }}
              >
                Resources
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {myArray[Math.floor(Math.random() * myArray.length)]}
              </p>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                4 resources, 4 posts, 59 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceTabOpen(true);
                  setSubTopicName("third");
                }}
              >
                Resources
              </IonButton>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent
        color="light"
        style={{
          height: "90%",
          width: resourceTabOpen ? "50%" : "0%",
          float: "right",
        }}
      >
        <IonButton
          shape="round"
          style={{
            float: "right",
            margin: "15px",
          }}
          size="large"
          color={topicColor}
          onClick={() => {
            setResourceTabOpen(!resourceTabOpen);
          }}
        >
          Close
        </IonButton>
        <p
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          \/ Resources \/
        </p>
        <IonList inset={true} lines="full">
          <IonItem>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {myArray2[Math.floor(Math.random() * myArray2.length)]}
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                }}
                size="large"
                onClick={() => {
                  setResourceOpen(true);

                  function scrollToElement() {
                    const element = document.getElementById("resource");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else {
                      // Element not found, retry in 100ms (adjust the delay as needed)
                      setTimeout(scrollToElement, 100);
                    }
                  }

                  scrollToElement();
                }}
                color={topicColor}
              >
                View
              </IonButton>
          </IonItem>
          <IonItem>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {myArray2[Math.floor(Math.random() * myArray2.length)]}
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);

                  function scrollToElement() {
                    const element = document.getElementById("resource");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else {
                      // Element not found, retry in 100ms (adjust the delay as needed)
                      setTimeout(scrollToElement, 100);
                    }
                  }

                  scrollToElement();
                }}
              >
                View
              </IonButton>
          </IonItem>
          <IonItem>
              <p
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
              >
                {myArray2[Math.floor(Math.random() * myArray2.length)]}
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);

                  function scrollToElement() {
                    const element = document.getElementById("resource");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else {
                      // Element not found, retry in 100ms (adjust the delay as needed)
                      setTimeout(scrollToElement, 100);
                    }
                  }

                  scrollToElement();
                }}
              >
                View
              </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default TopicModel;
