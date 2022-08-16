
import React from 'react'
import './main.css'
import OwlCarousel from 'react-owl-carousel'
export default function main() {
    return (
        <div>
            <div className='main-div'>
                <div className='row-1'>
                    <div className='row1-welComeToDonate'>
                        <h1>Welcome to Donate Happiness</h1>
                        <spam className='row1-spam'>"We Make A Living By What We Get. We Make A Life By What We Give."</spam>
                        <p className='row1-deatilPara'>A donation is a gift for charity, humanitarian aid, or to benefit a cause. A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles. A donation may satisfy medical needs such as blood or organs for transplant.</p>
                    </div>

                    <div className='donationBoxes'>
                        <div className='donationBox-1'>
                            <div className='donationBoxLogo-1'><img src="/assets/sliderimgs/help-icon.png" /></div>
                            <h3>Help the Children</h3>
                            <p>One of the most powerful forces on earth is the prayer of a child.</p>
                        </div>
                        <div className='donationBox-2'>
                            <div className='donationBoxLogo-2'><img src="/assets/sliderimgs/volunteer-icon.png" /></div>
                            <h3>Become a Volunteer</h3>
                            <p>The best way to find yourself is to lose yourself in the service of others.</p>
                        </div>
                        <div className='donationBox-3'>
                            <div className='donationBoxLogo-3'><img src="/assets/sliderimgs/education-icon.png" /></div>
                            <h3>Child Education</h3>
                            <p>Every child should have the opportunity to receive a quality education.</p>
                        </div>
                        <div className='donationBox-4'>
                            <div className='donationBoxLogo-4'><img src="/assets/sliderimgs/donation-icon.png" /></div>
                            <h3>Give Donation</h3>
                            <p>Giving is not just about make a donation, it's about making a difference.</p>
                        </div>
                    </div>
                </div>

                <div className='row-2'>
                    <div className='aboutDonation'>
                        <div className='aboutDonationLeft'>
                            <img className='aboutDonationLeft-Img' src="/assets/sliderimgs/about-img.jpg" />
                        </div>
                        <div className='aboutDonationRight'>

                            <h1>If you didn't know,
                                Here's a bit <span className='aboutDonationRight-span'>about us.</span></h1>
                            <p>The Donate Happiness network is the nation’s largest domestic poverty-relief organization, working to connect people with food & other things and end poverty. Donors, staff, and volunteers all play an important role in our efforts to end poverty in the United States.</p>
                            <button className='aboutDonationBtn'>For More</button>
                        </div>
                    </div>
                </div>

                <div className='row-3'>
                    <div className='countDoantion'>
                        <div className='countDonationBox-1'>
                            <div className='donoCountLogo'>
                                donation logo
                            </div>
                            <div className='donoCounter'>
                                counter
                            </div>
                        </div>
                        <div className='countDonationBox-2'>
                            <div className='donoCountLogo'>
                                donation logo
                            </div>
                            <div className='donoCounter'>
                                counter
                            </div>
                        </div>
                        <div className='countDonationBox-3'>
                            <div className='donoCountLogo'>
                                donation logo
                            </div>
                            <div className='donoCounter'>
                                counter
                            </div>
                        </div>
                        <div className='countDonationBox-4'>
                            <div className='donoCountLogo'>
                                donation logo
                            </div>
                            <div className='donoCounter'>
                                counter
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row-4'>
                    <div className='recentCauses'>
                        <h1>Recent Causes</h1>
                        <p>"There could be no definition of a successful life that does not include service to others."</p>
                        <OwlCarousel items={3}
                            className="owl-theme" id='owl-theme-recentCause'
                            loop
                            autoPlay
                            autoplayTimeout={2000}
                            autoplayHoverPause={true}
                            margin={40} >
                            <div className='recentCausesBoxes'>
                                <div className='recentCausesImg'>
                                    <img id='recentCausesImg' src='/assets/sliderimgs/recentCausesimg1.jpg' alt='recentCausesImgs' />
                                </div>
                                <div className='recentCausesBoxDetails'>
                                    <h3>Donate for Needy</h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>
                            <div className='recentCausesBoxes'>
                                <div className='recentCausesImg'>
                                    <img id='recentCausesImg' src='/assets/sliderimgs/recentCausesimg2.jpg' alt='recentCausesImgs' />
                                </div>
                                <div className='recentCausesBoxDetails'>
                                    <h3>Donate for Needy</h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>
                            <div className='recentCausesBoxes'>
                                <div className='recentCausesImg'>
                                    <img id='recentCausesImg' src='/assets/sliderimgs/recentCausesimg1.jpg' alt='recentCausesImgs' />
                                </div>
                                <div className='recentCausesBoxDetails'>
                                    <h3>Donate for Needy</h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>
                            <div className='recentCausesBoxes'>
                                <div className='recentCausesImg'>
                                    <img id='recentCausesImg' src='/assets/sliderimgs/recentCausesimg1.jpg' alt='recentCausesImgs' />
                                </div>
                                <div className='recentCausesBoxDetails'>
                                    <h3>Donate for Needy</h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>
                            <div className='recentCausesBoxes'>
                                <div className='recentCausesImg'>
                                    <img id='recentCausesImg' src='/assets/sliderimgs/recentCausesimg1.jpg' alt='recentCausesImgs' />
                                </div>
                                <div className='recentCausesBoxDetails'>
                                    <h3>Donate for Needy</h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className='row-5'>
                    <div className='companiesOrg'>
                        <h1>Companies Serving Us</h1>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        </p>
                        <OwlCarousel items={1}
                            className="owl-theme" id='owl-theme-companiesOrg'
                            nav={true}
                            loop={true}
                            margin={0}
                        >
                            <div className='companiesOrgDiv'>
                            
                                <div className='companiesOrgDetails'><p>At vero eos et accusamus et
                                     iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                                    excepturi sint occaecati cupiditate non provident,</p>
                                    <div className='companiesOrgOwnersImg'>
                                    </div>
                                    </div>
                            </div>
                            <div className='companiesOrgDiv'>
                                <div className='companiesOrgDetails'>
                                <p>At vero eos et accusamus et
                                     iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                                    excepturi sint occaecati cupiditate non provident,</p>
                                    <div className='companiesOrgOwnersImg'>
                                    </div>
                                </div>
                            </div>
                            <div className='companiesOrgDiv'>
                                <div className='companiesOrgDetails'>
                                <p>At vero eos et accusamus et
                                     iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                                    excepturi sint occaecati cupiditate non provident,</p>
                                    <div className='companiesOrgOwnersImg'>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

            


        
            </div>
        </div>
    )
}
