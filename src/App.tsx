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

function App() {
  return (
    <>
      <div className=" bg-[rgb(32,32,32)] text-white  flex justify-center">
        <div className=" space-y-5 max-md:space-y-3 text-center w-[1200px] px-4 py-4">
          <h1 className="text-5xl max-md:text-3xl font-Poppins font-bold  ">
            Descubra Como Garantir <br /> uma Renda Extra Diária
          </h1>
          <h4 className=" my-3 font-Jost font-semibold  max-md:text-[12px]">
            Domine a Arte de Vender Online Mesmo Sem Experiência!
          </h4>

          <div className="h-[350px] mx-auto w-[600px] bg-gray-600 max-md:w-[300px] max-md:h-[150px]"></div>

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

      <div className="bg-[#d19f37] text-white p-10 text-center ">
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

      <div className="p-5 bg-white1 text-center  ">
        <div className="space-y-5 grid justify-center">
          <h1 className="text-[#1fbd9a] text-4xl font-Poppins font-bold">
            Resultado
          </h1>
          <div className="max-md:w-[400px]  px-10">
            <Carousel>
              <CarouselContent className="-ml-4">
                <CarouselItem className="max-md:pl-4 ">
                  <img src="/1.webp" alt="" />
                </CarouselItem>
                <CarouselItem className="max-md:pl-4 ">
                  <img src="/2.webp" alt="" />
                </CarouselItem>
                <CarouselItem className="max-md:pl-4">
                  <img src="/3.webp" alt="" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="pt-20  bg-[#d19f37] text-white">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-Poppins font-semibold text-center">
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


          <div className="flex flex-col justify-center items-center space-y-2" >
            <span className="text-xl">DE <span className="text-red-900 font-bold line-through">R$ 459</span> POR </span>
            <h2 className="text-8xl font-Poppins font-medium">R$ 297</h2>
            <Button
            className="font-Poppins bg-green2  text-white shadow-shapeGreen hover:text-black hover:bg-green-100 hover:shadow-shapeWhite text-2xl 
          font-bold uppercase"
          >
            COMPRAR AGORA
          </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
