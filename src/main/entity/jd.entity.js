import { EntitySchema } from 'typeorm';
import { InterviewRecord } from './interviewRecord.entity';

export const Jd = new EntitySchema({
  name: 'Jd',
  tableName: 'jd',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    description: {
      type: 'text',
      nullable: true,
    },
    company: {
      type: 'varchar',
    },
    city: {
      type: 'varchar',
    },
    salary: {
      type: 'varchar',
    },
    publishTime: {
      type: 'datetime',
    },
    url: {
      type: 'varchar',
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
    records: {
      target: 'InterviewRecord',
      type: 'one-to-many',
      inverseSide: 'jd',
    },
  },
});
