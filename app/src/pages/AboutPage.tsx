import React from 'react';
import "./AboutPage.css";
import {
    IonPage,
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonItem,
    IonList,
    IonCard,
    IonText,
    IonLabel,
    IonIcon,
    IonCardContent,
} from "@ionic/react";

// Custom Component Imports
import Footer from "../components/Footer";
import PreRegisterBlock from "../components/about-page/PreRegisterBlock";

// Custom Icon & Image Imports
import { cloudCircle, calculator, pulse, cart, gitBranch, shuffle, construct, people } from 'ionicons/icons';
import BlaiseEbisch from '../assets/BlaiseEbisch.jpg';
import AnnaLiner from '../assets/AnnaLiner.png';
import LoganDeal from '../assets/LoganDeal.jpeg';

const AboutPage: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <IonGrid>


{/* Our Co-op Section */}

                    <IonRow>
                        <h1 className="big-heading">
                            What is IndependUS Cooperative?
                        </h1>
                    </IonRow>
                    <IonRow>
                        <h3 className="medium-heading" style={{ marginTop: "75px",
                                                                marginBottom: "25px",
                                                                marginLeft: "60px", }}>
                            Too Long; Didn't Read
                        </h3>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="8">
                            <IonText className="body-text">
                                IndependUS is a cooperative for tech workers to enhance their economic autonomy and prosperity alongside
                                users by building more equitable physical and digital systems. <br/><br/> Freesource is our first platforrm - a
                                publicly-collaborative knowledge garden for the internet's best free resources.
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <h3 className="medium-heading" style={{ marginTop: "75px",
                                                                marginBottom: "25px",
                                                                marginLeft: "60px", }}>
                            Our Mission
                        </h3>
                    </IonRow>
                    <IonRow>
                        <IonCol size="2"></IonCol>
                        <IonCol size="8">
                            <IonLabel className="big-caption">As Missouri's only technology-centered worker cooperative, we're committed to:<br/></IonLabel>
                            <IonText className="body-text" >
                                <ul style={{ color: "#222428", }}>
                                    <li>Developing software that enables community curation of freely accessible knowledge networks.</li><br/>
                                    <li>Managing our organization democratically, in line with the &nbsp;
                                        <a href="https://www.electric.coop/seven-cooperative-principles%E2%80%8B" target="_blank" rel="noopener noreferrer">7 Cooperative Principles.</a>
                                    </li><br/>
                                    <li>Cultivating a participatory culture throughout our operations and services to support a more sustainable and cooperative world.</li>
                                </ul>
                            </IonText>
                        </IonCol>
                        <IonCol size="2"></IonCol>
                    </IonRow>

        {/*  Team Sub Section  */}

                    <IonRow>
                        <IonCol>
                            <h3 className="medium-heading" style={{ marginTop: "75px",
                                                                    marginBottom: "25px",
                                                                    marginLeft: "60px", }}>
                                Our Members
                            </h3>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-justify-content-center ion-align-items-center" style={{ display: "flex", flexDirection: 'column', height: "100%" }}>
                            <IonCard className="member-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <img src={BlaiseEbisch} alt="Blaise's Self Portrait" style={{ borderRadius:"20px" }}/>
                                </IonCardContent>
                            </IonCard>
                            <IonCard className="transparent-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonText className="big-caption">Blaise Ebisch</IonText>
                                    <IonText className="big-caption" style={{ fontSize: "16px" }}><br/>Executive Director</IonText>
                                    <br/>
                                    <IonText className="small-caption">
                                        Receiving a bachelors degree in economics and a minor in computer science from the University of Missouri
                                        in Spring 2024. He's also an investment advisor rep for Auxan Capital out of Springfield, MO.
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className="member-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    {/* <img src={BlaiseEbisch} alt="Blaise's Self Portrait" style={{ borderRadius:"20px" }}/> */}
                                </IonCardContent>
                            </IonCard>
                            <IonCard className="transparent-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonText className="big-caption">Robin Morgan</IonText>
                                    <IonText className="big-caption" style={{ fontSize: "16px" }}><br/>Project Manager</IonText>
                                    <br/>
                                    <IonText className="small-caption">
                                        Project management certified and receiving a degree in business from Columbia
                                        College. Has experience in research, public speaking, and digital service design.
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className="member-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <img src={AnnaLiner} alt="Blaise's Self Portrait" style={{ borderRadius:"20px" }}/>
                                </IonCardContent>
                            </IonCard>
                            <IonCard className="transparent-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonText className="big-caption">Anna Liner</IonText>
                                    <IonText className="big-caption" style={{ fontSize: "16px" }}><br/>Graphic & UX Designer</IonText>
                                    <br/>
                                    <IonText className="small-caption">
                                        Earned B.S degree in Information Technology in Fall 2023 from the University
                                        of Missouri. Currently Engineer 1 at Enterprise Mobility with expertise in design.
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="2"></IonCol>
                        <IonCol size="4">
                            <IonCard className="member-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <img src={LoganDeal} alt="Blaise's Self Portrait" style={{ borderRadius:"20px" }}/>
                                </IonCardContent>
                            </IonCard>
                            <IonCard className="transparent-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonText className="big-caption">Logan Deal</IonText>
                                    <IonText className="big-caption" style={{ fontSize: "16px" }}> <br/>Full Stack Developer</IonText>
                                    <br/>
                                    <IonText className="small-caption">
                                        Receiving a bachelors in computer science and minor in mathematics from
                                        the University of Missouri in Spring 2024. Auxiliary experience in IT, computer engineering, and business.
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                            <IonCard className="member-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                   {/* <img src={BlaiseEbisch} alt="Blaise's Self Portrait" style={{ borderRadius:"20px" }}/> */}
                                </IonCardContent>
                            </IonCard>
                            <IonCard className="transparent-card">
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonText className="big-caption">Eli Bramblett</IonText>
                                    <IonText className="big-caption" style={{ fontSize: "16px" }}><br/>Co-op Development</IonText>
                                    <br/>
                                    <IonText className="small-caption">
                                        Receiving a bachelors in industrial engineering from the University of Missouri
                                        in Spring 2024. Has a background in project management, organization structure, and system development.
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="2"></IonCol>
                    </IonRow>

        {/* Newsletter Sub Section */}

                    <IonRow>
                        <h3 className="medium-heading" style={{ marginTop: "75px",
                                                                marginBottom: "25px",
                                                                marginLeft: "60px", }}>
                            Connect With Our Co-op
                        </h3>
                    </IonRow>
                    <IonRow>
                        <IonCol style={{display: "flex", justifyContent: "center"}}>
                            <PreRegisterBlock/>
                        </IonCol>
                    </IonRow>


