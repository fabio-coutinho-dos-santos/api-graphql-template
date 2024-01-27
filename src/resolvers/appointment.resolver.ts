import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import Appointment from "../model/appointment.model";
import Customer from "../model/customer.model";
import CreateAppointmentInput from "../dto/input/create-appointment-input";

@Resolver(() => Appointment)
export class AppointmentResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [{
      startDate: new Date(),
      endDate: new Date()
    }];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startDate: data.startDate,
      endDate: data.endDate,
    };
    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment)
    return {
      name: 'John Doe'
    }
  }
}
