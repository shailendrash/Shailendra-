import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FormModule } from './form/from.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    MongooseModule.forFeature([
     
    ]),

    
   
    FormModule,
   
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Path to the folder containing the uploaded images
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
