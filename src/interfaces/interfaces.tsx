export interface MainInfo {
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
  stats: {
    0: {
      base_stat: string;
    };
  };
  weight: number;
  abilities: {
    ability: {
      0: {
        name: string;
      };
      1: {
        name: string;
      };
      2: {
        name: string;
      };
      3: {
        name: string;
      };
    };
  };
  types: {
    0: {
      type: {
        name: string;
      };
    };
    1: {
      type: {
        name: string;
      };
    };
    2: {
      type: {
        name: string;
      };
    };
    3: {
      type: {
        name: string;
      };
    };
  };
}

export interface InitialInfo {
  results: {
    name: string;
    url: string;
  }[];
}

export interface BackgroundCardsInfo {
  extraPokemonInfo: {
    map(arg0: (pokemon: any, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    data: {
      species: {
        name: string;
      };
      weight: number;
    };
  };
}
