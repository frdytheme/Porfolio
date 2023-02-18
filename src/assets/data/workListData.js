import yanoljaLive from "../video/yanoljaLive.mp4";
import hotelManoah from "../video/hotelManoah.mp4";
import multibus from "../video/Multibus.webm"
import yanoljaESG from "../images/Yanolja_ESG_img_Mobile.png";
import PortfolioCover from "../images/PortfolioCover.png";

export const workListData = [
  {
    id: 1,
    name: "고속버스 예매 조회",
    duration: "8days",
    peoples: "개인프로젝트",
    category: ["React", "redux-toolkit", "REST API", "JAVASCRIPT", "styled-components"],
    description:
      "고속버스 공공 API를 활용한 웹사이트. / 실시간으로 예매 가능한 고속버스의 /배차 정보를 조회할 수 있는 사이트입니다.",
    video: multibus,
    img: "",
    page: "https://frdytheme.notion.site/399cafc6848a496e8055611a4007cfa1",
    viewColor: "#fff",
  },
  {
    id: 2,
    name: "Portfolio",
    duration: "10days",
    peoples: "개인프로젝트",
    category: ["React", "반응형", "SCSS", "JAVASCRIPT"],
    description:
      "프론트엔드 포트폴리오 페이지 프로젝트. / 리액트로 작업한 반응형 웹페이지입니다.",
    video: "",
    img: PortfolioCover,
    page: "https://frdytheme.notion.site/d1b987c8bbcb4941aff850749c81df36",
    bgColor: "#fff",
  },
  // {
  //   id: 3,
  //   name: "반응형 웹페이지 ex2",
  //   duration: "7days",
  //   peoples: "팀프로젝트",
  //   category: ["HTML5", "CSS3", "JAVASCRIPT"],
  //   description:
  //     "팀 프로젝트로 진행한 야놀자 홈페이지 클론 코딩. / ESG페이지, 로딩 애니메이션, 푸터 등 작업.",
  //   video: "",
  //   img: "",
  //   page: "/yanolja",
  //   bgColor: "",
  // },
  {
    id: 3,
    name: "야놀자 클론 코딩",
    duration: "7days",
    peoples: "팀프로젝트",
    category: ["HTML5", "CSS3", "JAVASCRIPT"],
    description:
      "팀 프로젝트로 진행한 야놀자 홈페이지 클론 코딩. / ESG페이지 로딩 애니메이션 푸터 등 작업.",
    video: yanoljaLive,
    img: "",
    page: "https://frdytheme.notion.site/52b86ad78ea04c2f98156c53fdd8eb77",
    bgColor: "",
  },
  {
    id: 4,
    name: "호텔 마노아 클론 코딩",
    duration: "7days",
    peoples: "개인프로젝트",
    category: ["REACT", "JAVASCRIPT", "styled-components"],
    description:
      "cafe24에 있는 호텔 마노아 페이지  / REACT로 첫 작업한 클론 코딩 사이트",
    video: hotelManoah,
    img: "",
    page: "/yanolja",
    bgColor: "",
  },
];

export default workListData;
