export type ITheater = {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string;
  postalCode: string;
  nearestIntersection: string;
  latitude: number;
  longitude: number;
  distance: number;
  urlSlug: string;
  experiences: Experience[];
  isTicketingAvailable: boolean;
  theatreMessages: any[];
  isDriveIn: boolean;
  mapImageUrl: string;
  mobileMapImageUrl: string;
  mobileBackgroundImageUrl: string;
  calorieChartUrl: string;
  isFavourite: boolean;
};

export type Experience = {
  experienceId: string;
  title: string;
  imageName: string;
  description: string;
};
