export interface Species {
  name: string;
  cost: number;
  description?: string;
  speed: number;
  bonuses?: {
    attributes?: {
      name: string;
      value: number;
    }[]
    skills?: {
      name: string;
      value: number;
    }[]
  },
  abilities?: {
    name: string;
    description?: string;
  }[]
}