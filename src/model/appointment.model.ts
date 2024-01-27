import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Appointment {
  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}
