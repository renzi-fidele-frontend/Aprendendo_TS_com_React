//  Com template literals posso definir a estrutura de uma string
type ElementoPorClasse = `.${string}`;
type ElementoPorId = `#${string}`;

const TemplateLiterals = () => {
   const classeSwiper: ElementoPorClasse = ".elemento";
   const idSwiper: ElementoPorId = "#elemento";

   return (
      <div>
         <p>A classe do elemento é: {classeSwiper}</p>
         <p>A id do elemento é: {idSwiper}</p>
      </div>
   );
};
export default TemplateLiterals;
