

import NextAuth, { type NextAuthOptions } from "next-auth";
//import DiscordProvider from "next-auth/providers/discord";

import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
// Prisma adapter for NextAuth, optional and can be removed
//import { PrismaAdapter } from "@next-auth/prisma-adapter";
//import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  }, 
  // Configure one or more authentication providers
  
  adapter: FirestoreAdapter({
    apiKey: process.env.NEXT_PUBLIC_Firebase_API_Key,
    authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
    projectId: process.env.NEXT_PUBLIC_Project_Id,
    storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
    messagingSenderId: process.env.NEXT_PUBLIC_Message_Sender_Id,
    appId: process.env.NEXT_PUBLIC_App_Id,
    
    
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    // Optional emulator config (see below for options)
    emulator: {},
  }),

  providers: [
    GoogleProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);





/*
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // Optional emulator config (see below for options)
    emulator: {},
  }),
*/