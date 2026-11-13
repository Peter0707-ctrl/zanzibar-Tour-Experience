import type { Currency } from '../types';

export const formatPrice = (priceUSD: number, currency: Currency): string => {
  switch (currency) {
    case 'TZS':
      const tzs = Math.round(priceUSD * 2650);
      return `TSh ${tzs.toLocaleString()}`;
    case 'EUR':
      const eur = Math.round(priceUSD * 0.92);
      return `€${eur.toLocaleString()}`;
    case 'USD':
    default:
      return `$${priceUSD.toLocaleString()}`;
  }
};
