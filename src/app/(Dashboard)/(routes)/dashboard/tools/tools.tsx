import { RoutesDetails, routesModel } from "@/Routes/RoutesDetails";
const routesDetails = new RoutesDetails();
export const tools: routesModel[] = [
  routesDetails.Conversation,
  routesDetails.ImageGenerator,
  routesDetails.VideoGenerator,
  routesDetails.MusicGenerator,
  routesDetails.CodeGenerator,
];
