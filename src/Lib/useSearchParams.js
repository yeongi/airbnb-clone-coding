import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

function getSearchParams(parsedSearchParams = {}, options = {}) {
  const params = Object.keys(options).reduce((params, optionType) => {
    if (optionType === "set") {
      if (options.skipAll) {
        return options.set;
      }
      return { ...params, ...options.set };
    }

    if (optionType === "remove") {
      return Object.keys(params).reduce((obj, key) => {
        if (options.remove.includes(key) === false) {
          obj[key] = params[key];
        }
        return obj;
      }, {});
    }

    return params;
  }, parsedSearchParams);

  return queryString.stringify(params, {
    skipEmptyString: options?.skipEmpty,
    skipNull: options?.skipEmpty,
  });
}

function useSearchParams() {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useState(queryString.parse(search));

  useEffect(() => {
    setSearchParams(queryString.parse(search));
  }, [search]);

  const withSearchParams = useCallback(
    (uri, options) => {
      const { url, query, fragmentIdentifier } = queryString.parseUrl(uri, {
        parseFragmentIdentifier: true,
      });

      const newQuery = getSearchParams({ ...searchParams, ...query }, options);

      return `${url}${newQuery ? `?${newQuery}` : ""}${
        fragmentIdentifier ? `#${fragmentIdentifier}` : ""
      }`;
    },
    [searchParams]
  );

  return {
    searchParams,
    setSearchParams,
    getSearchParams,
    withSearchParams,
  };
}

export default useSearchParams;
