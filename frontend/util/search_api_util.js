export const searchBars = (keyword) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bars`,
    data: {"keyword": keyword}
  });
};
