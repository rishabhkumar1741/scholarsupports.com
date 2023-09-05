import Image from "next/image";
import { BsInstagram,BsGithub } from "react-icons/bs";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


export default function Aboutus() {
  return (
    <div>
      <div className="flex flex-col-reverse  md:flex md:flex-row">
        <div className="md:w-[70%] p-10">
          <h1 className="text-5xl block font-extrabold mb-8">
          I&apos;m Rishabh Kumar. I live in New Delhi City, where I create digital products that help people learn and grow.
          </h1>
          <p className="mb-8 text-gray-400">
          Greetings! I&apos;m Rishabh Kumar, and I proudly call the bustling city of Delhi my home. My journey into the realm of technology and programming commenced during my initial year of undergraduate studies. My insatiable curiosity for unraveling the mysteries of technology led me into the fascinating world of coding.
          </p>
          <p className="mb-8 text-gray-400">
          My coding expedition kick-started with the C programming language, laying a solid foundation in the realm of computer science. Hungry for knowledge, I soon delved into the complexities of C++, mastering the art of object-oriented programming. My passion for learning and coding grew exponentially.
          </p>
          <p className="mb-8 text-gray-400">
          As I continued my exploration of the ever-evolving tech landscape, my curiosity guided me toward the dynamic domain of web development. This marked a significant turning point in my journey. Armed with my coding prowess, I embarked on a creative adventure, crafting a variety of websites. Each project pushed my boundaries, fostering a spirit of innovation. Notably, Scholarsupport stands as a testament to my commitment to providing valuable online resources.
          </p>
          <p className="mb-8 text-gray-400">
          Expanding on my undergraduate experience, I pursued a master&apos;s degree at VIT Bhopal. This academic journey allowed me to dive deeper into the world of computer science and software engineering, equipping me with the knowledge and skills crucial for my growth as a programmer. Today, I proudly identify as a full-stack web developer, with my diverse portfolio highlighting my expertise. I am deeply passionate about staying at the forefront of web development trends and technologies, continually seeking to deliver cutting-edge solutions. You can explore my extensive body of work, including ongoing projects, on my GitHub profile, where I constantly push the boundaries of what&apos;s possible in web development. I&apos;m always open to new opportunities and collaborations, so please feel free to reach out and connect with me. Let&apos;s embark on a journey together to explore the limitless possibilities the digital world has to offer!
          </p>

          
        </div>
        <div className="md:w-[30%] flex-col">
          <div className=" md:mt-10 flex items-center backdrop-blur-3xl bg-gray-600/30 justify-center rounded-3xl mb-6">
            <Image
              className="h-auto w-[90%] rounded-3xl  rotate-1"
              alt="Rishabh"
              width={400}
              height={200}
              src={"/Rishabh.JPG"}
            />
          </div>
          <div className="hidden md:block">
          
              <Link
                className="mr-6 mb-2  flex gap-4 items-center justify-center"
                href="https://www.instagram.com/rishabh_kumar_1741/"
              >
                <BsInstagram />
                <span className="text-2xl"> Follow on Instagram</span>
              </Link>
              <Link
                className="mr-6 mb-2 flex gap-4 items-center justify-center"
                href="https://www.linkedin.com/in/rishabhkumar1741/"
              >
                <FaLinkedin />
                <span className="text-xl"> Follow on LinkedIn</span>
              </Link>
              <Link
                className="mr-6 mb-2 flex gap-4 items-center justify-center"
                href="https://github.com/rishabhkumar1741"
              >
                <BsGithub />
                <span> Follow on GitHub</span>
              </Link>
           
          </div>
        </div>
      </div>
      <div className=" md:hidden px-10 text-gray-400 text-lg">
              <Link
                className="mr-6 mb-2 flex gap-4  justify-start items-center"
                href="https://www.instagram.com/rishabh_kumar_1741/"
              >
                <BsInstagram />
                <span> Follow on Instagram</span>{" "}
              </Link>
              <Link
                className="mr-6 mb-2 flex gap-4  justify-start items-center"
                href="https://www.linkedin.com/in/rishabhkumar1741/"
              >
                <FaLinkedin />
                <span> Follow on LinkedIn</span>{" "}
              </Link>
              <Link
                className="mr-6 mb-2 flex gap-4  justify-start items-center"
                href="https://github.com/rishabhkumar1741"
              >
                <BsGithub />
                <span> Follow on GitHub</span>{" "}
              </Link>
           
          </div>
    </div>
  );
}
