import { RoutesDetails, routesModel } from "./RoutesDetails";
const routesDetails = new RoutesDetails();
export const routes: routesModel[] = [
  routesDetails.Dashboard,
  routesDetails.Conversation,
  routesDetails.ImageGenerator,
  routesDetails.VideoGenerator,
  routesDetails.MusicGenerator,
  routesDetails.CodeGenerator,
  routesDetails.Setting,
];
