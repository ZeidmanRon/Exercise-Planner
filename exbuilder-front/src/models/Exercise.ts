// exercises-frontend/src/models/Exercise.ts

export interface Exercise {
  id: string;
  Title: string;
  Desc: string;
  BodyPart: [string];
  Equipment: [string];
  Level: string;
  Type: string;
}
