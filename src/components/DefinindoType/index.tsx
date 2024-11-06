const DefinindoType = () => {
   //  Type serve para definir valores obrigatórios de uma variável
   type TypeResposta = "sim" | "não";
   const resposta: TypeResposta = "sim";

   return (
      <div>
         <p>A resposta é: {resposta}</p>
      </div>
   );
};

export default DefinindoType;
