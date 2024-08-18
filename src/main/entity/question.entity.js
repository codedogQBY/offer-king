import { EntitySchema } from 'typeorm';

export const Question = new EntitySchema({
  name: 'Question',
  tableName: 'question',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    question: {
      type: 'text',
    },
    answer: {
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
    tags: {
      target: 'Tag',
      type: 'many-to-many',
      joinTable: true,
      inverseSide: 'questions',
    },
    interviewRecords: {
      target: 'InterviewRecord',
      type: 'many-to-many',
      joinTable: true,
      inverseSide: 'questions',
    },
    type: {
      target: 'QuestionType',
      type: 'many-to-many',
      joinTable: true,
      inverseSide: 'questions',
    },
  },
});
