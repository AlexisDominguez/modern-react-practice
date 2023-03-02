import Collapse from "../../components/Collapse";
import ListItem from "../../components/ListItem";

const MOCKS_PORTFOLIOS_LIST = [
  "Portfolio 1",
  "Portfolio 2",
  "Portfolio 3",
  "Portfolio 4",
  "Portfolio 5",
];

const PortfoliosListModule = () => {
  return (
    <Collapse title="PORTFOLIOS">
      {MOCKS_PORTFOLIOS_LIST.map((portfolio) => (
        <ListItem key={portfolio}>{portfolio}</ListItem>
      ))}
    </Collapse>
  );
};

export default PortfoliosListModule;