{/* Opportunities Section */}


                    <IonRow style={{ marginBottom: "25px", }}><h1 className="big-heading">Opportunities</h1></IonRow>

                    <IonCard className="dashed-frame">
                        <IonRow style={{ paddingLeft: "40px", }}>
                            <IonCol size="4">
                                <h3 className="medium-heading">
                                    Join Our Co-op
                                </h3>
                                <IonLabel style={{
                                           fontSize: "28px",
                                           color: "#414141", }}>
                                    Explore our team&apos;s structure; <br/>We're always looking for new members!
                                </IonLabel>
                                <IonList lines="none">
                                    <IonItem button={true} color="secondary" className="role-item">
                                        <IonIcon color="danger" slot="start" icon={people} size="large"></IonIcon>
                                        <IonLabel className="role-label">Community Outreach Manager</IonLabel>
                                    </IonItem>
                                    <IonItem button={true} color="success" className="role-item">
                                        <IonIcon color="warning" slot="start" icon={calculator} size="large"></IonIcon>
                                        <IonLabel className="role-label">Chief Financial Officer</IonLabel>
                                    </IonItem>
                                    <IonItem button={true} color="primary" className="role-item">
                                        <IonIcon slot="start" icon={shuffle} size="large"></IonIcon>
                                        <IonLabel className="role-label">Audience & Service Strategist</IonLabel>
                                    </IonItem>
                                    <IonItem button={true} color="warning" className="role-item">
                                        <IonIcon color="success" slot="start" icon={gitBranch} size="large"></IonIcon>
                                        <IonLabel className="role-label">Front & Back End Web Developers</IonLabel>
                                    </IonItem>
                                    <IonItem button={true} color="danger" className="role-item">
                                        <IonIcon color="secondary" slot="start" icon={cart} size="large"></IonIcon>
                                        <IonLabel className="role-label">Sales & Support Rep</IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCol>
                            <IonCol size="7" style={{ marginLeft: "50px", }}>
                                <iframe src="https://app.maptio.com/embed/65cc363877b91c000222e5e4" style={{ width: "95%", height:"95%", }}></iframe>
                            </IonCol>
                        </IonRow>
                    </IonCard>

        {/* Partnership Sub Section */}

                    <IonRow>
                        <h3 className="medium-heading" style={{ marginTop: "75px",
                                                                marginBottom: "25px",
                                                                marginLeft: "60px", }}>
                            Partner with IndependUS
                        </h3>
                    </IonRow>
                    <IonRow>
                        <IonCol size="2"></IonCol>
                        <IonCol size="9">
                            <IonText className="big-caption"> Our platform will offer many ways for organizations to collaborate!
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{ marginTop: "25px", paddingLeft: "25px", paddingRight: "25px" }}>
                        <IonCol>
                            <IonCard className="partner-card" style={{ border: "5px dashed #f15d27", }}>
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonIcon icon={cloudCircle} className="partner-icon"></IonIcon>
                                    <br />
                                    <IonText className="body-text" color="secondary" >
                                        Resource Network Hosting
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className="partner-card" style={{ border: "5px dashed #ffd054", }}>
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonIcon icon={pulse} className="partner-icon"></IonIcon>
                                    <br />
                                    <IonText className="body-text"
                                                    color="secondary"
                                                    style={{ marginLeft: "0px" }}>
                                        Resource Campaigns
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard className="partner-card" style={{ border: "5px dashed #0b714b", }}>
                                <IonCardContent className="ion-text-center ion-justify-content-center ion-align-items-center">
                                    <IonIcon icon={construct} className="partner-icon"></IonIcon>
                                    <br />
                                    <IonText className="body-text"
                                                    color="secondary"
                                                    style={{ marginLeft: "0px" }}>
                                        Custom Community Tools
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>


