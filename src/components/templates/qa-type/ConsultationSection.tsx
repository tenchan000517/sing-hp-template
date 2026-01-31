"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, Video, MessageCircle } from "lucide-react";

interface ConsultationProps {
  title?: string;
  subtitle?: string;
  phone: {
    number: string;
    hours: string;
    staff: string;
    note?: string;
  };
  email: {
    address: string;
    subject?: string;
    responseTime: string;
  };
  online?: {
    tool: string;
    duration: string;
    note?: string;
  };
}

export default function ConsultationSection({
  title = "まだ不安が残っていますか？",
  subtitle = "お気軽にご相談ください。",
  phone,
  email,
  online,
}: ConsultationProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <MessageCircle className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#E3F2FD] rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">電話で相談</h3>
            <a
              href={`tel:${phone.number.replace(/-/g, "")}`}
              className="block text-2xl font-bold text-blue-600 mb-2 hover:underline"
            >
              {phone.number}
            </a>
            <p className="text-sm text-gray-600 mb-2">
              受付時間: {phone.hours}
            </p>
            <p className="text-sm text-gray-600 mb-2">担当: {phone.staff}</p>
            {phone.note && (
              <p className="text-xs text-gray-500 mt-3 bg-white/50 rounded-lg p-2">
                {phone.note}
              </p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#FFF3E0] rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">メールで相談</h3>
            <a
              href={`mailto:${email.address}${
                email.subject ? `?subject=${encodeURIComponent(email.subject)}` : ""
              }`}
              className="block text-lg font-bold text-orange-600 mb-2 hover:underline break-all"
            >
              {email.address}
            </a>
            {email.subject && (
              <p className="text-sm text-gray-600 mb-2">
                件名: 「{email.subject}」
              </p>
            )}
            <p className="text-sm text-gray-600">24時間受付</p>
            <p className="text-sm text-gray-600">{email.responseTime}</p>
          </motion.div>

          {/* Online */}
          {online && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#E8F5E9] rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Video className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">
                オンライン相談（{online.tool}）
              </h3>
              <p className="text-gray-700 mb-2">
                日時: ご都合に合わせて調整
              </p>
              <p className="text-gray-700 mb-2">
                所要時間: {online.duration}
              </p>
              {online.note && (
                <p className="text-sm text-gray-600 mt-3">{online.note}</p>
              )}
              <Link
                href="/templates/qa-type/contact"
                className="inline-block mt-4 bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43A047] transition-colors"
              >
                予約する
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
