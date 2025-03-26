import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { SiCircle } from "react-icons/si";
import { SiSimpleanalytics } from "react-icons/si";
import { PiCoinVertical } from "react-icons/pi";
import { Link } from "react-router-dom";

const CreateTickets = () => {
  const contents = [
    [
      {
        icon: <FiPlusCircle />,
        heading: "Account Opening",
        links: [
          "Resident individual",
          "Minor",
          "Non Resident Indian (NRI)",
          "Company, Partnership, HUF and LLP",
          "Glossary",
        ],
      },
      {
        icon: <LuCreditCard />,
        heading: "Funds",
        links: [
          "Add money",
          "Withdraw money",
          "Add bank accounts",
          "eMandates",
        ],
      },
    ],
    [
      {
        icon: <FiUser />,
        heading: "Your Zerodha Account",
        links: [
          "Your Profile",
          "Account modification",
          "Client Master Report (CMR) and Depository Participant (DP)",
          "Nomination",
          "Transfer and conversion of securities",
        ],
      },
      {
        icon: <SiCircle />,
        heading: "Console",
        links: [
          "Portfolio",
          "Corporate actions",
          "Funds statement",
          "Reports",
          "Profile",
          "Segments",
        ],
      },
    ],
    [
      {
        icon: <SiSimpleanalytics />,
        heading: "Kite",
        links: [
          "IPO",
          "Trading FAQs",
          "Margin Trading Facility (MTF) and Margins",
          "Charts and orders",
          "Alerts and Nudges",
          "General",
        ],
      },
      {
        icon: <PiCoinVertical />,
        heading: "Coin",
        links: [
          "Understanding mutual funds and Coin",
          "Coin app",
          "Coin web",
          "Transactions and reports",
          "National Pension Scheme (NPS)",
        ],
      },
    ],
  ];
  return (
    <div className="mx-48 py-10">
      <h2 className="text-2xl text-gray-500 mb-10">
        To create a ticket, select a relevant topic
      </h2>

      <div className="grid grid-cols-3">
        {contents.map((content, idx) => {
          return (
            <div key={idx}>
              {content.map((obj, idx) => {
                return (
                  <div className="mb-10" key={idx}>
                    <p className="flex items-center gap-2 mb-5 text-lg">
                      <span>{obj.icon} </span>

                      <span>{obj.heading}</span>
                    </p>

                    <div className="space-y-4 flex flex-col ml-6">
                      {obj.links.map((link, idx) => {
                        return (
                          <Link className="text-blue-500" key={idx}>
                            {link}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateTickets;
