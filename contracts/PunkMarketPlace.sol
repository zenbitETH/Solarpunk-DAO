// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract PunkMarketPlace {

    mapping(uint256 => address) public ownerOfToken;
    mapping(uint256 => bool) onSale;

    // We can set up a price here to be the same for all NFTs

    constructor() payable {
    }

    function buy(uint256 tokenId) external payable {
     //   require(ownerOfToken[tokenId] == address(0), "Not for sale");
        require(onSale[tokenId] == true, "This Nft is not for sale!");
        ownerOfToken[tokenId] = msg.sender;
    }

    function sell(uint256 tokenId) external {
        require(ownerOfToken[tokenId] == msg.sender, "You can't sell this NFT as it's not yours");
        require(onSale[tokenId] == false, "This token is already on Sale/ You don't own it!");

        onSale[tokenId] = true;

        //payable(msg.sender).transfer(price) We can add a price variable or msg.value here or in the buy function
    }

    function isOnsale(uint256 _tokenId) public view returns (bool) {
        if(ownerOfToken[_tokenId] == address(0)) {
            return true;
        }
        return false;

        // We can also make a function that should list all onSale Nft Id's
    }

    function removeOffer(uint256 tokenId) public {
        require(ownerOfToken[tokenId] == msg.sender, "This token is not yours, so you cannot remove the Offer");
        require(onSale[tokenId] == true, "This token is not on sale so it is not possible to remove it");

        onSale[tokenId] = false;
    }

}