import { Module } from '@nestjs/common';
import { FormController } from './from.controller';

import { MongooseModule } from '@nestjs/mongoose';

import { FormService } from './from.service';
import { FormSchema } from 'src/models/form/form.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Form', schema: FormSchema },
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
