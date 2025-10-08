import { get, isNil, isUndefined, omitBy } from "lodash";
import axios from "axios";

const QUERY_STRING_PREFIX = "?";

export const formatGMTDate: any = (gmtDate: any) => {
  // e.g. 27/12/2018, 10:00:00am
  const date = new Date(gmtDate);
  return `${date.toLocaleDateString("en-GB")}, ${date.toLocaleTimeString(
    "en-US"
  )}`;
};

export const formatISODate: any = (isoDate: any) => {
  // e.g. 27/12/2018, 10:00:00am
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // const ampm = hours >= 12 ? "pm" : "am";
  // hours %= 12;
  // hours = hours || 12;
  // minutes = minutes < 10 ? 0 + minutes : minutes;

  // return `${day}/${month}/${year}, ${hours}:${minutes}${ampm}`;
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

const isInvalidParams: any = (value: any) => {
  const valueType = typeof value;
  return (
    valueType === "function" ||
    valueType === "object" ||
    isNil(value) ||
    value === ""
  );
};

export const generateQueryString: any = (queryParams: any) => {
  const params = omitBy(queryParams, isInvalidParams);
  const paramsArray = Object.keys(params).map(
    key => `${key}=${get(params, key)}`
  );
  return encodeURI(paramsArray.join("&"));
};

export const parseQueryString: any = (query: string) => {
  const validQuery = decodeURI(query).trim();
  if (!validQuery) {
    return {};
  }

  const queryPrefix = validQuery.slice(0, 1);
  if (queryPrefix !== QUERY_STRING_PREFIX) {
    console.error("Query string format is not correct");
    return {};
  }
  const queryStringParams = validQuery
    .slice(1)
    .split("&")
    .map(param => {
      const paramObj: any = {};
      const result = param.split("=");
      const key = result[0];
      const value = result[1];
      if (!key || !value) {
        return {};
      }
      paramObj[result[0]] = result[1];
      return paramObj;
    })
    .reduce((params, currentParams) => ({ ...currentParams, ...params }));
  return omitBy(queryStringParams, isUndefined);
};

export const getBase64: any = (url: string) => {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then(response => new Buffer(response.data, "binary").toString("base64"));
};

export const capitalizeFirstLetter = (string: string): string => {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
};

export const filterOpenStatus = (results: any): any => {
  return results.filter(page => {
    return page.properties.Status.status.name === "open";
  });
};
