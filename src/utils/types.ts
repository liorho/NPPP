import Card from '../modules/Card';

// Declare CONSTS
type TYPES = 'green' | 'purple' | 'blue' | 'pink';
type PARTS = 'head' | 'tail';

// Side of each card
export type Side = {
  type: TYPES;
  part: PARTS;
};

// Sides of a card
export type Sides = {
  north: Side;
  east: Side;
  south: Side;
  west: Side;
};

export type BOARD = [(Card | undefined)[], (Card | undefined)[], (Card | undefined)[]];

export type Coordinate = { x: number; y: number };
