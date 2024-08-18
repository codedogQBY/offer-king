import { EntitySchema } from 'typeorm';
import { InterviewRecord } from './interviewRecord.entity';

export const InterviewType = new EntitySchema({
  name: 'InterviewType',
  tableName: 'interview_types',
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
      inverseSide: 'type',
    },
  },
});
