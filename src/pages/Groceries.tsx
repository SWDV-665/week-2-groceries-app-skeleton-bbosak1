import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
 } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Groceries.css';

const Groceries: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Groceries</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Groceries</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Milk</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => console.log('Purchase clicked')}>Purchase</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Bacon</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => console.log('Purchase clicked')}>Purchase</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Ice Cream</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => console.log('Purchase clicked')}>Purchase</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Donuts</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => console.log('Purchase clicked')}>Purchase</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonContent>
    </IonPage>
  );
};

export default Groceries;
