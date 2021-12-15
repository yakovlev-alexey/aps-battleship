const letters = require("./letters.js");

const c1 = [
  [
    [letters.G, 4],
    [letters.G, 5],
    [letters.G, 6],
    [letters.G, 7],
    [letters.G, 8],
  ],
  [
    [letters.A, 4],
    [letters.A, 5],
    [letters.A, 6],
    [letters.A, 7],
  ],
  [
    [letters.A, 1],
    [letters.B, 1],
    [letters.C, 1],
  ],
  [
    [letters.A, 8],
    [letters.B, 8],
    [letters.C, 8],
  ],
  [
    [letters.F, 1],
    [letters.G, 1],
  ],
];

const c2 = [
  [
    [letters.F, 2],
    [letters.F, 3],
    [letters.F, 4],
    [letters.F, 5],
    [letters.F, 6],
  ],
  [
    [letters.A, 5],
    [letters.B, 5],
    [letters.C, 5],
    [letters.D, 5],
  ],
  [
    [letters.A, 1],
    [letters.B, 1],
    [letters.C, 1],
  ],
  [
    [letters.G, 1],
    [letters.G, 2],
    [letters.G, 3],
  ],
  [
    [letters.B, 7],
    [letters.C, 7],
  ],
];

const c3 = [
  [
    [letters.C, 3],
    [letters.D, 3],
    [letters.E, 3],
    [letters.F, 3],
    [letters.G, 3],
  ],
  [
    [letters.D, 1],
    [letters.E, 1],
    [letters.F, 1],
    [letters.G, 1],
  ],
  [
    [letters.A, 1],
    [letters.A, 2],
    [letters.A, 3],
  ],
  [
    [letters.A, 4],
    [letters.A, 5],
    [letters.A, 6],
  ],
  [
    [letters.E, 6],
    [letters.F, 6],
  ],
];

const c4 = [
  [
    [letters.A, 1],
    [letters.A, 2],
    [letters.A, 3],
    [letters.A, 4],
    [letters.A, 5],
  ],
  [
    [letters.B, 6],
    [letters.C, 6],
    [letters.D, 6],
    [letters.E, 6],
  ],
  [
    [letters.C, 3],
    [letters.D, 3],
    [letters.E, 3],
  ],
  [
    [letters.H, 6],
    [letters.H, 7],
    [letters.H, 8],
  ],
  [
    [letters.H, 3],
    [letters.H, 4],
  ],
];

module.exports = [
  [
    [
      [letters.B, 4],
      [letters.B, 5],
      [letters.B, 6],
      [letters.B, 7],
      [letters.B, 8],
    ],
    [
      [letters.E, 6],
      [letters.E, 7],
      [letters.E, 8],
      [letters.E, 5],
    ],
    [
      [letters.A, 3],
      [letters.B, 3],
      [letters.C, 3],
    ],
    [
      [letters.F, 8],
      [letters.G, 8],
      [letters.H, 8],
    ],
    [
      [letters.C, 5],
      [letters.C, 6],
    ],
  ],
  c1,
  c2,
  c3,
  c4,
];
