import { EntitySchema } from 'typeorm';
import { Jd } from './jd.entity';
import { InterviewType } from './interviewType.entity';
import { Question } from './question.entity';

export const InterviewRecord = new EntitySchema({
  name: 'InterviewRecord',
  tableName: 'interview_records', // 自定义表名
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    startTime: {
      type: 'datetime',
    },
    endTime: {
      type: 'datetime',
    },
    duration: {
      type: 'int',
    },
    score: {
      type: 'int',
    },
    customQuestions: {
      type: 'text',
    },
    content: {
      type: 'text',
    },
    status: {
      type: 'int',
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
    jd: {
      target: 'Jd',
      type: 'many-to-one',
      joinColumn: true, // 配置外键
      inverseSide: 'interviewRecords',
    },
    type: {
      target: 'InterviewType',
      type: 'many-to-one',
      joinColumn: true, // 配置外键
      inverseSide: 'records',
    },
    questions: {
      target: 'Question',
      type: 'many-to-many',
      joinTable: true, // 配置中间表
    },
  },
});
