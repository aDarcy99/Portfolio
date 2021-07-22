import App from 'next/app'
import Head from "next/head"
import React, {
  useEffect
} from 'react';
import {ThemeProvider} from "react-jss"
//components
import CssReset from '../components/CssReset/CssReset';
//functions
import { createTheme, colors } from "@themerig/core";
import Color from 'color';

let theme = createTheme({
  palette:{
    primary: {
      main: "#41A89C",
      dark: Color("#41A89C").darken(0.3).toString(),
      text: "black"
    },
    defaults: {
      background: "#0E141B",
      card: Color("#0E141B").lighten(0.5).toString(),
      text: {
        heading: colors.grey[2],
        body: colors.grey[4],
        link: colors.blue[5]
      },
    }
  },
  typography: {
    root: {
      fontFamily: "Roboto",
      fontSize: 16
    },
    h1: {
      fontSize: 64,
      fontWeight: 500
    },
    h2: {
      fontSize: 32
    },
    h3: {
      fontSize: 24
    },
    body2: {
      fontSize: 12
    },
    heroHeader: {
      fontSize: 96,
      fontWeight: 800
    }
  }
});
export default function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  useEffect(() => {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }, [])
  return ( 
    <React.Fragment >
      <Head>
      <meta name = "viewport" content = "minimum-scale=1, initial-scale=1, width=device-width" />
      </Head> 
      <ThemeProvider theme={ theme } >
        <CssReset/>
        <Component {...pageProps}/> 
      </ThemeProvider> 
    </React.Fragment>
  )
}