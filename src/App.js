
import Menu from "./components/home/menu/Menu";
import Header from "./components/home/header/Header";
import RouterSystem from "./routes/routes";

export const App =() => {
  return (
      <div className="container-fluid">
          <div className="row">
              <Header/>
          </div>
          <div className="row mt-5">
              <div className="col-lg-2">
                  <Menu/>
              </div>
              <div className="col-lg-10 mt-5">
                <RouterSystem/>
              </div>
          </div>
      </div>
  );
}

