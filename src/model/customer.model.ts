import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Customer {
  @Field()
  name: string

  @Field()
  id: string
}