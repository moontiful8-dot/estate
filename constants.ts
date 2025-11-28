import { NavigationItem, CareerItem, PortfolioItem, PrincipleItem, StatItem } from './types';

export const NAVIGATION: NavigationItem[] = [
  { name: '홈', path: '/' },
  { name: '상세 이력', path: '/resume' },
  { name: '성공 사례', path: '/portfolio' },
  { name: '중개 철학', path: '/philosophy' },
  { name: '상담 신청', path: '/contact' },
];

export const IMAGES = {
  PROFILE_MAIN: "https://loremflickr.com/1600/900/businessman,suit,portrait",
  BUILDING_PORTFOLIO: "https://loremflickr.com/1600/900/skyscraper,architecture,seoul",
  DOCUMENT_SIGN: "https://loremflickr.com/1600/900/contract,signature,pen",
  OFFICE_MEETING: "https://loremflickr.com/1600/900/meeting,consulting,office",
};

export const CAREER_HISTORY: CareerItem[] = [
  { year: '2023', title: '부동산 자산관리 최고위 과정 수료', description: '서울대학교 경영대학원' },
  { year: '2018', title: '올해의 우수 중개사 표창', description: '한국공인중개사협회' },
  { year: '2015', title: '박동산 부동산 중개법인 대표 취임', description: '강남구 역삼동 본점 확장 이전' },
  { year: '2010', title: '상업용 부동산 전문팀 팀장', description: '대형 빌딩 매매 50건 달성' },
  { year: '2004', title: '공인중개사 자격 취득 및 실무 시작', description: '제 15회 공인중개사 합격' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: '강남구 역삼동 A빌딩 매매',
    category: '빌딩 매매',
    description: '공실률 30%의 노후 빌딩, 리모델링 제안을 통한 가치 상승 유도',
    solution: '주변 상권 분석 데이터 기반 임대료 재산정 및 우량 임차인(병원) 사전 유치로 매수자 수익률 리스크 해소',
    image: "https://loremflickr.com/800/600/building,seoul"
  },
  {
    id: 'p2',
    title: '성수동 지식산업센터 통임대',
    category: '상가/오피스 임대',
    description: 'IT 스타트업 사옥 이전을 위한 500평 규모 대형 오피스 확보',
    solution: '히든 매물 네트워크를 활용하여 비공개 매물 매칭, 법률 자문을 통한 특약 사항 조율로 2주 내 계약 체결',
    image: "https://loremflickr.com/800/600/office,interior"
  },
  {
    id: 'p3',
    title: '서초구 상속 부동산 자산 정리',
    category: '자산 관리',
    description: '다수 상속인 간의 의견 대립으로 인한 매각 지연 해결',
    solution: '객관적인 시세 감정 보고서 작성을 통한 합의점 도출 및 절세 전략 컨설팅 연계',
    image: "https://loremflickr.com/800/600/handshake,document"
  }
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    title: '무사고 안전 중개',
    description: '20년간 단 한 건의 중개 사고도 허용하지 않은 철저한 권리 분석과 현장 검증을 약속합니다.',
    iconName: 'Shield'
  },
  {
    title: '철저한 비밀 보장',
    description: 'VIP 고객님의 자산 정보와 거래 내역은 최고 수준의 보안 등급으로 관리되며 철저히 비밀이 보장됩니다.',
    iconName: 'Lock'
  },
  {
    title: '데이터 기반 가치 평가',
    description: '감에 의존하는 중개가 아닌, 빅데이터와 실거래 분석에 기반한 정확한 가치 평가를 제공합니다.',
    iconName: 'BarChart'
  }
];

export const STATS: StatItem[] = [
  { label: '경력', value: '20년' },
  { label: '누적 거래액', value: '5,000억+' },
  { label: 'VIP 고객', value: '300명+' },
];