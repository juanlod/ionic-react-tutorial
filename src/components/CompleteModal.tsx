import {
    IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useContext } from "react";
import ActivitiesContext, { Activity } from "../data/activities-context";

interface CompleteModalProps {
    activity: Activity;
    dismissModal: () => void
}


const CompleteModal: React.FC<CompleteModalProps> = (props) => {


    const activitiesContext = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activitiesContext.completeActivity(activityId);
        props.dismissModal()
    }



  return (
    <IonContent>
      <IonRow>
        <IonGrid className="ion-no-padding">
          <IonCol className="ion-no-padding">
            <IonImg src={props?.activity?.imageUrl} alt=""></IonImg>
          </IonCol>
        </IonGrid>
      </IonRow>
      <IonRow>
        <IonCol className="ion-text-center">
          <IonText>
            <h2>{props?.activity?.title}</h2>
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-text-center ion-no-padding">
          <IonText color="medium">
            <p>Are you sure you want to mark this activity as completed?</p>
          </IonText>
        </IonCol>
      </IonRow>      
      <IonRow>
        <IonCol className="ion-text-center ion-no-padding">
          <IonButton color="danger" fill="clear" onClick={props.dismissModal}>Cancel</IonButton>
        </IonCol> 
        <IonCol className="ion-text-center ion-no-padding">
          <IonButton color="primary" fill="clear" onClick={() => confirmCompletion(props.activity.id)}>Complete</IonButton>
        </IonCol>
      </IonRow>
    </IonContent>
  );
};

export default CompleteModal;
