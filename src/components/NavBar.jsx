import React from 'react';
import { Container, Icon, Image, Menu, Button } from "semantic-ui-react";

function NavBar (props) {
    
    return (<div style={{marginBottom: 100}}>
                <Menu fixed='top'>
                        <Menu.Item>
                            <Image size="mini" src="https://react.semantic-ui.com/logo.png" style={{ marginRight: '1.5em' }}/>
                            Ascelpius
                        </Menu.Item>

                        <Menu.Menu position='right'>
                            <Menu.Item >
                                <Button>Login</Button>
                            </Menu.Item>
                            <Menu.Item >
                                <Button>Sign Up</Button>
                            </Menu.Item>
                        </Menu.Menu>
                </Menu>
            </div>);
}

export default NavBar;