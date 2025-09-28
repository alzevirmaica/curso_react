interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {
  tecnologia: [{ id: "12", nome: "React.js" }],
};

console.log(frontend.tecnologia);
