import yanoljaLive from "../video/yanoljaLive.mp4";
import hotelManoah from "../video/hotelManoah.mp4";
import multibus from "../video/Multibus.webm";
import yanoljaESG from "../images/Yanolja_ESG_img_Mobile.png";
import PortfolioCover from "../images/PortfolioCover.png";
import hotelManoahMobile from "../images/hotelManoah_img_Mobile.png";
import multibusMobile from "../images/multibus_img_Mobile.png";

export const workListData = [
  {
    id: 1,
    name: "고속버스 예매 조회",
    duration: "8days",
    peoples: "개인프로젝트",
    category: ["React", "REST API", "Redux", "JavaScript", "styled-components"],
    description:
      "고속버스 공공 API를 활용한 웹사이트. / 실시간으로 예매 가능한 고속버스의 /배차 정보를 조회할 수 있는 사이트입니다.",
    video: multibus,
    img: multibusMobile,
    page: "https://github.com/frdytheme/multibus",
    viewColor: "#fff",
  },
  {
    id: 2,
    name: "Portfolio",
    duration: "10days",
    peoples: "개인프로젝트",
    category: ["React", "반응형", "SCSS", "JavaScript"],
    description: "프론트엔드 포트폴리오 페이지 프로젝트. / 리액트로 작업한 반응형 웹페이지입니다.",
    video: PortfolioCover,
    img: PortfolioCover,
    page: "https://github.com/frdytheme/Portfolio",
    bgColor: "#fff",
  },
  {
    id: 3,
    name: "야놀자 디자인 구현",
    duration: "7days",
    peoples: "팀프로젝트",
    category: ["HTML5", "CSS3", "JavaScript"],
    description: "팀 프로젝트로 진행한 야놀자 홈페이지 디자인 구현. / ESG페이지 로딩 애니메이션 푸터 등 작업.",
    video: yanoljaLive,
    img: yanoljaESG,
    page: "https://frdytheme.notion.site/52b86ad78ea04c2f98156c53fdd8eb77",
    bgColor: "",
  },
  {
    id: 4,
    name: "호텔 마노아 디자인 구현",
    duration: "7days",
    peoples: "개인프로젝트",
    category: ["React", "JavaScript", "styled-components"],
    description: "cafe24에 있는 호텔 마노아 페이지  / 처음 REACT로 작업한 디자인 구현 사이트",
    video: hotelManoah,
    img: hotelManoahMobile,
    page: "https://frdytheme.github.io/230110Web/",
    bgColor: "",
  },
];

export default workListData;
