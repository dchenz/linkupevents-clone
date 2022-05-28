import Fuse from "fuse.js";

export default function useFuse(options) {
  let fs = null;

  const init = (data) => {
    if (!fs) {
      fs = new Fuse(data, options);
    }
  };

  const search = (data, searchString) => {
    // Must call fuseContext.init before this function
    if (searchString?.trim()) {
      return fs.search(searchString).map((result) => result.item);
    }
    return data;
  };

  return { init, search };
}