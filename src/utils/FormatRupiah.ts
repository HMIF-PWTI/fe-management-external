export const FormatRupiah = (value: number | string): string => {
  const number = typeof value === "string" ? parseInt(value) : value;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
