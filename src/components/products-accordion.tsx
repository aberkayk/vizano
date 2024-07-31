import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-lg md:text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const faqData = [
  {
    id: "item-1",
    question: "Nasıl kiralama yaparım?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima nemo excepturi praesentium earum quis quos. Necessitatibus itaque officiis sequi fugit, facere ad optio. Quasi officiis ad quos, earum porro esse!",
  },
  {
    id: "item-2",
    question: "Ödeme seçenekleri neler?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consequuntur dolores quos voluptatibus molestias magni sapiente, qui voluptas quae mollitia atque, repudiandae ad exercitationem fugit quas pariatur doloremque repellat necessitatibus?",
  },
  {
    id: "item-3",
    question: "Teslimat süresi ne kadar?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, non. Velit, eius! Maxime reiciendis mollitia doloribus. Commodi, accusamus illum. Expedita debitis nemo quaerat quod molestiae, hic labore assumenda ducimus architecto!",
  },
  {
    id: "item-4",
    question: "Kiralama süresi ne kadar?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, adipisci. Distinctio sunt quos eveniet, veniam id labore ipsum veritatis impedit ratione, nisi, perspiciatis accusamus explicabo minima doloremque ducimus? Fugit, animi?",
  },
  {
    id: "item-5",
    question: "Ürünler nasıl iade edilir?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima pariatur ullam, ducimus fugit nihil voluptas quas. Repudiandae quia iusto expedita quibusdam quos tempore laborum culpa ex consequuntur at, porro fugiat.",
  },
  {
    id: "item-6",
    question: "Destek hizmetleri neler?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, eos. Voluptate, veniam sequi. Praesentium, perspiciatis mollitia! Consectetur debitis sequi animi cum dolore, sit odio voluptatibus, maxime quas tempore, velit laborum.",
  },
];
