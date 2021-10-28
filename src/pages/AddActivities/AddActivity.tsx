import React, { useRef, useContext } from "react";
import ActivitiesContext, { ActivityType } from "../../data/activities-context";
import AddActivityHTML from "./AddActivityHtml";
import { useHistory } from "react-router-dom";


const AddActivity: React.FC = () => {


  // useHistory es igual al router de Angular
  const router = useHistory();
  const activitiesContext = useContext(ActivitiesContext);
  let toastMsg = '';
  // userRef permite acceder a los elementos del dom
  const titleInput = useRef<HTMLIonInputElement>(null);
  const descriptionInput = useRef<HTMLIonInputElement>(null);
  const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
  const hourInput = useRef<HTMLIonDatetimeElement>(null);

  const addActivity = () => {
    // Se extran los valores
    const title = titleInput.current?.value as string;
    const description = descriptionInput.current?.value as string;
    const activityType = activityTypeInput.current?.value as ActivityType;
    const startDate = new Date(hourInput.current?.value as string);
    const startHour = startDate.getHours() + ":" + startDate.getMinutes();

    if (title && description && activityType && startHour) {
     
      activitiesContext.addActivity(
        title,
        description,
        startHour,
        activityType
      );
    
      presentToastWithOptions();
      router.replace('/all-activities');
    }
  };

  return (

    // <React.Fragment>
    //   <IonToast isOpen={!!toastMsg} message={toastMsg}  position="bottom"
    //    onDidDismiss={() => toastMsg === '' }/>
    <AddActivityHTML
      titleInput={titleInput}
      descriptionInput={descriptionInput}
      activityTypeInput={activityTypeInput}
      hourInput={hourInput}
      addActivity={addActivity}
      toastMsg={toastMsg}
    ></AddActivityHTML>
    // </React.Fragment>
  );
};

async function presentToastWithOptions() {

  const toast = document.createElement('ion-toast');
  // toast.header = 'Toast header';
  toast.message = 'The activity has been saved';
  toast.position = 'bottom';
  toast.duration = 1200;
  // toast.buttons = [
  //   {
  //     side: 'start',
  //     icon: 'star',
  //     text: 'Favorite',
  //     handler: () => {
  //       console.log('Favorite clicked');
  //     }
  //   }, {
  //     text: 'Done',
  //     role: 'cancel',
  //     handler: () => {
  //       console.log('Cancel clicked');
  //     }
  //   }
  // ];

  document.body.appendChild(toast);
  return toast.present();
}


export default AddActivity;



