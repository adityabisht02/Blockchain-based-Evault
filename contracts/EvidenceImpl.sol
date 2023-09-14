// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract EvidenceImpl{
    address owner;
    mapping(address=>bool) nodalOfficers;
    Evidence[] evidence;
    constructor(){
        owner=msg.sender;
    }

    struct Evidence{
        string name;
        string description;
        string uri;
    }
     modifier onlyOwner(){
        require(msg.sender==owner,"Only owner has the right to access this");
        _;
    }
    //edit access 
    modifier onlyNodalOfficer(){
        require(isNodalOfficer(msg.sender),"Only authorized personnel can access this");
        _;
    }
    function isNodalOfficer(address add) public view returns(bool){
        return nodalOfficers[add];
    }
    function addEvidence(string memory name,string memory description,string memory uri) public {
        evidence.push(Evidence(name,description,uri));
    }
    function retrieveEvidences() public view returns(Evidence[] memory){
        return evidence;
    }

}