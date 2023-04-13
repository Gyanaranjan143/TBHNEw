import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>TBH</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style>{`@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap");
body {
  margin: 0;
  line-height: normal;
}
`}</style>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
