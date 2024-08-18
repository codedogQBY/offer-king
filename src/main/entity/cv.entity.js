import { EntitySchema } from 'typeorm';
import { InterviewRecord } from './interviewRecord.entity';

export const CV = new EntitySchema({
  name: 'CV',
  tableName: 'cvs', // 可以自定义表名
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
    stack: {
      type: 'simple-array',
    },
    experience: {
      type: 'simple-array',
    },
    education: {
      type: 'simple-array',
    },
    created_at: {
      type: 'datetime',
      createDate: true,
    },
    updated_at: {
      type: 'datetime',
      updateDate: true,
    },
  },
  relations: {
    interviewRecords: {
      target: 'InterviewRecord',
      type: 'many-to-many',
      joinTable: true,
      inverseSide: 'cvs',
    },
  },
});
