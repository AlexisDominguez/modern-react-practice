import Collapse from "../../components/Collapse";
import ListItem from "../../components/ListItem";

const NOTEBOOKS_MOCK_LIST = [
  "Notebook 1",
  "Notebook 2",
  "Notebook 3",
  "Notebook 4",
  "Notebook 5",
];

const NotebooksListModule = () => {
  return (
    <Collapse title="NOTEBOOKS">
      {NOTEBOOKS_MOCK_LIST.map((notebook) => (
        <ListItem key={notebook}>{notebook}</ListItem>
      ))}
    </Collapse>
  );
};

export default NotebooksListModule;
