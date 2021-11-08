import React from 'react';
import Link from './Link';
import "./Style.css" ;

const Header = () => {

    return (
        <div className="ui secondary pointing menu" id="nav">
            <h4 className="ui header" id="header">Transfer money</h4>
            <Link href="/register" className="item" id="link">
                Register
            </Link>
            <Link href="/" className="item">
                Login
            </Link>
            <Link href="/money" className="item">
                Money transfer
            </Link>
            <Link href="/transfer" className="item">
                Transfer
            </Link>
        </div>
    )

}
export default Header;