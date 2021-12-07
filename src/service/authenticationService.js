import httpService from './httpService';
import config from '../config/config.json';


export async function authenticate(username, password) {
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
    console.log("Successfully authenticated with keycloak:");
    console.log(response);
}