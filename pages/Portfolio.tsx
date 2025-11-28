import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full animate-fadeIn pb-20">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">중개 성공 사례</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          단순한 거래 성사를 넘어, 고객의 난제를 해결하고 가치를 극대화한 대표적인 사례들입니다.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-sm shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-auto bg-gray-50 p-4 border-l-4 border-secondary rounded-r-lg">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-primary uppercase mb-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" /> Solution
                  </h4>
                  <p className="text-sm text-gray-800 font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action Banner within Portfolio */}
      <div className="max-w-4xl mx-auto mt-20 text-center px-6">
        <h3 className="text-2xl font-serif text-gray-800 mb-6">귀하의 부동산 고민도 해결책이 있습니다.</h3>
        <p className="text-gray-600 mb-8">
          유사한 상황의 성공 사례를 바탕으로 최적의 솔루션을 제안해 드립니다.
        </p>
        <a href="/#/contact" className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 hover:bg-primary hover:text-white transition-colors duration-300">
          솔루션 문의하기
        </a>
      </div>
    </div>
  );
};

export default Portfolio;