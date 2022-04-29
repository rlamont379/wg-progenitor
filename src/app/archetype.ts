export interface Archetype {
  name: string;
  description?: string;
  faction: string;
  tier: number;
  cost: number;
  bonuses?: {
    attributes?: {
      name: string;
      value: number;
    }[]
    skills?: {
      name: string;
      value: number;
    }[]
    keywords?: {
      name: string;
    }[]
    influence?: number;
  },
  abilities?: {
    name: string;
    description?: string;
  }[]
  wargear?: string[];
}