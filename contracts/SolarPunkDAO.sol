// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract PunkDAO {



    enum ProposalType {
        BUY,
        SELL
    }

    enum VoteType {
        Yes,
        No
    }

    struct Proposal {
        uint256 nftTokenId;

        uint256 deadline;

        uint256 yesVotes;
        uint256 noVotes;

        bool executed;

        mapping(address => bool) voters;
    }

    struct Member{
        uint256 joinedAt;

        uint256[] lockedNFTs;
    }

    // Map Proposal ID to Proposal

    mapping(uint256 => Proposal) public proposals;
    mapping(address => Member) public members;

    uint256 public numberOfProposals;
    uint256 public totalVotingPower;

    modifier memberOnly(){
        require(members[msg.sender].lockedNFTs.length > 0, "Not a member");
        _;
    }

        // Create Proposal in the DAO


    function createProposal(uint256 _forTokenId, ProposalType _proposalType)external memberOnly returns(uint256){
        if(_proposalType == ProposalType.BUY) {
            // here we need a require function for the marketplace where the nftID has to be on Sale
        } else {
            // Or this tokenID has to be owned by the msg.sender ( also a requirement)
        }
        uint256 numProposals = 0;
        Proposal storage newProposal = proposals[numProposals];
        proposals.nftTokenId = _forTokenId;
        proposals.deadline = block.timestamp + 2 minutes;
        proposals.proposalType = _proposalType;

        numProposals++;

        return numProposals -1;
    }

        // Vote yes / no on a given proposal

    function voteOnProposal(uint256 _proposalId, VoteType _vote) external memberOnly {
        Proposal storage proposal = proposals[_proposalId];
        require(proposals.deadline>block.timestamp, "Inactive proposal");
        require(proposal.voters[msg.sender] == false, "already voted");

        proposal.voters[msg.sender] = true;
        uint256 votingPower = members[msg.sender].lockedNFTs.length;

        if(_vote == VoteType.Yes){
            proposal.yesVotes += votingPower;
        } else {
            proposal.noVotes += votingPower;
        }
    }

    
    // Execute the proposal

    function executeProposal(uint256 _proposalId) external memberOnly {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.deadline <= block.timestamp, "Active proposal");
        require(proposal.executed == false, "Already Executed");

        proposal.executed = true;
        if(proposal.yesVotes > proposal.noVotes){
            // We can get the energy power here for example to give to the user
        }
    }

    // We need a way for people to become a member of the DAO

    function onERC721Received(address, address from, uint256 tokenId, bytes memory) public returns(bytes4){
        // This function needs to have override as it will inherit from ERC721

    }

    
    // We need a way for people to leave the DAO

    function quit() external memberOnly {
        Member storage leavingMember = members[msg.sender];
        require(
            block.timestamp - members.joinedAt > 5 minutes, "minimum membership period"
        );

        uint256 share = (address(this).balance * members.lockedUpNFTs.length) / totalVotingPower;
    }

    totalVotingPower -= member.lockedNFTs.length;
    //payable(msg.sender).transfer(amount)  => this is just an example
    //We can do safeTransfer here but have to discuss


    // at the end we do delete members[msg.sender]
}