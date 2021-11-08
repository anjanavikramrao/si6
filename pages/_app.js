import 'bootstrap/dist/css/bootstrap.css';
import App from 'next/app';
import { withRouter } from "next/router";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'select2/dist/css/select2.min.css';
import React from 'react';
import "../assets/base.scss";
import { RootContext } from "../contexts/root.context";
import { RootProvider } from "../providers/root.provider";
import '../styles/CarouselDemo.css';
import "../styles/checkbox.scss";
import "../styles/coursecard.scss";
import '../styles/coursecarddetail.scss';

//Enterprise structure scss

import "../styles/Entity/Datatablelistview.scss";
import "../styles/Entity/Entitycreateform.scss";
import "../styles/Entity/Entitydetailedview.scss";

// stylings
import '../styles/globals.scss';
import "../styles/Landingpage.css";
import "../styles/Register.scss";

import '../styles/site.scss';
import "../styles/Surveycreator.scss";

import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'

import "../styles/AdmissionProgress.scss"


export default function Si6App({ Component, pageProps }) {
    return (
        <RootProvider>
            <RootContext.Consumer>
            {rootProps => {
                return (
                    <Auth.UserContextProvider supabaseClient={supabase}>
                        <Component {...pageProps} {...rootProps}/>
                    </Auth.UserContextProvider>
                )
            }}
            </RootContext.Consumer>
        </RootProvider>
    )
}

Si6App.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps
    };
};