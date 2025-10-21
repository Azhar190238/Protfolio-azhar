import HeroImg from "@/assets/images/azhar.png";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Meteors from "@/components/ui/meteors";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
            <AuroraText className="font-bold">About Me</AuroraText>
          </h1>
          <TypingAnimation className='text-xl md:text-2xl mt-2'>Full Stack Developer | Software Engineer </TypingAnimation>
        </div>
        <div className="lg:mt-12 md:mt-8 mt-6 mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 overflow-hidden shadow-lg max-w-[1207px] mx-auto">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <Meteors number={60} />
                <img
                  src={HeroImg}
                  className="rounded-[15px] w-[900px]  md:h-[550px] h-[450px] shadow block border object-cover border-green-900/40 p-3 z-10 relative"
                  alt="Jewel"
                  width={500}
                  height={729}
                />
              </div>
            </div>
            <div className="relative space-y-6">
              <p className="text-white text-justify leading-relaxed">
                Hello! I&apos;m <strong className="text-gradient"> Md Azharuddin</strong>, a passionate <strong>Software Engineer</strong> specializing in frontend development, with a growing growing expertise in backend and full-stack technologies. I hold a B.Sc. in Computer Science and Engineering from Khulna University and work as a Junior Software Engineer at Appstick Limited. I build scalable, user-focused web applications using React, Next.js, Node.js, and MongoDB. I’m driven by a love for clean design, performance, and real-world problem-solving, always striving to blend great user experience with robust architecture.
              </p>
              <div className="pt-8">
                <blockquote className="border-l-4 border-gradient-to-r from-pink-500 to-teal-400 pl-6 py-4 transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/30">
                  <p className="text-white text-justify italic">
                    I am a lifelong learner, always striving to solve real-world problems with technology. Through my work, I aim to create tools, frameworks, and software solutions that empower developers and deliver real value to users. My goal is to build applications that not only meet user needs but also provide them with delightful, intuitive experiences.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white text-lg">
                      Md Azharuddin, Junior Software Engineer at <br /> <img src="/app.png" alt="Appstick Limited" className="inline-block rounded-full w-8 h-8 p-[1px]" /> Appstick Limited
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
