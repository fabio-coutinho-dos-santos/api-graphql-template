import { Field, InputType } from "type-graphql";

@InputType()
export default class CreateAppointmentInput {
  @Field()
  customerId: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}
