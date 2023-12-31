import React from "react";
import './AboutUs.css'; 
import img from "./Images/blockchain.jpg";
import modi from "./Images/AzadikaAmritMahotsav-lawmin.jpg";


const AboutUs = () => {
  return (
    <div className="about-us">
        <div>
            <img src={modi} alt="modi"  width="100%"></img>
        </div>
     
      <div className="about-us-info">
        <h2 className="text-about-us">About Us</h2>
        <p>
        As per the Allocation of Business (Rules), 1961, Department of Justice is a part of Ministry of Law & Justice, Government of India. It is one of the oldest Ministries of the Government of India. Till 31.12.2009, Department of Justice was part of Ministry of Home Affairs and Union Home Secretary had been the Secretary of Department of Justice. Keeping in view the increasing workload and formulating many policies and programmes on Judicial Reforms in the country, a separate Department namely Department of Justice was carved out from MHA and placed under the charge of Secretary to Government of India and it started working as such from 1st January, 2010 under the Ministry of Law & Justice. The Department is housed in the Jaisalmer House, 26, Man Singh Road, New Delhi. The Organizational setup of the Department includes 01 Special Secretary, 03 Joint Secretaries, 07 Directors/ Deputy Secretaries and 08 Under Secretaries. The functions of the Department of Justice include the appointment, resignation and removal of the Chief Justice of India, Judges of the Supreme Court of India, Chief Justices and Judges of the High Courts and their service matters.
        </p>
        <p>
        In addition, the Department implements important schemes for Development of Infrastructure Facilities for Judiciary, setting up of Special Courts for speedy trial and disposal of cases of sensitive nature (Fast Track Special Court for cases of rape and POCSO Act), E-court Project on computerization of various courts across the country, legal aid to poor and access to justice, financial assistance to National Judicial Academy for providing training to the Judicial Officers of the country. The functions of Department of Justice are given in Allocation of Business (Rules), 1961
        </p>
        <div className="about-us-image">
        <img src={img} alt="img" width="40%"></img>
        
      </div>
      </div>
    </div>
  );
};

export default AboutUs;