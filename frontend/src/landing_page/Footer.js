import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250"}} className='border-top'>
        <div className='container  mt-5 mb-3'>
            <div className='row mt-3'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width:"50%"}}/>
                    <p>
                        &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>About</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Products</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Pricing</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Referral programme</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Careers</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Zerodha.tech</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Press & media</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Zerodha cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Contact</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Support portal</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Z-Connect blog</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>List of charges</a><br/>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Downloads & resources</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Open an account</a><br />
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>Fund transfer</a><br />
                    <a href='' style={{textDecoration:"none", color:"grey"}} className='mb-5'>60 day challenge</a><br />
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
                <p>Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru – 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID, Nature of Complaint, Communication, Speedy redressal of the grievances</p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please use your bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a matter of caution, please do not share your login credentials and password with anyone and not to fall prey to any fraudulent activities. In case you are not allotted shares, the funds will remain in your bank account.</p>
                <div className='text-center'>
                <p>
                    <a href='' className='footerLink'>NSE</a>
                    <a href='' className='footerLink'>BSE</a>
                    <a href='' className='footerLink'>MCX</a>
                    <a href='' className='footerLink'>Terms & Conditions</a>
                    <a href='' className='footerLink'>Policies & Procedures</a>
                    <a href='' className='footerLink'>Privacy Policy</a>
                    <a href='' className='footerLink'>Disclosure</a>
                </p>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;