import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CustomResponse from '../common/providers/custom-response.service';
import { MESSAGE } from '../util/constants';
import { throwException } from '../util/errorhandling';
import { IForm } from 'src/models/form/form.interface';
import { CreateFormDto } from 'src/models/form/form.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectModel('Form')
    private readonly FormModel: Model<IForm>,
  ) {}
  async create(createFormDto: CreateFormDto) {
    try {
      const newForm = new this.FormModel(createFormDto);
      const saveForm = await newForm.save();
      return new CustomResponse(
        HttpStatus.OK,
        MESSAGE.FORM.FORM_CREATED_SUCCESSFULLY,
        saveForm,
      );
    } catch (error) {
      
      return throwException(error)
    }
  }

  async findAll(): Promise<IForm[]> {
    return await this.FormModel.find().exec();
  }

  async findOne(id: string): Promise<IForm> {
    const usg = await this.FormModel.findById(id).exec();
    if (!usg) {
      throw new NotFoundException(
        `${MESSAGE.FORM.FORM_NOT_FOUND} with id: ${id}`,
      );
    }
    return usg;
  }

  async findUsingCondition(condition) {
    const usg = await this.FormModel.findOne(condition).exec();
    if (!usg) {
      throw new NotFoundException(
        `${MESSAGE.FORM.FORM_NOT_FOUND} with condition: ${condition}`,
      );
    }
    return usg
  }

  async update(id: string, updateUserDto: any): Promise<IForm> {
    const updateUsg = await this.FormModel
      .findByIdAndUpdate(id, updateUserDto, {
        new: true,
      })
      .exec();
    if (!updateUsg) {
      throw new NotFoundException(
        `${MESSAGE.FORM.FORM_NOT_FOUND} with id: ${id}`,
      );
    }
    return updateUsg;
  }

  async remove(id: string): Promise<IForm> {
    const deletedUsg = await this.FormModel.findByIdAndDelete(id).exec();
    if (!deletedUsg) {
      throw new NotFoundException(
        `${MESSAGE.FORM.FORM_NOT_FOUND} with id: ${id}`,
      );
    }
    return deletedUsg;
  }
}
