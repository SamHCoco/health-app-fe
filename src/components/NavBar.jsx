import React, { useState } from 'react';
import { Image, Menu, Button } from "semantic-ui-react";
import { useHistory} from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import '../css/navbar.css';

function NavBar () {
    const history = useHistory();
    const keycloak = useKeycloak().keycloak;

    const [menuItem, setMenuItem] = useState('store');

    const onMenuItemClick = (e, { name }) => {
        setMenuItem(name);
    }
    
    return (<div style={{marginBottom: 100}}>
                <Menu fixed='top' style={{'border': 'none'}}>
                        <Menu.Item>
                            <Image size="mini" src="https://react.semantic-ui.com/logo.png" style={{ marginRight: '1.5em' }}/>
                            Ascelpius
                        </Menu.Item>

                        
                        <Menu >
                            <Menu.Item className='menuItem'
                                name='about' 
                                active={menuItem === 'about'} 
                                onClick={onMenuItemClick}
                                href='/about'>
                                <div className='menuItemContent'>About</div>
                            </Menu.Item>

                            <Menu.Item className='menuItem' 
                                name='store' 
                                active={menuItem === 'store'} 
                                onClick={onMenuItemClick}
                                href='/store'>
                                <div className='menuItemContent'>Store</div>
                            </Menu.Item>
                        </Menu>

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
                                            <Button onClick={() => keycloak.logout()}>Logout</Button>
                                        </Menu.Item>
                                    </Menu.Menu>
                        }
                </Menu>
            </div>);

            
}

export default NavBar;