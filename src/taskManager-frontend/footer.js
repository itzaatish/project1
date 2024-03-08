import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 0',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-logo">
                            <img src="logo.png" alt="Website Logo" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-info">
                            <p>Contact us: example@email.com</p>
                            <p>123 Main Street, Cityville, Country</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-social">
                            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;