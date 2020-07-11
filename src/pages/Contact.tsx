import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { alertOutline, } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <span>
          <IonIcon icon={alertOutline} />
          <p style={{display:"inline-block"}}>Contact page under development</p>
        </span>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
