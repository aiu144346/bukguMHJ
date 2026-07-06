import { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Search, 
  FileText, 
  Lightbulb, 
  CheckCircle2
} from 'lucide-react';

interface Proposal {
  id: number;
  proposer: string;
  topic: string;
  detail: string;
  tag: string;
}

const proposalsData: Proposal[] = [
  { id: 1, proposer: "강O화", topic: "주민 체감형 생활밀착형 정책 및 미래세대 투자 추진", detail: "북구가 '살기 좋은 도시, 머물고 싶은 도시'로 발전할 수 있도록 구민이 직접 체감하는 생활밀착형 정책과 미래세대를 위한 집중 투자를 균형 있게 추진해 줄 것을 기대함.", tag: "생활밀착" },
  { id: 2, proposer: "강O란", topic: "북구 평생학습 활성화 방안 마련", detail: "지역 주민들의 역량 강화 and 평생교육 기회 확대를 도모하기 위해 북구 평생학습의 한 단계 더 나은 활성화를 이끌어낼 수 있는 다각적인 정책 제안의 도입을 요청함.", tag: "평생학습" },
  { id: 3, proposer: "김O로", topic: "공무원의 정확한 민원 인지 및 책임 있는 해결 촉구", detail: "일선 공무원들이 구민의 민원 사항을 정확하게 인지하지 못하거나 형식적으로 대응하며 해결하지 않는 행정 관행을 바로잡고, 책임감 있는 소통 행정을 실현하고자 함.", tag: "행정/소통" },
  { id: 4, proposer: "함O용", topic: "주민 참여형 공론장 활성화 및 소통 참여", detail: "인수위원회 활동 경험을 바탕으로, 북구 주민들과 함께 지역 현안을 논의하고 정책을 발굴하는 자발적인 주민 참여형 토론장 및 소통 공간에 적극적으로 동참하고자 신청함.", tag: "행정/소통" },
  { id: 5, proposer: "박O겸", topic: "영유아 돌봄 공백 해소를 위한 '북구 아이돌봄센터' 설치", detail: "권역별 돌봄센터를 설치해 평일 저녁·방학 돌봄을 제공하고 당일 예약 긴급돌봄 시스템을 운영하여 맞벌이 가정의 양육 부담을 줄이고 젊은 세대의 북구 정착을 유도하고자 함.", tag: "돌봄/복지" },
  { id: 6, proposer: "최O영", topic: "사회적 약자를 위한 차별 없는 일터 조성", detail: "장애인, 고령층 등 사회적 약자들이 직장 및 사회생활에서 차별이나 무시를 받지 않고, 건강하고 기쁘게 일할 수 있는 양질의 일자리 현장과 포용적인 환경을 마련해 주길 바람.", tag: "돌봄/복지" },
  { id: 7, proposer: "이O훈", topic: "초고령 노인 맞춤형 복지 및 건강 여가 사업 추진", detail: "80세 이상 노인 대상 아침식사 지원, 노인 가정 낙상방지 키트 지원, 어르신들의 신체 활동과 여가 선용을 돕기 위한 구립 스크린 파크골프장 조성 사업 추진을 제안함.", tag: "돌봄/복지" },
  { id: 8, proposer: "임O란", topic: "아동 통학로 안전 확보 및 장애인 편의 증진", detail: "미취학 아동 보행로 및 초·중·고교 등하굣길의 안전 시설을 정비하여 어린이 교통사고를 방지하고, 교통약자인 장애인들의 이동 편의 및 생활 속 안전을 대폭 증진해 줄 것을 건의함.", tag: "교통/안전" },
  { id: 9, proposer: "조O미", topic: "구포1동 노인 쉼터 조성 및 시장 인근 주차장 확보", detail: "고령 인구가 많은 구포1동 GS 앞 건물을 활용해 시장 이용객의 짐 보관 및 휴식이 가능한 노인 복지 쉼터를 조성하고, 고질적인 주차난 해소를 위해 주차장을 확충해 줄 것을 요청함.", tag: "주거/상권" },
  { id: 10, proposer: "옥O호", topic: "청년 및 신혼부부 주거·일자리 지원 강화", detail: "청년 세대의 지역 유출을 막고 정착을 유도하기 위해, 안정적인 청년 맞춤형 일자리를 조기 창출하고 청년 및 신혼부부를 위한 안정된 주거 공간과 인프라 확보를 제안함.", tag: "청년/일자리" },
  { id: 11, proposer: "김O후", topic: "금곡동~구포3동 대중교통 직통 노선 신설", detail: "금곡동에서 구포3동(부산과학기술대학교) 구간을 직접 연결하는 대중교통 수단이 없어 매번 환승해야 하는 큰 불편이 따르므로, 두 지역을 잇는 직통 버스 노선 개설을 건의함.", tag: "교통/안전" },
  { id: 12, proposer: "정O희", topic: "직장 내 성차별 및 성희롱 근절 대책 마련", detail: "직장 내부에서 공공연하게 발생하는 여성 비하 발언, 성차별적 대우, 성희롱 문제를 뿌리 뽑아 구민들이 안심하고 평등하게 일할 수 있는 공정한 근로 환경 수립을 촉구함.", tag: "인권/노동" },
  { id: 13, proposer: "김O택", topic: "신·구도심 교육격차 해소를 위한 방과후 교실 운영", detail: "화명·금곡 신도시와 구포·덕천·만덕 구도심 간 학업 성취도 격차를 해소하기 위해 구청-교육지원청 연계 방과후 학습교실을 운영하고 지역아동돌봄센터 교육 활동을 지원해야 함.", tag: "교육/학습" },
  { id: 14, proposer: "김O근", topic: "지역 안보 및 자발적 봉사활동 활성화", detail: "구민들의 안보 의식을 고취하는 한편, 안전한 지역 사회를 만들고 소외된 이웃을 돌볼 수 있도록 자발적이고 체계적인 지역 봉사활동 지원 프로그램 체계 마련을 요청함.", tag: "행정/소통" },
  { id: 15, proposer: "김O근", topic: "맘택시 운영 확대 및 주차 CCTV 단속 유예 탄력 운영", detail: "임산부 및 영유아 가정을 위한 맘택시 활성화를 위해 운영 정보를 적극 홍보하고, 골목상권과 주민 편의를 고려하여 주택가 및 상가 밀집지의 주차 CCTV 단속을 완화해 줄 것을 건의함.", tag: "교통/안전" },
  { id: 16, proposer: "박O민", topic: "구포역 일대 복합 재생 개발 추진", detail: "북구의 주요 관문이자 상징적인 공간인 구포역 인근의 낙후·슬럼화된 주거 및 상업 환경을 정비하고, 유동 인구 유입과 경제 활성화를 도모할 대대적인 구포역 개발을 제안함.", tag: "주거/상권" },
  { id: 17, proposer: "최O배", topic: "북구 상권 활성화 및 미래 교육·문화 인프라 구축", detail: "구포역-덕천동 상권 연계, AI 전문 교육기관 및 IT 플랫폼 조성, 화명생태공원 스포츠센터 건립 및 야간 달빛축제 유치, 정국(BTS)·이대호 등 북구 출신 성공인 마케팅을 건의함.", tag: "상권/경제" },
  { id: 18, proposer: "전O동", topic: "북구 장애인 체육 선수에 대한 예산 지원 확대", detail: "장애인 체전 등에서 우수한 성적을 거두며 구의 위상을 높이고 있는 장애인 체육 선수단의 열악한 훈련 환경을 개선하기 위해 구청 차원의 절실한 예산 및 인프라 지원을 요청함.", tag: "돌봄/복지" },
  { id: 19, proposer: "이O윤", topic: "구포~만덕 관광 인프라 조성 및 AI 기업 유치", detail: "구포에서 만덕까지 시공간을 연결하는 특색 있는 관광 프로그램을 개발하고, 미래 성장 동력 확보를 위해 AI 전문 교육 정책 수립과 관련 신산업 기업 유치를 적극 제안함.", tag: "관광/AI" },
  { id: 20, proposer: "김O임", topic: "청소년 복지 및 참여 확대를 위한 'K-청소년' 프로젝트", detail: "청소년 문화타운 신축, 청소년지도직 전담공무원제, 방과후 급식비 인상(6천원->9천원), 청소년구청장제 및 참여예산제 확대, 청소년 꿈 포인트 수당 도입 등을 제안함.", tag: "교육/학습" },
  { id: 21, proposer: "김O곤", topic: "소상공인 및 고령층 맞춤형 경제·금융 교육 도입", detail: "금곡동 골목상권 회복과 취약 계층의 삶의 질 향상을 위해 급변하는 경영 환경에 대응하는 소상공인 교육, 금융사기 예방, 스마트 금융 활용을 위한 체계적인 교육 체계를 제안함.", tag: "상권/경제" },
  { id: 24, proposer: "전O영", topic: "평생학습 주민 활동가 정기 공론장 마련", detail: "북구 평생학습도시 및 장애인평생학습도시 사업의 안정적이고 지속가능한 운영을 위해 강사, 매니저 등 평생학습 관계 전문가들과 정기적으로 소통할 수 있는 공론장 개설을 요청함.", tag: "평생학습" },
  { id: 25, proposer: "권O현", topic: "불법 주정차 해소 및 안전을 위한 버스정류장 구조 개선", detail: "버스정류장 내 택시들의 불법 주정차로 인한 사고 위험을 구조적으로 해결하고, 노약자 등 승객이 신속하고 안전하게 승하차하도록 버스가 인도에 밀착 정차 가능한 설계를 건의함.", tag: "교통/안전" },
  { id: 26, proposer: "안O인", topic: "대심도 터널 공사로 인한 건물 균열 피해 해결 촉구", detail: "만덕-센텀 지하도로 공사 후 발생한 건물 균열 불안 해소를 위해 민·관·전문가 합동 안전진단팀 구성, 정밀 계측기 설치, 시공사 책임 하의 지반 보강 및 보수 배상 명령을 촉구함.", tag: "교통/안전" },
  { id: 27, proposer: "김O희", topic: "정부·지자체 지원형 골목상권 컨설팅 및 지역 인재 발굴", detail: "자영업자의 높은 폐업률을 막기 위해 컨설팅 회사와 협업해 상권을 정부 지원화하고, 외부 전문가 대신 지역의 역량 있는 숨은 일꾼들을 발탁해 경제를 살펴볼 것을 제안함.", tag: "상권/경제" },
  { id: 28, proposer: "김O현", topic: "북구 내 특수학교 설립 및 다문화·장애인 인식 개선", detail: "취약 계층 아동 교육을 위한 특수학교를 건립하고, 사회 전반에 만연한 장애인에 대한 편견 및 다문화 가정을 향한 부정적 인식을 해소할 수 있는 교육 캠페인 시행을 건의함.", tag: "돌봄/복지" },
  { id: 29, proposer: "이O영", topic: "이론·실습 중심 생존수영 교육 및 전용 수영장 건립", detail: "수영장 참여 위주의 수업을 탈피해 사고 대처와 심폐소생술 등 이론 기반 생존수영 교실을 관내 초등학생에게 우선 시행하고, 양질의 인프라를 위한 전용 수영장 확충을 희망함.", tag: "교통/안전" },
  { id: 30, proposer: "현O협", topic: "구정 주요 정책에 대한 적극적인 홍보 체계 강화", detail: "구청에서 시행하는 훌륭한 복지 혜택과 유익한 정책들이 구민들에게 제대로 전달되지 못하는 경우가 많으므로, 보다 활발하고 다각적인 유인책을 통한 정책 홍보 강화를 건의함.", tag: "행정/소통" },
  { id: 32, proposer: "정O훈", topic: "어르신 및 장애인을 위한 사회적 일자리 창출", detail: "소외받기 쉬운 사회적 취약계층인 어르신 and 장애인분들의 삶의 질 향상을 체감할 수 있도록 일자리 창출, 복지 돌봄 공백 해소 등 구청 차원의 촘촘한 안전망 강화를 제안함.", tag: "돌봄/복지" },
  { id: 33, proposer: "강O호", topic: "기초교통질서 확립 및 무단횡단 단속 강화", detail: "관내 도로 곳곳에서 빈번하게 발생하는 무단횡단 문제를 해결하고 보행자 안전을 지키기 위해, 위반자 단속 및 계도 활동을 강화하고 안전한 보행 환경 조성을 위한 대책을 요청함.", tag: "교통/안전" },
  { id: 34, proposer: "변O진", topic: "장애인·노약자를 위한 배리어 프리 보행로 조성", detail: "이동이 불편한 장애인과 노약자들이 안전하게 보통의 삶을 누릴 수 있도록 인도 정비, 교통약자 전용 엘리베이터 확충 등 안전한 이동권이 전폭 보장되는 북구를 간곡히 희망함.", tag: "돌봄/복지" },
  { id: 35, proposer: "김O영", topic: "예방 중심 시민 갈등관리 평생교육 체계 구축", detail: "층간소음, 주차 등 생활갈등 예방을 위해 시민 갈등관리 평생학습 아카데미 운영, 갈등조정가 양성, 갈등관리 지원센터 설치 및 갈등해결 주간 운영으로 선진 자치모델을 구축하고자 함.", tag: "평생학습" },
  { id: 36, proposer: "조O남", topic: "만덕3터널 개통에 따른 서면행 직통 버스 노선 신설", detail: "만덕3터널 개통으로 서면 생활권과의 실제 이동 시간은 단축되었으나, 직접 연계되는 버스 노선이 전무하여 발생하는 구민들의 대중교통 이용 불편을 해소해 줄 것을 건의함.", tag: "교통/안전" },
  { id: 37, proposer: "홍O태", topic: "고령층·장애인 사회 참여를 위한 공공 공간 개방", detail: "노인과 장애인이 무력하게 집에서 고립되는 것을 방지하기 위해 공공기관 공간을 개방하고, 일주일에 한두 번이라도 생활체육 등 다양한 평생학습 프로그램 참여 기회를 제공해야 함.", tag: "돌봄/복지" },
  { id: 38, proposer: "김O홍", topic: "덕천동 상업지구 내 주말 저녁 '차 없는 거리' 조성", detail: "덕천2길 이면도로의 불법 주정차와 소음 문제를 해결하고 상권을 활성화하기 위해, 금·토·일 야간 차량 진입을 통제하여 버스킹, 야시장 등을 담는 보행 특화 거리를 제안함.", tag: "상권/경제" },
  { id: 39, proposer: "한O민", topic: "빈 점포 활용 청년 창업 실험 및 로컬 거점 연계", detail: "구포만세길 내 유휴공간을 활용해 예비 청년 창업자의 팝업스토어 시장성 검증을 돕고, 밀당브로이 등 다수의 공공 거점공간을 연계하여 머무는 체류형 문화·관광 프로그램을 구축함.", tag: "청년/일자리" },
  { id: 40, proposer: "이O철", topic: "노후계획도시의 체계적인 정비 사업 추진", detail: "지어진 지 오래되어 주거 정주 여건이 악화된 관내 계획도시 지역을 대상으로 신속하고 체계적인 정비 및 재개발 사업을 추진하여, 구민의 삶의 질 향상과 안전을 보장해 주길 바람.", tag: "주거/상권" },
  { id: 43, proposer: "김O수", topic: "관내 공공 복합 체육센터 추가 확충 및 관리", detail: "북구 인구수에 비해 이용 가능한 체육센터가 한 곳뿐이라 구민들의 체육 시설 니즈를 감당하지 못하므로, 최소 세 곳 이상으로 대폭 확충하고 체계적인 유지 보수 및 관리를 요구함.", tag: "생활밀착" },
  { id: 44, proposer: "이O희", topic: "취업준비생 이동 편의를 위한 만덕·덕천권 심야 자율버스 도입", detail: "늦은 시간 귀가하는 대중교통 이용 뚜벅이 취업준비생들을 위해, 기존 동래~해운대 자율버스를 덕천교차로(덕천역/구포시장)나 구포역까지 연장하거나 동시 출발 운영 모델 도입을 건의함.", tag: "교통/안전" },
  { id: 46, proposer: "김O도", topic: "폐현수막 소각 비용 절감 및 친환경 리사이클링 전환", detail: "연간 20톤이 넘게 발생하는 구내 불법·선거용 현수막의 소각 처리로 인한 자원 낭비와 환경오염을 방지하기 위해, 이를 소각하지 않고 재활용하여 행정 예산을 절감하는 정책을 건의함.", tag: "행정/소통" },
  { id: 47, proposer: "홍O현", topic: "덕천동 거리의 문화·예술·먹거리 복합 활성화", detail: "과거에 비해 유동 인구가 줄어든 덕천동 거리를 서울의 홍대거리처럼 문화, 예술, 먹거리가 복합적으로 융화되어 젊은 층과 외지인이 몰려드는 부산의 대표 상권으로 탈바꿈하길 바람.", tag: "상권/경제" },
  { id: 49, proposer: "권O근", topic: "예산 절감형 구포역 복합환승센터(북부산역) 구축", detail: "막대한 예산이 소요되는 화명·덕천 철도 지하화안 대신 기존 부지가 확보된 구포역을 재건축해 복합환승센터로 만들고, 낙동강변에 한강 벤치마킹 문화 엔터 인프라를 연계하자고 제안함.", tag: "교통/안전" }
];

