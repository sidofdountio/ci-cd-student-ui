import { Gender } from "./Gender";

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    gender: Gender;
    placeOfBorn: any;
    code: string;
    imageUrl:string;
}
