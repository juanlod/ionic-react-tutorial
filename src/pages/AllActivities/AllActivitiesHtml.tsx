import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonContent,
  IonImg,
  IonIcon,
} from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";
import React from "react";

import MenuButton from "../../components/MenuButton";
import { Activity } from "../../data/activities-context";
import "./AllActivities.css";

/* Recepcion de parametros de padre a hijo */
const AllActivitiesHTML: React.FC<any> = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>All Activities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.activities.map((activity: Activity) => (
            <IonRow key={activity.id}>
              <IonCol className="ion-text-center">
                <IonCard>
                  <IonImg src={activity.imageUrl} alt=""></IonImg>
                  <IonCardHeader>
                    <IonCardSubtitle>{activity.hour}</IonCardSubtitle>
                    <IonCardTitle>{activity.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{activity.description}</p>
                    <IonItem lines="none">
                      { !activity.isCompleted ?
                        <IonButton
                          class="fullWidth"
                          fill="clear"
                          onClick={() => props.openCompleteModal(activity)}
                        >
                          Complete Activity
                        </IonButton>

                        : <IonIcon color="success" class="fullWidth" icon={checkmarkOutline}/>
                      }
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivitiesHTML;
