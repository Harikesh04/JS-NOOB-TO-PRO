const tableKeys = [2, 3, 4, 5, 6, "2^1", "2-1","3^1","3-1"];

const newArr = [];

// 2^1 , 2,2-1, 3, 4, 5, 6

for (const item of tableKeys) {
  if (typeof item === "string" && item.includes("-")) {
    const [x, y] = item.split("-").map(Number);

    const index = newArr.indexOf(x);
    console.log(index);
    if (index !== -1) {
      newArr.splice(index + 1, 0, item);
    }
  } else if (typeof item === "string" && item.includes("^")) {
    const [x, y] = item.split("^").map(Number); // Changed from split("-") to split("^")
    const index = newArr.indexOf(x);
    if (index !== -1) {
        console.log(index);
      if (index - 1 === -1) {
        newArr.splice(0, 0, item);
      } else {
        newArr.splice(index - 1, 0, item);
      }
    }
  } else {
    newArr.push(Number(item));
  }
}

console.log(newArr);
