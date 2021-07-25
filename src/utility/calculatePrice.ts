export const calculatePrice = (price: string) => {
  let text = "";
  let p = parseInt(price);

  if (p >= 10000000) {
    text = "Cr";
    p = p / 1e7;
  } else if (p < 100000) {
    // text = "K";
    // p = p / 1e3;
    // p = p;
  } else if (p >= 100000) {
    text = "Lacs";
    p = p / 1e5;
  }

  return { p, text };
};
