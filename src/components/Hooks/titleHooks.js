import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `TWorld | ${title}`;
  }, [title]);
};
export default useTitle;
