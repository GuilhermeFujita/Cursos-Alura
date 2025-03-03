import { Select, SelectGrupo } from "@/componentes/Select";

const selectOpcoes = [
  { value: "Quantidade", label: "Quantidade" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const Quantidade = () => {
  return (
    <SelectGrupo nome="select-quantidade" id="select-quantidade">
      {selectOpcoes.map((opcao) => (
        <Select key={opcao.value} valor={opcao.value}>
          {opcao.label}
        </Select>
      ))}
    </SelectGrupo>
  );
};

export default Quantidade;
