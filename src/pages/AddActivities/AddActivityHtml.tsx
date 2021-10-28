import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonInput,
  IonDatetime,
  IonToast,
} from "@ionic/react";
import React from "react";

import MenuButton from "../../components/MenuButton";

/* Recepcion de parametros de padre a hijo */
const AddActivityHTML: React.FC<any> = (props) => {
  // React.Fragment sirve para seguir el paradigma de react de un solo nodo padre
  // Engloba IonToast con IonPage (2)
  return (
    // <React.Fragment>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <MenuButton />
            <IonTitle>Add Activity</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonSegment color="primary" ref={props.activityTypeInput}>
                  <IonSegmentButton value="work">
                    <IonLabel> Work </IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="rest">
                    <IonLabel> Rest </IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="hobby">
                    <IonLabel> Hobby </IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Activity title</IonLabel>
                  <IonInput type="text" ref={props.titleInput}>
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol >
                <IonItem >
                  <IonLabel position="floating">Activity description</IonLabel>
                  <IonInput type="text" ref={props.descriptionInput}>
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Starting hour</IonLabel>
                  <IonDatetime
                    displayFormat="h:mm A"
                    pickerFormat="h:mm A"
                    value={new Date().toISOString()}
                    ref={props.hourInput}
                  >
                    {" "}
                  </IonDatetime>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                <IonButton
                  expand="block"
                  fill="outline"
                  onClick={props.addActivity}
                >
                  Add activity
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          {/* <IonToast isOpen={!!props.toastMsg} message={props.toastMsg} duration={114000}  position="bottom"
       onDidDismiss={() => props.toastMsg === ''}/> */}
        </IonContent>
      </IonPage>
   //* </React.Fragment> */
   
  );
};

export default AddActivityHTML;
