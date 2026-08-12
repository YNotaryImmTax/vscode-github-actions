import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// Configure NextAuth options here. Add providers and callbacks as needed.
// Make sure to set GITHUB_ID and GITHUB_SECRET in your environment variables.
const authOptions = {
  providers: [
    // Uncomment and configure the provider below after you set env vars
    // GithubProvider({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
