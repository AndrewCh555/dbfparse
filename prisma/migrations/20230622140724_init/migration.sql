-- CreateTable
CREATE TABLE "DbfRecord" (
    "id" SERIAL NOT NULL,
    "leistnr" INTEGER,
    "leistung" VARCHAR(255),
    "preis" INTEGER,
    "kname" VARCHAR(255),

    CONSTRAINT "DbfRecord_pkey" PRIMARY KEY ("id")
);
