import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function FootAnkleDoctorPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Dr. Ahmad Al Mansoori</h1>
          <div className="space-x-6 text-base">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#location" className="hover:underline">Location</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-semibold mb-4">Meet Your Specialist</h2>
          <p className="text-lg mb-6">
            Dr. Ahmad Al Mansoori is a highly experienced Foot and Ankle specialist based in the UAE. With a dedication to patient care and modern treatment techniques, he is here to help you get back on your feet—literally.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Specialist Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sports Injury Management",
              "Ankle Arthroscopy",
              "Flatfoot Correction",
              "Bunion Surgery",
              "Diabetic Foot Care",
              "Achilles Tendon Repair"
            ].map((service) => (
              <Card key={service} className="rounded-2xl shadow-md">
                <CardContent className="p-6 text-lg font-medium">{service}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">What Patients Say</h2>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                "Dr. Ahmad gave me my mobility back. Highly professional and kind!" — Fatima R.
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                "I was nervous about my surgery, but Dr. Ahmad’s confidence and skill put me at ease." — Omar H.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Find Dr. Ahmad</h2>
          <p className="text-lg mb-6">
            Dr. Ahmad practices at the Emirates Orthopaedic Center, Dubai. For appointments, call +971 4 123 4567 or email appointments@drahmad.ae.
          </p>
          <iframe
            className="w-full h-64 rounded-xl border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0570816226715!2d55.27638377538781!3d25.197197929179474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434dcb5c4c0d%3A0x4c54037d6cd10e!2sDubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1685540000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        &copy; 2025 Dr. Ahmad Al Mansoori. All rights reserved.
      </footer>
    </div>
  );
}