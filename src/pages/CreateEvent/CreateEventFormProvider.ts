import { Tables } from "@/lib/database.types";
import { createFormContext } from "@mantine/form";

type FormValues = Omit<Tables<"events">, "id" | "owner" | "created_at">;

export const [CreateEventFormProvider, useCreateEventFormContext, useCreateEventForm] = createFormContext<FormValues>();
