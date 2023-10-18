import yanoljaLive from "../video/yanoljaLive.mp4";
import hotelManoah from "../video/hotelManoah.mp4";
import multibus from "../video/Multibus.webm";
import minigame from "../video/minigameboy.webm";
import minigameMobile from "../images/minigameboy_img_Mobile.png";
import yanoljaESG from "../images/Yanolja_ESG_img_Mobile.png";
import PortfolioCover from "../images/PortfolioCover.png";
import hotelManoahMobile from "../images/hotelManoah_img_Mobile.png";
import multibusMobile from "../images/multibus_img_Mobile.png";
import vans from "../video/vans_redesign.webm";
import vansImg from "../images/vans.png";

let id = 0;

export const workListData = [
  {
    id: id++,
    name: "반스 리디자인",
    duration: "4 Month",
    peoples: "개인프로젝트(100%)",
    category: ["React", "Node.js", "express", "MongoDB", "반응형"],
    description:
      "직접 데이터베이스를 구축해 새롭게 디자인 한 반스의 반응형 홈페이지입니다.",
    video: vans,
    img: vansImg,
    page: "https://github.com/frdytheme/VansRedesign",
    viewColor: "#fff",
  },
  {
    id: id++,
    name: "고속버스 예매 조회",
    duration: "8days",
    peoples: "개인프로젝트(100%)",
    category: ["React", "REST API", "Redux", "JavaScript", "styled-components"],
    description:
      "고속버스 공공 API를 활용한 웹사이트. / 실시간으로 예매 가능한 고속버스의 /배차 정보를 조회할 수 있는 사이트입니다.",
    video: multibus,
    img: multibusMobile,
    page: "https://github.com/frdytheme/multibus",
    viewColor: "#fff",
  },
  {
    id: id++,
    name: "미니게임 프로젝트",
    duration: "1~2days",
    peoples: "개인프로젝트(100%)",
    category: ["HTML5&CSS3", "React", "Vue", "JavaScript"],
    description:
      "간단한 로직으로 구현 가능한 게임 모음 사이트입니다.",
    video: minigame,
    img: minigameMobile,
    page: "https://frdytheme.github.io/oneday-onegame/",
    viewColor: "#fff",
  },
  {
    id: id++,
    name: "Portfolio",
    duration: "10days",
    peoples: "개인프로젝트(100%)",
    category: ["React", "반응형", "SCSS", "JavaScript"],
    description:
      "프론트엔드 포트폴리오 페이지 프로젝트. / 리액트로 작업한 반응형 웹페이지입니다.",
    video: PortfolioCover,
    img: PortfolioCover,
    page: "https://github.com/frdytheme/Portfolio",
    bgColor: "#fff",
  },
  {
    id: id++,
    name: "야놀자 디자인 구현",
    duration: "7days",
    peoples: "팀프로젝트(30%)",
    category: ["HTML5", "CSS3", "JavaScript"],
    description:
      "팀 프로젝트로 진행한 야놀자 홈페이지 디자인 구현. / ESG페이지 로딩 애니메이션 푸터 등 작업.",
    video: yanoljaLive,
    img: yanoljaESG,
    page: "https://frdytheme.notion.site/52b86ad78ea04c2f98156c53fdd8eb77",
    bgColor: "",
  },
  {
    id: id++,
    name: "호텔 마노아 디자인 구현",
    duration: "7days",
    peoples: "개인프로젝트(100%)",
    category: ["React", "JavaScript", "styled-components"],
    description:
      "cafe24에 있는 호텔 마노아 페이지  / 처음 REACT로 작업한 디자인 구현 사이트",
    video: hotelManoah,
    img: hotelManoahMobile,
    page: "https://frdytheme.github.io/230110Web/",
    bgColor: "",
  },
];

export default workListData;
