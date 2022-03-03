import {
  cr90Covette,
  starDestroyer,
  sentinellClass,
  deathStar,
  millenniemFacon,
  yWing,
  tieAdvanced,
  xWing,
  executor,
  rebelTransport
} from "./linkPictures";

export function resolvePicture(value: String) {
  switch (value) {
    case "CR90 corvette":
      return cr90Covette;
    case "Star Destroyer":
      return starDestroyer;
    case "Sentinel-class landing craft":
      return sentinellClass;
    case "Death Star":
      return deathStar;
    case "Millennium Falcon":
      return millenniemFacon;
    case "Y-wing":
      return yWing;
    case "TIE Advanced x1":
      return tieAdvanced;
    case "X-wing":
      return xWing;
      case "Executor":
        return executor;
      case "Rebel transport":
        return rebelTransport;
    default:
      return "/";
  }
}
