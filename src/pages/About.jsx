import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-green-700">
          আমাদের সম্পর্কে
        </h1>
        <p className="text-lg mb-6 text-center text-gray-600">
          তারুণ্যের জাগরণ, সমাজের পরিবর্তন।
        </p>

        <div className="space-y-6 text-justify leading-relaxed text-gray-700 text-[17px]">
          <p>
            <strong>পরশাল নগর ইয়ুথ ক্লাব</strong> হল একটি উদ্যমী, অগ্রসর এবং
            সেবাপরায়ণ তরুণদের প্ল্যাটফর্ম। আমাদের লক্ষ্য হলো সমাজে ইতিবাচক
            পরিবর্তন আনা — শিক্ষার প্রসার, নেতৃত্বের উন্নয়ন, এবং সামাজিক
            সচেতনতা তৈরি করে একটি সুন্দর ও সমৃদ্ধ ভবিষ্যতের পথে এগিয়ে যাওয়া।
          </p>

          <p>
            <span className="font-bold text-blue-400">2025</span> সালে
            প্রতিষ্ঠিত, আমাদের ক্লাব স্থানীয় যুব সমাজকে একত্রিত করে বিভিন্ন
            ধরণের কার্যক্রম পরিচালনা করে — যেমন শিক্ষামূলক ওয়ার্কশপ, খেলাধুলা,
            রক্তদান, বৃক্ষরোপণ, প্রযুক্তি ও ক্যারিয়ার বিষয়ক সেমিনার, এবং পরিবেশ
            সচেতনতামূলক ক্যাম্পেইন।
          </p>

          <p>
            আমাদের বিশ্বাস, প্রতিটি তরুণের মধ্যে নেতৃত্বের অদম্য সম্ভাবনা আছে।
            সঠিক দিকনির্দেশনা ও সহায়তা পেলে তারাই হতে পারে সমাজের পরিবর্তনের
            কারিগর। আমাদের প্রতিটি কর্মসূচি সেই সম্ভাবনাকে জাগিয়ে তুলতেই
            নিবেদিত।
          </p>

          <p>
            আমরা শুধু একটি ক্লাব নই — আমরা একটি পরিবার। যেখানে বন্ধুত্ব, সম্মান,
            ও সহযোগিতা দিয়ে গড়ে উঠছে আগামীর পথপ্রদর্শকরা।
          </p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            যোগ দিন আমাদের সঙ্গে!
          </h2>
          <p className="text-gray-600">
            যদি আপনি স্বপ্ন দেখেন, কিছু করতে চান, সমাজে পরিবর্তন আনতে চান —
            তাহলে পরশাল নগর ইয়ুথ ক্লাব আপনার জন্য সঠিক জায়গা।
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
