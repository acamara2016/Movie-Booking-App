export type Leagues = {
  league: League;
  country: Country;
  seasons: Season[];
};

export type Country = {
  name: string;
  code: null | string;
  flag: null | string;
};

export enum Type {
  Cup = 'Cup',
  League = 'League',
}

export type Season = {
  year: number;
  start: Date;
  end: Date;
  current: boolean;
  coverage: Coverage;
};

export type Coverage = {
  fixtures: Fixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
};

export type Fixtures = {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
};

export type Request = {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
};

export type Paging = {
  current: number;
  total: number;
};

export type Parameters = {
  date: Date;
};

export type FixturesResponse = {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
};

export type Fixture = {
  id: number;
  referee: null | string;
  timezone: Timezone;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
};

export type Periods = {
  first: number | null;
  second: number | null;
};

export type Status = {
  long: Long;
  short: Short;
  elapsed: number | null;
};

export enum Long {
  FirstHalf = 'First Half',
  Halftime = 'Halftime',
  MatchCancelled = 'Match Cancelled',
  MatchFinished = 'Match Finished',
  MatchPostponed = 'Match Postponed',
  NotStarted = 'Not Started',
  SecondHalf = 'Second Half',
}

export enum Short {
  Canc = 'CANC',
  Ft = 'FT',
  HT = 'HT',
  NS = 'NS',
  Pen = 'PEN',
  Pst = 'PST',
  The1H = '1H',
  The2H = '2H',
}

export enum Timezone {
  UTC = 'UTC',
}

export type Venue = {
  id: number | null;
  name: null | string;
  city: null | string;
};

export type Goals = {
  home: number | null;
  away: number | null;
};

export type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: null | string;
  season: number;
  round: string;
};

export type Score = {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
};

export type Teams = {
  home: Away;
  away: Away;
};

export type Away = {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
};
