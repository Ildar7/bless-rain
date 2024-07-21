export function abbreviateNumber(number: number): string {
    const SI_PREFIXES = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    if (isNaN(number)) {
        return '';
    }

    // Определяем индекс префикса
    const tier = Math.floor(Math.log10(Math.abs(number)) / 3);

    const value = (number / 10 ** (tier * 3)).toFixed(0);
    const prefix = SI_PREFIXES[tier];

    return value + prefix;
}
