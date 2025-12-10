import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Cơ bản',
    price: '0đ',
    period: '/tháng',
    description: 'Dành cho cá nhân muốn thử nghiệm.',
    features: ['1 Website', 'Tên miền con miễn phí', 'Hosting miễn phí', 'Mẫu AI cơ bản'],
    cta: 'Bắt đầu miễn phí',
    highlighted: false
  },
  {
    name: 'Chuyên nghiệp',
    price: '199k',
    period: '/tháng',
    description: 'Dành cho doanh nghiệp nhỏ và Freelancer.',
    features: ['5 Websites', 'Tên miền tùy chỉnh', 'Xóa logo bản quyền', 'SEO nâng cao', 'AI Copywriting không giới hạn'],
    cta: 'Dùng thử 7 ngày',
    highlighted: true
  },
  {
    name: 'Doanh nghiệp',
    price: 'Liên hệ',
    period: '',
    description: 'Giải pháp quy mô lớn.',
    features: ['Website không giới hạn', 'API Access', 'Hỗ trợ 24/7', 'Thiết kế độc quyền', 'Hạ tầng riêng'],
    cta: 'Liên hệ Sale',
    highlighted: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Bảng giá đơn giản</h2>
          <p className="mt-4 text-xl text-slate-500">Chọn gói phù hợp với nhu cầu của bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
                key={index} 
                className={`
                    relative rounded-2xl p-8 bg-white border 
                    ${plan.highlighted ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm hover:shadow-lg transition-all'}
                `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Phổ biến nhất
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="ml-1 text-slate-500">{plan.period}</span>
              </div>
              <p className="mt-4 text-slate-500 text-sm">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`
                    mt-8 w-full py-3 px-4 rounded-xl font-bold transition-all
                    ${plan.highlighted 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30' 
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}
                `}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;