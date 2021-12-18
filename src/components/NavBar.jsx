import React from 'react';
import { Image, Menu, Button } from "semantic-ui-react";

function NavBar ({user}) {
    
    return (<div style={{marginBottom: 100}}>
                <Menu fixed='top'>
                        <Menu.Item>
                            <Image size="mini" src="https://react.semantic-ui.com/logo.png" style={{ marginRight: '1.5em' }}/>
                            Ascelpius
                        </Menu.Item>

                        { !user && <Menu.Menu position='right'>
                                        <Menu.Item >
                                            <Button>Login</Button>
                                        </Menu.Item>
                                        <Menu.Item >
                                            <Button>Sign Up</Button>
                                        </Menu.Item>
                                    </Menu.Menu>
                        }
                        { user && <Menu.Menu position='right'>
                                                            <Menu.Item >
                                                                <Button>Sign out</Button>
                                                            </Menu.Item>
                                                        </Menu.Menu>
                        }
                </Menu>
            </div>);

            
}


export function renderNavOption(user, authenticated) {
     if (user && authenticated) {
        return (
            <Menu.Menu position='right'>
                <Menu.Item >
                    <Button>Sign out</Button>
                </Menu.Item>
            </Menu.Menu>
        );
     } else {
        return (
            <Menu.Menu position='right'>
            <Menu.Item >
                <Button>Login</Button>
            </Menu.Item>
            <Menu.Item >
                <Button>Sign Up</Button>
            </Menu.Item>
        </Menu.Menu>
        );
     }           
}

export default NavBar;