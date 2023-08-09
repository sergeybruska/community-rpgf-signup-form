import { addDays, isPast } from 'date-fns';

export const convertAddressWallet = (str: string, length: number) => {
  if (str !== undefined && str !== null) {
    const firstStr = str.slice(0, length);
    const lastStr = str.slice(-4);
    return `${firstStr}...${lastStr}`;
  } else {
    return '';
  }
};

export const createSelectOptions = <T extends { _id: string; name: string }>(
  arr?: T[],
) => (arr || []).map((item) => ({ value: item._id, label: item.name }));

export const getFileSizeInKB = async (url: URL | string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const fileSizeInBytes = blob.size;
    const fileSizeInKB = fileSizeInBytes / 1024;
    return fileSizeInKB.toFixed(2);
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const objectUrlToBlob = async (url: URL | string) =>
  await fetch(url).then((r) => r.blob());

export const createBlobFromFile = (file: File) => {
  const blob = new Blob([file], { type: file.type });
  return blob;
};

export const checkProjectStatus = (date: string) => {
  const timestamp = new Date(date).getTime();
  const creationDate = new Date(timestamp * 1000);

  const expirationDate = addDays(creationDate, 30);

  const isStatusNew = !isPast(expirationDate);

  return isStatusNew;
};

export const ensureHttpProtocol = (url: string) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `http://${url}`;
  }
  return url;
};

export const displayPriceInLocalFormat = (amount: number) => {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
  }).format(amount / 100);
  return price;
};
