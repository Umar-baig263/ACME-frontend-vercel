import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/SlowComp/Section1";
import Section2 from "../../components/SlowComp/Section2";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";

const SlowComp = () => {
  const data = [
    {
      head: "Frequent freezing or unresponsiveness",
      img: "scSec21.png",
      desc1:
        "Frequent freezing or unresponsiveness is a common issue that computer users encounter. When a computer freezes, it stops responding to any input, and the screen appears to be frozen.",
      desc2:
        "The most likely cause of frequent freezing is an overloaded system, which can occur during resource-intensive tasks such as gaming or running multiple applications simultaneously. Other possible causes include malware or hardware issues such as a failing hard drive, overheating, or insufficient RAM.",
    },
    {
      head: "Long boot-up and shutdown times",
      img: "scSec22.png",
      desc1:
        "Long boot-up and shutdown times refer to the duration it takes for a computer or electronic device to start up or turn off. A slow boot-up time may occur due to a lack of memory or storage space, conflicts with operating system updates or outdated drivers, or malware infections.",
      desc2:
        "Similarly, a slow shutdown time may be caused by multiple programs running in the background, software or hardware faults, or inaccurate system configurations. Long boot-up and shutdown times can significantly impair productivity and hinder workflow, leading to frustration and annoyance for users.",
    },
    {
      head: "Delays in opening programs",
      img: "scSec23.png",
      desc1:
        "Delays in opening programs refer to the time it takes for an application or software program to fully load and become functional on a device. These delays can be frustrating and can significantly impact productivity and efficiency, especially when dealing with time-sensitive tasks.",
      desc2:
        "There are various factors that can contribute to these delays, including the processing power of the device, the amount of available memory, conflicts with other software, and the size and complexity of the program.",
    },
    {
      head: "Lag during multitasking",
      img: "scSec24.png",
      desc1:
        "Lag during multitasking is a phenomenon where the system’s overall performance slows down due to multiple tasks running simultaneously. It happens when the computer’s central processing unit (CPU) becomes overburdened with too many applications.",
      desc2:
        "As the CPU tries to manage all the applications, it divides its processing power among them, resulting in slower performance. This can lead to delayed response times, frozen screens, and dropped frames when multitasking or switching between applications.",
    },
    {
      head: "Slow internet browsing",
      img: "scSec25.png",
      desc1:
        "Slow internet browsing is a frustrating experience that can impact our productivity and enjoyment of online activities. It can be caused by various factors such as a weak internet connection, outdated browser software, overloaded or outdated device, or malware infections.",
      desc2:
        "Slow internet browsing can manifest in different ways, such as long loading times to access websites, buffering while streaming videos, delayed response times to commands, or even complete connection drops.",
    },
  ];
  return (
    <div className="md:pt-30 pt-20">
      <Navbar
        breadcrumb="slow-computer"
        isBannerText={true}
        isBanner={false}
        img="slowCompBanner.png"
        text="Is your computer feeling sluggish and slow? Don’t worry; we’ve got the perfect solution to revitalize its performance! At Acme IT, we specialize in providing expert solutions that will give your computer the boost it needs to regain its speed and efficiency."
        head="Slow Computer"
      />
      <Section1 />
      {
        data?.map((d , i) => (
            <Section2
            key={i}
              img={d?.img}
              index={i+1}
              head={d?.head}
              desc1={d?.desc1}
              desc2={d?.desc2}
              isreversed={ i%2 == 0 ? true : false}
            />
        ))
      }
      <Banner
        color="text-white"
        width="md:w-3/4 w-full"
        isred={false}
        heading="Ready to speak with a marketing expert? Give us a ring"
        subheading="Let’s grow your brand—one call away."
        btnLink="/stamp"
        btntext="Custom your Own Stamp"
        img="itBanner2.png"
      />
      <FaqSection />
    </div>
  );
};

export default SlowComp;
