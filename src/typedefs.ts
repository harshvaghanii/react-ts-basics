import { type ReactNode } from "react";

export type CourseGoalType = {
    title: string;
    description: string;
    id: number;
};

export type HintBoxProps = {
    mode: "hint";
    children: ReactNode;
};
export type WarningBoxProps = {
    mode: "warning";
    children: ReactNode;
    severity?: "low" | "medium" | "high";
};

export type InfoBoxProps = HintBoxProps | WarningBoxProps;
