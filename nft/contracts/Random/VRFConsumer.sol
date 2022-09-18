// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract ChainlinkVRFDemo is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;

    bytes32 keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;

    uint64 s_subId;
    uint16 requestCounfiramtions = 3;
    uint32 callbackGaslimit = 200_200;
    uint32 numWords = 2;

    address owner;
    uint256[] public s_randomWords;
    uint256  requestId;

    constructor(address vrfCoordinatorAddr,uint64 subId) VRFConsumerBaseV2(vrfCoordinatorAddr) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinatorAddr);
        s_subId = subId;
        owner = msg.sender;
    }

    function requestRandomWords() external {
        require(msg.sender == owner);
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subId,
            requestCounfiramtions,
            callbackGaslimit,
            numWords
        );
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
        internal
        override{
        s_randomWords = randomWords;
    }
}
