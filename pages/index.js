import React from 'react';
import Image from 'next/image';
import Layout from "../components/Layout/Layout";

import Link from 'next/link'
import useSWR from 'swr'
import { Auth, Card, Typography, Space, Button, Icon } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import { useEffect, useState } from 'react'

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
}).then((res) => res.json())

function Home(props) {
    const { user, session } = Auth.useUser()
    const { data, error } = useSWR(
        session ? ['/api/getUser', session.access_token] : null,
        fetcher
    )
    const [authView, setAuthView] = useState('sign_in')
    
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
          (event, session) => {
            if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
            if (event === 'USER_UPDATED')
              setTimeout(() => setAuthView('sign_in'), 1000)
            fetch('/api/auth', {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'same-origin',
              body: JSON.stringify({ event, session }),
            }).then((res) => res.json())
          }
        )
    
        return () => {
          authListener.unsubscribe()
        }
      }, [])
    
    if (!user)
      return (
        <div style={{ maxWidth: '420px', margin: '96px auto' }}>
            <Card>
                <Space direction="vertical" size={8}>
                    <div>
                        <img
                        src="/si6.png"
                        width="96"
                        />
                        <Typography.Title level={3}>
                        Welcome to Si6
                        </Typography.Title>
                    </div>
                    <Auth
                        supabaseClient={supabase}
                        providers={[]}
                        view={authView}
                    />
                </Space>
            </Card>
        </div>
      )

    return (
        <Layout {...props}>
            <div className="Mask" >
                <img style={{ float: "right" }} src="icons-8-team-fc-lyt-7-l-w-5-wg-unsplash.png"
                    srcSet="icons-8-team-fc-lyt-7-l-w-5-wg-unsplash@2x.png 2x,
             icons-8-team-fc-lyt-7-l-w-5-wg-unsplash@3x.png 3x"
                    className="icons8-team-FcLyt7lW5wg-unsplash"></img>
            </div>
        </Layout>
    )
}

export default Home