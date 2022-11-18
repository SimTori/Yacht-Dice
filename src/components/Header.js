import React from "react";
import 'semantic-ui-css/semantic.min.css'
import {  Image, Menu } from "semantic-ui-react";

class Header extends React.Component {
    render() {
        return (
            <Menu inverted>
                <Menu.Item>
                    <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
                </Menu.Item>
            </Menu>
        )
    }
}

export default Header