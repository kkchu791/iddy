export const FETCH_IDIOMS = "FETCH_IDIOMS";

export function fetchIdioms(keyword) {
  return {
    type: FETCH_IDIOMS,
    keyword: keyword,
  };
}
