// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract EvidenceImpl{
    address owner;
    mapping(address=>bool) nodalOfficers;
    string[] evidence;
    constructor(){
        owner=msg.sender;
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
    function addEvidence(string memory uri) public {
        evidence.push(uri);
    }
    function retrieveEvidences() public view returns(string[] memory){
        return evidence;
    }

}