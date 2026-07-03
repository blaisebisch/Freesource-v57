import React from "react";
import {
  IonContent,
  IonButton,
  IonCard,
  IonPage,
} from "@ionic/react";
import "./AccountPage.css";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Footer from "../components/Footer";

const AccountPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard className="cardStyle">
            <div className="authenticator-container">
              <Authenticator>
                {({ signOut, user }) => (
                  <div>
                    {user ? (
                      <div>
                        <h1>Hello {user.username}</h1>
                          <IonButton onClick={() => signOut?.()} className="submitButton" color="secondary">Sign out</IonButton>
                      </div>
                      ) : (
                      <div>
                        <h1>Please sign in to make posts</h1>
                      </div>
                    )}
                  </div>
                )}
              </Authenticator>
            </div>
          </IonCard>
          <Footer />
      </IonContent>
    </IonPage>
  );
};

export default AccountPage;
