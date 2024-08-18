import { EntitySchema } from 'typeorm';

export const QuestionType = new EntitySchema({
  name: 'QuestionType',
  tableName: 'question_type',
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
    questions: {
      target: 'Question',
      type: 'many-to-many',
      joinTable: true,
      inverseSide: 'type',
    },
  },
});
