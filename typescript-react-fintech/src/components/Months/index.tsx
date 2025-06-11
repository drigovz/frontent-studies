import ButtonMonths from '../ButtonMonths';

const Months = () => {
  return (
    <div className="flex">
      <ButtonMonths month={-3} />
      <ButtonMonths month={-2} />
      <ButtonMonths month={-1} />
      <ButtonMonths month={0} />
    </div>
  );
};

export default Months;
