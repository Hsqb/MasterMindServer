pragma solidity ^0.4.18;

contract MasterMindDataController{
    uint8 public version;
    address private owner;
    struct MmData {
        bytes32 arr;
        uint16 isActivated;
        uint24 ourHp;
        uint24 enemyHp;
    }


    mapping(address => MmData) public saveMap;
    constructor (address _owner) public {
        owner = _owner;
    }
    function saveData(address _user, bytes32 _arr, uint16 _isActivated, uint24 _ourHp, uint24 _enemyHp) public {
        require(owner == _user);
        saveMap[_user].arr = _arr;
        saveMap[_user].isActivated = _isActivated;
        saveMap[_user].ourHp = _ourHp;
        saveMap[_user].enemyHp = _enemyHp;
    }
    function loadData(address _user) public view returns(bytes32, uint16, uint24,uint24){
        require(owner == _user);
        return (saveMap[_user].arr, saveMap[_user].isActivated, saveMap[_user].ourHp,saveMap[_user].enemyHp);
    }

}