{/* Services Section */}


                    <IonRow>
                        <h1 className="big-heading">Future Services</h1>
                    </IonRow>

                    <IonRow>
                        <IonList>
                            <IonItem color="secondary" className="service-item">
                                <h3 className="medium-heading" style={{ color:"#FFF9EB", }}>
                                    FreeSource
                                </h3>
                            </IonItem>
                            <IonItem color="secondary-contrast">
                                <IonText color="secondary" className="body-text" style={{ marginLeft: "40px" }}>
                                    Our platform for crowdsourcing free, publicly-available digital resource networks.
                                </IonText>
                            </IonItem>
                            <IonItem color="success" className="service-item">
                                <h3 className="medium-heading">
                                    Resource Provider Support
                                </h3>
                            </IonItem>
                            <IonItem color="secondary-contrast">
                                <IonText color="secondary" className="body-text" style={{ marginLeft: "40px" }}>
                                    Within our public resource aggregation and searching platform, there will be tools
                                    for free and paid resource creators to find additional financial, technical, or social
                                    support. Paid providers can find a new channel to promote their solutions while
                                    free providers will have a far-reaching channel for supporter donations.
                                </IonText>
                            </IonItem>
                            <IonItem color="primary" className="service-item">
                                <h3 className="medium-heading">
                                    Self-Hosted Resource Communities
                                </h3>
                            </IonItem>
                            <IonItem color="secondary-contrast" style={{ marginLeft: "40px" }}>
                                <IonText color="secondary" className="body-text">
                                    Utilizing an open-source version of the FreeSource platform, individuals can create
                                    and curate their own resource-network communities. Explore unique public or private use
                                    cases while maintaining ownership of your data. Requires server and application configuration.
                                </IonText>
                            </IonItem>
                            <IonItem color="warning" className="service-item">
                                <h3 className="medium-heading">
                                    Subscription Resource Communities
                                </h3>
                            </IonItem>
                            <IonItem color="secondary-contrast" style={{ marginLeft: "40px" }}>
                                <IonText color="secondary" className="body-text">
                                    Experience the benefits of a self-hosted node without the complexity. We offer hosting for your
                                    personal, private, or public node on our servers for a monthly fee. You retain the ability to
                                    export and erase your data at any time.
                                </IonText>
                            </IonItem>
                            <IonItem color="danger" className="service-item">
                                <h3 className="medium-heading" style={{ color:"#FFF9EB", }}>
                                    Community Integration & Extension Hub
                                </h3>
                            </IonItem>
                            <IonItem color="secondary-contrast" style={{ marginLeft: "40px", marginBottom: "50px" }}>
                                <IonText color="secondary" className="body-text">
                                    Discover IndependUS or external developer tools that can enhance the capabilities of your self-hosted
                                    or paid-subscription nodes. One-time purchases enable node hosts or members to enhance community
                                    engagement, data collection, and cross-node collaboration. External developers are also encouraged to
                                    create open-source tools accessible to all users.
                                </IonText>
                            </IonItem>
                        </IonList>
                    </IonRow>
                </IonGrid>
            <Footer/>
        </IonContent>
    </IonPage>
  );
};

export default AboutPage;
