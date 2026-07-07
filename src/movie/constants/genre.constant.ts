export const Genre = {
  ACTION: 'ACTION',
  COMEDY: 'COMEDY',
  DRAMA: 'DRAMA',
  THRILLER: 'THRILLER',
  ROMANCE: 'ROMANCE',
  SCI_FI: 'SCI-FI',
  HORROR: 'HORROR',
  ANIMATION: 'ANIMATION'
} as const;

export type Genre = (typeof Genre)[keyof typeof Genre];
