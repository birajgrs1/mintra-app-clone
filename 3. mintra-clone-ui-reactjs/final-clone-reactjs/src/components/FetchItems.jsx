import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemActions } from "../store/itemSlice";

const FetchItems = () => {
  const fetchDone = useSelector((store) => store.fetchStatus.fetchDone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
       dispatch(fetchStatusActions.markFetchDone());
       dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items[0]));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchDone]);

  return <></>;
};

export default FetchItems;
