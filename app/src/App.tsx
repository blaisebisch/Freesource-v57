import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonTitle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { person, informationCircle } from 'ionicons/icons';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/homepage" component={HomePage} exact={true} />
          <Route path="/accountpage" component={AccountPage} exact={true} />
          <Route path="/aboutpage" component={AboutPage} exact={true} />
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="top">
          <IonTabButton tab="homepage" href="/" style={{ maxWidth: "35vw" }}>
              <IonTitle style={{ fontSize: "36px", fontWeight: "bold", color: "#414141"}}>
                  FreeSource
              </IonTitle>
            </IonTabButton>
          <IonTabButton tab="accountpage" href="/accountpage" style={{ color: "#414141" }}>
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
          <IonTabButton tab="aboutpage" href="/aboutpage" style={{ color: "#414141" }}>
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
