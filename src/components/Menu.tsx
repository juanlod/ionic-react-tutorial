import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import React from "react";
import { bodyOutline, newspaperOutline } from "ionicons/icons";

const Menu: React.FC = () => {
  return (
    <IonMenu side="start" contentId="scheduleAppM1">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem
              routerLink="/all-activities"
              routerDirection="none"
              lines="none"
            >
              <IonIcon color="medium" slot="start" icon={bodyOutline}></IonIcon>
              <IonLabel>All activities</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem
              routerLink="/add-activity"
              routerDirection="none"
              lines="none"
            >
              <IonIcon
                color="medium"
                slot="start"
                icon={newspaperOutline}
              ></IonIcon>
              <IonLabel>Add activity</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
