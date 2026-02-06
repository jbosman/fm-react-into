const intl = new Intl.NumberFormat(
    "en-US",
    {
        style: "currency",
        currency: "USD"
    }
);

export function transformToCurrency(number){
    return intl.format(number);
}

