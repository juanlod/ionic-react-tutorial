import { IonModal } from "@ionic/react";
import React, { useContext, useState } from "react";
import CompleteModal from "../../components/CompleteModal";
import ActivitiesContext, { Activity } from "../../data/activities-context";
import AllActivitiesHTML from "./AllActivitiesHtml";

const AllActivities: React.FC = () => {
  const activitiesContext = useContext(ActivitiesContext);
  const [activityToComplete, setActivityToComplete] = useState<Activity>()


  const openCompleteModal = (activity: Activity) => {
    setActivityToComplete(activity);

  }

  const closeModal = () => {
    setActivityToComplete(undefined);

  };


  return (
    // Envio de parametros de padre a hijo
    <React.Fragment>
      <IonModal
        isOpen={!!activityToComplete}
        swipeToClose={true}
      >
        <CompleteModal activity={activityToComplete as Activity} dismissModal={closeModal}></CompleteModal>
      </IonModal>
      <AllActivitiesHTML {...activitiesContext} openCompleteModal={openCompleteModal}></AllActivitiesHTML>
    </React.Fragment>
  );
};

export default AllActivities;
