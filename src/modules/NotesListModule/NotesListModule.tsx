import Collapse from "../../components/Collapse";
import ListItem from "../../components/ListItem";

const NOTES_MOCK_LIST = ["Notes 1", "Notes 2", "Notes 3", "Notes 4", "Notes 5"];

const NotesListModule = () => {
  return (
    <Collapse title="NOTES">
      {NOTES_MOCK_LIST.map((notes) => (
        <ListItem key={notes}>{notes}</ListItem>
      ))}
    </Collapse>
  );
};

export default NotesListModule;
