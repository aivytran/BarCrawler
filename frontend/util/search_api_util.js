export const searchBars = (keyword, bounds) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bars`,
    data: {"keyword": keyword, "bounds": bounds}
  });
};

// export const searchBar = (name) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/bars/${name}`,
//     data: {"name": name}
//   });
// };
