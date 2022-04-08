// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PunkNFT is ERC721Enumerable {

    uint256 tokenId;

    constructor() ERC721("PunkHouse", "PH"){

    }

    function mint() public {
        tokenId++;
        _safeMint(msg.sender, tokenId);
    }

}