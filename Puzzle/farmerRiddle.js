function transportItems() {
    const leftBank = ["farmer", "fox", "chicken", "corn"];
    const rightBank = [];
  
    function isBankSafe(bank) {
      if (bank.includes("chicken") && bank.includes("fox")) {
        return false;
      }
      if (bank.includes("chicken") && bank.includes("corn")) {
        return false;
      }
      return true;
    }
  
    function moveItems(fromBank, toBank, items) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const index = fromBank.indexOf(item);
        if (index !== -1) {
          fromBank.splice(index, 1);
          toBank.push(item);
        }
      }
    }
  if(isBankSafe){
    console.log(leftBank, rightBank);
    moveItems(leftBank, rightBank, ["chicken"]);
    console.log("Left bank:", leftBank);
    console.log("Right bank:", rightBank);
  
    moveItems(rightBank, leftBank, ["farmer"]);
    moveItems(leftBank, rightBank, ["fox"]);
    console.log("Left bank:", leftBank);
    console.log("Right bank:", rightBank);
  
    moveItems(rightBank, leftBank, ["chicken"]);
    moveItems(leftBank, rightBank, ["corn"]);
    console.log("Left bank:", leftBank);
    console.log("Right bank:", rightBank);
  
    moveItems(leftBank, rightBank, ["farmer"]);
    moveItems(leftBank, rightBank, ["chicken"]);
    console.log("Left bank:", leftBank);
    console.log("Right bank:", rightBank);
  }
  
  }
  
  transportItems();
  