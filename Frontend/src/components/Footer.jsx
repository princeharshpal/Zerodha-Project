import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { PiInstagramLogo } from "react-icons/pi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      icon: <RiTwitterXLine />,
      link: "",
    },
    {
      icon: <BiLogoFacebookSquare />,
      link: "",
    },
    {
      icon: <PiInstagramLogo />,
      link: "",
    },
    {
      icon: <BiLogoLinkedin />,
      link: "",
    },
    {
      icon: <FaYoutube />,
      link: "",
    },
    {
      icon: <BiLogoWhatsapp />,
      link: "",
    },
    {
      icon: <FaTelegram />,
      link: "",
    },
  ];

  const impLinks = [
    {
      heading: "Company",
      links: [
        { link: "/about", label: "About" },
        { link: "/products", label: "Products" },
        { link: "/pricing", label: "Pricing" },
        { link: "/refer", label: "Referral programme" },
        { link: "/careers", label: "Careers" },
        { link: "/tech", label: "Zerodha.tech" },
        { link: "/open-source", label: "Open }source" },
        { link: "/press-media", label: "Press & media" },
        { link: "/cares", label: "Zerodh Cares (CSR)" },
      ],
    },
    {
      heading: "Support",
      links: [
        { link: "/contact", label: "Contact us" },
        { link: "/support", label: "Support portal" },
        { link: "/z-connect", label: "Z-Connect blog" },
        { link: "/", label: "List of charges" },
        { link: "/", label: "Downloads & resources" },
        { link: "/", label: "Videos" },
        { link: "/", label: "Market overview" },
        { link: "/", label: "How to file a complaint" },
        { link: "/", label: "Status of your complaints" },
      ],
    },
    {
      heading: "Account",
      links: [
        { link: "/", label: "Fund transfer" },
        { link: "/", lable: "Open an account" },
      ],
    },
  ];

  const footerPara = [
    "Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF",
    "Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances",
    "Smart Online Dispute Resolution | Grievances Redressal Mechanism",
    "Investments in securities market are subject to market risks; read all the related documents carefully before investing.",
    "Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.",
    "'Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.' Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.",
  ];

  const bottemLinks = [
    "NSE",
    "BSE",
    "MCX",
    "Terms & conditions",
    "Policies & procedures",
    "Privacy policy",
    "Disclosure",
    "For investor's attention",
    "Investor charter",
  ];
  return (
    <div className="w-full px-48 py-10 bg-gray-100 ">
      <div className="grid grid-cols-4 mb-10">
        <div className="space-y-5">
          <img className="h-5" src="/images/logo.svg" alt="logo" />

          <div className="space-y-2 text-sm text-gray-500 font-normal">
            <p>© 2010 - 2025, Zerodha Broking Ltd.</p>

            <p>All rights reserved.</p>
          </div>

          <p className="w-3/5 flex flex-wrap gap-5 text-2xl text-gray-500">
            {socialMedia.map((app, idx) => {
              return (
                <Link className=" hover:text-blue-500" key={idx} to={app.link}>
                  {app.icon}
                </Link>
              );
            })}
          </p>
        </div>

        {impLinks.map((content, idx) => {
          return (
            <div className="space-y-6" key={idx}>
              <h2 className="text-xl text-gray-800 font-semibold">
                {content.heading}
              </h2>

              <div className="flex flex-col space-y-3 text-gray-500 w-fit">
                {content.links.map((link, idx) => {
                  return (
                    <Link
                      className="hover:text-blue-500 text-lg"
                      key={idx}
                      to={link.link}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-gray-500 space-y-2">
        {footerPara.map((para, idx) => {
          return <p key={idx}>{para}</p>;
        })}
      </div>

      <div className="flex items-center w-full justify-center gap-5 mt-5 text-sm">
        {bottemLinks.map((link, idx) => {
          return (
            <Link className="text-gray-500" key={idx}>
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
