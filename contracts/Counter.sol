// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Counter {
    uint count;

    constructor(uint n) {
        count = n;
    }

    function getCounter() public view returns (uint) {
        return count;
    }

    function increment(uint n) public {
        count += n;
    }
}
