import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../typedefs";
import InfoBox from "./InfoBox";
import { Fragment } from "react/jsx-runtime";
import { useState, type ReactNode } from "react";

const CourseGoalList = ({
    goals,
    onDeleteGoal,
}: {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
}) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet! Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;
    if (goals.length >= 8) {
        warningBox = (
            <InfoBox mode="warning" severity="high">
                You've started putting many things on your plate!
            </InfoBox>
        );
    } else if (goals.length >= 6) {
        warningBox = (
            <InfoBox mode="warning" severity="medium">
                Are you sure you can do it!!
            </InfoBox>
        );
    } else if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="low">
                You have too many goals on your plate! Consider finishing some
                of them first!
            </InfoBox>
        );
    }

    return (
        <Fragment>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal
                            title={goal.title}
                            onDelete={onDeleteGoal}
                            id={goal.id}
                        >
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default CourseGoalList;
