import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code for Pakistan | Fellow and Mentor",
};

function CodeForPakistan() {
  const linkedInUrl =
    "https://www.linkedin.com/feed/update/urn:li:activity:7054732064570454016?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcpkvEBuXv2OZ-jEhH0L0cUh2ZVwqmc-jM";
  return (
    <div className="flex flex-col gap-4 sm:gap-10 mx-auto w-full max-w-2xl  p-8 pb-20  sm:p-20 ">
      <div className="flex flex-col sm:flex-row  gap-10 sm:pr-10 sm:space-x-10">
        <div>
          <h1 className={cn("text-xl font-semibold md:text-3xl lg:text-4xl")}>
            Featured - Code for Pakistan <br /> (Fellowship & Mentorship)
          </h1>
          <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
            During my journey with <strong>Code for Pakistan,</strong> I had the
            privilege of being both a{" "}
            <strong>Fellow in the 7th KP Civic Fellowship Program </strong>
            and later a{" "}
            <strong>
              Mentor for the KP Women Civic Digital Internship Program.
            </strong>{" "}
            These experiences not only enriched my professional growth but also
            allowed me to contribute to the tech community by guiding emerging
            talents and helping them build practical skills for the real world.
          </p>
          <hr className="my-5 text-muted-foreground" />
          <h2 className="font-semibold text-lg">My Role as a Fellow</h2>
          <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
            In the 7th KP Civic Fellowship Program, I collaborated with a
            talented cohort to build impactful digital solutions aimed at civic
            engagement and public welfare. My primary focus was on frontend
            development, where I applied my skills in React.js, Redux, and
            Next.js to create responsive and user-friendly web applications for
            the public. This experience honed my ability to develop robust
            applications in a collaborative, fast-paced environment.
          </p>
          <ul>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              <strong>Key Highlights:</strong>
            </li>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              - Collaborated with cross-functional teams to design and implement
              user-centric web applications.
            </li>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              - Conducted user research and usability testing to gather feedback
              and improve application performance.
            </li>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              - Participated in code reviews and contributed to the development
              of best practices for frontend development.
            </li>
          </ul>
        </div>
        <div className="basis-2/3">
          <Card className="group ">
            <div className="p-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt="Code for Pakistan"
                  className="rounded-lg"
                  width={1385}
                  height={1440}
                  quality={100}
                  src="/projects/code-for-pakistan.png"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <hr className="my-5 text-muted-foreground" />

      <div className="flex flex-col sm:flex-row-reverse gap-10 sm:pr-10 sm:-space-x-10">
        <div>
          <h2 className="font-semibold text-lg">My Role as a Mentor</h2>
          <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
            As a mentor for the KP Women Civic Digital Internship Program, I
            focused on empowering women interns by sharing insights from my own
            professional journey. My mentorship involved guiding interns through
            project development, code optimization, and maintaining best
            practices in frontend development.
          </p>
          <ul>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              <strong>Mentorship Highlights:</strong>
            </li>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              - Provided one-on-one mentorship to interns, helping them navigate
              challenges and build confidence in their skills.
            </li>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              - Conducted workshops on frontend development, covering topics
              such as javascript, html, and css.
            </li>
            <li className="mt-2 text-muted-foreground sm:text-lg">
              - Assisted interns in building their portfolios and preparing for
              job interviews, enhancing their employability in the tech
              industry.
            </li>
          </ul>
          <p className="mt-2 mx-1 text-lg font-semibold">
            Quote from the program
          </p>
          <blockquote
            cite={linkedInUrl}
            className="mt-2 max-w-prose text-muted-foreground sm:text-lg italic mx-5 border-l-4 pl-2 border-l-muted-foreground"
          >
            "He is one of our amazing volunteer mentors and has done an
            outstanding job in guiding and inspiring our mentees. We are truly
            grate ful for his dedicat, patience and expertise in helping our
            mentees succeed in their personal and professional lives."{" "}
            <span className="text-sm text-blue-500 underline cursor:pointer">
              <Link href={linkedInUrl} target="_blank">
                Read full post on linkedin
              </Link>
            </span>
          </blockquote>
        </div>
        <div className="basis-2/3">
          <Card className="group ">
            <div className="p-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt="Code for Pakistan"
                  className="rounded-lg"
                  width={1385}
                  height={1440}
                  quality={100}
                  src="/projects/cfp-social.jpeg"
                />
                <p className="text-muted-foreground text-sm mt-2">
                  Code for Pakistan Fellowship and Mentorship Program
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CodeForPakistan;
