import { Document } from 'mongoose';


export interface IForm extends Document {
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  About: string;
  HigherQualification: string;
  address: IAddress;
}
export interface IAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}