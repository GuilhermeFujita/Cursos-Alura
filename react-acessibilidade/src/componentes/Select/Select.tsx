import "./Select.css";

interface SelectOpcaoProps {
  valor: string;
  children: React.ReactNode;
}

const SelectOpcao = ({ valor, children }: SelectOpcaoProps) => {
  return (
    <>
      <option value={valor} className="select__opcao">
        {children}
      </option>
    </>
  );
};

export default SelectOpcao;
