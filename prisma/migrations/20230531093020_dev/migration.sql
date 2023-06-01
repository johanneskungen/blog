-- AlterTable
ALTER TABLE "User" ADD COLUMN     "posts" TEXT[];

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "liked" TEXT[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
