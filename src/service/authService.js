import httpService from './httpService';
import config from '../config/config.json';


export async function isAuthenticated(accessToken) {
    try {
        const {data: response} = await httpService.post(config.authTokenInfoUrl, {'access_token': accessToken});
        console.log("isAuthenticated: " + response.active);
        const {active} = response;
        return active;
    } catch (exception) {
        console.log('Failed to verify user authenatication:');
        console.log(exception);
        return false;
    }
}

export async function authenticate(username, password, redirectTo) {
    const data = {
        "username": username,
        "password": password
        // "client_id": config.keycloakClient,
        // "grant_type": "password"
    }

    // const headers = {
    //     "headers" : {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //     }
    // }

    // const url  = config.keycloakBaseUrl + "/auth/realms/" + config.keycloakRealm + "/protocol/openid-connect/token";
    const {data: response} = await httpService.post(config.authTokenUrl, data);

    console.log('Successfully authenticated user with keycloak:');
    console.log(response);
    
    const {access_token: accessToken, refresh_token: refreshToken} = response;

    if (!accessToken) {
        throw 'Access token undefined';
      }

    if (!refreshToken) {
        throw 'Refresh token undefined';
    }

    localStorage.setItem('accessToken', accessToken);
    console.log('Successfully set accessToken for username ' + username + ': ' + accessToken);

    localStorage.setItem('refreshToken', refreshToken);
    console.log('Successfully set accessToken for username ' + username + ': ' + refreshToken);
    
    if (redirectTo) {
        window.location = redirectTo;
    }
}