const number = (busStops) => {
  let enter = 0;
  let leave = 0;
  for (i = 0; i < busStops.length; i++) {
    enter += busStops[i][0];
    leave += busStops[i][1];
  }
  return enter-leave
};

number([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]);
