-- CreateTable
CREATE TABLE "assignment" (
    "id" SERIAL NOT NULL,
    "assignment_title" TEXT NOT NULL,
    "assignment_details" TEXT NOT NULL,

    CONSTRAINT "assignment_pkey" PRIMARY KEY ("id")
);
