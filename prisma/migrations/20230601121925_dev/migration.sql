/*
  Warnings:

  - You are about to drop the column `posts` on the `User` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "author_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "posts";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
