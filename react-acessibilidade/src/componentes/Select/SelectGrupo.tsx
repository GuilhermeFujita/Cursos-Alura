import "./Select.css";

interface SelectGrupoProps extends React.HTMLProps<HTMLSelectElement> {
  id: string;
  nome: string;
  children: React.ReactNode;
}

const SelectGrupo = ({ id, children, nome, ...rest }: SelectGrupoProps) => {
  return (
    <select name={nome} id={id} className="select__grupo" {...rest}>
      {children}
    </select>
  );
};

export default SelectGrupo;
