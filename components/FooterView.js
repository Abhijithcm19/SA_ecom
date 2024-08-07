import React from 'react'
import '../Styles/FooterView.css'
import { assets } from '../assets/Assets'



const FooterView = () => {
  return (
    <> 
    <footer>
        <div className="container-fluid pt-lg-2 p-md-2 p-sm-4">
            <div className="row d-flex  p-lg-2 p-md-3 p-sm-2 mt-lg-3  " >
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="row d-flex ps-sm-3">
                
                        <div className="col-12 col-md-3 col-sm-6 ">
                            <h6 className="footer-titles ">ABOUT</h6>
                            <ul className='list-unstyled'>
                              <li> contact Us</li>
                              <li> About Us</li>
                              <li> Careers</li>
                              <li> Shopping Co. Stories</li>
                              <li> Corporate</li>
                              <li> Information</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 col-sm-6">
                            <h6 className="footer-titles ">GROUP COMPANIES</h6>
                            <ul className='list-unstyled'>
                              <li>Kalyani silks</li>
                              <li>mintra</li>
                              <li>silk palace</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 col-sm-6">
                            <h6 className="footer-titles ">HELP</h6>
                            <ul className='list-unstyled'>
                              <li>Payment</li>
                              <li>Shipping</li>
                              <li>Cancellation & Returns</li>
                              
                              <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 col-sm-6 ">
                            <h6 className="footer-titles ">CONSUMER POLICY</h6>
                            <ul className='list-unstyled'>
                              <li>Cancellation & Returns</li>
                              <li>Terms Of Use</li>
                              <li>Security</li>
                              <li>Privacy</li>
                              <li>EPR Compliance</li>
                            </ul>
                        </div>
                      
                    </div>
              
                </div>
                <div className="col-12 col-md-12 col-lg-6 ">
                    <div className="row mb-2 d-flex ps-sm-3 ">
                        <div className=" col-md-4 col-lg-5 col-sm-6">
                            <h6 className="">Mail Us:</h6>
                            <ul className='list-unstyled'>
                              <li>Shopping Co. Private Limited</li>
                              <li>Buildings xyz, </li>
                              <li>Corver Xyz Tech Village,</li>
                              <li>Kannur road, xyz village</li>
                              <li>Kannur, 5602XXXX</li>
                              <li>Kerala, India</li>
                            </ul>
                            <div className="pt-2">
                            <h6>Social</h6>
                            
                            <img src= {assets.Fb} alt="img" width={22} height={22} className='me-3' />
                            <img src= {assets.YT} alt="img" width={22} height={22} className='me-3' />
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-7 col-sm-6">
                            <h6 className="">Registered Office Address</h6>
                            <div className="row">
                                <div className="col-12 ">
                                <ul className='list-unstyled'>
                                <li>Shopping Co. Private Limited</li>
                              <li>Buildings xyz, </li>
                              <li>Corver Xyz Tech Village,</li>
                              <li>Kannur road, xyz village</li>
                              <li>Kannur, 5602XXXX</li>
                              <li>Kerala, India</li>
                              <li>CIN : U34XXXXXXXXXXXXX</li>
                              <li>Telephone: 034-34XXXXXX / 034-43XXXXXXXXXX</li>
                            </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        
        <div className="container-fluid pt-lg-1 p-md-2 p-sm-2 border-top border-secondary" >
              <div className="col-12 text-white text-center p-lg-1">
                <p className="copyright pt-2">Copyright © 2024 Designed By Sayanth C. All Rights Reserved</p>
              </div>
            </div>
     </footer>
    
    </>
  )
}

export default FooterView