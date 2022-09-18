// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.9;
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Strings.sol";
// import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


// contract CheersPals is ERC721, Ownable{
//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenIds;
//     address public owner;

//     uint256 mintMaxTotal = 100;
//     uint256 mintMaxCount = 5;
//     uint256 minMinCount = 1;

//     uint256 mintFee = 0.001 ether;

//     bytes public root = "默克尔数 白名单";


//     bool mining = true;

//     modifier isMining {
//         require(mining, "Stop MINT !");
//         _;
//     }

//     constructor() ERC721 ("Cheers Pals", "CP"){
//         // 从1 开始
//         _tokenIds.increment();
//     }

//     function mint(address player) private isMining returns(uint256){
//         uint256 newTokenId = _tokenIds.current();
//         string memory tokenURI = getTokenURI(newTokenId);    //  tokenid 对应的图片
//         require(mintMaxTotal >= newTokenId, "Max Overflow!");
//         _mint(player, newTokenId);
//         _setTokenURI(newTokenId, tokenURI);
//         _tokenIds.increment();
//         return newTokenId;
//     }

//     function mintFuest(address player, uint256 itmes) external payable{
//         require(msg.value >= mintFee * itmes,"ETH is not enough!" );
//         require(itmes < minMinCount && itmes > mintMaxCount, "Only Mint 1-5 sheets at a time!");
//         for (uint i = 0; i < items; i++) {
//             mint(playew);
//         }
//     }

//     function mintWhiteList(address player, bytes[] memory proof) external {
//         require(isWhietList(proof, keccak256(abi.encodePacked(player))));
//         for (uint i = 0; i < mintMaxCount; i++) {
//             mint(player);
//         }
//     }
//     // 校验白名单
//     function isWhietList(byte32[] memory proof, bytes32 leaf) private view returns(bool){
//         return MerkleProof.verify(proof, root, leaf);
//     }

//     function getTokenURI(uint256 _index) private pure returns(string memory){
//         string memory index = Strings.toString(_index);
//         string memory header = "ww/baidu/main/json";
//         string memory footer = ".json";
//         string memory tokenURI = string.concat(
//             header,
//             index,
//             footer
//         )
//         return tokenURI;
//     }

//     function setMintTotal(uint total) external onlyOwner {
//         require(total > mintMaxTotal,"Cannot be less than total");
//         mintMaxTotal = total;       
//     }

//     function checkmin(bool _mining) external onlyOwner {
//         mining = _mining;
//     }

//     function setMerkleTreeRoot(bytes32 _root) external onlyOwner{
//         root = _root;
//     }

//     function contractURI() public pure returns(string memory){
//         return "http://sss";
//     }

//     function withdraw(address _owner) public payable onlyOwner{
//         (bool success, ) = payable(_owner).call{value: address(this).balance}("");
//         require(success, "withdraw fail!");
//     }
// }