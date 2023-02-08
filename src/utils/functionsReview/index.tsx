export const roundPrice = (price: number) => 
Math.round((price + Number.EPSILON) * 100) /100;

export function round(value: number, precision: number) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export const calculateRating = (oneStar: number, twoStar: number, threeStar: number, fourStar: number, fiveStar: number) => {
  let totalStar = (oneStar * 1) + (twoStar * 2) + (threeStar * 3) + (fourStar * 4) + (fiveStar * 5);

  let totalReviews = oneStar + twoStar + threeStar + fourStar + fiveStar;

  let reviewsStar = totalStar / totalReviews;

  return round(reviewsStar, 1);
};