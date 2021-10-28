import React from "react";
export type ActivityType = 'rest' | 'work' | 'hobby';

export interface Activity {
    id: string;
    title: string;
    description: string;
    hour: string;
    activityType: ActivityType;
    imageUrl: string;
    isCompleted: boolean;
}

export interface ActivitiesContextModel {
    activities: Activity[];
    addActivity: (title: string, description: string, hour:string, activityType: ActivityType) => void;
    completeActivity: (activityId: string) => void;
}

/**
 * Se inicializa todo para el autocompletado. Context definido en context model
 * Replica la funcionalidad de un servicio en Angular
 */
const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities: [],
    addActivity: () => {},
    completeActivity: () => {}
});

export default ActivitiesContext;