import { useEffect, useState } from "react";

export const usePromise = <T>(fn: () => Promise<{ data: T }>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fn();
        if (response.data) {
          setData(response.data);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setIsError(true);
      }
    };
    makeRequest();
  }, [fn]);

  return { isLoading, isError, data };
};
