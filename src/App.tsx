// import { Button } from "./components/ui/button";

import { FaRegCommentAlt, FaTelegram } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { RiComputerLine } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { AiTwotoneLike } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  return (
    <>
      <div className=" bg-[#100420] text-white  flex justify-center px-3">
        <div className=" space-y-5 max-md:space-y-3 text-center w-[1200px] px-4 py-4">
          <h1 className="text-5xl max-md:text-2xl font-Poppins font-bold  ">
            Descubra Como Garantir <br /> uma Renda Extra Diária
          </h1>
          <h4 className=" my-3 font-Jost font-semibold  max-md:text-[12px]">
            Domine a Arte de Vender Online Mesmo Sem Experiência!
          </h4>

          <div className=" mx-auto ">
            <img src="/Design.png" alt="" />
          </div>

          <Button
            className="font-Poppins bg-green2  text-white shadow-shapeGreen hover:text-black hover:bg-green-100 hover:shadow-shapeWhite text-2xl max-md:text-xs 
          font-bold uppercase"
          >
            Quero Ganhar Renda Agora
          </Button>
          <img src="/payments.webp" className="mx-auto" />
        </div>
      </div>

      <div className="bg-white1 p-6">
        <div className="text-center">
          <h1 className="text-[#1fbd9a] font-bold text-4xl">
            Benefícios do Curso
          </h1>
        </div>

        <div className="flex justify-around flex-wrap">
          <div className="w-[300px] p-6 text-center space-y-2 ">
            <FaTelegram className="size-20 mx-auto text-[#ffdf03] hover:text-black " />
            <h3 className="text-xl font-Jost">Simple</h3>
            <p className="font- font-Jost">
              Descubra um método simples e eficaz que vai te guiar do zero
              absoluto até suas primeiras vendas na internet de forma rápida e
              descomplicada.
            </p>
          </div>

          <div className="w-[300px] p-6 text-center space-y-2 ">
            <div className="bg-[#ffdf03] rounded-[50%] p-5 w-[90px] h-[80px] hover:bg-black mx-auto flex items-center">
              <RiComputerLine className="size-16 mx-auto text-white  " />
            </div>
            <h3 className="text-xl font-Jost">Prático</h3>
            <p className="font- font-Jost">
              Funciona para qualquer pessoa, de qualquer idade, e tudo o que
              você precisa é de um computador ou celular com acesso à internet.
            </p>
          </div>

          <div className="w-[300px] p-6 text-center space-y-2 ">
            <div className="bg-[#ffdf03] rounded-[50%] p-5 w-[90px] h-[80px] hover:bg-black mx-auto flex items-center">
              <FaRegCommentAlt className="size-14 mx-auto text-white  " />
            </div>
            <h3 className="text-xl font-Jost">Rápido</h3>
            <p className="font- font-Jost">
              Em apenas algumas semanas, você pode conseguir mudar a sua vida
              financeira seguindo esse método.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#d19f37] text-white p-10 text-center py-10">
        <div className=" space-y-5">
          <h1 className="text-2xl md:text-3xl font-Poppins font-bold ">
            O QUE É O METODO RENDA EXTRA ?
          </h1>
          <p className="text-sm md:text-2xl font-Jost">
            Nosso método é 100% didático, permitindo que você aprenda todo o
            conteúdo usando apenas seu celular e comece a ganhar dinheiro de
            qualquer lugar, precisando apenas de uma conexão com a internet.
            Este treinamento é perfeito tanto para quem é completamente
            iniciante na internet quanto para quem já deu os primeiros passos no
            marketing digital e quer escalar seus resultados. Você terá acesso
            ao treinamento mais completo disponível, com tudo o que você precisa
            saber sobre marketing digital. Nossas estratégias exclusivas foram
            testadas e aprovadas por mais de 1.000 alunos. Além de um conteúdo
            único e bem organizado, nossa equipe dedicada está pronta para
            fornecer o melhor suporte do mercado. Após a compra, o curso será
            enviado para o e-mail cadastrado.
          </p>
        </div>
      </div>

      <div className="p-5 bg-white1 text-center py-10 ">
        <div className="space-y-5 grid justify-center">
          <h1 className="text-[#1fbd9a] text-4xl font-Poppins font-bold">
            Resultado
          </h1>
          <div className="  px-10">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/3  ">
                  <img src="/1.webp" alt="" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 ">
                  <img src="/2.webp" alt="" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <img src="/3.webp" alt="" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-[#d19f37] text-white">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-Poppins font-semibold text-center">
              Acesso Imediato a<br /> Tudo isso Hoje!
            </h1>
            <div className="font-Jost font-medium">
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                Estrutura de vendas profissional.
              </span>
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                Facebook Ads Avançado.
              </span>
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                As melhores estratégias orgânicas.
              </span>{" "}
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                Criar Redes Sociais Engajadas.
              </span>
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                Ganhe de R$500 a R$15mil por mês.
              </span>
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                Suporte para Alunos.
              </span>
              <span className="flex items-center gap-2">
                <AiTwotoneLike />
                Google Ads Avançado.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-2">
            <span className="text-xl">
              DE{" "}
              <span className="text-red-600 font-Poppins font-bold line-through">
                R$ 459
              </span>{" "}
              POR{" "}
            </span>
            <h2 className="text-8xl font-Poppins font-bold">R$ 297</h2>
            <Button
              className="font-Poppins bg-green2  text-white shadow-shapeGreen hover:text-black hover:bg-green-100 hover:shadow-shapeWhite text-2xl 
          font-bold uppercase"
            >
              COMPRAR AGORA
            </Button>
          </div>
        </div>
      </div>

      <div className=" bg-black text-white py-10 px-10">
        <div className=" flex flex-wrap items-center justify-center  gap-6">
          <h2 className="text-center text-4xl font-Poppins font-bold">Dúvidas Mais<br/> Frequentes</h2>
          <div>
          <Accordion className="w-[300px] md:w-[800px]" type="single" collapsible>
            
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Nunca vendi nada na internet, o curso é pra mim?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Esse curso serve tanto para iniciantes quanto para
                intermediários. Eu vou te ensinar do zero até você fazer a
                primeira venda de muitas.
              </AccordionContent>{" "}
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Posso aplicar o conteúdo somente com o meu celular?
              </AccordionTrigger>
              <AccordionContent>
                Sim 100% do conteúdo você pode aplicar somente com seu celular
                ou somente pelo o computador fica na sua disposição e escolha.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">  
              <AccordionTrigger>Como vou acessar o curso?</AccordionTrigger>
              <AccordionContent>
                O curso é 100% online e você receberá o acesso por e-mail após a
                confirmação da compra.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>E se eu não gostar?</AccordionTrigger>
              <AccordionContent>
                Eu confio tanto no meu conteúdo que estou te dando 7 dias de
                Garantia. Se por qualquer motivo você não gostar ou não se
                adaptar, devolvemos seu dinheiro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>E se eu tiver dúvida?</AccordionTrigger>
              <AccordionContent>
                Temos um time de suporte sempre à disposição para sanar qualquer
                dúvida em relação ao conteúdo do treinamento.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Onde e como faço o Curso Renda Extra.
              </AccordionTrigger>
              <AccordionContent>
                O curso é totalmente online, ou seja você pode assistir ele
                quando quiser, a onde quiser, quantas vezes quiser, contanto que
                tenha algum dispositivo conectado a internet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
