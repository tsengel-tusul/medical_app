//import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { Check } from "lucide-react";
import CustomAccordion, {
  FAQItem,
} from "@/components/Frontend/CustomAccordion";
import Pricing from "@/components/Frontend/Pricing";

export default function page() {
  const features = [
    "Медик танд өвчтөнүүдийг авчирдаг",
    "Цахим жор бичих ямар ч асуудалгүй , туршлагатай",
    "Эмнэлзүйн нэгдсэн тэмдэглэл хөтлөх",
  ];
  
  // const steps = [
  //   "List your practice",
  //   "Өрсөлдөх чадвартай саналуудыг бий болгох",
  //   "Өвчтөнүүдтэй уулзаж эхэл",
  // ];
  const cards = [
    {
      title: " Аяллаа эхлээрэй",
      description:
        "Манай эрүүл мэндийн үйлчилгээ үзүүлэгчдийн сүлжээнд нэгдэхийн тулд шинэ хөтөлбөр эхлүүлээрэй.",
      link: "/",
      linkTitle: "Start a new application",
    },
    {
      title: "Аппликэйшнээ үргэлжлүүлэх",
      description:
        "Зогссон газраасаа үргэлжлүүлж, элсэлтийн процессоо дуусгана уу. ",
      link: "/",
      linkTitle: "Аппликэйшнээ үргэлжлүүлнэ үү",
    },
    {
      title: " үзлэг хийх хуваарь гаргах",
      description:
        "Аппликэйшнээ дуусгахын тулд дуудлага хийх цагийг тохируулаарай",
      link: "/",
      linkTitle: "Дуудлага хийх хуваарь гаргахl",
    },
    {
      title: " Truck your Progress",
      description: "Аппликэйшн болон зөвшөөрлийн статусыг цаг тухайд нь хянах.",
      link: "/",
      linkTitle: "Статус шалгах",
    },
  ];
  const faqs: FAQItem[] = [
    {
      qn: "Би эмнэлгийн програмд ​​хэрхэн бүртгүүлэх вэ?",
      ans: (
        <div>
          Та манай вэб сайтад зочилж, дээр дарж бүртгүүлэх боломжтой{" "}
          <CustomButton
            title="Signup"
            href="/register?role='DOCTOR'"
            className="bg-blue-600 hover:bg-blue-800"
          />{" "}
          Бүртгэлээ үүсгэхийн тулд зааврыг дагана уу.
        </div>
      ),
    },
    {
      qn: "Би эмнэлгийн програмыг олон төхөөрөмж дээр ашиглаж болох уу?",
      ans: "Тийм ээ, та интернетэд холбогдсон дурын төхөөрөмжөөс манай програмд ​​хандах боломжтой.",
    },
    {
      qn: "Эрүүл мэндийн програм дээр миний мэдээлэл аюулгүй юу?",
      ans: "Мэдээжийн хэрэг. Бид таны мэдээллийн аюулгүй байдал, нууцлалыг эрхэмлэдэг. Манай платформ нь таны мэдээллийг хамгаалахын тулд салбарын стандартын шифрлэлт болон аюулгүй байдлын протоколуудыг ашигладаг.",
    },
    {
      qn: "Би нууц үгээ хэрхэн шинэчлэх вэ?",
      ans: "Нууц үгээ шинэчлэхийн тулд нэвтрэх хуудас руу ороод `Нууц үгээ мартсан` холбоос дээр дарна уу. Нууц үгээ шинэчлэхийн тулд зааврыг дагана уу.",
    },
    {
      qn: "Та хэрэглэгчийн тусламжийг санал болгодог уу?",
      ans: "Тийм ээ, бид танд тулгарсан асуулт, асуудалд туслах тусгайлсан хэрэглэгчийн тусламжийн багтай. Та бидэнтэй имэйлээр эсвэл манай дэмжлэгийн порталаар холбогдож болно.",
    },
    {
      qn: "Би төлөвлөгөөгөө сайжруулж эсвэл бууруулж болох уу?",
      ans: "Мэдээж. Та хүссэн үедээ төлөвлөгөөгөө шинэчлэх эсвэл бууруулах боломжтой. Өөрчлөлт хийхийн тулд зүгээр л данс руугаа нэвтэрч, захиалгын тохиргоо руу очно уу.",
    },
  ];
  return (
    <div className="min-h-screen">
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="sm:text-5xl text-2xl leading-10">
              Build a thriving{" "}
              <span className="text-blue-600 font-semibold">direct-pay</span>{" "}
              practice with Medical App
            </h2>
            <p className="py-4">
              Өвчтөнүүдтэй холбогдох боломжтой Medical App-д тавтай морил урьд
              өмнөхөөсөө илүү хялбар. Манай платформ нь цаг товлох, алсаас
              тусламж үзүүлэх, хянах өвчтөний бүртгэл үйл явцыг хялбаршуулдаг
            </p>
            <CustomButton
              title="List your service"
              href="#"
              className="bg-blue-600 hover:bg-blue-800"
            />
            <div className="py-6">
              {features.map((feature, i) => {
                return (
                  <p key={i} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {feature}
                  </p>
                );
              })}
            </div>
          </div>
          <Image
            src="/doctor.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full"
          />
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/doctor.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full hidden md:block mr-4"
          />
          <div className="">
            <h2 className="sm:text-3xl text-2xl leading-10">
              Join Sesame to increase your
              <span className="text-blue-600 font-semibold font-semibold ">
                revenue
              </span>{" "}
              today.
            </h2>
            {/* <div className="py-6">
              {steps.map((feature, i) => {
                return (
                  <p key={i} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {feature}
                  </p>
                );
              })}
            </div> */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {cards.map((card, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-900 p-4 px-2.5 rounded-lg shadow-2xl text-center"
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-xs py-3">
                      {card.description}
                    </p>
                    <CustomButton
                      title={card.linkTitle}
                      href={card.link}
                      className="bg-blue-600 hover:bg-blue-800"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto ">
          <Pricing/>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto ">
          <CustomAccordion FAQS={faqs} />
        </div>
      </section>
    </div>
  );
}
