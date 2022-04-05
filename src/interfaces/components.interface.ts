import { DataResponse, DataUser } from "./apiResponses.interface";

export interface IButtonCard {
  title: string;
  buttonTxt: string;
  buttonAct(): void;
  text: string;
}

export interface IButton {
  position: 'Left' | 'Right';
  buttonAct(): void;
}

export interface IImgCard {
  title: string;
}

export interface IInputCard {
  title: string;
  labels: string[];
}

export interface IInfoCard {
  title: string;
}