import React from 'react';
import { CAREER_HISTORY } from '../constants';
import { Award, BookOpen, Newspaper } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="px-6 py-16 md:px-20 max-w-5xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="mb-16 border-b-2 border-primary pb-6">
        <h2 className="text-4xl font-serif font-bold text-primary mb-2">상세 이력</h2>
        <p className="text-gray-600">20년간 쌓아온 현장 경험과 전문성의 기록입니다.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left Column: Certifications & Skills */}
        <div className="md:col-span-1 space-y-12">
          <div className="bg-white p-6 shadow-sm border-t-4 border-secondary">
            <h3 className="flex items-center gap-2 font-serif text-xl font-bold mb-4 text-primary">
              <Award className="w-5 h-5 text-secondary" /> 자격 및 면허
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span>공인중개사 자격증</span>
                <span className="text-gray-500">2004</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                <span>부동산 자산관리사(FP)</span>
                <span className="text-gray-500">2008</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>부동산 권리분석사</span>
                <span className="text-gray-500">2010</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-sm border-t-4 border-gray-300">
            <h3 className="flex items-center gap-2 font-serif text-xl font-bold mb-4 text-primary">
              <BookOpen className="w-5 h-5 text-gray-500" /> 전문 분야
            </h3>
            <div className="flex flex-wrap gap-2">
              {['상업용 빌딩 매매', '고액 자산 관리', '상가 임대차', '상속 부동산 컨설팅', '권리 분석'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
           <div className="bg-white p-6 shadow-sm border-t-4 border-gray-300">
            <h3 className="flex items-center gap-2 font-serif text-xl font-bold mb-4 text-primary">
              <Newspaper className="w-5 h-5 text-gray-500" /> 언론 보도
            </h3>
             <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <p className="font-bold text-primary">매일경제 기고</p>
                <p className="text-xs text-gray-500 mt-1">"2024년 꼬마빌딩 투자 전망과 전략"</p>
              </li>
              <li>
                <p className="font-bold text-primary">한국경제 TV 인터뷰</p>
                <p className="text-xs text-gray-500 mt-1">강남구 상권 변화 분석 전문가 패널</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8 pl-4 border-l-4 border-secondary">
            주요 경력 타임라인
          </h3>
          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
            {CAREER_HISTORY.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-secondary group-hover:bg-secondary transition-colors duration-300" />
                
                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <span className="text-2xl font-serif font-bold text-primary w-24 flex-shrink-0">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed bg-white/50 p-4 rounded-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;