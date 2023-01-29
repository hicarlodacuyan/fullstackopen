interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseDescriptionPart extends CoursePartBase {
  description: string;
}

export interface CourseNormalPart extends CourseDescriptionPart {
  type: "normal";
}

export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CourseDescriptionPart {
  type: "submission";
  exerciseSubmissionLink: string;
}

export interface CourseRequirementPart extends CourseDescriptionPart {
  type: "special";
  requirements: ["nodejs", "jest"];
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseRequirementPart;