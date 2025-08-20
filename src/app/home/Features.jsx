'use client';

import { DollarSign, Users, CalendarCheck, Layout, Table, Facebook, ClipboardList, Paperclip } from "lucide-react";

const Features = () => {
  const features = [
    { icon: <DollarSign size={40} className="text-[#059671]" />, title: "Lead Consolidation" },
    { icon: <Users size={40} className="text-[#059671]" />, title: "Lead Distribution" },
    { icon: <CalendarCheck size={40} className="text-[#059671]" />, title: "Follow-Ups" },
    { icon: <Layout size={40} className="text-[#059671]" />, title: "Custom Data Fields" },
    { icon: <Table size={40} className="text-[#059671]" />, title: "Pipelines & Workflow" },
    { icon: <Facebook size={40} className="text-[#059671]" />, title: "Facebook Integration" },
    { icon: <ClipboardList size={40} className="text-[#059671]" />, title: "Web Forms for WhatsApp & SMS" },
    { icon: <Paperclip size={40} className="text-[#059671]" />, title: "File Attachments" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#059671] mb-12">
          Features that will help your business grow
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {feature.icon}
              <h3 className="text-lg font-[600] text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
