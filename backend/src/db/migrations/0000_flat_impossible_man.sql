CREATE TABLE "test" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "test_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"attribute1" varchar(255) NOT NULL,
	"attribute2" varchar(255),
	CONSTRAINT "test_attribute2_unique" UNIQUE("attribute2")
);
