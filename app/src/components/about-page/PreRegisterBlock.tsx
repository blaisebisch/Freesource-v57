import React from "react";
import { IonIcon,
         IonCard,
         IonInput,
         IonText,
         IonGrid,
         IonRow,
         IonCol,
         IonButton,
        } from "@ionic/react";
import { mail, logoYoutube, logoInstagram, logoLinkedin, } from 'ionicons/icons';
import './PreRegisterBlock.css';


const PreRegisterBlock: React.FC = () => {

    return (
        <IonCard className="newsletter-card">
            <IonGrid>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol size="2">
                        <IonIcon icon={mail} size="large"></IonIcon>
                    </IonCol>
                    <IonCol size="7">
                        <IonText className="body-text" style={{ marginLeft:"0px", color:"#FFF9EB", }}>
                            Feel free to follow or message us on our social media accounts linked here ---&gt;
                            <br/><br/>
                            If you want to hear more about our backstory, share a
                            valid email address below to join our newsletter!
                            <br/>
                        </IonText>
                    </IonCol>
                    <IonCol size="3">
                        <ul>
                            <a rel="youtubepage" href="https://www.youtube.com/@IndependUS-Coop">
                                <IonIcon icon={logoYoutube} size="large" className="footer-icon"/>
                            </a><br/>
                            <a rel="instagrampage" href="https://www.instagram.com/independus.coop/">
                                <IonIcon icon={logoInstagram} size="large" className="footer-icon"/>
                            </a><br/>
                            <a rel="linkedinpage" href="https://www.linkedin.com/company/independus/">
                                <IonIcon icon={logoLinkedin} size="large" className="footer-icon"/>
                            </a>
                        </ul>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                    <IonCol size="2" style={{display: "flex", justifyContent: "center"}}></IonCol>
                    <IonCol size="7" style={{display: "flex", justifyContent: "center"}}>
                        <IonInput className="email-input"></IonInput>
                    </IonCol>
                    <IonCol size="3" style={{display: "flex", justifyContent: "center"}}>
                        <IonButton className="submit-button">
                            Submit
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
};

export default PreRegisterBlock;
