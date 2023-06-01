import { prisma } from "@/utils/prisma";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: "johannes12345",
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session: async ({ session }) => {
      if (!session) return null;
      const isNotNew = await prisma.user.findMany({
        where: {
          name: session.user.name,
        },
      });

      if (!isNotNew[0]) {
        await prisma.user.create({
          data: {
            name: session.user.name,
            image: session.user.image,
          },
        });
      }

      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
