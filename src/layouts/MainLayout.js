import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ClientOAuth2 from 'client-oauth2';
import localStorage from 'localStorage';

const MainLayout = (props) => {

    const [loading, setLoading] = useState(false);

    let obAuth = new ClientOAuth2({
        clientId: 'obstore-client-id',
        clientSecret: 'obstore-secret#do-not-tell-anyone',
        accessTokenUri: 'https://obstore.herokuapp.com/oauth/token',
        authorizationUri: 'https://obstore.herokuapp.com/oauth/authorize',
        redirectUri: 'http://localhost:3000',
        scopes: ['write'],
    })

    const getToken = async () => {
        let resp = await obAuth.owner.getToken("customer", "customer123");
        console.log(resp.data);

        localStorage.setItem('token', resp.data.access_token);
        setLoading(false);
    }

    // componentDidmounr
    useEffect(() => {
        getToken();
    }, []);

    return (
        <div>
            {
                loading? <p>loading....</p> : props.children
            }
        </div>
    )
}

export default MainLayout;