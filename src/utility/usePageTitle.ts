import { useLayoutEffect, useState } from "react";

export function usePageTitle() {
  const [pageTitle, setPageTitle] = useState("Yehproperty");

  useLayoutEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return { setPageTitle };
}
