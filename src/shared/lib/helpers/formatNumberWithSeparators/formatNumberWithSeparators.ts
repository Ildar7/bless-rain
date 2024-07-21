export const formatNumberWithSeparators = (number: number, wtihDecimal: boolean): string => {
    const thousandsSeparator = ' ';
    const [integerPart, decimalPart] = number.toFixed(2).split('.');

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

    const formattedNumber = wtihDecimal || decimalPart !== '00'
        ? `${formattedIntegerPart}.${decimalPart}`
        : formattedIntegerPart;

    return formattedNumber;
};
