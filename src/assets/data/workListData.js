import yanoljaLive from "../video/yanoljaLive.mp4";
import hotelManoah from "../video/hotelManoah.mp4";
import multibus from "../video/Multibus.webm";
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
      "직접 데이터베이스를 구축해 새롭게 디자인 한 반스의 반응형 홈페이지입니다. / - jwt토큰 인증 방식의 로그인 기능 / - 세션 스토리지와 유저DB를 통한 장바구니 동기화 / - 이메일 인증번호 전송과 확인을 통한 회원가입 기능을 구현했습니다.",
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
      "고속버스 공공 API를 활용한 웹사이트입니다. / - OpenAPI를 활용한 실시간 고속버스 예매 정보 조회",
    video: multibus,
    img: multibusMobile,
    page: "https://github.com/frdytheme/multibus",
    viewColor: "#fff",
  },
  {
    id: id++,
    name: "Portfolio",
    duration: "10days",
    peoples: "개인프로젝트(100%)",
    category: ["React", "반응형", "SCSS", "JavaScript"],
    description:
      "프론트엔드 포트폴리오 사이트입니다. / - 직접 디자인한 포트폴리오 사이트로 모바일과 PC 반응형으로 작업했습니다.",
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
      "팀 프로젝트로 진행한 야놀자 홈페이지 디자인 구현. / - ESG페이지를 작업했습니다 / - 일러스트레이터로 만든 svg파일의 애니메이션 구현",
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
      "cafe24에 있는 호텔 마노아 페이지  / - React로 처음 작업한 웹사이트입니다. / - 원본 사이트의 디자인을 그대로 구현했습니다.",
    video: hotelManoah,
    img: hotelManoahMobile,
    page: "https://frdytheme.github.io/230110Web/",
    bgColor: "",
  },
];

export default workListData;
