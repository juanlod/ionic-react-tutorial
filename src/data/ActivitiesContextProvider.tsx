import React, {useState} from "react";
import ActivitiesContext, { ActivitiesContextModel, Activity, ActivityType } from "./activities-context";
// import { Activity } from "./activitiy";
// import { ActivitiesContextModel } from "./activity-context-model";
// import { ActivityType } from "./activity-type";

/**
 * use state mantiene sincronizado nuestro estado
 * usando Hooks
 */

const ActivitiesContextProvider : React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            title: 'My daily sleep',
            description: 'Sleep through the night after a day of quarantine',
            hour: '23:00',
            activityType: 'rest',
            imageUrl: '/assets/images/rest.jpeg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Hard work',
            description: 'Work in the projects I have at Tribalyte',
            hour: '9:00',
            activityType: 'work',
            imageUrl: '/assets/images/work.jpeg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Play ping pong',
            description: 'Play a ping pong match on the hall table!',
            hour: '19:00',
            activityType: 'hobby',
            imageUrl: '/assets/images/hobby.jpeg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Learn Ionic 5 with React',
            description: 'Complete this course to learn React, Hooks, Context, Ionic...',
            hour: '17:00',
            activityType: 'hobby',
            imageUrl: '/assets/images/work.jpeg',
            isCompleted: false
        }

    ]);


    /**
     * Para crear funciones dentro de web componentes deben estar asiganadas a constantes
     */
    const  addActivity = (title: string, description: string, hour: string, activityType: ActivityType) => {
        let imageUrl = urls[activityType];
        const newActivity: Activity = {
            /* Como los atributos se llaman igual typescript seatea automaticamente los valores de esta manera */
            id: Math.random().toString(),
            title,
            description,
            hour,
            activityType,
            imageUrl,
            isCompleted: false
        }

        setActivities(currActivities => {
            /* Los puntos suspensivos extran las actividades y se añade una nueva actividad */
            return[...currActivities, newActivity]
        })

    
    }

    const completeActivity = (activityId : string) => {
        setActivities(currActivities => {
            /*
             * Crea una copia del array, actualiza una actividad según el índice y devuelve la actividad actualizada
             */
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true}
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        })
    }

    /**
     * Pasamos todos los metodos para cerrar el flujo
     */
    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity
    }

    return (
        /** 
         * Recibe funcionalidad extra gracias al provider.
         *  Provee de toda la funcionalidad a los hijos envueltos con este context provider
         */
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
}


// Hashmap para extrar las url (similar a patrones de diseño)
var urls : Record<string, string> = {
    rest: '/assets/images/rest.jpeg',
    work: '/assets/images/work.jpeg',
    hobby: '/assets/images/rest.jpeg'
}

export default ActivitiesContextProvider;