import { IsString, IsNotEmpty, IsPhoneNumber, IsEmail, Length,  MaxLength } from 'class-validator';
import { IAddress } from './form.interface';


export class CreateFormDto {
  @IsNotEmpty({ message: ` FirstName can't be empty` })
  @IsString()
   @MaxLength(25)
  FirstName: string;
  @IsNotEmpty({ message: `LastName can't be empty` })
  @IsString()
  @MaxLength(25)
  LastName: string;

  @IsNotEmpty({ message: ` phone number can't be empty` })
  @IsString()
  @IsPhoneNumber("IN")
  phoneNumber: string;

  @IsNotEmpty({ message: `Email can't be empty` })
  @IsString()
  @IsEmail()
  Email: string;

  @IsNotEmpty({ message: `About can't be empty` })
  @IsString()
  About: string;

  @IsNotEmpty({ message: `HigherQualification can't be empty` })
  @IsString()
  
  HigherQualification: string;

  
  @IsNotEmpty({ message: ` address can't be empty` })
  address: IAddress;
 
  
 

}

