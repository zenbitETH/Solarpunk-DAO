// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "./PunkCities.sol";

interface ICryptoDevsNFT {

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        uint256 amount,
        bytes calldata data
    ) external;

    /// @dev Returns the owner of the `tokenId` token.
    function ownerOf(uint256 tokenId) external view returns (address owner);
}


contract PunkcityDAO is IERC1155Receiver {
  //  ICryptoDevsNFT cryptoDevsNft;
   PunkCity private _PunkCity; 

    constructor(address nftContract) payable {
      //  cryptoDevsNft = ICryptoDevsNFT(nftContract);
        setPunkcityContract(nftContract);
    }

    function setPunkcityContract(address _punkcityAddress) public {
        _PunkCity = PunkCity(_punkcityAddress);
    }

    enum ProposalType {
        CHIP,
        ENERGY
    }

    enum VoteType {
        YES,
        NO
    }

    struct Proposal {
        // the token to buy or sell from the fake marketplace
        uint256 nftTokenId;
        // how long does voting go on
        uint256 deadline;
        uint256 yesVotes;
        uint256 noVotes;
        bool executed;
        uint256 proposedAmount;
        address proposedAddress;
        ProposalType proposalType;
        mapping(address => bool) voters;
    }

    struct Member {
        bool joined;
        uint256 joinedAt;
        // array of tokenIds for CryptoDevs NFT that are locked up by this member
        uint256[] lockedUpNFTs;
        //uint256[] nftAmount;
    }

    // Map Proposal ID to Proposal
    mapping(uint256 => Proposal) public proposals;
    mapping(address => Member) public members;

    mapping(uint256 => bool) public tokenLockedUp;

    uint256 public numProposals;
    uint256 public totalVotingPower;
    uint256 public energyTreasury = 1000;
    uint256 public chipTreasury = 1000;


    // We need a way for peopel to become a member of the DAO
    function join() public payable {
        require(members[msg.sender].joined == false, "You are already a member of this DAO");

        Member storage member = members[msg.sender];
        if (member.lockedUpNFTs.length == 0) {
            member.joinedAt = block.timestamp;
            member.joined = true;
        }

        totalVotingPower++;

    }

   /* function depositToTreasury(uint256 amount, ProposalType _proposalType) public {
        if(_proposalType == ProposalType.CHIP){
            uint256 balance = _PunkCity.getChipAmount;
            require(balance >= amount);
            chipTreasury += amount;
            _PunkCity.deductChips(amount);
        }
        else if(_proposalType == ProposalType.ENERGY){
            require(_PunkCity.getEnergyAmount >= amount);
            energyTreasury += amount;
            _PunkCity.deductEnergy(amount);
        }
    } */

    function proposeEnergyOrChip(ProposalType _proposalType, uint256 proposedAmount, address proposedAddress) public returns (uint256 numProposal){
        require(members[msg.sender].joined == true, "You are not a member of the DAO so you cannot propose anything!");
        if(_proposalType == ProposalType.CHIP){
        Proposal storage proposal = proposals[numProposals];
        proposal.deadline = block.timestamp + 10 minutes;
        proposal.proposalType = _proposalType;
        proposal.proposedAmount = proposedAmount;
        proposal.proposedAddress = proposedAddress;
        } 
        else if(_proposalType == ProposalType.ENERGY){
        Proposal storage proposal = proposals[numProposals];
        proposal.deadline = block.timestamp + 10 minutes;
        proposal.proposalType = _proposalType;
        proposal.proposedAmount = proposedAmount;
        proposal.proposedAddress = proposedAddress;
        }

        numProposals++;
        return numProposals - 1;
    }
    // Vote with Yes or No on a given proposal

    function voteOnProposal(uint256 _proposalId, VoteType _vote) public returns (bool) {
        require(members[msg.sender].joined == true, "You are not a member of the DAO so you cannot vote on anything!");
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.deadline > block.timestamp, "INACTIVE_PROPOSAL");
        require(proposal.voters[msg.sender] == false, "ALREADY_VOTED");

        proposal.voters[msg.sender] = true;
        uint256 votingPower = members[msg.sender].lockedUpNFTs.length;

        if (_vote == VoteType.YES) {
            proposal.yesVotes += 1;
        } else {
            proposal.noVotes += 1;
        }

        if(proposal.yesVotes >= 2){
            _executeProposal(_proposalId);
        }

        return true;
    }

    function _executeProposal(uint256 _proposalId) private returns (bool) {
        Proposal storage proposal = proposals[_proposalId];
    //    require(proposal.deadline <= block.timestamp, "ACTIVE_PROPOSAL");
        require(proposal.executed == false, "ALREADY_EXECUTED");

        proposal.executed = true;

        if(proposal.proposalType == ProposalType.CHIP){
            chipTreasury -= proposal.proposedAmount;
            _PunkCity.transferEnergyAndchips(proposal.proposedAddress, 0, proposal.proposedAmount);
        }
        else if(proposal.proposalType == ProposalType.ENERGY){
            energyTreasury -= proposal.proposedAmount;
            _PunkCity.transferEnergyAndchips(proposal.proposedAddress,proposal.proposedAmount, 0);
        }

        return true;
    }
    
    function onERC1155Received(
        address,
        address from,
        uint256 tokenId,
        uint256 amount,
        bytes memory
    ) public override returns (bytes4) {
        require(tokenLockedUp[tokenId] == false, "ALREADY_USED");

        tokenLockedUp[tokenId] = true;
        Member storage member = members[from];
        if (member.lockedUpNFTs.length == 0) {
            member.joinedAt = block.timestamp;
        }

        totalVotingPower++;

        members[from].lockedUpNFTs.push(tokenId);
     //   members[from].nftAmount.push(amount);
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external override returns (bytes4){
        return "";
    }

    function supportsInterface(bytes4) external override pure returns (bool){
        return true;
    }
}
