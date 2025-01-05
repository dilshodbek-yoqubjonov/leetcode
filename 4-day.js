var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

//https://leetcode.com/problems/defanging-an-ip-address
