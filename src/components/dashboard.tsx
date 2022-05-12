import "./componentStyle.css";

interface Props {
  borrow?: number;
  salary?: number;
  deposit?: number;
}

function Dashboard({ borrow, salary, deposit }: Props) {
  const PropertyPrice = () => {
    if (salary && deposit) {
      const Property = salary + deposit;
      return (
        <p>
          With your deposit of ${deposit} you could afford a property up to $
          {Property}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="dashboard">
      <div>
        <p>Here's what you can borrow</p>
        <p className="borrow">${borrow ?? "0"}</p>
      </div>
      {deposit !== 0 && <PropertyPrice />}
      <div>
        <p>Total income</p>
        <p>${salary}</p>
      </div>
    </div>
  );
}

export default Dashboard;
