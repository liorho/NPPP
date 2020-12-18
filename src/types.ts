type Side = {
  color: "green" | "purple" | "blue" | "pink",
  part: "head" | "tail"
}

export type Sides = {
  north: Side,
  east: Side,
  south: Side,
  west: Side
}