export type PortfolioItemType = {
  title: string;
  description: string;
  technologies_used: string[];
  image: string;
  project_url: string;
};

export const portfolio: PortfolioItemType[] = [
  {
    title: "Watch TV - User",
    description: `The customer facing point of Watch TV app built using react. It authenticate users and allows them to browse through a catalog of movies. Users can add movies to watchlist and go to the movie page to see more details, watch the trailer or watch the movie`,
    technologies_used: ["React", "Redux", "AWS S3", "Express"],
    image: "watch-tv.png",
    project_url: "https://watch-tv.jesuseyitan.com",
  },
];
