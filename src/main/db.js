import { DataSource } from "typeorm";
import { InterviewType } from "./entity/interviewType.entity";
import { InterviewRecord } from "./entity/interviewRecord.entity";
import { Question } from "./entity/question.entity";
import { QuestionType } from "./entity/questionType.entity";
import { Tag } from "./entity/tag.entity";
import { Jd } from "./entity/jd.entity";

export const db = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [InterviewType, InterviewRecord, Question, QuestionType, Tag, Jd],
  synchronize: true,
  logging: true
})

