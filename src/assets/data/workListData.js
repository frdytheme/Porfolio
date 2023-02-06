import yanoljaLive from "../video/yanoljaLive.mp4";
import hotelManoah from "../video/hotelManoah.mp4";
import yanoljaESG from "../images/Yanolja_ESG_img_Mobile.png";
import PortfolioCover from "../images/PortfolioCover.png";

export const workListData = [
  {
    id: 1,
    name: "Portfolio",
    duration: "10days",
    peoples: "개인프로젝트",
    category: ["React", "반응형", "SCSS", "JAVASCRIPT"],
    description:
      "프론트엔드 포트폴리오 페이지 프로젝트. / 리액트로 작업한 반응형 웹페이지입니다.",
    video: "",
    img: PortfolioCover,
    page: "https://animated-morning-f9b.notion.site/2023-d1b987c8bbcb4941aff850749c81df36",
    bgColor: "#fff",
  },
  {
    id: 2,
    name: "반응형 웹페이지 ex2",
    duration: "7days",
    peoples: "팀프로젝트",
    category: ["HTML5", "CSS3", "JAVASCRIPT"],
    description:
      "팀 프로젝트로 진행한 야놀자 홈페이지 클론 코딩. / ESG페이지, 로딩 애니메이션, 푸터 등 작업.",
    video: yanoljaLive,
    img: "#",
    page: "/project2",
    bgColor: "",
  },
  {
    id: 3,
    name: "야놀자 클론 코딩",
    duration: "7days",
    peoples: "팀프로젝트",
    category: ["HTML5", "CSS3", "JAVASCRIPT"],
    description:
      "팀 프로젝트로 진행한 야놀자 홈페이지 클론 코딩. / ESG페이지 로딩 애니메이션 푸터 등 작업.",
    video: yanoljaLive,
    img: yanoljaESG,
    page: "/project3",
    bgColor: "",
  },
  {
    id: 4,
    name: "호텔 마노아 클론 코딩",
    duration: "7days",
    peoples: "개인프로젝트",
    category: ["REACT", "JAVASCRIPT", "styled-components"],
    description:
      "cafe24에 있는 호텔 마노아 페이지 REACT로 클론 코딩 / REACT 첫 작업",
    video: hotelManoah,
    img: "#",
    page: "/project4",
    bgColor: "",
  },
  {
    id: 5,
    name: "example5",
    duration: "3days",
    peoples: "개인프로젝트",
    category: ["Ex3", "JAVASCRIPT", "styled-components"],
    description: "프로젝트 예시 5",
    video: "#",
    img: "#",
    page: "/project5",
    bgColor: "",
  },
  {
    id: 6,
    name: "example6",
    duration: "3days",
    peoples: "개인프로젝트",
    category: ["Ex3", "JAVASCRIPT", "styled-components"],
    description: "프로젝트 예시 6",
    video: "#",
    img: "#",
    page: "/project6",
    bgColor: "",
  },
];

export default workListData;
