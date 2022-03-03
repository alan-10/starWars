import { SandCrawler, T16skyhopper, x34, tiel, snowspeeder, tieBomber, atat, atst, stormIV, sailBarge } from './linkPictures';

export function resolvePicture(value: String) {
  switch (value) {
    case "Sand Crawler":
      return SandCrawler;
    case "T-16 skyhopper":
      return T16skyhopper;
    case "X-34 landspeeder":
      return x34 ;
    case "TIE/LN starfighter":
      return  tiel;
    case "Snowspeeder":
      return snowspeeder;
    case "TIE bomber":
      return tieBomber;
    case "AT-AT":
      return atat;
    case "AT-ST":
      return atst;
      case "Storm IV Twin-Pod cloud car":
        return stormIV;
      case "Sail barge":
        return sailBarge;
    default:
      return "/";
  }
}
