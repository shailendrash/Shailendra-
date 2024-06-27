import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FormService } from './from.service';
import { CreateFormDto } from 'src/models/form/form.dto';
import { IForm } from 'src/models/form/form.interface';
import { COMMON, ROUTE } from '../util/constants';

@Controller(ROUTE.FORM)
export class FormController {
  constructor(private readonly FormService: FormService) {}
  @Post()
  async createUsg(@Body() createFormDto: CreateFormDto) {
    return this.FormService.create(createFormDto);
  }

  @Get()
  async findAll(): Promise<IForm[]> {
    return await this.FormService.findAll();
  }

  @Get(COMMON.ID)
  async findOne(@Param(COMMON.PID) id: string): Promise<IForm> {
    return await this.FormService.findOne(id);
  }

  @Patch(COMMON.ID)
  async update(
    @Param(COMMON.PID) id: string,
    @Body() updateUserDto: any,
  ): Promise<IForm> {
    return await this.FormService.update(id, updateUserDto);
  }

  @Delete(COMMON.ID)
  async remove(@Param(COMMON.PID) id: string): Promise<IForm> {
    return await this.FormService.remove(id);
  }
}
