// My answer
function calculateTip(amount, rating) {
    const raingName = rating.toUpperCase();

    switch (raingName) {
        case "EXCELLENT":
            return Math.ceil(amount * 0.2);

        case "GREAT":
            return Math.ceil(amount * 0.15);

        case "GOOD":
            return Math.ceil(amount * 0.1);

        case "POOR":
            return Math.ceil(amount * 0.05);

        case "TERRIBLE":
            return Math.ceil(amount * 0);

        default:
            return "Rating not recognised"
    }
}




// Other answer
// No.1
const TIPS = {
    "terrible": 0.0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
};
const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();

    return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};