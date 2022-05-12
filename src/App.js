import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "./cards/CardList";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="box-border container mx-auto p-4">
          <h2 className="text-3xl font-bold underline">Drag</h2>
          <div className="grid-flow-row">
            <CardList />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
