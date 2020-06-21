import { useEffect, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url, {
          headers: { "Access-Control-Allow-Origin": "*" },
        });
        const data = await response.json();
        setState({ ...state, data });
      } catch (e) {
        setState({ ...state, error: e.message });
      }
    }
    getData();
  }, []);
  // im aware of the linting issue, but im using useEffect solely as component did mount
  // so im not concerned with passing it values as the second paramater

  return state;
}

export { useFetch };
