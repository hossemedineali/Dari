// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import superjson from "superjson";
import type { AppType,AppProps } from "next/app";
import type { AppRouter } from "../server/router";
import type { Session } from "next-auth";

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { AnimatePresence } from "framer-motion"

import "../styles/globals.css";

import { ThemeProvider } from "../context/context";

import Layout from "../components/layout/layout";
import { trpc } from "../utils/trpc";


export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps &AppType& {
  Component: NextPageWithLayout,
  session: Session | null
}

const MyApp: AppType<AppPropsWithLayout> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const user=trpc.useQuery(['getUser'])

  console.log('user from _app.tsx',user)
    if(typeof window !='undefined'){
      localStorage.setItem('user',JSON.stringify(user.data))

    }

    

   

  return (
    <SessionProvider session={session}>
      <AnimatePresence>
      <Layout>

      <ThemeProvider>

      <Component {...pageProps} />
      
      </ThemeProvider>
      </Layout>
      </AnimatePresence>
    </SessionProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({  }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
       queryClientConfig: { defaultOptions: { queries: { staleTime: 60000 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
