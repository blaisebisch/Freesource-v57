import React from 'react';
import { IonToolbar,
         IonTitle,
         IonIcon,
         IonGrid,
         IonCol,
         IonRow,
         IonText,
         IonButton,
         IonLabel,
        } from '@ionic/react';
import "./Footer.css";
import { logoYoutube, logoInstagram, logoLinkedin, arrowForward } from 'ionicons/icons';

const Footer: React.FC = () => {

    return (

            <IonToolbar style={{ backgroundColor: "#FFF9EB", color: "#FFF9EB"}}>
                <IonGrid>
                    <IonRow>
                        <IonCol size="5" className="footer-col">
                            <IonTitle style={{ fontSize: "36px", fontWeight: "bold", color: "#FFF9EB" }}>Freesource</IonTitle>
                        </IonCol>
                        <IonCol size="4" className="footer-col" style={{ marginTop:"30px" }}>
                            <IonText>
                                Have any questions or feedback about the FreeSource platform?
                                Submit responses by emailing contact@independus.com or using the
                                anonymous form below!
                            </IonText>
                        </IonCol>
                        <IonCol size="3" className="footer-col">
                            <IonButton color="black" style={{ borderRadius:"20px", backgroundColor:"#ffd054", marginTop:"30px" }}className="feedback-form-button">
                                <IonLabel color="black">
                                    Go To Form
                                </IonLabel>
                                <IonIcon icon={arrowForward} size="medium" />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="5">
                            <a rel="youtubepage" href="https://www.youtube.com/@IndependUS-Coop">
                                <IonIcon icon={logoYoutube} size="large" className="footer-icon" style={{ marginLeft: "60px", marginBottom: "20px", }} />
                            </a>
                            <a rel="instagrampage" href="https://www.instagram.com/independus.coop/">
                                <IonIcon icon={logoInstagram} size="large" className="footer-icon" style={{ marginBottom: "20px", }} />
                            </a>
                            <a rel="linkedinpage" href="https://www.linkedin.com/company/independus/">
                                <IonIcon icon={logoLinkedin} size="large" className="footer-icon" style={{ marginBottom: "20px", }} />
                            </a>
                        </IonCol>
                        <IonCol size="7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <IonText color="primary"> Copyright &copy; 2024 IndependUS Cooperative. All Rights Reserved</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>

    );
};

export default Footer;
