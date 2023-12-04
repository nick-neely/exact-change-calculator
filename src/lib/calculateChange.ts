// Type for the change object
interface Change {
    [key: string]: number;
  }

// Function to calculate the least amount of change
export const calculateChange = (amount: string): Change => {
    let cents = Math.round(parseFloat(amount) * 100);
    const denominations = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    const denominationNames: { [key: number]: string } = {
      10000: "$100",
      5000: "$50",
      2000: "$20",
      1000: "$10",
      500: "$5",
      100: "$1",
      25: "25¢",
      10: "10¢",
      5: "5¢",
      1: "1¢",
    };
  
    return denominations.reduce((acc: Change, denomination) => {
      const count = Math.floor(cents / denomination);
      if (count > 0) {
        acc[denominationNames[denomination]] = count;
        cents -= count * denomination;
      }
      return acc;
    }, {});
  };