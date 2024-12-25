import React, { useEffect } from 'react';
import './CSS/Footer.css'
import tesVId from '../asset/video/teslaVid.webm';

const Footer = () => {
    useEffect(() => {
        const vid = document.getElementsByTagName('video')[0];
        if (vid) {
            vid.muted = true
            vid.loop = true
            vid.play()
        }
    }, []);

    return (
        <div id="parentFoot">
            <div id='footer'>
                <div id="fVid">
                    <video src={tesVId}></video>
                </div>
                <div id="fText">
                    <span>We are Tesla</span>
                    <button>Join Tesla</button>
                </div>
            </div>
            <div id="tesDoc">
                <span><sup>1</sup>
                    Monthly lease payment excludes taxes and fees, is based on $44,990 Model Y Long Range Rear-Wheel
                    Drive purchase price and is subject to change at any time. Requires $2,999 down with 36 months and
                    10,000 miles. Subject to credit approval and available in select U.S. states. Terms apply.
                </span>
                <span><sup>2</sup>
                    Monthly lease payment excludes taxes and fees, is based on $42,490 Model 3 Long Range Rear-Wheel
                    Drive purchase price and is subject to change at any time. Requires $2,999 down with 36 months and
                    10,000 miles. Subject to credit approval and available in select U.S. states. Terms apply.
                </span>
                <span><sup>3</sup>
                    Price before estimated savings is $81,630, including Destination and Order Fees,
                    but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will
                    increase the price. Estimated savings includes $6,500 in gas savings estimated
                    over five years, the $7,500 Federal Tax Credit and state incentives, available to
                    eligible buyers and subject to MSRP caps.
                    Not all vehicles, customers or finance options will be eligible. Terms apply.
                </span>
                <span><sup>4</sup>
                    Price before estimated savings is $76,630, including Destination and Order Fees,
                    but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades
                    that will increase the price. Estimated savings includes $6,500 in gas savings estimated
                    over five years and state incentives, available to eligible buyers and subject to MSRP caps.
                    Not all vehicles, customers or finance options will be eligible. Terms apply.
                </span>
            </div>
            <div id="lastTes">
                <span>Tesla &copy; 2024</span>
                <span>Privacy & Legal</span>
                <span>Vehicle Recalls</span>
                <span>News</span>
            </div>
        </div>
    );
}

export default Footer;
