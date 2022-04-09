// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * Super simple NFT contract that uses `ERC721Enumerable`
 * Allows for free NFT mints until `MAX_NFTS` count is reached
 */
contract CryptoDevsNFT is ERC1155, Ownable {
    uint256 public immutable MAX_NFTS;

    uint256 tokenIdCounter;

    constructor(uint256 maxNfts) ERC1155("punkdao.com") {
        MAX_NFTS = maxNfts;
    }

    function freeMint() public {
        require(tokenIdCounter < MAX_NFTS, "MAX_SUPPLY_REACHED");
        tokenIdCounter++;
        _mint(msg.sender, tokenIdCounter, 1, "");
    }

    function getTokenId() public view returns (uint256){
        return tokenIdCounter;
    }
}
