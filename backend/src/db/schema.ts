import { pgTable, varchar, integer } from "drizzle-orm/pg-core";

export const test = pgTable("test", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    attribute1: varchar({ length: 255 }).notNull(),
    attribute2: varchar({ length: 255 }).unique(),
});
