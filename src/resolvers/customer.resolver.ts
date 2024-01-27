import { Arg, Mutation, Resolver } from "type-graphql";
import Customer from "../model/customer.model";
import { CreateCustomerInput } from "../dto/input/create-customer.input";

@Resolver(() => Customer)
export default class CustomerResolver {
  @Mutation(() => Customer)
  createCustomer(@Arg("data") data: CreateCustomerInput) {
    const customer: Customer = {
      name: data.name,
      id: data.id,
    };
    return customer;
  }
}
