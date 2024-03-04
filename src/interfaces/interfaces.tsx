export interface MainInfo {
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
  };
  weight: number;
}

export interface InitialInfo {
  results: {
    name: string;
    url: string;
  }[];
}
