import React from 'react';
import { IMAGES, PRINCIPLES } from '../constants';
import { Shield, Lock, BarChart } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Lock: Lock,
  BarChart: BarChart,
};

const Philosophy: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Intro Section */}
      <div className="relative py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Our Philosophy</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              중개(仲介)를 넘어<br/>
              신뢰(信賴)를 잇습니다.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              부동산은 고객의 전 재산이자 삶의 터전입니다. <br/>
              그 무게감을 알기에, 박동산 공인중개사무소는 단순히 물건을 소개하는 것을 넘어
              고객의 자산 가치를 지키고 키우는 '자산 관리 파트너'로서 임하고 있습니다.
            </p>
            <div className="h-1 w-20 bg-secondary"></div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary z-0"></div>
            <img 
              src={IMAGES.OFFICE_MEETING} 
              alt="Consulting Meeting" 
              className="relative z-10 shadow-xl w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Principles Grid */}
      <div className="bg-primary text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">박동산의 3대 중개 원칙</h2>
            <p className="text-gray-300">어떤 상황에서도 타협하지 않는 저의 약속입니다.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PRINCIPLES.map((item, index) => {
              const Icon = iconMap[item.iconName];
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <div className="bg-secondary w-14 h-14 flex items-center justify-center rounded-sm mb-6 text-primary">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">고객 관리 시스템</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: '심층 상담', desc: '고객의 니즈, 예산, 투자 목적을 정밀하게 분석합니다.' },
              { step: '02', title: '맞춤형 매물 분석', desc: '빅데이터와 현장 실사를 통해 검증된 최적의 매물을 선별합니다.' },
              { step: '03', title: '권리 분석 및 계약', desc: '법적 리스크를 제로화하는 철저한 권리 분석 후 안전하게 계약합니다.' },
              { step: '04', title: '사후 관리', desc: '계약 이후의 임대 관리, 세무 자문 등 지속적인 케어를 제공합니다.' }
            ].map((process, idx) => (
              <div key={idx} className="flex items-start md:items-center gap-6 group">
                <div className="text-4xl font-serif font-bold text-gray-300 group-hover:text-secondary transition-colors">
                  {process.step}
                </div>
                <div className="flex-grow bg-white p-6 shadow-sm border-l-4 border-transparent group-hover:border-primary transition-all">
                  <h4 className="text-lg font-bold text-primary mb-1">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;