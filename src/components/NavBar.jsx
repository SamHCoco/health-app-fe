import React from 'react';
import { Image, Menu, Button } from "semantic-ui-react";
import { useHistory} from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

function NavBar () {
    const history = useHistory();
    const keycloak = useKeycloak().keycloak;
    
    return (<div style={{marginBottom: 100}}>
                <Menu fixed='top'>
                        <Menu.Item>
                            <Image size="mini" src="https://react.semantic-ui.com/logo.png" style={{ marginRight: '1.5em' }}/>
                            Ascelpius
                        </Menu.Item>

                        { !keycloak.authenticated && <Menu.Menu position='right'>
                                        <Menu.Item >
                                            <Button onClick={() => keycloak.login()}>Login</Button>
                                        </Menu.Item>
                                        <Menu.Item >
                                            <Button onClick={() => history.push('/sign-up')}>Sign Up</Button>
                                        </Menu.Item>
                                    </Menu.Menu>
                        }
                        { keycloak.authenticated && <Menu.Menu position='right'>
                                        <Menu.Item >
                                            <Button onClick={() => keycloak.logout()}>Sign out</Button>
                                        </Menu.Item>
                                    </Menu.Menu>
                        }
                </Menu>
            </div>);

            
}

export default NavBar;