export default function CommitteeProposals() {
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');

  const tags = ['전체', '생활밀착', '평생학습', '교육/학습', '돌봄/복지', '교통/안전', '주거/상권', '상권/경제', '청년/일자리', '인권/노동', '행정/소통', '관광/AI'];

  const filteredProposals = proposalsData.filter((item) => {
    const matchesTag = activeTag === '전체' || item.tag === activeTag;
    const matchesSearch = item.proposer.includes(searchQuery) || 
                          item.topic.includes(searchQuery) || 
                          item.detail.includes(searchQuery);
    return matchesTag && matchesSearch;
  });

  const nextProposal = () => {
    setCurrentProposalCard((prev) => (prev + 1) % proposalsData.length);
  };

  const prevProposal = () => {
    setCurrentProposalCard((prev) => (prev - 1 + proposalsData.length) % proposalsData.length);
  };

  const goBack = () => {
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case '생활밀착': return 'bg-sky-50 text-sky-700 border-sky-100';
      case '평생학습': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case '교육/학습': return 'bg-green-50 text-green-700 border-green-100';
      case '돌봄/복지': return 'bg-purple-50 text-purple-700 border-purple-100';
      case '교통/안전': return 'bg-rose-50 text-rose-700 border-rose-100';
      case '주거/상권': return 'bg-amber-50 text-amber-700 border-amber-100';
      case '상권/경제': return 'bg-orange-50 text-orange-700 border-orange-100';
      case '청년/일자리': return 'bg-blue-50 text-blue-700 border-blue-100';
      case '인권/노동': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case '행정/소통': return 'bg-teal-50 text-teal-700 border-teal-100';
      case '관광/AI': return 'bg-violet-50 text-violet-700 border-violet-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-violet-200 hover:text-white transition duration-200 cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4.5 w-4.5" /> 홈으로 돌아가기
          </button>
          
          <div className="flex items-center gap-3">
            <span className="bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider">구민 정책 제안</span>
            <span className="text-slate-400 text-xs font-bold">민선 9기 부산 북구</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-tight" style={{ fontFamily: "'Gowun Batang', serif" }}>
            「구민참여위원회」 위원 정책제안 Part I
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-2xl">
            구민이 정책의 주인이 되어 더 나은 북구를 설계하기 위해 제안한 주민들의 생생한 의견들입니다. 참신성, 실현 가능성, 공익성을 균형 있게 다듬어 구정에 반영합니다.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* Section 1: Card News Presentation with Generated Banner Image */}
        <section className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md aspect-[21/9] sm:aspect-[24/9]">
            <img 
              src="/images/policy_proposals_thumbnail.png" 
              alt="구민참여위원회 정책제안 썸네일" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent flex items-center p-6 sm:p-10">
              <div className="max-w-md space-y-2 text-white">
                <span className="inline-block bg-violet-600 text-white text-[9px] sm:text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">구민 제안</span>
                <h3 className="text-base sm:text-2xl font-black leading-tight">주민 주도형 정책제안 Part I</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                  지역 주민이 직접 참여하는 최초의 인수위원회를 넘어 주민 중심의 혁신적인 북구를 이뤄갑니다.
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Card News slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500 animate-pulse" />
                구민참여위원회 정책제안 카드뉴스
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                {currentProposalCard + 1} / {proposalsData.length}
              </span>
            </div>

            <div className="relative min-h-[340px] bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-900/40 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <FileText className="h-64 w-64 translate-x-12 translate-y-12" />
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <User className="h-4.5 w-4.5 text-indigo-300" />
                    <span className="text-sm font-black text-indigo-200">{proposalsData[currentProposalCard].proposer} 위원</span>
                  </div>
                  <span className="bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    {proposalsData[currentProposalCard].tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide block">주요 제안 내용</span>
                  <h3 className="text-lg sm:text-2xl font-black leading-snug text-white">
                    {proposalsData[currentProposalCard].topic}
                  </h3>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide block">제안 상세 내용</span>
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-semibold">
                    {proposalsData[currentProposalCard].detail}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/10 relative z-10">
                <button 
                  onClick={prevProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 text-white hover:bg-white/20 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
                >
                  <ChevronLeft className="h-4 w-4" /> 이전 제안
                </button>
                
                <div className="flex gap-1.5">
                  {proposalsData.map((_, idx) => {
                    if (Math.abs(idx - currentProposalCard) > 4 && idx !== 0 && idx !== proposalsData.length - 1) return null;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentProposalCard(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentProposalCard === idx ? 'w-5 bg-indigo-400' : 'w-2 bg-white/30 hover:bg-white/50'
                        } cursor-pointer`}
                        aria-label={`제안 ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 text-white hover:bg-indigo-750 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
                >
                  다음 제안 <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Proposals search and grid */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <FileText className="h-5 w-5 text-indigo-600" />
              정책 제안 전체 리스트
            </h3>

            {/* Search bar */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="제안자 또는 키워드 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#1E3A8A] transition shadow-sm placeholder-slate-400"
              />
            </div>
          </div>

          {/* Tags filters */}
          <div className="overflow-x-auto scrollbar-none flex gap-1.5 pb-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 border transition-all ${
                  activeTag === tag
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                    : 'bg-white text-slate-650 border-slate-100 hover:bg-slate-50'
                } cursor-pointer`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProposals.length > 0 ? (
              filteredProposals.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-350 transition duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-extrabold text-slate-800">{item.proposer} 위원</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${getTagColor(item.tag)}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h5 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      {item.topic}
                    </h5>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-350 font-bold">
                    <span>북구 민선 9기 구민참여위원회</span>
                    <span>제안 번호 [{item.id}]</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-150">
                <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-700 font-extrabold">검색 조건에 맞는 제안이 없습니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gradient-to-br from-violet-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">구민참여위원들의 소중한 정책제안에 진심으로 감사드립니다!</h3>
          <p className="text-xs sm:text-sm text-violet-200 max-w-xl mx-auto leading-relaxed break-keep">
            민선 9기 부산 북구 구민참여인수위원회 위원 모집은 마감되었습니다. 참여해주신 모든 분들께 깊이 감사드리며, 더 나은 북구를 만들기 위한 구민 여러분의 정책 제안은 상시로 계속해서 접수하고 있으니 소중한 정책제안 신청을 부탁드립니다.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-violet-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-violet-600" />
              정책제안 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
