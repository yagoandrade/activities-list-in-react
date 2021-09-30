function ExpenseDate(props) {
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
