import { Injectable } from '@nestjs/common';
import * as Uuidv4 from 'uuid/v4';

@Injectable()
export class AppService {
  private student_data = [];

  getHello(): string {
    return 'Hello World!';
  }

  findAll() {
    return this.student_data;
  }

  findOne(uuid: string) {
    let tempStudent = {};
    this.student_data.forEach(student => {
      if (student.uuid == uuid) {
        tempStudent = student;
      }
    });
    return tempStudent;
  }

  deleteOne(uuid: string) {
    this.student_data.forEach((student, index) => {
      if (student.uuid == uuid) {
        this.student_data.splice(index, 1);
      }
    });
    return this.student_data;
  }

  create(student) {
    student.id = Number(student.id);
    student.uuid = Uuidv4();
    this.student_data.push(student);
    return this.student_data;
  }

  update(uuid, updatedStudent) {
    this.student_data.forEach(student => {
      if (student.uuid == uuid) {
        student.id = Number(updatedStudent.id);
        student.name = updatedStudent.name;
      }
    });
    return this.student_data;
  }
}
