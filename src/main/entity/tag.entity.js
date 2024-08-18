import { EntitySchema } from 'typeorm';

export const Tag = new EntitySchema({
  name: 'Tag',
  tableName: 'tag',
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
      inverseSide: 'tags',
    },
  },
});
