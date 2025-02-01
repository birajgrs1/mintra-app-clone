import { useSelector } from "react-redux";

const useBagSummary = () => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return {
    totalItem,
    totalMRP,
    totalDiscount,
    finalPayment,
  };
};

export default useBagSummary;
