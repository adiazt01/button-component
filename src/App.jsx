import "./App.scss";
import { Button } from "./components/Button";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div>
          <p>Button Default</p>
          <div className="container-buttons">
            <Button />
          </div>
        </div>
        <div>
          <p>Button Outline</p>
          <div className="container-buttons">
            <Button variant={"outline"}/>
          </div>
        </div>
        <div>
          <p>Button Text</p>
          <div className="container-buttons">
            <Button variant={"text"}/>
          </div>
        </div>
        <div>
          <p>Button Disabled shadow</p>
          <div className="container-buttons">
            <Button boxShadow={false}/>
          </div>
        </div>
        <div>
          <p>Button Disabled</p>
          <div className="container-buttons">
            <Button disabled/>
          </div>
        </div>
        <div>
          <p>Button icon star and icon end</p>
          <div className="container-buttons">
            <Button startIcon={'shopping_cart'}/>
            <Button endIcon={'shopping_cart'}/>
          </div>
        </div>
        <div>
          <p>Buttons size</p>
          <div className="container-buttons">
            <Button size="sm"/>
            <Button size="md"/>
            <Button size="lg"/>
          </div>
        </div>
        <div>
          <p>Color buttons</p>
          <div className="container-buttons">
            <Button color="default"/>
            <Button color="primary-color"/>
            <Button color="secondary-color"/>
            <Button color="danger"/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
