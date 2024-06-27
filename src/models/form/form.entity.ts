import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address, AddressSchema } from '../forms/forms.entity';




@Schema({ timestamps: true })
export class Form extends Document {
  @Prop()
  FirstName: string;

  @Prop()
  LastName: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  Email: string;
  @Prop()
  About: string;
  @Prop()
  HigherQualification: string;

  @Prop({ type: AddressSchema })
  address: Address;

}

export const FormSchema = SchemaFactory.createForClass(Form);
