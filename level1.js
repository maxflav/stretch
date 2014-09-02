document.levels[0] = function() {
  for (var x = 10; x < 19; x++)
    map[x][15] = WALL;
  for (var y = 11; y < 16; y++)
    map[18][y] = WALL;
  for (var x = 19; x < 24; x++)
    map[x][11] = WALL;
  for (var y = 13; y <= 20; y++)
    map[20][y] = WALL;

  map[ 9][24] = WALL;
  map[10][14] = WALL;
  map[16][10] = WALL;
  map[23][15] = WALL;
  map[23][20] = WALL;
  map[23][21] = WALL;
  map[25][16] = WALL;
  map[24][ 7] = WALL;
  map[29][10] = WALL;

  map[ 4][23] = PILL;
  map[10][11] = PILL;
  map[33][20]  = PILL;

  head.x = 14;
  head.y = 7;

  max_len = 1;
}
