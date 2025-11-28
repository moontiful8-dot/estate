import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, STATS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${IMAGES.PROFILE_MAIN})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
          <span className="text-secondary font-bold tracking-[0.2em] mb-4 uppercase">Professional Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            20년의 안목,<br />
            <span className="text-gray-200">귀하의 자산을 지키는</span><br />
            <span className="text-secondary italic">든든한 파트너</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            부동산 거래는 단순한 매매가 아닙니다.<br/>
            고객님의 삶과 미래 가치를 설계하는 일입니다.<br/>
            20년 무사고 경력의 박동산이 함께하겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-secondary text-primary font-bold px-8 py-4 rounded-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              VIP 상담 예약하기 <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/portfolio" 
              className="border border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center"
            >
              성공 사례 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center pt-8 md:pt-0 px-4">
              <p className="text-gray-500 mb-2 font-medium">{stat.label}</p>
              <p className="text-4xl font-serif font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Section */}
      <section className="py-24 px-8 md:px-20 bg-background text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">
          "정직과 신뢰는<br/>타협할 수 없는 가치입니다."
        </h2>
        <div className="max-w-2xl mx-auto space-y-6 text-gray-700 leading-loose">
          <p>
            지난 20년 동안 수많은 계약을 체결하며 제가 지켜온 단 하나의 원칙은
            '내 가족이 계약한다'는 마음가짐입니다.
          </p>
          <p>
            화려한 말솜씨보다는 정확한 데이터로, <br/>
            눈앞의 이익보다는 고객과의 지속적인 신뢰를 선택해왔습니다.
          </p>
        </div>
        <div className="mt-12 flex justify-center flex-col items-center">
          <div className="font-serif text-xl italic text-gray-500 mb-2">공인중개사</div>
          <div className="text-4xl font-script text-primary font-serif font-bold">박 동 산</div>
        </div>
      </section>
    </div>
  );
};

export default Home;