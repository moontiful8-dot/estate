import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    type: '매매 상담',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="animate-fadeIn min-h-screen">
      {/* Header */}
      <div className="relative h-64 bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMAGES.DOCUMENT_SIGN})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h1 className="relative z-10 text-4xl font-serif font-bold text-white">상담 신청</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">오시는 길</h2>
            <div className="aspect-video bg-gray-200 w-full mb-8 rounded-sm overflow-hidden shadow-inner">
               {/* Placeholder for Map */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0673397669343!2d127.02761031531235!3d37.4980959798124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1598c361929%3A0x6a05537552973710!2zU2VvdWwsIEdhbmduYW0tR3UsIFRlaGVyYW4tcm8sIOqwleuCqOyXrQ!5e0!3m2!1sen!2skr!4v1626837493231!5m2!1sen!2skr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy">
              </iframe>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">주소</h3>
                  <p className="text-gray-600">서울시 강남구 테헤란로 123, 4층 박동산 공인중개사무소</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">전화</h3>
                  <p className="text-gray-600">02-1234-5678 (직통)</p>
                  <p className="text-gray-500 text-sm">상담 중일 경우 문자를 남겨주세요.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">영업 시간</h3>
                  <p className="text-gray-600">평일 09:00 - 19:00</p>
                  <p className="text-gray-500 text-sm">주말 및 공휴일은 사전 예약제 운영</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-secondary relative">
             <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
               <Mail size={100} />
             </div>

            <h2 className="text-2xl font-serif font-bold text-primary mb-2">상담 예약</h2>
            <p className="text-gray-500 text-sm mb-8">
              아래 양식을 작성해주시면 24시간 이내에 직접 연락드리겠습니다.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center py-12 animate-fadeIn">
                <h3 className="text-xl font-bold mb-2">예약이 접수되었습니다.</h3>
                <p>박동산 중개사가 내용을 확인 후 <br/>빠른 시일 내에 연락드리겠습니다.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm underline text-green-600 hover:text-green-800"
                >
                  새로운 상담 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">성함</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border-b-2 border-gray-200 bg-gray-50 px-4 py-3 focus:border-secondary focus:outline-none focus:bg-white transition-colors"
                    placeholder="홍길동"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full border-b-2 border-gray-200 bg-gray-50 px-4 py-3 focus:border-secondary focus:outline-none focus:bg-white transition-colors"
                    placeholder="010-0000-0000"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">상담 분야</label>
                  <select 
                    className="w-full border-b-2 border-gray-200 bg-gray-50 px-4 py-3 focus:border-secondary focus:outline-none focus:bg-white transition-colors"
                    value={formState.type}
                    onChange={e => setFormState({...formState, type: e.target.value})}
                  >
                    <option>빌딩 매매</option>
                    <option>상가/오피스 임대</option>
                    <option>자산 관리/컨설팅</option>
                    <option>기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">문의 내용 (선택)</label>
                  <textarea 
                    rows={4}
                    className="w-full border-b-2 border-gray-200 bg-gray-50 px-4 py-3 focus:border-secondary focus:outline-none focus:bg-white transition-colors resize-none"
                    placeholder="상담 원하시는 지역이나 예산 등을 적어주시면 더 정확한 상담이 가능합니다."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-4 hover:bg-[#151b60] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? '접수 중...' : '상담 신청하기'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;