import useDataContext from '../../hooks/useDataContext';

function monthDescription(month: number): string {
  const date = new Date();
  date.setMonth(date.getMonth() + month);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

const ButtonMonths = ({ month }: { month: number }) => {
  const { setDateInitial, setDateFinal } = useDataContext();

  function setMonth(month: number): void {
    const date = new Date();
    date.setMonth(date.getMonth() + month);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    // abaixo estamos pegando o proximo mês ( date.getMonth() + 1 ) e o dia anterior ao primeiro dia do próximo mês
    // assim pegamos o último dia do mês atual
    // exemplo: se hoje é 01/01/2023, o próximo mês é 02/2023 e o dia anterior ao primeiro dia de 02/2023 é 31/01/2023
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setDateInitial(firstDayOfMonth.toISOString().split('T')[0]);
    setDateFinal(lastDayOfMonth.toISOString().split('T')[0]);
  }

  return (
    <button className="btn" onClick={() => setMonth(month)}>
      {monthDescription(month)}
    </button>
  );
};

export default ButtonMonths;
