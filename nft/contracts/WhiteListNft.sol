// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// 白名单nft
contract WhiteListNft is ERC721URIStorage, Ownable{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    mapping(address => bool) public whiteLists;


    constructor()ERC721("White List NFT", "WN"){
    }

    function editWhiteList (address _user, bool status) public onlyOwner{
        whiteLists[_user] = status;
    }

    function mint(address player, string memory tokenURI) public returns(uint256){
        require(whiteLists[player],"No whiteLists!");
        uint256 newTokenId = _tokenIds.current();
        _mint(player, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenIds.increment();
        return newTokenId;
    }    
}

// https://raw.githubusercontent.com/qdwds/three-module-demo/master/package.json