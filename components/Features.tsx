import React from 'react';
import { Zap, Layout, Globe, ShieldCheck, PenTool, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: 'Tốc độ cực nhanh',
    description: 'Tạo website hoàn chỉnh chỉ trong chưa đầy 30 giây nhờ sức mạnh xử lý của Gemini 2.5.'
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    title: 'Thiết kế Responsive',
    description: 'Website tự động căn chỉnh hoàn hảo trên mọi thiết bị: Điện thoại, Máy tính bảng và Desktop.'
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    title: 'Tên miền tùy chỉnh',
    description: 'Kết nối tên miền riêng của bạn dễ dàng hoặc sử dụng tên miền miễn phí từ chúng tôi.'
  },
  {
    icon: <PenTool className="w-6 h-6 text-purple-500" />,
    title: 'AI Copywriting',
    description: 'Không biết viết gì? AI sẽ tự động viết nội dung hấp dẫn, chuẩn marketing cho từng trang.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    title: 'Bảo mật SSL',
    description: 'Chứng chỉ bảo mật SSL miễn phí trọn đời, giúp website của bạn an toàn và uy tín hơn.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
    title: 'Tối ưu SEO',
    description: 'Cấu trúc code chuẩn SEO giúp website dễ dàng lên Top Google tìm kiếm.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Tại sao chọn chúng tôi?</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Mọi công cụ bạn cần để thành công online
          </p>
          <p className="mt-4 text-xl text-slate-500">
            Nền tảng của chúng tôi tích hợp những công nghệ tiên tiến nhất để bạn tập trung vào kinh doanh, phần kỹ thuật hãy để AI lo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all"></div>
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm ring-1 ring-slate-900/5 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;